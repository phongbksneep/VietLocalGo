/**
 * HomeScreen - Main home tab with featured content
 * Max 200 lines per rule
 */
import { useCallback } from "react"
import { FlatList, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"

import { Icon } from "@/components/Icon"
import { PlaceCard } from "@/components/PlaceCard"
import { ProvinceCard } from "@/components/ProvinceCard"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TourCard } from "@/components/TourCard"
import { places, provinces, tours } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

export function HomeScreen() {
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

  const renderSectionHeader = (title: string, onSeeAll?: () => void) => (
    <View style={$sectionHeader}>
      <Text style={themed($sectionTitle)}>{title}</Text>
      {onSeeAll && (
        <Pressable onPress={onSeeAll} style={$seeAllButton}>
          <Text style={themed($seeAllText)}>{t("common.seeAll")}</Text>
          <Icon icon="caretRight" size={14} color={theme.colors.tint} />
        </Pressable>
      )}
    </View>
  )

  const renderProvince = useCallback(
    ({ item }: { item: (typeof provinces)[0] }) => (
      <ProvinceCard
        id={item.id}
        name={item.name}
        image={item.thumbnail}
        placeCount={item.totalPlaces}
        tourCount={item.totalTours}
        region={item.region}
        variant="featured"
        style={$cardMargin}
      />
    ),
    [],
  )

  const renderTour = useCallback(
    ({ item }: { item: (typeof tours)[0] }) => (
      <TourCard
        id={item.id}
        name={item.name}
        image={item.images[0]}
        rating={item.rating}
        reviewCount={item.reviewCount}
        price={item.price}
        originalPrice={item.originalPrice}
        duration={item.duration}
        style={$cardMargin}
      />
    ),
    [],
  )

  const renderPlace = useCallback(
    ({ item }: { item: (typeof places)[0] }) => (
      <PlaceCard
        id={item.id}
        name={item.name}
        image={item.images[0]}
        rating={item.rating}
        reviewCount={item.reviewCount}
        category={item.category}
        address={item.address}
        style={$cardMargin}
      />
    ),
    [],
  )

  return (
    <Screen preset="scroll" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      {/* Header */}
      <View style={$header}>
        <View>
          <Text style={themed($greeting)}>{t("home.greeting")}</Text>
          <Text style={themed($welcomeText)}>{t("home.welcome")}</Text>
        </View>
        <Pressable style={themed($notificationButton)}>
          <Icon icon="bell" size={24} color={theme.colors.text} />
          <View style={themed($notificationBadge)} />
        </Pressable>
      </View>

      {/* Search Bar Placeholder */}
      <Pressable style={themed($searchBar)}>
        <Icon icon="components" size={18} color={theme.colors.textDim} />
        <Text style={themed($searchPlaceholder)}>{t("home.searchPlaceholder")}</Text>
      </Pressable>

      {/* Featured Provinces */}
      {renderSectionHeader(t("home.sections.featuredProvinces"))}
      <FlatList
        data={provinces}
        renderItem={renderProvince}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$horizontalList}
        keyExtractor={(item) => item.id}
      />

      {/* Popular Tours */}
      {renderSectionHeader(t("home.popularTours"), () => {})}
      <FlatList
        data={tours}
        renderItem={renderTour}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$horizontalList}
        keyExtractor={(item) => item.id}
      />

      {/* Nearby Places */}
      {renderSectionHeader(t("home.sections.nearbyPlaces"), () => {})}
      <FlatList
        data={places}
        renderItem={renderPlace}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$horizontalList}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  paddingBottom: 100,
})

const $header: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 16,
  paddingTop: 16,
}

const $greeting: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 14,
})

const $welcomeText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 22,
  fontWeight: "700",
  marginTop: 4,
})

const $notificationButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 12,
  borderWidth: 1,
  height: 44,
  justifyContent: "center",
  position: "relative",
  width: 44,
})

const $notificationBadge: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.error,
  borderRadius: 5,
  height: 10,
  position: "absolute",
  right: 10,
  top: 10,
  width: 10,
})

const $searchBar: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 12,
  borderWidth: 1,
  flexDirection: "row",
  height: 48,
  marginHorizontal: 16,
  marginTop: 20,
  paddingHorizontal: 16,
})

const $searchPlaceholder: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  flex: 1,
  fontSize: 15,
  marginLeft: 10,
})

const $sectionHeader: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 24,
  paddingHorizontal: 16,
}

const $sectionTitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 18,
  fontWeight: "700",
})

const $seeAllButton: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
}

const $seeAllText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontSize: 14,
  marginRight: 4,
})

const $horizontalList: ViewStyle = {
  paddingHorizontal: 16,
  paddingTop: 12,
}

const $cardMargin: ViewStyle = {
  marginRight: 12,
}
