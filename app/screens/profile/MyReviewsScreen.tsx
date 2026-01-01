import { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type MyReviewsScreenProps = NativeStackScreenProps<AppStackParamList, "MyReviews">

interface MyReview {
  id: string
  targetId: string
  targetType: "place" | "tour" | "guide"
  targetName: string
  targetImage: string
  rating: number
  title: string
  content: string
  images: string[]
  createdAt: string
  helpful: number
}

const mockReviews: MyReview[] = [
  {
    id: "review-1",
    targetId: "place-phu-day",
    targetType: "place",
    targetName: "Phủ Dầy",
    targetImage: "https://picsum.photos/seed/review1/400/300",
    rating: 5,
    title: "Nơi linh thiêng và yên bình",
    content:
      "Phủ Dầy thực sự là nơi rất linh thiêng. Kiến trúc cổ kính, không gian thoáng đãng. Rất recommend cho ai muốn tìm hiểu văn hóa tâm linh Việt Nam.",
    images: ["https://picsum.photos/seed/r1a/200/150", "https://picsum.photos/seed/r1b/200/150"],
    createdAt: "2025-01-15",
    helpful: 12,
  },
  {
    id: "review-2",
    targetId: "tour-lang-nghe",
    targetType: "tour",
    targetName: "Tour làng nghề truyền thống",
    targetImage: "https://picsum.photos/seed/review2/400/300",
    rating: 4,
    title: "Trải nghiệm tuyệt vời",
    content:
      "Tour rất hay, được trải nghiệm làm đồ thủ công. Hướng dẫn viên nhiệt tình. Chỉ tiếc là thời gian hơi ngắn.",
    images: [],
    createdAt: "2025-01-10",
    helpful: 8,
  },
  {
    id: "review-3",
    targetId: "guide-minh-duc",
    targetType: "guide",
    targetName: "Hướng dẫn viên Minh Đức",
    targetImage: "https://i.pravatar.cc/300?u=minhduc",
    rating: 5,
    title: "Hướng dẫn viên xuất sắc",
    content:
      "Anh Minh Đức rất nhiệt tình, am hiểu sâu về lịch sử và văn hóa địa phương. Đã book thêm tour khác!",
    images: [],
    createdAt: "2025-01-05",
    helpful: 15,
  },
]

export const MyReviewsScreen: FC<MyReviewsScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [reviews, setReviews] = useState<MyReview[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = () => {
      setTimeout(() => {
        setReviews(mockReviews)
        setLoading(false)
      }, 500)
    }
    fetchReviews()
  }, [])

  const getTypeLabel = (type: MyReview["targetType"]) => {
    switch (type) {
      case "place":
        return "Địa điểm"
      case "tour":
        return "Tour"
      case "guide":
        return "Hướng dẫn viên"
    }
  }

  const getTypeColor = (type: MyReview["targetType"]) => {
    switch (type) {
      case "place":
        return theme.colors.palette.primary500
      case "tour":
        return theme.colors.palette.secondary500
      case "guide":
        return theme.colors.palette.accent500
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const handleReviewPress = (review: MyReview) => {
    switch (review.targetType) {
      case "place":
        navigation.navigate("PlaceDetails", { placeId: review.targetId, source: "my-reviews" })
        break
      case "tour":
        navigation.navigate("TourDetails", { tourId: review.targetId, source: "my-reviews" })
        break
      case "guide":
        navigation.navigate("GuideProfile", { guideId: review.targetId })
        break
    }
  }

  const handleEdit = (review: MyReview) => {
    navigation.navigate("SubmitReview", {
      targetId: review.targetId,
      targetType: review.targetType,
    })
  }

  const handleDelete = (reviewId: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== reviewId))
  }

  const renderStars = (rating: number) => {
    return (
      <View style={$starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            icon="heart"
            size={14}
            color={star <= rating ? theme.colors.palette.accent500 : theme.colors.border}
          />
        ))}
      </View>
    )
  }

  const renderReviewCard = ({ item }: { item: MyReview }) => (
    <Pressable
      style={[$reviewCard, { backgroundColor: theme.colors.background }]}
      onPress={() => handleReviewPress(item)}
    >
      {/* Header */}
      <View style={$cardHeader}>
        <Image source={{ uri: item.targetImage }} style={$targetImage} />
        <View style={$headerContent}>
          <View style={[$typeBadge, { backgroundColor: getTypeColor(item.targetType) + "20" }]}>
            <Text size="xxs" style={{ color: getTypeColor(item.targetType) }}>
              {getTypeLabel(item.targetType)}
            </Text>
          </View>
          <Text preset="bold" numberOfLines={1}>
            {item.targetName}
          </Text>
          <View style={$ratingRow}>
            {renderStars(item.rating)}
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {formatDate(item.createdAt)}
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      {item.title && (
        <Text preset="bold" style={$reviewTitle}>
          {item.title}
        </Text>
      )}
      <Text numberOfLines={3} style={{ color: theme.colors.text }}>
        {item.content}
      </Text>

      {/* Images */}
      {item.images.length > 0 && (
        <View style={$imagesRow}>
          {item.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={$reviewImage} />
          ))}
        </View>
      )}

      {/* Footer */}
      <View style={$cardFooter}>
        <View style={$helpfulContainer}>
          <Icon icon="heart" size={14} color={theme.colors.textDim} />
          <Text size="xs" style={{ color: theme.colors.textDim }}>
            {item.helpful} người thấy hữu ích
          </Text>
        </View>
        <View style={$actionButtons}>
          <Pressable style={$actionButton} onPress={() => handleEdit(item)}>
            <Icon icon="settings" size={16} color={theme.colors.tint} />
          </Pressable>
          <Pressable style={$actionButton} onPress={() => handleDelete(item.id)}>
            <Icon icon="x" size={16} color={theme.colors.error} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  )

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Đánh giá của tôi</Text>
        <View style={$spacer} />
      </View>

      {/* Stats */}
      {!loading && reviews.length > 0 && (
        <View style={[$statsRow, { backgroundColor: theme.colors.palette.accent100 }]}>
          <View style={$statItem}>
            <Text preset="bold" style={$statValue}>
              {reviews.length}
            </Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              đánh giá
            </Text>
          </View>
          <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
          <View style={$statItem}>
            <Text preset="bold" style={$statValue}>
              {(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)}
            </Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              TB sao
            </Text>
          </View>
          <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
          <View style={$statItem}>
            <Text preset="bold" style={$statValue}>
              {reviews.reduce((sum, r) => sum + r.helpful, 0)}
            </Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              hữu ích
            </Text>
          </View>
        </View>
      )}

      {loading ? (
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      ) : (
        <FlatList
          data={reviews}
          renderItem={renderReviewCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={$listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="heart" size={64} color={theme.colors.border} />
              <Text preset="subheading" style={{ color: theme.colors.textDim }}>
                Chưa có đánh giá nào
              </Text>
              <Text style={[$emptySubtext, { color: theme.colors.textDim }]}>
                Chia sẻ trải nghiệm của bạn với cộng đồng
              </Text>
            </View>
          }
        />
      )}
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

const $statsRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  paddingVertical: spacing.md,
  marginHorizontal: spacing.md,
  borderRadius: 12,
  marginBottom: spacing.sm,
}

