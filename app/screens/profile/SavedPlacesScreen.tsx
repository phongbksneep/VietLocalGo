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
import { Place, places } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type SavedPlacesScreenProps = NativeStackScreenProps<AppStackParamList, "SavedPlaces">

export const SavedPlacesScreen: FC<SavedPlacesScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [savedPlaces, setSavedPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSavedPlaces = () => {
      // Simulate loading saved places
      setTimeout(() => {
        // Mock: select random places as saved
        const saved = places.slice(0, 5)
        setSavedPlaces(saved)
        setLoading(false)
      }, 500)
    }
    fetchSavedPlaces()
  }, [])

  const handleRemove = (placeId: string) => {
    setSavedPlaces((prev) => prev.filter((p) => p.id !== placeId))
  }

  const handlePlacePress = (place: Place) => {
    navigation.navigate("PlaceDetails", { placeId: place.id, source: "saved-places" })
  }

  const renderPlaceCard = ({ item }: { item: Place }) => (
    <Pressable
      style={[$placeCard, { backgroundColor: theme.colors.background }]}
      onPress={() => handlePlacePress(item)}
    >
      <Image source={{ uri: item.images[0] }} style={$placeImage} />
      <View style={$cardContent}>
        <View style={$cardHeader}>
          <Text preset="bold" numberOfLines={1} style={$placeName}>
            {item.name}
          </Text>
          <Pressable style={$removeButton} onPress={() => handleRemove(item.id)}>
            <Icon icon="x" size={18} color={theme.colors.textDim} />
          </Pressable>
        </View>

        <Text size="xs" numberOfLines={1} style={{ color: theme.colors.textDim }}>
          {item.address}
        </Text>

        <View style={$cardFooter}>
          <View style={$ratingContainer}>
            <Icon icon="heart" size={14} color={theme.colors.palette.accent500} />
            <Text size="xs" style={{ color: theme.colors.text }}>
              {item.rating} ({item.reviewCount})
            </Text>
          </View>
          <View style={[$categoryBadge, { backgroundColor: theme.colors.palette.primary100 }]}>
            <Text size="xxs" style={{ color: theme.colors.tint }}>
              {item.category}
            </Text>
          </View>
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
        <Text preset="heading">Đã lưu</Text>
        <View style={$spacer} />
      </View>

      {/* Stats */}
      {!loading && savedPlaces.length > 0 && (
        <View style={[$statsBar, { backgroundColor: theme.colors.palette.primary100 }]}>
          <Icon icon="heart" size={16} color={theme.colors.tint} />
          <Text style={{ color: theme.colors.tint }}>{savedPlaces.length} địa điểm đã lưu</Text>
        </View>
      )}

      {loading ? (
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      ) : (
        <FlatList
          data={savedPlaces}
          renderItem={renderPlaceCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={$listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="heart" size={64} color={theme.colors.border} />
              <Text preset="subheading" style={{ color: theme.colors.textDim }}>
                Chưa có địa điểm nào
              </Text>
              <Text style={[$emptySubtext, { color: theme.colors.textDim }]}>
                Lưu các địa điểm yêu thích để xem lại sau
              </Text>
              <Pressable
                style={[$exploreButton, { backgroundColor: theme.colors.tint }]}
                onPress={() => navigation.navigate("Main", { screen: "Explore" })}
              >
                <Text style={$exploreButtonText}>Khám phá ngay</Text>
              </Pressable>
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

const $statsBar: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.xs,
  paddingVertical: spacing.sm,
  marginHorizontal: spacing.md,
  borderRadius: 8,
  marginBottom: spacing.sm,
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

const $placeCard: ViewStyle = {
  flexDirection: "row",
  borderRadius: 12,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
}

const $placeImage: ImageStyle = {
  width: 100,
  height: 100,
}

const $cardContent: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
  justifyContent: "space-between",
}

const $cardHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
}

const $placeName: TextStyle = {
  flex: 1,
  marginRight: spacing.xs,
}

const $removeButton: ViewStyle = {
  padding: spacing.xxs,
}

const $cardFooter: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $ratingContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $categoryBadge: ViewStyle = {
  paddingHorizontal: spacing.xs,
  paddingVertical: 2,
  borderRadius: 4,
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

const $exploreButton: ViewStyle = {
  marginTop: spacing.md,
  paddingHorizontal: spacing.xl,
  paddingVertical: spacing.sm,
  borderRadius: 24,
}

const $exploreButtonText: TextStyle = {
  color: "#FFFFFF",
  fontWeight: "600",
}
