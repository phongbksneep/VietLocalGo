/**
 * ProvinceCard - Card component for displaying province information
 * Max 200 lines per rule
 */
import { memo } from "react"
import {
  Image,
  ImageBackground,
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

export interface ProvinceCardProps {
  id: string
  name: string
  image: string | ImageSourcePropType
  placeCount: number
  tourCount: number
  region?: string
  onPress?: () => void
  variant?: "default" | "featured"
  style?: StyleProp<ViewStyle>
}

export const ProvinceCard = memo(function ProvinceCard(props: ProvinceCardProps) {
  const { name, image, placeCount, tourCount, region, onPress, variant = "default", style } = props
  const { themed, theme } = useAppTheme()
  const { t } = useTranslation()

  if (variant === "featured") {
    return (
      <Pressable
        style={({ pressed }) => [themed($featuredContainer), style, pressed && $pressed]}
        onPress={onPress}
      >
        <ImageBackground
          source={typeof image === "string" ? { uri: image } : image}
          style={$featuredImage}
          imageStyle={$featuredImageStyle}
        >
          <View style={themed($featuredOverlay)}>
            {region && <Text style={themed($region)}>{region}</Text>}
            <Text style={themed($featuredName)}>{name}</Text>
            <View style={$statsRow}>
              <View style={$stat}>
                <Icon icon="pin" size={12} color={theme.colors.background} />
                <Text style={themed($statText)}>{t("province.places", { count: placeCount })}</Text>
              </View>
              <View style={$stat}>
                <Icon icon="components" size={12} color={theme.colors.background} />
                <Text style={themed($statText)}>{t("province.tours", { count: tourCount })}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    )
  }

  return (
    <Pressable
      style={({ pressed }) => [themed($container), style, pressed && $pressed]}
      onPress={onPress}
    >
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        style={$image}
        resizeMode="cover"
      />
      <View style={$content}>
        <Text style={themed($name)} numberOfLines={1}>
          {name}
        </Text>
        <Text style={themed($stats)}>
          {`${t("province.places", { count: placeCount })} • ${t("province.tours", { count: tourCount })}`}
        </Text>
      </View>
    </Pressable>
  )
})

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderRadius: 12,
  elevation: 3,
  flexDirection: "row",
  overflow: "hidden",
  padding: 10,
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
})

const $image: ImageStyle = {
  borderRadius: 8,
  height: 60,
  width: 60,
}

const $content: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  marginLeft: 12,
}

const $name: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 15,
  fontWeight: "600",
})

const $stats: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 12,
  marginTop: 4,
})

// Featured variant styles
const $featuredContainer: ThemedStyle<ViewStyle> = () => ({
  borderRadius: 16,
  height: 180,
  overflow: "hidden",
  width: 280,
})

const $featuredImage: ViewStyle = {
  height: "100%",
  justifyContent: "flex-end",
  width: "100%",
}

const $featuredImageStyle: ImageStyle = {
  borderRadius: 16,
}

const $featuredOverlay: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.text + "60",
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
  padding: 14,
})

const $region: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background + "CC",
  fontSize: 11,
  fontWeight: "500",
  marginBottom: 2,
  textTransform: "uppercase",
})

const $featuredName: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 20,
  fontWeight: "700",
})

const $statsRow: ViewStyle = {
  flexDirection: "row",
  gap: 16,
  marginTop: 6,
}

const $stat: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
}

const $statText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 12,
  marginLeft: 4,
})

const $pressed: ViewStyle = {
  opacity: 0.9,
  transform: [{ scale: 0.98 }],
}
