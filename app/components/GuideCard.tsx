/**
 * GuideCard - Card component for displaying tour guide information
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

export interface GuideCardProps {
  id: string
  name: string
  avatar: string | ImageSourcePropType
  rating: number
  reviewCount: number
  tourCount: number
  languages: string[]
  pricePerDay: number
  isVerified?: boolean
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const GuideCard = memo(function GuideCard(props: GuideCardProps) {
  const {
    name,
    avatar,
    rating,
    reviewCount: _reviewCount,
    tourCount,
    languages,
    pricePerDay,
    isVerified = false,
    onPress,
    style,
  } = props
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + "đ"
  }

  return (
    <Pressable
      style={({ pressed }) => [themed($container), style, pressed && $pressed]}
      onPress={onPress}
    >
      <View style={$avatarContainer}>
        <Image
          source={typeof avatar === "string" ? { uri: avatar } : avatar}
          style={$avatar}
          resizeMode="cover"
        />
        {isVerified && (
          <View style={themed($verifiedBadge)}>
            <Icon icon="check" size={10} color={theme.colors.background} />
          </View>
        )}
      </View>

      <View style={$content}>
        <Text style={themed($name)} numberOfLines={1}>
          {name}
        </Text>

        <View style={$row}>
          <Icon icon="heart" size={12} color={theme.colors.tint} />
          <Text style={themed($rating)}>{rating.toFixed(1)}</Text>
          <Text style={themed($stats)}>• {tourCount} tours</Text>
        </View>

        <Text style={themed($languages)} numberOfLines={1}>
          {languages.join(", ")}
        </Text>

        <View style={$priceRow}>
          <Text style={themed($price)}>{formatPrice(pricePerDay)}</Text>
          <Text style={themed($perDay)}>/{t("guide.day")}</Text>
        </View>
      </View>
    </Pressable>
  )
})

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderRadius: 12,
  elevation: 3,
  overflow: "hidden",
  padding: 12,
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  width: 140,
})

const $avatarContainer: ViewStyle = {
  height: 60,
  position: "relative",
  width: 60,
}

const $avatar: ImageStyle = {
  borderRadius: 30,
  height: 60,
  width: 60,
}

const $verifiedBadge: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.tint,
  borderColor: colors.background,
  borderRadius: 10,
  borderWidth: 2,
  bottom: 0,
  height: 20,
  justifyContent: "center",
  position: "absolute",
  right: 0,
  width: 20,
})

const $content: ViewStyle = {
  alignItems: "center",
  marginTop: 8,
  width: "100%",
}

const $name: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 13,
  fontWeight: "600",
  textAlign: "center",
})

const $row: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  marginTop: 4,
}

const $rating: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 11,
  fontWeight: "600",
  marginLeft: 4,
})

const $stats: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 10,
  marginLeft: 4,
})

const $languages: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 10,
  marginTop: 4,
  textAlign: "center",
})

const $priceRow: ViewStyle = {
  alignItems: "baseline",
  flexDirection: "row",
  marginTop: 6,
}

const $price: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontSize: 12,
  fontWeight: "700",
})

const $perDay: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 10,
})

const $pressed: ViewStyle = {
  opacity: 0.9,
  transform: [{ scale: 0.98 }],
}
