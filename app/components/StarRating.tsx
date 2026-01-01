import { FC } from "react"
import { Pressable, View, ViewStyle } from "react-native"

import { spacing } from "@/theme/spacing"

import { Icon } from "./Icon"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: number
  color?: string
  emptyColor?: string
  interactive?: boolean
  onRatingChange?: (rating: number) => void
  style?: ViewStyle
}

/**
 * StarRating component for displaying and selecting ratings
 * @param rating - Current rating value (1-5)
 * @param maxRating - Maximum rating value (default: 5)
 * @param size - Size of each star (default: 20)
 * @param color - Color of filled stars (default: #FFB800)
 * @param emptyColor - Color of empty stars (default: #E0E0E0)
 * @param interactive - Whether user can tap to change rating
 * @param onRatingChange - Callback when rating changes (interactive mode)
 */
export const StarRating: FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  color = "#FFB800",
  emptyColor = "#E0E0E0",
  interactive = false,
  onRatingChange,
  style,
}) => {
  const handlePress = (index: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(index + 1)
    }
  }

  const renderStar = (index: number) => {
    const filled = index < Math.floor(rating)
    const halfFilled = index === Math.floor(rating) && rating % 1 >= 0.5

    const starColor = filled || halfFilled ? color : emptyColor

    const StarComponent = <Icon icon="heart" size={size} color={starColor} />

    if (interactive) {
      return (
        <Pressable key={index} onPress={() => handlePress(index)} style={$starButton}>
          {StarComponent}
        </Pressable>
      )
    }

    return <View key={index}>{StarComponent}</View>
  }

  return (
    <View style={[$container, style]}>
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $starButton: ViewStyle = {
  padding: spacing.xxs,
}
