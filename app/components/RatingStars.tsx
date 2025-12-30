/**
 * RatingStars - Component for displaying/selecting star ratings
 * Max 200 lines per rule
 */
import { memo } from "react"
import { Pressable, StyleProp, View, ViewStyle } from "react-native"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { Icon } from "./Icon"

export interface RatingStarsProps {
  rating: number
  maxRating?: number
  size?: number
  editable?: boolean
  onRatingChange?: (rating: number) => void
  style?: StyleProp<ViewStyle>
}

export const RatingStars = memo(function RatingStars(props: RatingStarsProps) {
  const { rating, maxRating = 5, size = 16, editable = false, onRatingChange, style } = props
  const { themed, theme } = useAppTheme()

  const handlePress = (index: number) => {
    if (editable && onRatingChange) {
      onRatingChange(index + 1)
    }
  }

  const renderStar = (index: number) => {
    const filled = index < Math.floor(rating)
    const halfFilled = !filled && index < rating && rating % 1 !== 0

    const StarWrapper = editable ? Pressable : View

    return (
      <StarWrapper
        key={index}
        onPress={editable ? () => handlePress(index) : undefined}
        style={$starContainer}
      >
        <Icon
          icon="heart"
          size={size}
          color={filled || halfFilled ? theme.colors.tint : theme.colors.border}
        />
      </StarWrapper>
    )
  }

  return (
    <View style={[themed($container), style]}>
      {Array.from({ length: maxRating }, (_, i) => renderStar(i))}
    </View>
  )
})

const $container: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
  flexDirection: "row",
})

const $starContainer: ViewStyle = {
  marginRight: 2,
}
