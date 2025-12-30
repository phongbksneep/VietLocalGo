/**
 * ExploreScreen - Browse and filter places, food, tours
 * Max 200 lines per rule
 */
import { useCallback, useState } from "react"
import { FlatList, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"

import { CategoryButton } from "@/components/CategoryButton"
import { Icon, IconTypes } from "@/components/Icon"
import { PlaceCard } from "@/components/PlaceCard"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { Place, places } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

type Category = "all" | "food" | "tourism" | "culture" | "nature"

interface CategoryItem {
  id: Category
  label: string
  icon: IconTypes
}

export function ExploreScreen() {
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  const categories: CategoryItem[] = [
    { id: "all", label: t("explore.all"), icon: "components" },
    { id: "food", label: t("explore.food"), icon: "heart" },
    { id: "tourism", label: t("explore.tourism"), icon: "pin" },
    { id: "culture", label: t("explore.culture"), icon: "community" },
    { id: "nature", label: t("explore.nature"), icon: "components" },
  ]

  const filteredPlaces =
    selectedCategory === "all"
      ? places
      : places.filter((place: Place) => {
          if (selectedCategory === "food") return place.category === "food"
          if (selectedCategory === "tourism") return place.category === "heritage"
          if (selectedCategory === "culture") return place.category === "temple"
          if (selectedCategory === "nature") return place.category === "nature"
          return true
        })

  const renderCategory = useCallback(
    ({ item }: { item: CategoryItem }) => (
      <CategoryButton
        label={item.label}
        icon={item.icon}
        isSelected={selectedCategory === item.id}
        onPress={() => setSelectedCategory(item.id)}
        style={$categoryButton}
      />
    ),
    [selectedCategory],
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
        style={$placeCard}
      />
    ),
    [],
  )

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      {/* Header */}
      <View style={$header}>
        <Text style={themed($title)}>{t("explore.title")}</Text>
        <Pressable style={themed($filterButton)}>
          <Icon icon="settings" size={20} color={theme.colors.text} />
        </Pressable>
      </View>

      {/* Search Bar */}
      <Pressable style={themed($searchBar)}>
        <Icon icon="components" size={18} color={theme.colors.textDim} />
        <Text style={themed($searchPlaceholder)}>{t("explore.searchPlaceholder")}</Text>
      </Pressable>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$categoryList}
        keyExtractor={(item) => item.id}
      />

      {/* Results Header */}
      <View style={$resultsHeader}>
        <Text style={themed($resultsCount)}>
          {filteredPlaces.length} {t("explore.results")}
        </Text>
        <Pressable style={$sortButton}>
          <Text style={themed($sortText)}>{t("explore.sortBy")}</Text>
          <Icon icon="caretRight" size={14} color={theme.colors.textDim} />
        </Pressable>
      </View>

      {/* Places Grid */}
      <FlatList
        data={filteredPlaces}
        renderItem={renderPlace}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$placesList}
        columnWrapperStyle={$placesRow}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  flex: 1,
})

const $header: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 16,
  paddingTop: 16,
}

const $title: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 24,
  fontWeight: "700",
})

const $filterButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 10,
  borderWidth: 1,
  height: 40,
  justifyContent: "center",
  width: 40,
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
  marginTop: 16,
  paddingHorizontal: 16,
})

const $searchPlaceholder: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  flex: 1,
  fontSize: 15,
  marginLeft: 10,
})

const $categoryList: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 16,
}

const $categoryButton: ViewStyle = {
  marginRight: 10,
}

const $resultsHeader: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 16,
}

const $resultsCount: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 14,
  fontWeight: "600",
})

const $sortButton: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
}

const $sortText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 14,
  marginRight: 4,
})

const $placesList: ViewStyle = {
  padding: 16,
}

const $placesRow: ViewStyle = {
  justifyContent: "space-between",
}

const $placeCard: ViewStyle = {
  marginBottom: 16,
  width: "48%",
}
