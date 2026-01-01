import { FC, useState, useCallback } from "react"
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
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { places, tours, guides, Place, Tour, Guide } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type SearchScreenProps = NativeStackScreenProps<AppStackParamList, "Search">

type SearchResultType = "place" | "tour" | "guide"
type SearchResult = {
  id: string
  type: SearchResultType
  name: string
  image: string
  subtitle: string
  rating: number
}

const filterTypes: { id: SearchResultType | "all"; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "place", label: "Địa điểm" },
  { id: "tour", label: "Tour" },
  { id: "guide", label: "HDV" },
]

const recentSearches = ["Phủ Dầy", "Tour ẩm thực", "Chùa Cổ Lễ", "Làng nghề"]

export const SearchScreen: FC<SearchScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<SearchResultType | "all">("all")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([])
        setHasSearched(false)
        return
      }

      setLoading(true)
      setHasSearched(true)

      // Simulate search delay
      setTimeout(() => {
        const lowerQuery = searchQuery.toLowerCase()
        const searchResults: SearchResult[] = []

        // Search places
        if (activeFilter === "all" || activeFilter === "place") {
          places.forEach((place: Place) => {
            if (place.name.toLowerCase().includes(lowerQuery)) {
              searchResults.push({
                id: place.id,
                type: "place",
                name: place.name,
                image: place.images[0],
                subtitle: place.address,
                rating: place.rating,
              })
            }
          })
        }

        // Search tours
        if (activeFilter === "all" || activeFilter === "tour") {
          tours.forEach((tour: Tour) => {
            if (tour.name.toLowerCase().includes(lowerQuery)) {
              searchResults.push({
                id: tour.id,
                type: "tour",
                name: tour.name,
                image: tour.images[0],
                subtitle: tour.duration,
                rating: tour.rating,
              })
            }
          })
        }

        // Search guides
        if (activeFilter === "all" || activeFilter === "guide") {
          guides.forEach((guide: Guide) => {
            if (guide.name.toLowerCase().includes(lowerQuery)) {
              searchResults.push({
                id: guide.id,
                type: "guide",
                name: guide.name,
                image: guide.avatar,
                subtitle: guide.specialties.join(", "),
                rating: guide.rating,
              })
            }
          })
        }

        setResults(searchResults)
        setLoading(false)
      }, 300)
    },
    [activeFilter],
  )

  const handleSearch = () => {
    performSearch(query)
  }

  const handleFilterChange = (filter: SearchResultType | "all") => {
    setActiveFilter(filter)
    if (query.trim()) {
      performSearch(query)
    }
  }

  const handleResultPress = (result: SearchResult) => {
    switch (result.type) {
      case "place":
        navigation.navigate("PlaceDetails", { placeId: result.id })
        break
      case "tour":
        navigation.navigate("TourDetails", { tourId: result.id })
        break
      case "guide":
        navigation.navigate("GuideProfile", { guideId: result.id })
        break
    }
  }

  const handleRecentSearch = (search: string) => {
    setQuery(search)
    performSearch(search)
  }

  const getTypeIcon = (type: SearchResultType): "pin" | "view" | "community" => {
    switch (type) {
      case "place":
        return "pin"
      case "tour":
        return "view"
      case "guide":
        return "community"
    }
  }

  const getTypeColor = (type: SearchResultType) => {
    switch (type) {
      case "place":
        return theme.colors.palette.primary500
      case "tour":
        return theme.colors.palette.secondary500
      case "guide":
        return theme.colors.palette.accent500
    }
  }

  const renderResultItem = ({ item }: { item: SearchResult }) => (
    <Pressable
      style={[$resultCard, { backgroundColor: theme.colors.background }]}
      onPress={() => handleResultPress(item)}
    >
      <Image source={{ uri: item.image }} style={$resultImage} />
      <View style={$resultContent}>
        <View style={$resultHeader}>
          <View style={[$typeBadge, { backgroundColor: getTypeColor(item.type) + "20" }]}>
            <Icon icon={getTypeIcon(item.type)} size={12} color={getTypeColor(item.type)} />
          </View>
          <View style={$ratingBadge}>
            <Icon icon="heart" size={12} color={theme.colors.palette.accent500} />
            <Text size="xs" style={{ color: theme.colors.text }}>
              {item.rating}
            </Text>
          </View>
        </View>
        <Text preset="bold" numberOfLines={1}>
          {item.name}
        </Text>
        <Text size="xs" numberOfLines={1} style={{ color: theme.colors.textDim }}>
          {item.subtitle}
        </Text>
      </View>
      <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
    </Pressable>
  )

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <TextField
          containerStyle={$searchFieldContainer}
          inputWrapperStyle={$searchFieldWrapper}
          placeholder="Tìm kiếm địa điểm, tour, HDV..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          LeftAccessory={() => (
            <Icon icon="components" size={18} color={theme.colors.textDim} style={$searchIcon} />
          )}
          RightAccessory={
            query
              ? () => (
                  <Pressable onPress={() => setQuery("")} style={$clearButton}>
                    <Icon icon="x" size={16} color={theme.colors.textDim} />
                  </Pressable>
                )
              : undefined
          }
        />
      </View>

      {/* Filters */}
      <View style={$filtersContainer}>
        {filterTypes.map((filter) => {
          const isActive = activeFilter === filter.id
          return (
            <Pressable
              key={filter.id}
              style={[
                $filterButton,
                {
                  backgroundColor: isActive ? theme.colors.tint : theme.colors.palette.neutral200,
                },
              ]}
              onPress={() => handleFilterChange(filter.id)}
            >
              <Text size="xs" style={{ color: isActive ? "#FFFFFF" : theme.colors.text }}>
                {filter.label}
              </Text>
            </Pressable>
          )
        })}
      </View>

      {/* Content */}
      {!hasSearched ? (
        // Recent searches
        <View style={$recentContainer}>
          <Text preset="formLabel" style={$recentTitle}>
            Tìm kiếm gần đây
          </Text>
          {recentSearches.map((search, index) => (
            <Pressable key={index} style={$recentItem} onPress={() => handleRecentSearch(search)}>
              <Icon icon="view" size={16} color={theme.colors.textDim} />
              <Text style={{ color: theme.colors.text }}>{search}</Text>
            </Pressable>
          ))}
        </View>
      ) : loading ? (
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      ) : (
        <FlatList
          data={results}
          renderItem={renderResultItem}
          keyExtractor={(item) => `${item.type}-${item.id}`}
          contentContainerStyle={$listContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            results.length > 0 ? (
              <Text size="xs" style={{ color: theme.colors.textDim, marginBottom: spacing.sm }}>
                {results.length} kết quả
              </Text>
            ) : null
          }
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="components" size={64} color={theme.colors.border} />
              <Text style={{ color: theme.colors.textDim }}>Không tìm thấy kết quả</Text>
              <Text size="xs" style={[$emptySubtext, { color: theme.colors.textDim }]}>
                Thử tìm kiếm với từ khóa khác
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
  alignItems: "center",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  gap: spacing.sm,
}

const $backButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $searchFieldContainer: ViewStyle = {
  flex: 1,
}

const $searchFieldWrapper: ViewStyle = {
  borderRadius: 24,
}

const $searchIcon: ImageStyle = {
  marginLeft: spacing.sm,
}

const $clearButton: ViewStyle = {
  padding: spacing.xs,
  marginRight: spacing.xs,
}

const $filtersContainer: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing.md,
  gap: spacing.sm,
  marginBottom: spacing.md,
}

const $filterButton: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xs,
  borderRadius: 16,
}

const $recentContainer: ViewStyle = {
  padding: spacing.md,
}

const $recentTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $recentItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
  paddingVertical: spacing.sm,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $listContent: ViewStyle = {
  padding: spacing.md,
}

const $resultCard: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.sm,
  borderRadius: 12,
  marginBottom: spacing.sm,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
}

const $resultImage: ImageStyle = {
  width: 56,
  height: 56,
  borderRadius: 8,
}

const $resultContent: ViewStyle = {
  flex: 1,
  marginLeft: spacing.sm,
}

const $resultHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
  marginBottom: spacing.xxs,
}

const $typeBadge: ViewStyle = {
  padding: 4,
  borderRadius: 4,
}

const $ratingBadge: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
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
}
