/**
 * SearchBar - Search input component
 * Max 200 lines per rule
 */
import { memo } from "react"
import { Pressable, StyleProp, View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

import { Icon } from "./Icon"
import { TextField } from "./TextField"

export interface SearchBarProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  onSubmit?: () => void
  onFilter?: () => void
  showFilter?: boolean
  autoFocus?: boolean
  style?: StyleProp<ViewStyle>
}

export const SearchBar = memo(function SearchBar(props: SearchBarProps) {
  const {
    value,
    onChangeText,
    placeholder,
    onSubmit,
    onFilter,
    showFilter = false,
    autoFocus = false,
    style,
  } = props
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()

  return (
    <View style={[themed($container), style]}>
      <View style={themed($inputContainer)}>
        <Icon icon="components" size={18} color={theme.colors.textDim} />
        <TextField
          containerStyle={$textFieldContainer}
          inputWrapperStyle={$inputWrapper}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder || t("search.placeholder")}
          onSubmitEditing={onSubmit}
          returnKeyType="search"
          autoFocus={autoFocus}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {value.length > 0 && (
          <Pressable onPress={() => onChangeText("")} style={$clearButton}>
            <Icon icon="x" size={16} color={theme.colors.textDim} />
          </Pressable>
        )}
      </View>
      {showFilter && (
        <Pressable style={themed($filterButton)} onPress={onFilter}>
          <Icon icon="settings" size={20} color={theme.colors.tint} />
        </Pressable>
      )}
    </View>
  )
})

const $container: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
  flexDirection: "row",
})

const $inputContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 12,
  borderWidth: 1,
  flex: 1,
  flexDirection: "row",
  height: 44,
  paddingHorizontal: 12,
})

const $textFieldContainer: ViewStyle = {
  flex: 1,
  marginLeft: 8,
}

const $inputWrapper: ViewStyle = {
  backgroundColor: "transparent",
  borderWidth: 0,
}

const $clearButton: ViewStyle = {
  padding: 4,
}

const $filterButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.tint + "15",
  borderRadius: 12,
  height: 44,
  justifyContent: "center",
  marginLeft: 10,
  width: 44,
})
