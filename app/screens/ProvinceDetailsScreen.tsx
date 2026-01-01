import { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ImageStyle,
  Pressable,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { provinces, Province, places, Place, tours, Tour } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type ProvinceDetailsScreenProps = NativeStackScreenProps<AppStackParamList, "ProvinceDetails">

export const ProvinceDetailsScreen: FC<ProvinceDetailsScreenProps> = ({ navigation, route }) => {
  const { provinceId } = route.params
  const { theme } = useAppTheme()

  const [province, setProvince] = useState<Province | null>(null)
  const [provincePlaces, setProvincePlaces] = useState<Place[]>([])
  const [provinceTours, setProvinceTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      const foundProvince = provinces.find((p) => p.id === provinceId)
      if (foundProvince) {
        setProvince(foundProvince)
        const filteredPlaces = places.filter((p) => p.provinceId === provinceId)
        const filteredTours = tours.filter((t) => t.provinceId === provinceId)
        setProvincePlaces(filteredPlaces)
        setProvinceTours(filteredTours)
      }
      setLoading(false)
    }
    fetchData()
  }, [provinceId])

  const handlePlacePress = (place: Place) => {
    navigation.navigate("PlaceDetails", { placeId: place.id })
  }

  const handleTourPress = (tour: Tour) => {
    navigation.navigate("TourDetails", { tourId: tour.id })
  }

  const handleViewAllPlaces = () => {
    navigation.navigate("Main", { screen: "Explore" })
  }

  const handleFindGuide = () => {
    navigation.navigate("GuideList", { provinceId })
  }

  const renderPlaceCard = ({ item }: { item: Place }) => (
    <Pressable
      style={[$placeCard, { backgroundColor: theme.colors.background }]}
      onPress={() => handlePlacePress(item)}
    >
      <Image source={{ uri: item.images[0] }} style={$placeImage} />
      <View style={$placeContent}>
        <Text preset="bold" numberOfLines={1}>
          {item.name}
        </Text>
        <View style={$placeRating}>
          <Icon icon="heart" size={12} color={theme.colors.palette.accent500} />
          <Text size="xs" style={{ color: theme.colors.text }}>
            {item.rating}
          </Text>
        </View>
      </View>
    </Pressable>
  )

  const renderTourCard = ({ item }: { item: Tour }) => (
    <Pressable
      style={[$tourCard, { backgroundColor: theme.colors.background }]}
      onPress={() => handleTourPress(item)}
    >
      <Image source={{ uri: item.images[0] }} style={$tourImage} />
      <View style={$tourContent}>
        <Text preset="bold" numberOfLines={2}>
          {item.name}
        </Text>
        <View style={$tourInfo}>
          <View style={$tourInfoItem}>
            <Icon icon="view" size={12} color={theme.colors.textDim} />
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {item.duration}
            </Text>
          </View>
          <View style={$tourInfoItem}>
            <Icon icon="heart" size={12} color={theme.colors.palette.accent500} />
            <Text size="xs" style={{ color: theme.colors.text }}>
              {item.rating}
            </Text>
          </View>
        </View>
        <Text preset="bold" style={{ color: theme.colors.tint }}>
          {item.price.toLocaleString("vi-VN")}đ
        </Text>
      </View>
    </Pressable>
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

  if (!province) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <Icon icon="components" size={64} color={theme.colors.border} />
          <Text style={{ color: theme.colors.textDim }}>Không tìm thấy tỉnh</Text>
        </View>
      </Screen>
    )
  }

  return (
    <Screen preset="fixed" contentContainerStyle={$container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <ImageBackground source={{ uri: province.thumbnail }} style={$heroImage}>
          <View style={$heroOverlay}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={[$backButtonHero, { backgroundColor: "rgba(0,0,0,0.3)" }]}
            >
              <Icon icon="back" size={24} color="#FFFFFF" />
            </Pressable>
            <View style={$heroContent}>
              <Text preset="heading" style={$heroTitle}>
                {province.name}
              </Text>
              <Text style={$heroSubtitle}>{province.nameEn}</Text>
            </View>
          </View>
        </ImageBackground>

        {/* Stats */}
        <View style={[$statsContainer, { backgroundColor: theme.colors.background }]}>
          <View style={$statItem}>
            <Icon icon="pin" size={20} color={theme.colors.tint} />
            <Text preset="bold">{province.totalPlaces}</Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              Địa điểm
            </Text>
          </View>
          <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
          <View style={$statItem}>
            <Icon icon="view" size={20} color={theme.colors.palette.secondary500} />
            <Text preset="bold">{province.totalTours}</Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              Tour
            </Text>
          </View>
          <View style={[$statDivider, { backgroundColor: theme.colors.border }]} />
          <View style={$statItem}>
            <Icon icon="community" size={20} color={theme.colors.palette.accent500} />
            <Text preset="bold">{province.totalGuides}</Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              HDV
            </Text>
          </View>
        </View>

        {/* Description */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="subheading" style={$sectionTitle}>
            Giới thiệu
          </Text>
          <Text style={{ color: theme.colors.text, lineHeight: 22 }}>{province.description}</Text>
        </View>

        {/* Popular Places */}
        {provincePlaces.length > 0 && (
          <View style={$section}>
            <View style={$sectionHeader}>
              <Text preset="subheading">Địa điểm nổi bật</Text>
              <Pressable onPress={handleViewAllPlaces}>
                <Text style={{ color: theme.colors.tint }}>Xem tất cả</Text>
              </Pressable>
            </View>
            <FlatList
              horizontal
              data={provincePlaces.slice(0, 5)}
              renderItem={renderPlaceCard}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={$horizontalList}
            />
          </View>
        )}

        {/* Tours */}
        {provinceTours.length > 0 && (
          <View style={$section}>
            <View style={$sectionHeader}>
              <Text preset="subheading">Tour được yêu thích</Text>
            </View>
            <FlatList
              horizontal
              data={provinceTours.slice(0, 5)}
              renderItem={renderTourCard}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={$horizontalList}
            />
          </View>
        )}

        {/* Find Guide CTA */}
        <View style={$section}>
          <Pressable
            style={[$findGuideCTA, { backgroundColor: theme.colors.palette.primary100 }]}
            onPress={handleFindGuide}
          >
            <View style={$findGuideContent}>
              <Icon icon="community" size={32} color={theme.colors.tint} />
              <View style={$findGuideText}>
                <Text preset="bold">Tìm hướng dẫn viên</Text>
                <Text size="xs" style={{ color: theme.colors.textDim }}>
                  {province.totalGuides} hướng dẫn viên sẵn sàng phục vụ
                </Text>
              </View>
            </View>
            <Icon icon="caretRight" size={20} color={theme.colors.tint} />
          </Pressable>
        </View>

        <View style={$bottomSpacer} />
      </ScrollView>
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

const $heroImage: ImageStyle = {
  width: "100%",
  height: 280,
}

const $heroOverlay: ViewStyle = {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.3)",
  justifyContent: "space-between",
}

const $backButtonHero: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  margin: spacing.md,
  marginTop: spacing.xl + spacing.md,
}

const $heroContent: ViewStyle = {
  padding: spacing.md,
}

const $heroTitle: TextStyle = {
  color: "#FFFFFF",
  fontSize: 28,
}

const $heroSubtitle: TextStyle = {
  color: "rgba(255,255,255,0.8)",
  fontSize: 16,
}

const $statsContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: spacing.md,
  marginHorizontal: spacing.md,
  marginTop: -30,
  borderRadius: 16,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 4,
}

