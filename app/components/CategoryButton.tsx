/**
 * CategoryButton - Button component for category selection
 * Max 200 lines per rule
 */
import { memo } from "react"
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from "react-native"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { Icon, IconTypes } from "./Icon"
import { Text } from "./Text"

export interface CategoryButtonProps {
  label: string
  icon?: IconTypes
  isSelected?: boolean
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  color?: string
}

export const CategoryButton = memo(function CategoryButton(props: CategoryButtonProps) {
  const { label, icon, isSelected = false, onPress, style, color } = props
  const { themed, theme } = useAppTheme()

  return (
    <Pressable
      style={({ pressed }) => [
        themed($container),
        isSelected && themed($selected),
        style,
        pressed && $pressed,
      ]}
      onPress={onPress}
    >
      {icon && (
        <View
          style={[
            themed($iconContainer),
            isSelected && themed($iconSelected),
            color ? { backgroundColor: color + "20" } : undefined,
          ]}
        >
          <Icon
            icon={icon}
            size={20}
            color={isSelected ? theme.colors.background : color || theme.colors.tint}
          />
        </View>
      )}
      <Text style={[themed($label), isSelected && themed($labelSelected)]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  )
})

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 12,
  borderWidth: 1,
  minWidth: 80,
  paddingHorizontal: 12,
  paddingVertical: 10,
})

const $selected: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.tint,
  borderColor: colors.tint,
})

const $iconContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.tint + "15",
  borderRadius: 20,
  height: 40,
  justifyContent: "center",
  marginBottom: 6,
  width: 40,
})

const $iconSelected: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background + "30",
})

const $label: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 12,
  fontWeight: "500",
  textAlign: "center",
})

const $labelSelected: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
})

const $pressed: ViewStyle = {
  opacity: 0.9,
  transform: [{ scale: 0.98 }],
}
