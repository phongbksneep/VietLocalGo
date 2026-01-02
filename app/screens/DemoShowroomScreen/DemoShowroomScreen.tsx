import { FC } from "react"
import { View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

export const DemoShowroomScreen: FC = function DemoShowroomScreen() {
  const { themed } = useAppTheme()
  const { t } = useTranslation()

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)}>
      <View>
        <Text preset="heading">{t("demoShowroomScreen.removedTitle")}</Text>
        <Text>{t("demoShowroomScreen.removedBody")}</Text>
      </View>
    </Screen>
  )
}
const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  padding: 24,
})
