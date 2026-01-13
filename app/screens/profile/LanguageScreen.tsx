/**
 * LanguageScreen - Change app language
 */
import { FC, useState } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type LanguageScreenProps = NativeStackScreenProps<AppStackParamList, "Language">

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
]

export const LanguageScreen: FC<LanguageScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "vi")

  const handleSelectLanguage = async (code: string) => {
    setSelectedLanguage(code)
    await i18n.changeLanguage(code)
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">{t("language.title")}</Text>
        <View style={$spacer} />
      </View>

      {/* Description */}
      <View style={$description}>
        <Text style={{ color: theme.colors.textDim }}>{t("language.description")}</Text>
      </View>

      {/* Language List */}
      <View style={[$languageList, { backgroundColor: theme.colors.background }]}>
        {languages.map((lang, index) => (
          <Pressable
            key={lang.code}
            style={[
              $languageItem,
              index < languages.length - 1 && {
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.border,
              },
            ]}
            onPress={() => handleSelectLanguage(lang.code)}
            testID={`language-${lang.code}`}
            accessibilityLabel={`language-${lang.code}`}
          >
            <Text style={$flag}>{lang.flag}</Text>
            <View style={$languageInfo}>
              <Text preset="bold" style={{ color: theme.colors.text }}>
                {lang.nativeName}
              </Text>
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {lang.name}
              </Text>
            </View>
            {selectedLanguage === lang.code && (
              <Icon icon="check" size={22} color={theme.colors.tint} />
            )}
          </Pressable>
        ))}
      </View>

      {/* Info */}
      <View style={$infoBox}>
        <Icon icon="components" size={18} color={theme.colors.textDim} />
        <Text size="sm" style={[$infoText, { color: theme.colors.textDim }]}>
          {t("language.info")}
        </Text>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $backButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $spacer: ViewStyle = {
  width: 40,
}

const $description: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $languageList: ViewStyle = {
  marginHorizontal: spacing.md,
  borderRadius: 12,
  overflow: "hidden",
}

const $languageItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.md,
  gap: spacing.md,
}

const $flag: TextStyle = {
  fontSize: 28,
}

const $languageInfo: ViewStyle = {
  flex: 1,
}

const $infoBox: ViewStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
  padding: spacing.md,
  marginHorizontal: spacing.md,
  marginTop: spacing.lg,
  gap: spacing.sm,
}

const $infoText: TextStyle = {
  flex: 1,
  lineHeight: 20,
}
