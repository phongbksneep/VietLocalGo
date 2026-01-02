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
import { useTranslation } from "react-i18next"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { Tour, tours } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type RecommendationsScreenProps = NativeStackScreenProps<AppStackParamList, "Recommendations">

interface RecommendedTour extends Tour {
  matchPercentage: number
}

export const RecommendationsScreen: FC<RecommendationsScreenProps> = ({ navigation, route }) => {
  const { preferences } = route.params
  const { theme } = useAppTheme()

  const [recommendations, setRecommendations] = useState<RecommendedTour[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchRecommendations = () => {
      try {
        setLoading(true)
        // Mock match percentage calculation
        const toursWithMatch: RecommendedTour[] = tours.map((tour: Tour) => ({
          ...tour,
          matchPercentage: Math.floor(Math.random() * 30) + 70, // 70-100%
        }))
        toursWithMatch.sort((a, b) => b.matchPercentage - a.matchPercentage)
        setRecommendations(toursWithMatch)
      } finally {
        setLoading(false)
      }
    }
    // Simulate async loading
    const timer = setTimeout(fetchRecommendations, 1000)
    return () => clearTimeout(timer)
  }, [preferences])

  const renderTourCard = ({ item }: { item: RecommendedTour }) => (
    <Pressable
      style={({ pressed }) => [
        $tourCard,
        { backgroundColor: theme.colors.background },
        pressed && { opacity: 0.7 },
      ]}
      onPress={() =>
        navigation.navigate("TourDetails", { tourId: item.id, source: "recommendations" })
      }
    >
      <Image source={{ uri: item.images[0] }} style={$tourImage} />

      {/* Match Badge */}
      <View style={[$matchBadge, { backgroundColor: theme.colors.palette.secondary500 }]}>
        <Text style={$matchText}>
          {t("recommendations.matchPercentage", { percentage: item.matchPercentage })}
        </Text>
      </View>

      <View style={$tourContent}>
        <Text preset="bold" style={$tourName} numberOfLines={2}>
          {item.name}
        </Text>

        <View style={$tourInfo}>
          <View style={$infoRow}>
            <Icon icon="view" size={14} color={theme.colors.textDim} />
            <Text style={[$infoText, { color: theme.colors.textDim }]}>{item.duration}</Text>
          </View>
          <View style={$infoRow}>
            <Icon icon="heart" size={14} color={theme.colors.palette.accent500} />
            <Text style={[$infoText, { color: theme.colors.textDim }]}>
              {item.rating} ({item.reviewCount})
            </Text>
          </View>
        </View>

        <View style={$tourFooter}>
          <Text preset="bold" style={[$priceText, { color: theme.colors.tint }]}>
            {item.price.toLocaleString("vi-VN")}đ
          </Text>
          <Text style={[$priceUnit, { color: theme.colors.textDim }]}>{t("tour.perPerson")}</Text>
        </View>
      </View>
    </Pressable>
  )

  if (loading) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
          <Text style={[$loadingText, { color: theme.colors.textDim }]}>{t("common.loading")}</Text>
        </View>
      </Screen>
    )
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">{t("recommendations.title")}</Text>
        <View style={$spacer} />
      </View>

      {/* Intro */}
      <View style={$introSection}>
        <View style={[$introCard, { backgroundColor: theme.colors.palette.primary100 }]}>
          <Icon icon="heart" size={24} color={theme.colors.tint} />
          <Text style={$introText}>
            {t("recommendations.basedOnPreferences")}{" "}
            <Text preset="bold">
              {t("recommendations.found", { count: recommendations.length })}
            </Text>
          </Text>
        </View>
      </View>

      <FlatList
        data={recommendations}
        renderItem={renderTourCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={$listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={$emptyContainer}>
            <Icon icon="components" size={64} color={theme.colors.border} />
            <Text style={[$emptyText, { color: theme.colors.textDim }]}>
              {t("recommendations.noSuitableTours")}
            </Text>
          </View>
        }
      />
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

const $loadingText: TextStyle = {
  fontSize: 14,
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

const $introSection: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.md,
}

const $introCard: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
  padding: spacing.md,
  borderRadius: 12,
}

const $introText: TextStyle = {
  flex: 1,
  fontSize: 14,
}

const $listContent: ViewStyle = {
  padding: spacing.md,
  gap: spacing.md,
}

const $tourCard: ViewStyle = {
  borderRadius: 16,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 3,
}

const $tourImage: ImageStyle = {
  width: "100%",
  height: 160,
}

const $matchBadge: ViewStyle = {
  position: "absolute",
  top: spacing.sm,
  left: spacing.sm,
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
  borderRadius: 16,
}

const $matchText: TextStyle = {
  color: "#FFFFFF",
  fontSize: 12,
  fontWeight: "600",
}

const $tourContent: ViewStyle = {
  padding: spacing.md,
}

const $tourName: TextStyle = {
  marginBottom: spacing.xs,
}

const $tourInfo: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  marginBottom: spacing.sm,
}

const $infoRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $infoText: TextStyle = {
  fontSize: 12,
}

const $tourFooter: ViewStyle = {
  flexDirection: "row",
  alignItems: "baseline",
}

const $priceText: TextStyle = {
  fontSize: 18,
}

const $priceUnit: TextStyle = {
  fontSize: 12,
}

const $emptyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing.xxxl,
}

const $emptyText: TextStyle = {
  marginTop: spacing.md,
  fontSize: 16,
}
