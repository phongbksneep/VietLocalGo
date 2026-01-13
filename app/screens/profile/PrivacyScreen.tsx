/**
 * PrivacyScreen - Privacy policy and settings
 */
import { FC, useState } from "react"
import { Pressable, ScrollView, Switch, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Icon, IconTypes } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type PrivacyScreenProps = NativeStackScreenProps<AppStackParamList, "Privacy">

export const PrivacyScreen: FC<PrivacyScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [shareLocation, setShareLocation] = useState(true)
  const [shareActivity, setShareActivity] = useState(false)
  const [personalizedAds, setPersonalizedAds] = useState(true)

  const privacySettings = [
    {
      id: "location",
      icon: "pin" as IconTypes,
      title: t("privacy.settings.location.title"),
      description: t("privacy.settings.location.description"),
      value: shareLocation,
      onToggle: setShareLocation,
    },
    {
      id: "activity",
      icon: "view" as IconTypes,
      title: t("privacy.settings.activity.title"),
      description: t("privacy.settings.activity.description"),
      value: shareActivity,
      onToggle: setShareActivity,
    },
    {
      id: "ads",
      icon: "components" as IconTypes,
      title: t("privacy.settings.ads.title"),
      description: t("privacy.settings.ads.description"),
      value: personalizedAds,
      onToggle: setPersonalizedAds,
    },
  ]

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">{t("privacy.title")}</Text>
        <View style={$spacer} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={$scrollContent}>
        {/* Privacy Settings */}
        <View style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {t("privacy.settingsTitle")}
          </Text>
          <View style={[$card, { backgroundColor: theme.colors.background }]}>
            {privacySettings.map((setting, index) => (
              <View
                key={setting.id}
                style={[
                  $settingItem,
                  index < privacySettings.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                  },
                ]}
              >
                <View style={[$iconContainer, { backgroundColor: theme.colors.palette.primary100 }]}>
                  <Icon icon={setting.icon} size={20} color={theme.colors.tint} />
                </View>
                <View style={$settingContent}>
                  <Text preset="bold" style={{ color: theme.colors.text }}>
                    {setting.title}
                  </Text>
                  <Text size="xs" style={{ color: theme.colors.textDim }}>
                    {setting.description}
                  </Text>
                </View>
                <Switch
                  value={setting.value}
                  onValueChange={setting.onToggle}
                  trackColor={{ false: theme.colors.border, true: theme.colors.tint }}
                  thumbColor="#FFFFFF"
                />
              </View>
            ))}
          </View>
        </View>

        {/* Privacy Policy */}
        <View style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {t("privacy.policyTitle")}
          </Text>
          <View style={[$card, { backgroundColor: theme.colors.background }]}>
            <View style={$policyContent}>
              <Text style={{ color: theme.colors.text, lineHeight: 22 }}>
                {t("privacy.policyContent")}
              </Text>
            </View>
          </View>
        </View>

        {/* Data Management */}
        <View style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {t("privacy.dataTitle")}
          </Text>
          <View style={[$card, { backgroundColor: theme.colors.background }]}>
            <Pressable style={$actionItem}>
              <Icon icon="components" size={20} color={theme.colors.tint} />
              <Text style={{ color: theme.colors.tint, flex: 1 }}>{t("privacy.downloadData")}</Text>
              <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
            </Pressable>
            <View style={[$divider, { backgroundColor: theme.colors.border }]} />
            <Pressable style={$actionItem}>
              <Icon icon="x" size={20} color={theme.colors.error} />
              <Text style={{ color: theme.colors.error, flex: 1 }}>{t("privacy.deleteData")}</Text>
              <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
            </Pressable>
          </View>
        </View>

        {/* Last Updated */}
        <Text style={[$lastUpdated, { color: theme.colors.textDim }]}>
          {t("privacy.lastUpdated")}: 01/01/2025
        </Text>
      </ScrollView>
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

const $scrollContent: ViewStyle = {
  paddingBottom: spacing.xl,
}

const $section: ViewStyle = {
  marginTop: spacing.md,
}

const $sectionTitle: TextStyle = {
  marginHorizontal: spacing.md,
  marginBottom: spacing.xs,
  textTransform: "uppercase",
}

const $card: ViewStyle = {
  marginHorizontal: spacing.md,
  borderRadius: 12,
  overflow: "hidden",
}

const $settingItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.md,
  gap: spacing.md,
}

const $iconContainer: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
}

const $settingContent: ViewStyle = {
  flex: 1,
  gap: 2,
}

const $policyContent: ViewStyle = {
  padding: spacing.md,
}

const $actionItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.md,
  gap: spacing.md,
}

const $divider: ViewStyle = {
  height: 1,
  marginHorizontal: spacing.md,
}

const $lastUpdated: TextStyle = {
  textAlign: "center",
  marginTop: spacing.lg,
  fontSize: 12,
}
