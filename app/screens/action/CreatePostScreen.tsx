import { FC, useState } from "react"
import { Image, ImageStyle, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, "CreatePost">

const categories = [
  { id: "question", label: "Hỏi đáp", icon: "components" },
  { id: "review", label: "Review", icon: "heart" },
  { id: "share", label: "Chia sẻ", icon: "community" },
  { id: "tips", label: "Mẹo hay", icon: "check" },
]

export const CreatePostScreen: FC<CreatePostScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isValid = title.trim().length >= 10 && content.trim().length >= 20 && selectedCategory

  const handleAddImage = () => {
    // Mock adding image
    const mockImages = [
      "https://picsum.photos/seed/post1/400/300",
      "https://picsum.photos/seed/post2/400/300",
      "https://picsum.photos/seed/post3/400/300",
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
        <Text preset="heading">{t("forum.createPostScreen.title")}</Text>
        <View style={$spacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Category Selection */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionLabel}>
            {t("forum.createPostScreen.categoryLabel")}
          </Text>
          <View style={$categoryGrid}>
            {categories.map((category) => (
              <Pressable
                key={category.id}
                style={[
                  $categoryItem,
                  {
                    backgroundColor:
                      selectedCategory === category.id
                        ? theme.colors.palette.primary100
                        : theme.colors.palette.neutral100,
                    borderColor:
                      selectedCategory === category.id ? theme.colors.tint : theme.colors.border,
                  },
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Icon
                  icon={category.icon as "components" | "heart" | "community" | "check"}
                  size={20}
                  color={
                    selectedCategory === category.id ? theme.colors.tint : theme.colors.textDim
                  }
                />
                <Text style={{ color: selectedCategory === category.id ? theme.colors.tint : theme.colors.text }}>
                  {t(`forum.createPostScreen.categories.${category.id}`)}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Title */}
        <View style={$section}>
          <TextField
            label={t("forum.createPostScreen.titleLabel")}
            placeholder={t("forum.createPostScreen.titlePlaceholder")}
            value={title}
            onChangeText={setTitle}
            containerStyle={$textFieldContainer}
          />
          <Text
            size="xs"
            style={{
              color: title.length >= 10 ? theme.colors.palette.primary500 : theme.colors.textDim,
            }}
          >
            {title.length}/100 ký tự
          </Text>
        </View>

        {/* Content */}
        <View style={$section}>
          <TextField
            label={t("forum.createPostScreen.contentLabel")}
            placeholder={t("forum.createPostScreen.contentPlaceholder")}
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
              color: content.length >= 20 ? theme.colors.palette.primary500 : theme.colors.textDim,
            }}
          >
            {content.length}/2000 ký tự
          </Text>
        </View>

        {/* Images */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionLabel}>
            {t("forum.createPostScreen.imagesLabel")}
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
                  {t("forum.createPostScreen.addImage")}
                </Text>
              </Pressable>
            )}
          </View>
          <Text size="xs" style={{ color: theme.colors.textDim }}>
            {t("forum.createPostScreen.maxImages")}
          </Text>
        </View>

        {/* Guidelines */}
        <View style={[$guidelinesCard, { backgroundColor: theme.colors.palette.secondary100 }]}>
          <Icon icon="check" size={20} color={theme.colors.palette.secondary500} />
          <View style={$guidelinesContent}>
            <Text preset="bold" style={{ color: theme.colors.palette.secondary500 }}>
              {t("forum.createPostScreen.guidelines.title")}
            </Text>
            <Text size="xs" style={{ color: theme.colors.palette.secondary500 }}>
              {t("forum.createPostScreen.guidelines.content")}
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
          text={isSubmitting ? "Đang đăng..." : "Đăng bài"}
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

const $section: ViewStyle = {
  marginBottom: spacing.lg,
}

const $sectionLabel: TextStyle = {
  marginBottom: spacing.sm,
}

const $categoryGrid: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: spacing.sm,
}

const $categoryItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: 12,
  borderWidth: 1,
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
  width: 80,
  height: 80,
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
  width: 80,
  height: 80,
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