const $statItem: ViewStyle = {
  alignItems: "center",
  gap: spacing.xxs,
}

const $statDivider: ViewStyle = {
  width: 1,
  height: 40,
}

const $section: ViewStyle = {
  marginTop: spacing.lg,
  paddingHorizontal: spacing.md,
}

const $sectionTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $sectionHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.sm,
}

const $horizontalList: ViewStyle = {
  gap: spacing.sm,
}

const $placeCard: ViewStyle = {
  width: 150,
  borderRadius: 12,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
}

const $placeImage: ImageStyle = {
  width: "100%",
  height: 100,
}

const $placeContent: ViewStyle = {
  padding: spacing.sm,
}

const $placeRating: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
  marginTop: spacing.xxs,
}

const $tourCard: ViewStyle = {
  width: 200,
  borderRadius: 12,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
}

const $tourImage: ImageStyle = {
  width: "100%",
  height: 120,
}

const $tourContent: ViewStyle = {
  padding: spacing.sm,
}

const $tourInfo: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  marginVertical: spacing.xs,
}

const $tourInfoItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $findGuideCTA: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.md,
  borderRadius: 16,
}

const $findGuideContent: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
}

const $findGuideText: ViewStyle = {
  gap: spacing.xxs,
}

const $bottomSpacer: ViewStyle = {
  height: spacing.xl,
}
