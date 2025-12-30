/**
 * FoodCard - Card component for displaying food/cuisine information
 * Max 200 lines per rule
 */
import { memo } from "react"
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { useTranslation } from "react-i18next"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { Icon } from "./Icon"
import { Text } from "./Text"

export interface FoodCardProps {
  id: string
  name: string
  image: string | ImageSourcePropType
  rating: number
  reviewCount: number
  priceRange: string
  restaurant?: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const FoodCard = memo(function FoodCard(props: FoodCardProps) {
  const { name, image, rating, reviewCount, priceRange, restaurant, onPress, style } = props
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

  return (
    <Pressable
      style={({ pressed }) => [themed($container), style, pressed && $pressed]}
      onPress={onPress}
    >
      <View style={$imageContainer}>
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={$image}
          resizeMode="cover"
        />
        <View style={themed($priceBadge)}>
          <Text style={themed($priceText)}>{priceRange}</Text>
        </View>
      </View>

      <View style={$content}>
        <Text style={themed($name)} numberOfLines={1}>
          {name}
        </Text>

        {restaurant && (
          <Text style={themed($restaurant)} numberOfLines={1}>
            {restaurant}
          </Text>
        )}

        <View style={$row}>
          <Icon icon="heart" size={12} color={theme.colors.tint} />
          <Text style={themed($rating)}>{rating.toFixed(1)}</Text>
          <Text style={themed($reviewCount)}>
            ({reviewCount} {t("common.reviews")})
          </Text>
        </View>
      </View>
    </Pressable>
  )
})

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderRadius: 12,
  elevation: 3,
  overflow: "hidden",
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  width: 150,
})

const $imageContainer: ViewStyle = {
  height: 100,
  width: "100%",
}

const $image: ImageStyle = {
  height: "100%",
  width: "100%",
}

const $priceBadge: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.text + "CC",
  borderRadius: 4,
  bottom: 8,
  paddingHorizontal: 6,
  paddingVertical: 2,
  position: "absolute",
  right: 8,
})

const $priceText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 10,
  fontWeight: "600",
})

const $content: ViewStyle = {
  padding: 10,
}

const $name: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 14,
  fontWeight: "600",
})

const $restaurant: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 11,
  marginTop: 2,
})

const $row: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  marginTop: 6,
}

const $rating: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 11,
  fontWeight: "600",
  marginLeft: 4,
})

const $reviewCount: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 10,
  marginLeft: 2,
})

const $pressed: ViewStyle = {
  opacity: 0.9,
  transform: [{ scale: 0.98 }],
}
