/**
 * PlaceCard - Card component for displaying place/destination information
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

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { Icon } from "./Icon"
import { Text } from "./Text"

export interface PlaceCardProps {
  id: string
  name: string
  image: string | ImageSourcePropType
  rating: number
  reviewCount: number
  category: string
  address: string
  onPress?: () => void
  onFavorite?: () => void
  isFavorite?: boolean
  style?: StyleProp<ViewStyle>
}

export const PlaceCard = memo(function PlaceCard(props: PlaceCardProps) {
  const {
    name,
    image,
    rating,
    reviewCount,
    category,
    address,
    onPress,
    onFavorite,
    isFavorite = false,
    style,
  } = props
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
        <View style={themed($categoryBadge)}>
          <Text style={themed($categoryText)}>{category}</Text>
        </View>
        {onFavorite && (
          <Pressable style={themed($favoriteButton)} onPress={onFavorite}>
            <Icon
              icon="heart"
              size={18}
              color={isFavorite ? theme.colors.error : theme.colors.background}
            />
          </Pressable>
        )}
      </View>

      <View style={$content}>
        <Text style={themed($name)} numberOfLines={1}>
          {name}
        </Text>

        <View style={$row}>
          <Icon icon="heart" size={12} color={theme.colors.tint} />
          <Text style={themed($rating)}>{rating.toFixed(1)}</Text>
          <Text style={themed($reviewCount)}>({reviewCount})</Text>
        </View>

        <View style={$row}>
          <Icon icon="pin" size={12} color={theme.colors.textDim} />
          <Text style={themed($address)} numberOfLines={1}>
            {address}
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
  width: 160,
})

const $imageContainer: ViewStyle = {
  height: 100,
  width: "100%",
}

const $image: ImageStyle = {
  height: "100%",
  width: "100%",
}

const $categoryBadge: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.tint,
  borderRadius: 4,
  left: 8,
  paddingHorizontal: 6,
  paddingVertical: 2,
  position: "absolute",
  top: 8,
})

const $categoryText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 10,
  fontWeight: "600",
})

const $favoriteButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.text + "40",
  borderRadius: 15,
  height: 30,
  justifyContent: "center",
  position: "absolute",
  right: 8,
  top: 8,
  width: 30,
})

const $content: ViewStyle = {
  padding: 10,
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
  marginTop: 2,
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

const $address: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  flex: 1,
  fontSize: 11,
  marginLeft: 4,
})

const $pressed: ViewStyle = {
  opacity: 0.9,
  transform: [{ scale: 0.98 }],
}
