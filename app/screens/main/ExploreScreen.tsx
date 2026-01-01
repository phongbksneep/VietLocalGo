/**
 * ExploreScreen - Browse and filter places, food, tours
 * Max 200 lines per rule
 */
import { useCallback, useState } from "react"
import { FlatList, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
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
  const navigation = useNavigation()
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  const categories: CategoryItem[] = [
    { id: "all", label: t("explore.categories.all"), icon: "components" },
    { id: "food", label: t("explore.categories.food"), icon: "heart" },
    { id: "tourism", label: t("explore.categories.temple"), icon: "pin" },
    { id: "culture", label: t("explore.categories.heritage"), icon: "community" },
    { id: "nature", label: t("explore.categories.nature"), icon: "components" },
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
        onPress={() => (navigation as any).navigate("PlaceDetails", { placeId: item.id })}
        onFavorite={() => {
          const { toggleSavedPlace } = require("@/services/mock/users")
          toggleSavedPlace(item.id)
        }}
        isFavorite={require("@/services/mock/users").isSavedPlace(item.id)}
        style={$placeCard}
      />
    ),
    [navigation],
  )

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      {/* Header */}
      <View style={$header}>
        <Text style={themed($title)}>{t("explore.title")}</Text>
        <Pressable
          style={themed($filterButton)}
          onPress={() => (navigation as any).navigate("Search", { initialFilter: "place" })}
          accessibilityLabel="explore-filter-button"
        >
          <Icon icon="settings" size={20} color={theme.colors.text} />
        </Pressable>
      </View>

      {/* Search Bar */}
      <Pressable
        style={themed($searchBar)}
        onPress={() => navigation.navigate("Search" as never)}
        accessibilityLabel="explore-search-bar"
      >
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
          {t("explore.results", { count: filteredPlaces.length })}
        </Text>
        <Pressable
          style={$sortButton}
          onPress={() => navigation.navigate("Search" as never)}
          accessibilityLabel="explore-sort-button"
        >
          <Text style={themed($sortText)}>{t("explore.sortByLabel")}</Text>
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
