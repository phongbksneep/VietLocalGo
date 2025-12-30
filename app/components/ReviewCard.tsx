/**
 * ReviewCard - Card component for displaying user reviews
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

export interface ReviewCardProps {
  id: string
  userName: string
  userAvatar: string | ImageSourcePropType
  rating: number
  content: string
  images?: string[]
  date: string
  helpfulCount?: number
  onPress?: () => void
  onHelpful?: () => void
  style?: StyleProp<ViewStyle>
}

export const ReviewCard = memo(function ReviewCard(props: ReviewCardProps) {
  const {
    userName,
    userAvatar,
    rating,
    content,
    images,
    date,
    helpfulCount = 0,
    onPress,
    onHelpful,
    style,
  } = props
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          icon="heart"
          size={12}
          color={i <= rating ? theme.colors.tint : theme.colors.border}
        />,
      )
    }
    return stars
  }

  return (
    <Pressable
      style={({ pressed }) => [themed($container), style, pressed && $pressed]}
      onPress={onPress}
    >
      <View style={$header}>
        <Image
          source={typeof userAvatar === "string" ? { uri: userAvatar } : userAvatar}
          style={$avatar}
          resizeMode="cover"
        />
        <View style={$userInfo}>
          <Text style={themed($userName)}>{userName}</Text>
          <View style={$starsRow}>{renderStars()}</View>
        </View>
        <Text style={themed($date)}>{date}</Text>
      </View>

      <Text style={themed($content)} numberOfLines={4}>
        {content}
      </Text>

      {images && images.length > 0 && (
        <View style={$imagesRow}>
          {images.slice(0, 3).map((img, index) => (
            <Image key={index} source={{ uri: img }} style={$reviewImage} resizeMode="cover" />
          ))}
          {images.length > 3 && (
            <View style={themed($moreImages)}>
              <Text style={themed($moreImagesText)}>+{images.length - 3}</Text>
            </View>
          )}
        </View>
      )}

      <View style={$footer}>
        <Pressable style={$helpfulButton} onPress={onHelpful}>
          <Icon icon="clap" size={14} color={theme.colors.textDim} />
          <Text style={themed($helpfulText)}>
            {t("review.helpful")} ({helpfulCount})
          </Text>
        </Pressable>
      </View>
    </Pressable>
  )
})

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 12,
  borderWidth: 1,
  padding: 12,
})

const $header: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
}

const $avatar: ImageStyle = {
  borderRadius: 20,
  height: 40,
  width: 40,
}

const $userInfo: ViewStyle = {
  flex: 1,
  marginLeft: 10,
}

const $userName: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 14,
  fontWeight: "600",
})

const $starsRow: ViewStyle = {
  flexDirection: "row",
  gap: 2,
  marginTop: 2,
}

const $date: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 11,
})

const $content: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 13,
  lineHeight: 20,
  marginTop: 10,
})

const $imagesRow: ViewStyle = {
  flexDirection: "row",
  gap: 8,
  marginTop: 10,
}

const $reviewImage: ImageStyle = {
  borderRadius: 8,
  height: 60,
  width: 60,
}

const $moreImages: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.text + "80",
  borderRadius: 8,
  height: 60,
  justifyContent: "center",
  width: 60,
})

const $moreImagesText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 14,
  fontWeight: "600",
})

const $footer: ViewStyle = {
  borderTopColor: "transparent",
  borderTopWidth: 1,
  marginTop: 10,
  paddingTop: 10,
}

const $helpfulButton: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
}

const $helpfulText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 12,
  marginLeft: 6,
})

const $pressed: ViewStyle = {
  opacity: 0.95,
}
