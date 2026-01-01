import { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { Place, places } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type PlaceDetailsScreenProps = NativeStackScreenProps<AppStackParamList, "PlaceDetails">

export const PlaceDetailsScreen: FC<PlaceDetailsScreenProps> = ({ navigation, route }) => {
  const { placeId } = route.params
  const { theme } = useAppTheme()

  const [place, setPlace] = useState<Place | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const fetchPlace = () => {
      const foundPlace = places.find((p) => p.id === placeId)
      setPlace(foundPlace || null)
      setLoading(false)
    }
    fetchPlace()
  }, [placeId])

  const handleSave = () => {
    setIsSaved((prev) => !prev)
  }

  const handleReview = () => {
    navigation.navigate("SubmitReview", { targetId: placeId, targetType: "place" })
  }

  const handleShare = () => {
    // Share functionality
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

  if (!place) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <Icon icon="components" size={64} color={theme.colors.border} />
          <Text style={{ color: theme.colors.textDim }}>Không tìm thấy địa điểm</Text>
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
          {place.name}
        </Text>
        <View style={$headerActions}>
          <Pressable onPress={handleSave} style={$headerAction}>
            <Icon
              icon="heart"
              size={22}
              color={isSaved ? theme.colors.palette.accent500 : theme.colors.text}
            />
          </Pressable>
          <Pressable onPress={handleShare} style={$headerAction}>
            <Icon icon="components" size={22} color={theme.colors.text} />
          </Pressable>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Images */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={$imagesContainer}
          contentContainerStyle={$imagesContent}
        >
          {place.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={$placeImage} />
          ))}
        </ScrollView>

        {/* Info */}
        <View style={$infoSection}>
          <Text preset="subheading">{place.name}</Text>
          <View style={$ratingRow}>
            <Icon icon="heart" size={16} color={theme.colors.palette.accent500} />
            <Text style={{ color: theme.colors.text }}>
              {place.rating} ({place.reviewCount} đánh giá)
            </Text>
          </View>
          <View style={$locationRow}>
            <Icon icon="pin" size={16} color={theme.colors.textDim} />
            <Text style={{ color: theme.colors.textDim }}>{place.address}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={[$section, { backgroundColor: theme.colors.background }]}>
          <Text preset="formLabel" style={$sectionTitle}>
            Giới thiệu
          </Text>
          <Text style={$descriptionText(theme)}>{place.description}</Text>
        </View>

        {/* Opening Hours */}
        {place.openingHours && (
          <View style={[$section, { backgroundColor: theme.colors.background }]}>
            <Text preset="formLabel" style={$sectionTitle}>
              Giờ mở cửa
            </Text>
            <View style={$openingHoursRow}>
              <Icon icon="view" size={16} color={theme.colors.tint} />
              <Text style={{ color: theme.colors.text }}>{place.openingHours}</Text>
            </View>
          </View>
        )}

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
          text="Viết đánh giá"
          style={$reviewButton}
          onPress={handleReview}
        />
        <Button
          preset="filled"
          text="Chỉ đường"
          style={$directionsButton}
          LeftAccessory={() => <Icon icon="pin" size={18} color="#FFFFFF" />}
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

const $headerActions: ViewStyle = {
  flexDirection: "row",
  gap: spacing.xs,
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

const $placeImage: ImageStyle = {
  width: 280,
  height: 200,
  borderRadius: 12,
}

const $infoSection: ViewStyle = {
  paddingHorizontal: spacing.md,
  marginBottom: spacing.md,
}

const $ratingRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
  marginTop: spacing.xs,
}

const $locationRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
  marginTop: spacing.xs,
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

const $openingHoursRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
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

const $reviewButton: ViewStyle = {
  flex: 1,
}

const $directionsButton: ViewStyle = {
  flex: 1,
}

const $descriptionText = (theme: { colors: { text: string } }): TextStyle => ({
  color: theme.colors.text,
  lineHeight: 22,
})
