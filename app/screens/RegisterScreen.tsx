/**
 * RegisterScreen - User registration screen
 * Max 200 lines per rule
 */
import { useState } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

interface RegisterScreenProps {
  onRegister?: () => void
  onLogin?: () => void
  onBack?: () => void
}

export function RegisterScreen({ onRegister, onLogin, onBack }: RegisterScreenProps) {
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async () => {
    setIsLoading(true)
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false)
      onRegister?.()
    }, 1000)
  }

  const isValid = fullName && email && password && password === confirmPassword

  return (
    <Screen preset="auto" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      <Pressable onPress={onBack} style={$backButton}>
        <Icon icon="back" size={24} color={theme.colors.text} />
      </Pressable>

      <View style={$header}>
        <Text style={themed($title)}>{t("auth.createAccount")}</Text>
        <Text style={themed($subtitle)}>{t("auth.registerDescription")}</Text>
      </View>

      <View style={$form}>
        <TextField
          label={t("auth.fullName")}
          value={fullName}
          onChangeText={setFullName}
          placeholder={t("auth.fullNamePlaceholder")}
          autoCapitalize="words"
        />

        <TextField
          label={t("auth.email")}
          value={email}
          onChangeText={setEmail}
          placeholder={t("auth.emailPlaceholder")}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextField
          label={t("auth.password")}
          value={password}
          onChangeText={setPassword}
          placeholder={t("auth.passwordPlaceholder")}
          secureTextEntry={!showPassword}
          RightAccessory={() => (
            <Pressable onPress={() => setShowPassword(!showPassword)} style={$eyeButton}>
              <Icon
                icon={showPassword ? "view" : "hidden"}
                size={20}
                color={theme.colors.textDim}
              />
            </Pressable>
          )}
        />

        <TextField
          label={t("auth.confirmPassword")}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={t("auth.confirmPasswordPlaceholder")}
          secureTextEntry={!showPassword}
        />

        <Button
          text={t("auth.register")}
          preset="filled"
          onPress={handleRegister}
          style={$registerButton}
          disabled={isLoading || !isValid}
        />
      </View>

      <Text style={themed($termsText)}>
        {t("auth.agreeToTerms")} <Text style={themed($linkText)}>{t("auth.termsOfService")}</Text>{" "}
        {t("common.and")} <Text style={themed($linkText)}>{t("auth.privacyPolicy")}</Text>
      </Text>

      <View style={$footer}>
        <Text style={themed($footerText)}>{t("auth.haveAccount")}</Text>
        <Pressable onPress={onLogin}>
          <Text style={themed($loginText)}>{t("auth.loginNow")}</Text>
        </Pressable>
      </View>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  flex: 1,
  padding: 24,
})

const $backButton: ViewStyle = {
  marginTop: 8,
  padding: 4,
  width: 40,
}

const $header: ViewStyle = {
  marginBottom: 32,
  marginTop: 16,
}

const $title: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 28,
  fontWeight: "700",
  marginBottom: 8,
})

const $subtitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 16,
})

const $form: ViewStyle = {
  gap: 16,
}

const $eyeButton: ViewStyle = {
  alignItems: "center",
  height: "100%",
  justifyContent: "center",
  paddingHorizontal: 12,
}

const $registerButton: ViewStyle = {
  marginTop: 8,
}

const $termsText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 13,
  lineHeight: 20,
  marginTop: 24,
  textAlign: "center",
})

const $linkText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
})

const $footer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 32,
}

const $footerText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 14,
})

const $loginText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontSize: 14,
  fontWeight: "600",
  marginLeft: 4,
})
