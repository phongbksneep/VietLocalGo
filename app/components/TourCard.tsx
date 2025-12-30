/**
 * TourCard - Card component for displaying tour information
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

export interface TourCardProps {
  id: string
  name: string
  image: string | ImageSourcePropType
  rating: number
  reviewCount: number
  price: number
  originalPrice?: number
  duration: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const TourCard = memo(function TourCard(props: TourCardProps) {
  const { name, image, rating, reviewCount, price, originalPrice, duration, onPress, style } = props
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + "đ"
  }

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

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
        {discount > 0 && (
          <View style={themed($discountBadge)}>
            <Text style={themed($discountText)}>-{discount}%</Text>
          </View>
        )}
      </View>

      <View style={$content}>
        <Text style={themed($name)} numberOfLines={2}>
          {name}
        </Text>

        <View style={$row}>
          <Icon icon="heart" size={14} color={theme.colors.tint} />
          <Text style={themed($rating)}>{rating.toFixed(1)}</Text>
          <Text style={themed($reviewCount)}>({reviewCount})</Text>
        </View>

        <View style={$row}>
          <Icon icon="components" size={12} color={theme.colors.textDim} />
          <Text style={themed($duration)}>{duration}</Text>
        </View>

        <View style={$priceRow}>
          <Text style={themed($price)}>{formatPrice(price)}</Text>
          {originalPrice && (
            <Text style={themed($originalPrice)}>{formatPrice(originalPrice)}</Text>
          )}
          <Text style={themed($perPerson)}>{t("home.perPerson")}</Text>
        </View>
      </View>
    </Pressable>
  )
})

// Themed styles
const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderRadius: 12,
  elevation: 3,
  overflow: "hidden",
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  width: 180,
})

const $imageContainer: ViewStyle = {
  height: 120,
  width: "100%",
}

const $image: ImageStyle = {
  height: "100%",
  width: "100%",
}

const $discountBadge: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.error,
  borderRadius: 4,
  left: 8,
  paddingHorizontal: 8,
  paddingVertical: 4,
  position: "absolute",
  top: 8,
})

const $discountText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 10,
  fontWeight: "700",
})

const $content: ViewStyle = {
  padding: 12,
}

const $name: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 14,
  fontWeight: "600",
  marginBottom: 4,
})

const $row: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  marginTop: 4,
}

const $rating: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 12,
  fontWeight: "600",
  marginLeft: 4,
})

const $reviewCount: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 11,
  marginLeft: 2,
})

const $duration: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 12,
  marginLeft: 4,
})

const $priceRow: ViewStyle = {
  alignItems: "baseline",
  flexDirection: "row",
  marginTop: 8,
}

const $price: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontSize: 14,
  fontWeight: "700",
})

const $originalPrice: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 12,
  marginLeft: 4,
  textDecorationLine: "line-through",
})

const $perPerson: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 10,
  marginLeft: 2,
})

const $pressed: ViewStyle = {
  opacity: 0.9,
  transform: [{ scale: 0.98 }],
}
