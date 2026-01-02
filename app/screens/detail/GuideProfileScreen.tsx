import { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { Guide, guides } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type GuideProfileScreenProps = NativeStackScreenProps<AppStackParamList, "GuideProfile">

export const GuideProfileScreen: FC<GuideProfileScreenProps> = ({ navigation, route }) => {
  const { guideId } = route.params
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [guide, setGuide] = useState<Guide | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGuide = () => {
      const foundGuide = guides.find((g) => g.id === guideId)
      setGuide(foundGuide || null)
      setLoading(false)
    }
    fetchGuide()
  }, [guideId])

  const handleChat = () => {
    if (guide) {
      navigation.navigate("Chat", { recipientId: guide.id, recipientName: guide.name })
    }
  }

  const handleBookTour = () => {
    // Navigate to search with guide filter (show tours by this guide)
    if (guide) {
      ;(navigation as any).navigate("Search", {
        initialFilter: "tour",
        initialQuery: guide.name,
        source: "guide-profile",
      })
    }
  }

  const renderReviewItem = ({
    item,
  }: {
    item: { id: string; user: string; date: string; rating: number; comment: string }
  }) => (
    <View style={[$reviewCard, { backgroundColor: theme.colors.background }]}>
      <View style={$reviewHeader}>
        <View style={$reviewUser}>
          <View style={[$reviewAvatar, { backgroundColor: theme.colors.palette.primary500 }]}>
            <Text style={$reviewAvatarText}>{item.user.charAt(0)}</Text>
          </View>
          <View>
            <Text preset="bold">{item.user}</Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {item.date}
            </Text>
          </View>
        </View>
        <View style={$reviewRating}>
          <Icon icon="heart" size={14} color={theme.colors.palette.accent500} />
          <Text preset="bold" style={{ color: theme.colors.palette.accent500 }}>
            {item.rating}
          </Text>
        </View>
      </View>
      <Text style={{ color: theme.colors.text }}>{item.comment}</Text>
    </View>
  )

  if (loading) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      </Screen>
    )
  }

  if (!guide) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <Icon icon="components" size={64} color={theme.colors.border} />
          <Text style={{ color: theme.colors.textDim }}>{t("guide.profile.notFound")}</Text>
        </View>
      </Screen>
    )
  }

  const mockReviews = [
    {
      id: "1",
      user: "Nguyễn Văn A",
      date: "15/01/2024",
      rating: 5,
      comment: "Hướng dẫn viên rất nhiệt tình, am hiểu sâu về văn hóa địa phương.",
    },
    {
      id: "2",
      user: "Trần Thị B",
      date: "10/01/2024",
      rating: 4.5,
      comment: "Tour rất hay, anh/chị hướng dẫn rất chu đáo và thân thiện.",
    },
    {
      id: "3",
      user: "Lê Minh C",
      date: "05/01/2024",
      rating: 5,
      comment: "Tuyệt vời! Sẽ quay lại và book tour với guide này.",
    },
  ]

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">{t("guide.list.title")}</Text>
        <View style={$spacer} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={[$profileCard, { backgroundColor: theme.colors.background }]}>
          <View style={$profileHeader}>
            <Image source={{ uri: guide.avatar }} style={$avatar} />
            {guide.isOnline && (
              <View style={[$onlineBadge, { backgroundColor: theme.colors.palette.primary500 }]} />
            )}
          </View>

          <Text preset="subheading" style={$guideName}>
            {guide.name}
          </Text>

          {guide.isVerified && (
            <View style={[$verifiedBadge, { backgroundColor: theme.colors.palette.secondary100 }]}>
              <Icon icon="check" size={14} color={theme.colors.palette.secondary500} />
              <Text style={$verifiedText(theme)}>Đã xác minh</Text>
            </View>
          )}

          {/* Stats */}
          <View style={$statsRow}>
            <View style={$statItem}>
              <Text preset="bold" style={$statValue}>
                {guide.rating}
              </Text>
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {t("guide.list.filters.rating")}
              </Text>
            </View>
            <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
            <View style={$statItem}>
              <Text preset="bold" style={$statValue}>
                {guide.reviewCount}
              </Text>
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {t("profile.stats.reviews")}
              </Text>
            </View>
            <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
            <View style={$statItem}>
              <Text preset="bold" style={$statValue}>
                {guide.totalTours}
              </Text>
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {t("guide.profile.tours")}
              </Text>
            </View>
            <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
            <View style={$statItem}>
              <Text preset="bold" style={$statValue}>
                {guide.experience} năm
              </Text>
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {t("guide.list.filters.experience")}
              </Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="subheading" style={$sectionTitle}>
            {t("guide.profile.about")}
          </Text>
          <Text style={$bioText(theme)}>{guide.bio}</Text>
        </View>

        {/* Specialties */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="subheading" style={$sectionTitle}>
            {t("guide.profile.specialties")}
          </Text>
          <View style={$tagsContainer}>
            {guide.specialties.map((specialty, index) => (
              <View
                key={index}
                style={[$tag, { backgroundColor: theme.colors.palette.primary100 }]}
              >
                <Text style={{ color: theme.colors.tint }}>{specialty}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Languages */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="subheading" style={$sectionTitle}>
            {t("guide.profile.languages")}
          </Text>
          <View style={$tagsContainer}>
            {guide.languages.map((language, index) => (
              <View
                key={index}
                style={[$tag, { backgroundColor: theme.colors.palette.secondary100 }]}
              >
                <Text style={{ color: theme.colors.palette.secondary500 }}>{language}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Response Time */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <View style={$responseRow}>
            <Icon icon="view" size={20} color={theme.colors.tint} />
            <Text style={{ color: theme.colors.textDim, marginLeft: spacing.xs }}>
              {guide.responseTime}
            </Text>
          </View>
        </View>

        {/* Reviews */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="subheading" style={$sectionTitle}>
            {t("guide.profile.reviews")}
          </Text>
          <FlatList
            data={mockReviews}
            renderItem={renderReviewItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={$reviewSeparator} />}
          />
        </View>

        {/* Pricing */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <View style={$priceRow}>
            <Text preset="subheading">{t("guide.profile.hourlyRate")}</Text>
            <View style={$priceValue}>
              <Text preset="bold" style={$priceAmount(theme)}>
                {guide.hourlyRate.toLocaleString("vi-VN")}đ
              </Text>
              <Text style={{ color: theme.colors.textDim }}>/giờ</Text>
            </View>
          </View>
        </View>

        <View style={$bottomSpacer} />
      </ScrollView>

      {/* Bottom CTA */}
      <View
        style={[
          $bottomCTA,
          { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        ]}
      >
        <Button
          preset="default"
          text={t("guide.profile.chat")}
          testID="guide-chat-button"
          LeftAccessory={() => <Icon icon="components" size={18} color={theme.colors.tint} />}
          style={$chatButton}
          onPress={handleChat}
        />
        <Button
          preset="filled"
          text={t("guide.profile.bookGuide")}
          testID="guide-book-button"
          style={$bookButton}
          onPress={handleBookTour}
        />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.md,
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

const $profileCard: ViewStyle = {
  alignItems: "center",
  padding: spacing.lg,
  marginHorizontal: spacing.md,
  marginTop: spacing.sm,
  borderRadius: 16,
}

const $profileHeader: ViewStyle = {
  position: "relative",
}

const $avatar: ImageStyle = {
  width: 100,
  height: 100,
  borderRadius: 50,
}

const $onlineBadge: ViewStyle = {
  position: "absolute",
  bottom: 4,
  right: 4,
  width: 16,
  height: 16,
  borderRadius: 8,
  borderWidth: 2,
  borderColor: "#FFFFFF",
}

const $guideName: TextStyle = {
  marginTop: spacing.sm,
  marginBottom: spacing.xs,
}

const $verifiedBadge: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
  borderRadius: 12,
  marginBottom: spacing.md,
}

const $statsRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  paddingTop: spacing.md,
}

const $statItem: ViewStyle = {
  alignItems: "center",
  flex: 1,
}

const $statValue: TextStyle = {
  fontSize: 18,
}

const $statDivider: ViewStyle = {
  width: 1,
  height: 30,
}

const $section: ViewStyle = {
  marginHorizontal: spacing.md,
  marginTop: spacing.md,
  padding: spacing.md,
  borderRadius: 16,
}

const $sectionTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $tagsContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: spacing.xs,
}

const $tag: ViewStyle = {
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
  borderRadius: 12,
}

const $responseRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $reviewCard: ViewStyle = {
  gap: spacing.xs,
}

const $reviewHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $reviewUser: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
}

const $reviewAvatar: ViewStyle = {
  width: 36,
  height: 36,
  borderRadius: 18,
  justifyContent: "center",
  alignItems: "center",
}

const $reviewAvatarText: TextStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
}

const $reviewRating: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $reviewSeparator: ViewStyle = {
  height: spacing.md,
}

const $priceRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $priceValue: ViewStyle = {
  flexDirection: "row",
  alignItems: "baseline",
  gap: spacing.xxs,
}

const $bottomSpacer: ViewStyle = {
  height: 100,
}

const $bottomCTA: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  padding: spacing.md,
  gap: spacing.sm,
  borderTopWidth: 1,
}

const $chatButton: ViewStyle = {
  flex: 1,
}

const $bookButton: ViewStyle = {
  flex: 2,
}

const $verifiedText = (theme: { colors: { palette: { secondary500: string } } }): TextStyle => ({
  color: theme.colors.palette.secondary500,
  fontSize: 12,
})

const $bioText = (theme: { colors: { text: string } }): TextStyle => ({
  color: theme.colors.text,
  lineHeight: 22,
})

const $priceAmount = (theme: { colors: { tint: string } }): TextStyle => ({
  color: theme.colors.tint,
  fontSize: 20,
})
