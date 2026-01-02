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
import { Tour, tours, guides, Guide } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type TourDetailsScreenProps = NativeStackScreenProps<AppStackParamList, "TourDetails">

export const TourDetailsScreen: FC<TourDetailsScreenProps> = ({ navigation, route }) => {
  const { tourId } = route.params
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [tour, setTour] = useState<Tour | null>(null)
  const [guide, setGuide] = useState<Guide | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      const foundTour = tours.find((t) => t.id === tourId)
      if (foundTour) {
        setTour(foundTour)
        const foundGuide = guides.find((g) => g.id === foundTour.guideId)
        setGuide(foundGuide || null)
      }
      setLoading(false)
    }
    fetchData()
    setIsSaved(require("@/services/mock/users").isSavedTour(tourId))
  }, [tourId])

  const handleBooking = () => {
    navigation.navigate("Booking", { tourId })
  }

  const handleGuidePress = () => {
    if (guide) {
      navigation.navigate("GuideProfile", { guideId: guide.id })
    }
  }

  if (loading) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      </Screen>
    )
  }

  if (!tour) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <Icon icon="components" size={64} color={theme.colors.border} />
          <Text style={{ color: theme.colors.textDim }}>{t("tour.notFound")}</Text>
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
        <Text preset="heading" numberOfLines={1} style={$headerTitle}>
          {t("tour.details.title")}
        </Text>
        <Pressable
          style={$headerAction}
          onPress={() => {
            const { toggleSavedTour } = require("@/services/mock/users")
            toggleSavedTour(tourId)
            setIsSaved((v) => !v)
          }}
          accessibilityLabel="tour-save-button"
        >
          <Icon
            icon="heart"
            size={22}
            color={isSaved ? theme.colors.palette.accent500 : theme.colors.text}
          />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Images */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={$imagesContainer}
          contentContainerStyle={$imagesContent}
        >
          {tour.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={$tourImage} />
          ))}
        </ScrollView>

        {/* Info */}
        <View style={$infoSection}>
          <Text preset="subheading">{tour.name}</Text>
          <View style={$statsRow}>
            <View style={$statItem}>
              <Icon icon="view" size={16} color={theme.colors.textDim} />
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {tour.duration}
              </Text>
            </View>
            <View style={$statItem}>
              <Icon icon="heart" size={16} color={theme.colors.palette.accent500} />
              <Text size="xs" style={{ color: theme.colors.text }}>
                {tour.rating} ({tour.reviewCount})
              </Text>
            </View>
            <View style={$statItem}>
              <Icon icon="community" size={16} color={theme.colors.textDim} />
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {tour.groupSize.min}-{tour.groupSize.max} người
              </Text>
            </View>
          </View>
        </View>

        {/* Guide */}
        {guide && (
          <Pressable
            style={[$guideCard, { backgroundColor: theme.colors.background }]}
            onPress={handleGuidePress}
          >
            <Image source={{ uri: guide.avatar }} style={$guideAvatar} />
            <View style={$guideInfo}>
              <Text preset="bold">{guide.name}</Text>
              <View style={$guideRating}>
                <Icon icon="heart" size={12} color={theme.colors.palette.accent500} />
                <Text size="xs" style={{ color: theme.colors.text }}>
                  {guide.rating} • {guide.totalTours} {t("guide.profile.tours")}
                </Text>
              </View>
            </View>
            <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
          </Pressable>
        )}

        {/* Description */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="formLabel" style={$sectionTitle}>
            {t("tour.details.overview")}
          </Text>
          <Text style={{ color: theme.colors.text }}>{tour.description}</Text>
        </View>

        {/* Itinerary */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="formLabel" style={$sectionTitle}>
            {t("tour.details.itinerary")}
          </Text>
          <FlatList
            data={tour.itinerary}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={$itineraryItem}>
                <View style={[$itineraryTime, { backgroundColor: theme.colors.tint }]}>
                  <Text size="xs" style={$itineraryTimeText}>
                    {item.time}
                  </Text>
                </View>
                <View style={$itineraryContent}>
                  <Text preset="bold">{item.activity}</Text>
                  {item.location && (
                    <Text size="xs" style={{ color: theme.colors.textDim }}>
                      {item.location}
                    </Text>
                  )}
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={$itinerarySeparator} />}
          />
        </View>

        {/* Includes */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="formLabel" style={$sectionTitle}>
            {t("tour.details.includes")}
          </Text>
          {tour.includes.map((item, index) => (
            <View key={index} style={$includeItem}>
              <Icon icon="check" size={16} color={theme.colors.palette.secondary500} />
              <Text style={{ color: theme.colors.text }}>{item}</Text>
            </View>
          ))}
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
        <View style={$priceContainer}>
          {tour.originalPrice && (
            <Text size="xs" style={$originalPrice}>
              {tour.originalPrice.toLocaleString("vi-VN")}đ
            </Text>
          )}
          <Text preset="bold" style={[$currentPrice, { color: theme.colors.tint }]}>
            {tour.price.toLocaleString("vi-VN")}đ
          </Text>
          <Text size="xs" style={{ color: theme.colors.textDim }}>
            {t("tour.perPerson")}
          </Text>
        </View>
        <Button
          preset="filled"
          text={t("tour.details.bookTour")}
          style={$bookButton}
          onPress={handleBooking}
          testID="tour-book-button"
          accessibilityLabel="tour-book-button"
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

const $headerTitle: TextStyle = {
  flex: 1,
  marginHorizontal: spacing.sm,
}

const $headerAction: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $imagesContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $imagesContent: ViewStyle = {
  paddingHorizontal: spacing.md,
  gap: spacing.sm,
}

const $tourImage: ImageStyle = {
  width: 280,
  height: 200,
  borderRadius: 12,
}

const $infoSection: ViewStyle = {
  paddingHorizontal: spacing.md,
  marginBottom: spacing.md,
}

const $statsRow: ViewStyle = {
  flexDirection: "row",
  gap: spacing.lg,
  marginTop: spacing.sm,
}

const $statItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $guideCard: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: spacing.md,
  marginBottom: spacing.md,
  padding: spacing.md,
  borderRadius: 12,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
}

const $guideAvatar: ImageStyle = {
  width: 48,
  height: 48,
  borderRadius: 24,
}

const $guideInfo: ViewStyle = {
  flex: 1,
  marginLeft: spacing.sm,
}

const $guideRating: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
  marginTop: spacing.xxs,
}

const $section: ViewStyle = {
  marginHorizontal: spacing.md,
  marginBottom: spacing.md,
  padding: spacing.md,
  borderRadius: 12,
}

const $sectionTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $itineraryItem: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
}

const $itineraryTime: ViewStyle = {
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
  borderRadius: 8,
  alignSelf: "flex-start",
}

const $itineraryTimeText: TextStyle = {
  color: "#FFFFFF",
  fontWeight: "600",
}

const $itineraryContent: ViewStyle = {
  flex: 1,
}

const $itinerarySeparator: ViewStyle = {
  height: spacing.sm,
}

const $includeItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
  marginBottom: spacing.xs,
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
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.md,
  borderTopWidth: 1,
}

const $priceContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "baseline",
  gap: spacing.xxs,
}

const $originalPrice: TextStyle = {
  textDecorationLine: "line-through",
  color: "#999",
}

const $currentPrice: TextStyle = {
  fontSize: 20,
}

const $bookButton: ViewStyle = {
  paddingHorizontal: spacing.xl,
}
