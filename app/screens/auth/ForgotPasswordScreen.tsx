import { FC, useState } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type ForgotPasswordScreenProps = NativeStackScreenProps<AppStackParamList, "ForgotPassword">

export const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isValid = phone.length >= 10

  const handleSubmit = async () => {
    if (!isValid) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    navigation.navigate("OTPVerification", { phone, type: "forgot" })
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={$header}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
      </View>

      {/* Content */}
      <View style={$content}>
        <Text preset="heading" style={$title}>
          {t("auth.forgotPassword.title")}
        </Text>
        <Text style={[$subtitle, { color: theme.colors.textDim }]}>
          {t("auth.forgotPassword.subtitle")}
        </Text>

        <TextField
          label={t("auth.login.phoneLabel")}
          placeholder={t("auth.login.phonePlaceholder")}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          containerStyle={$textField}
        />

        <Button
          preset="filled"
          text={isSubmitting ? t("common.loading") : t("auth.forgotPassword.sendCode")}
          style={$submitButton}
          onPress={handleSubmit}
          disabled={!isValid || isSubmitting}
        />

        <Pressable style={$backToLogin} onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: theme.colors.tint }}>{t("auth.forgotPassword.backToLogin")}</Text>
        </Pressable>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $header: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $backButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $content: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xl,
}

const $title: TextStyle = {
  marginBottom: spacing.xs,
}

const $subtitle: TextStyle = {
  marginBottom: spacing.xl,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $submitButton: ViewStyle = {
  width: "100%",
}

const $backToLogin: ViewStyle = {
  alignItems: "center",
  marginTop: spacing.lg,
}
