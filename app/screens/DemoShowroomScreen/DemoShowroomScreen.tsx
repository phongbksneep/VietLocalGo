import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

export const DemoShowroomScreen: FC = function DemoShowroomScreen() {
  const { themed } = useAppTheme()

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)}>
      <View>
        <Text preset="heading">Demo screens removed</Text>
        <Text>These screens were internal demos and have been removed.</Text>
      </View>
    </Screen>
  )
}
const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  padding: 24,
})
