/**
 * PriceTag - Component for displaying prices with discount
 * Max 200 lines per rule
 */
import { memo } from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { Text } from "./Text"

export interface PriceTagProps {
  price: number
  originalPrice?: number
  currency?: string
  unit?: string
  size?: "small" | "medium" | "large"
  showDiscount?: boolean
  style?: StyleProp<ViewStyle>
}

export const PriceTag = memo(function PriceTag(props: PriceTagProps) {
  const {
    price,
    originalPrice,
    currency = "đ",
    unit,
    size = "medium",
    showDiscount = true,
    style,
  } = props
  const { themed } = useAppTheme()

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + currency
  }

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  const sizeStyles = {
    small: { price: 12, original: 10, discount: 9, unit: 10 },
    medium: { price: 16, original: 12, discount: 10, unit: 12 },
    large: { price: 22, original: 14, discount: 12, unit: 14 },
  }

  const sizes = sizeStyles[size]

  return (
    <View style={[themed($container), style]}>
      <View style={$priceRow}>
        <Text style={[themed($price), { fontSize: sizes.price }]}>{formatPrice(price)}</Text>
        {unit && <Text style={[themed($unit), { fontSize: sizes.unit }]}>/{unit}</Text>}
      </View>

      {originalPrice && originalPrice > price && (
        <View style={$discountRow}>
          <Text style={[themed($originalPrice), { fontSize: sizes.original }]}>
            {formatPrice(originalPrice)}
          </Text>
          {showDiscount && (
            <View style={themed($discountBadge)}>
              <Text style={[themed($discountText), { fontSize: sizes.discount }]}>
                -{discount}%
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  )
})

const $container: ThemedStyle<ViewStyle> = () => ({
  alignItems: "flex-start",
})

const $priceRow: ViewStyle = {
  alignItems: "baseline",
  flexDirection: "row",
}

const $price: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontWeight: "700",
})

const $unit: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
})

const $discountRow: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  marginTop: 2,
}

const $originalPrice: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  textDecorationLine: "line-through",
})

const $discountBadge: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.error,
  borderRadius: 4,
  marginLeft: 6,
  paddingHorizontal: 4,
  paddingVertical: 2,
})

const $discountText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontWeight: "600",
})