const $statItem: ViewStyle = {
  alignItems: "center",
}

const $statValue: TextStyle = {
  fontSize: 18,
}

const $statDivider: ViewStyle = {
  width: 1,
  height: 30,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $listContent: ViewStyle = {
  padding: spacing.md,
  gap: spacing.md,
}

const $reviewCard: ViewStyle = {
  borderRadius: 12,
  padding: spacing.md,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
}

const $cardHeader: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
  marginBottom: spacing.sm,
}

const $targetImage: ImageStyle = {
  width: 60,
  height: 60,
  borderRadius: 8,
}

const $headerContent: ViewStyle = {
  flex: 1,
  justifyContent: "center",
}

const $typeBadge: ViewStyle = {
  alignSelf: "flex-start",
  paddingHorizontal: spacing.xs,
  paddingVertical: 2,
  borderRadius: 4,
  marginBottom: spacing.xxs,
}

const $ratingRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: spacing.xxs,
}

const $starsContainer: ViewStyle = {
  flexDirection: "row",
  gap: 2,
}

const $reviewTitle: TextStyle = {
  marginBottom: spacing.xxs,
}

const $imagesRow: ViewStyle = {
  flexDirection: "row",
  gap: spacing.xs,
  marginTop: spacing.sm,
}

const $reviewImage: ImageStyle = {
  width: 60,
  height: 60,
  borderRadius: 6,
}

const $cardFooter: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: spacing.sm,
  paddingTop: spacing.sm,
  borderTopWidth: 1,
  borderTopColor: "rgba(0,0,0,0.05)",
}

const $helpfulContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $actionButtons: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
}

const $actionButton: ViewStyle = {
  padding: spacing.xs,
}

const $emptyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing.xxxl,
  gap: spacing.sm,
}

const $emptySubtext: TextStyle = {
  textAlign: "center",
  paddingHorizontal: spacing.xl,
}
