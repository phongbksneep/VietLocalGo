import { FC, useState } from "react"
import { Image, ImageStyle, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type SubmitReviewScreenProps = NativeStackScreenProps<AppStackParamList, "SubmitReview">

const ratingLabels = ["Rất tệ", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"]

export const SubmitReviewScreen: FC<SubmitReviewScreenProps> = ({ navigation, route }) => {
  const { targetId, targetType } = route.params
  const { theme } = useAppTheme()

  const [rating, setRating] = useState(0)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isValid = rating > 0 && content.trim().length >= 10

  const getTargetLabel = () => {
    switch (targetType) {
      case "place":
        return "địa điểm"
      case "tour":
        return "tour"
      case "guide":
        return "hướng dẫn viên"
      default:
        return ""
    }
  }

  const handleAddImage = () => {
    const mockImages = [
      "https://picsum.photos/seed/review1/400/300",
      "https://picsum.photos/seed/review2/400/300",
      "https://picsum.photos/seed/review3/400/300",
    ]
    if (images.length < 5) {
      const newImage = mockImages[images.length % mockImages.length]
      setImages((prev) => [...prev, newImage])
    }
  }

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!isValid) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    navigation.goBack()
  }

  const renderStar = (index: number) => {
    const filled = index < rating
    return (
      <Pressable key={index} onPress={() => setRating(index + 1)} style={$starButton}>
        <Icon
          icon="heart"
          size={36}
          color={filled ? theme.colors.palette.accent500 : theme.colors.border}
        />
      </Pressable>
    )
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View
        style={[
          $header,
          { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="x" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Viết đánh giá</Text>
        <View style={$spacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Target Info */}
        <View style={[$targetCard, { backgroundColor: theme.colors.palette.primary100 }]}>
          <Icon icon="heart" size={24} color={theme.colors.tint} />
          <Text style={{ color: theme.colors.text }}>
            Đánh giá {getTargetLabel()} ID: {targetId}
          </Text>
        </View>

        {/* Rating */}
        <View style={$section}>
          <Text preset="subheading" style={$sectionTitle}>
            Đánh giá của bạn
          </Text>
          <View style={$starsContainer}>{[0, 1, 2, 3, 4].map(renderStar)}</View>
          {rating > 0 && (
            <Text style={[$ratingLabel, { color: theme.colors.palette.accent500 }]}>
              {ratingLabels[rating - 1]}
            </Text>
          )}
        </View>

        {/* Title */}
        <View style={$section}>
          <TextField
            label="Tiêu đề (tùy chọn)"
            placeholder="Tóm tắt trải nghiệm của bạn"
            value={title}
            onChangeText={setTitle}
            containerStyle={$textFieldContainer}
          />
        </View>

        {/* Content */}
        <View style={$section}>
          <TextField
            label="Nội dung đánh giá"
            placeholder="Chia sẻ chi tiết trải nghiệm của bạn... (tối thiểu 10 ký tự)"
            value={content}
            onChangeText={setContent}
            multiline
            containerStyle={$textFieldContainer}
            inputWrapperStyle={$contentInputWrapper}
            style={$contentInput}
          />
          <Text
            size="xs"
            style={{
              color: content.length >= 10 ? theme.colors.palette.primary500 : theme.colors.textDim,
            }}
          >
            {content.length}/500 ký tự
          </Text>
        </View>

        {/* Images */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionLabel}>
            Thêm hình ảnh (tùy chọn)
          </Text>
          <View style={$imagesGrid}>
            {images.map((image, index) => (
              <View key={index} style={$imageContainer}>
                <Image source={{ uri: image }} style={$imagePreview} />
                <Pressable
                  style={[$removeImageButton, { backgroundColor: theme.colors.error }]}
                  onPress={() => handleRemoveImage(index)}
                >
                  <Icon icon="x" size={12} color="#FFFFFF" />
                </Pressable>
              </View>
            ))}
            {images.length < 5 && (
              <Pressable
                style={[$addImageButton, { borderColor: theme.colors.border }]}
                onPress={handleAddImage}
              >
                <Icon icon="components" size={24} color={theme.colors.textDim} />
                <Text size="xs" style={{ color: theme.colors.textDim }}>
                  Thêm
                </Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* Guidelines */}
        <View style={[$guidelinesCard, { backgroundColor: theme.colors.palette.secondary100 }]}>
          <Icon icon="check" size={20} color={theme.colors.palette.secondary500} />
          <View style={$guidelinesContent}>
            <Text preset="bold" style={{ color: theme.colors.palette.secondary500 }}>
              Mẹo viết đánh giá hay
            </Text>
            <Text size="xs" style={{ color: theme.colors.palette.secondary500 }}>
              {"• Mô tả trải nghiệm thực tế\n• Nêu ưu/nhược điểm cụ thể\n• Thêm hình ảnh minh họa"}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View
        style={[
          $bottomCTA,
          { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        ]}
      >
        <Button
          preset="filled"
          text={isSubmitting ? "Đang gửi..." : "Gửi đánh giá"}
          style={$submitButton}
          onPress={handleSubmit}
          disabled={!isValid || isSubmitting}
        />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderBottomWidth: 1,
}

const $backButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $spacer: ViewStyle = {
  width: 40,
}

const $scrollContent: ViewStyle = {
  padding: spacing.md,
  paddingBottom: 100,
}

const $targetCard: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: 12,
  marginBottom: spacing.lg,
}

const $section: ViewStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginBottom: spacing.md,
  textAlign: "center",
}

const $sectionLabel: TextStyle = {
  marginBottom: spacing.sm,
}

const $starsContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  gap: spacing.sm,
}

const $starButton: ViewStyle = {
  padding: spacing.xxs,
}

const $ratingLabel: TextStyle = {
  textAlign: "center",
  marginTop: spacing.sm,
  fontSize: 16,
  fontWeight: "600",
}

const $textFieldContainer: ViewStyle = {
  marginBottom: spacing.xxs,
}

const $contentInputWrapper: ViewStyle = {
  minHeight: 120,
  alignItems: "flex-start",
}

const $contentInput: TextStyle = {
  minHeight: 100,
  textAlignVertical: "top",
}

const $imagesGrid: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: spacing.sm,
  marginBottom: spacing.xs,
}

const $imageContainer: ViewStyle = {
  position: "relative",
}

const $imagePreview: ImageStyle = {
  width: 72,
  height: 72,
  borderRadius: 8,
}

const $removeImageButton: ViewStyle = {
  position: "absolute",
  top: -6,
  right: -6,
  width: 20,
  height: 20,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
}

const $addImageButton: ViewStyle = {
  width: 72,
  height: 72,
  borderRadius: 8,
  borderWidth: 1,
  borderStyle: "dashed",
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.xxs,
}

const $guidelinesCard: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: 12,
}

const $guidelinesContent: ViewStyle = {
  flex: 1,
  gap: spacing.xxs,
}

const $bottomCTA: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: spacing.md,
  borderTopWidth: 1,
}

const $submitButton: ViewStyle = {
  width: "100%",
}
