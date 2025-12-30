/**
 * PostCard - Card component for displaying community posts
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

export interface PostCardProps {
  id: string
  userName: string
  userAvatar: string | ImageSourcePropType
  content: string
  images?: string[]
  date: string
  likeCount: number
  commentCount: number
  isLiked?: boolean
  onPress?: () => void
  onLike?: () => void
  onComment?: () => void
  onShare?: () => void
  style?: StyleProp<ViewStyle>
}

export const PostCard = memo(function PostCard(props: PostCardProps) {
  const {
    userName,
    userAvatar,
    content,
    images,
    date,
    likeCount,
    commentCount,
    isLiked = false,
    onPress,
    onLike,
    onComment,
    onShare,
    style,
  } = props
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

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
          <Text style={themed($date)}>{date}</Text>
        </View>
        <Pressable style={$moreButton}>
          <Icon icon="more" size={20} color={theme.colors.textDim} />
        </Pressable>
      </View>

      <Text style={themed($content)} numberOfLines={5}>
        {content}
      </Text>

      {images && images.length > 0 && (
        <View style={$imagesContainer}>
          {images.length === 1 ? (
            <Image source={{ uri: images[0] }} style={$singleImage} resizeMode="cover" />
          ) : (
            <View style={$imagesGrid}>
              {images.slice(0, 4).map((img, index) => (
                <View key={index} style={$gridImageContainer}>
                  <Image source={{ uri: img }} style={$gridImage} resizeMode="cover" />
                  {index === 3 && images.length > 4 && (
                    <View style={themed($moreOverlay)}>
                      <Text style={themed($moreText)}>+{images.length - 4}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      )}

      <View style={$actions}>
        <Pressable style={$actionButton} onPress={onLike}>
          <Icon
            icon="heart"
            size={20}
            color={isLiked ? theme.colors.error : theme.colors.textDim}
          />
          <Text style={themed($actionText)}>{likeCount}</Text>
        </Pressable>

        <Pressable style={$actionButton} onPress={onComment}>
          <Icon icon="community" size={20} color={theme.colors.textDim} />
          <Text style={themed($actionText)}>{commentCount}</Text>
        </Pressable>

        <Pressable style={$actionButton} onPress={onShare}>
          <Icon icon="components" size={20} color={theme.colors.textDim} />
          <Text style={themed($actionText)}>{t("forum.share")}</Text>
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

const $date: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 11,
  marginTop: 2,
})

const $moreButton: ViewStyle = {
  padding: 4,
}

const $content: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 14,
  lineHeight: 22,
  marginTop: 10,
})

const $imagesContainer: ViewStyle = {
  marginTop: 10,
}

const $singleImage: ImageStyle = {
  borderRadius: 8,
  height: 200,
  width: "100%",
}

const $imagesGrid: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 4,
}

const $gridImageContainer: ViewStyle = {
  height: 100,
  position: "relative",
  width: "49%",
}

const $gridImage: ImageStyle = {
  borderRadius: 8,
  height: "100%",
  width: "100%",
}

const $moreOverlay: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.text + "80",
  borderRadius: 8,
  bottom: 0,
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
})

const $moreText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 20,
  fontWeight: "600",
})

const $actions: ViewStyle = {
  borderTopColor: "transparent",
  borderTopWidth: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 10,
  paddingTop: 10,
}

const $actionButton: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  padding: 8,
}

const $actionText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 13,
  marginLeft: 6,
})

const $pressed: ViewStyle = {
  opacity: 0.95,
}
