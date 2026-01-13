/**
 * FeedbackScreen - Submit feedback
 */
import { FC, useState } from "react"
import { Alert, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
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

type FeedbackScreenProps = NativeStackScreenProps<AppStackParamList, "Feedback">

type FeedbackType = "bug" | "feature" | "improvement" | "other"

export const FeedbackScreen: FC<FeedbackScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [feedbackType, setFeedbackType] = useState<FeedbackType>("improvement")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const feedbackTypes = [
    { id: "bug" as FeedbackType, label: t("feedback.types.bug"), icon: "🐛" },
    { id: "feature" as FeedbackType, label: t("feedback.types.feature"), icon: "✨" },
    { id: "improvement" as FeedbackType, label: t("feedback.types.improvement"), icon: "💡" },
    { id: "other" as FeedbackType, label: t("feedback.types.other"), icon: "💬" },
  ]

  const isValid = title.trim().length >= 5 && description.trim().length >= 10

  const handleSubmit = async () => {
    if (!isValid) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)

    Alert.alert(t("feedback.successTitle"), t("feedback.successMessage"), [
      { text: t("common.ok"), onPress: () => navigation.goBack() },
    ])
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">{t("feedback.title")}</Text>
        <View style={$spacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Description */}
        <View style={$descriptionBox}>
          <Text style={{ color: theme.colors.textDim, lineHeight: 20 }}>
            {t("feedback.description")}
          </Text>
        </View>

        {/* Feedback Type */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionLabel}>
            {t("feedback.typeLabel")}
          </Text>
          <View style={$typeGrid}>
            {feedbackTypes.map((type) => (
              <Pressable
                key={type.id}
                style={[
                  $typeButton,
                  {
                    backgroundColor:
                      feedbackType === type.id
                        ? theme.colors.palette.primary100
                        : theme.colors.background,
                    borderColor:
                      feedbackType === type.id ? theme.colors.tint : theme.colors.border,
                  },
                ]}
                onPress={() => setFeedbackType(type.id)}
                testID={`feedback-type-${type.id}`}
              >
                <Text style={$typeIcon}>{type.icon}</Text>
                <Text
                  size="xs"
                  style={{
                    color: feedbackType === type.id ? theme.colors.tint : theme.colors.text,
                  }}
                >
                  {type.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Title */}
        <View style={$section}>
          <TextField
            label={t("feedback.titleLabel")}
            placeholder={t("feedback.titlePlaceholder")}
            value={title}
            onChangeText={setTitle}
            containerStyle={$textFieldContainer}
          />
        </View>

        {/* Description */}
        <View style={$section}>
          <TextField
            label={t("feedback.descriptionLabel")}
            placeholder={t("feedback.descriptionPlaceholder")}
            value={description}
            onChangeText={setDescription}
            multiline
            containerStyle={$textFieldContainer}
            inputWrapperStyle={$descriptionInputWrapper}
            style={$descriptionInput}
          />
        </View>

        {/* Email (Optional) */}
        <View style={$section}>
          <TextField
            label={t("feedback.emailLabel")}
            placeholder={t("feedback.emailPlaceholder")}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={$textFieldContainer}
          />
          <Text size="xs" style={[$helperText, { color: theme.colors.textDim }]}>
            {t("feedback.emailHelper")}
          </Text>
        </View>

        {/* Info */}
        <View style={[$infoBox, { backgroundColor: theme.colors.palette.neutral100 }]}>
          <Icon icon="components" size={18} color={theme.colors.textDim} />
          <Text size="sm" style={[$infoText, { color: theme.colors.textDim }]}>
            {t("feedback.info")}
          </Text>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View
        style={[
          $bottomCTA,
          { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        ]}
      >
        <Button
          preset="filled"
          text={isSubmitting ? t("feedback.submitting") : t("feedback.submit")}
          style={$submitButton}
          onPress={handleSubmit}
          disabled={!isValid || isSubmitting}
        />
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

const $scrollContent: ViewStyle = {
  paddingBottom: spacing.xl,
}

const $descriptionBox: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $section: ViewStyle = {
  paddingHorizontal: spacing.md,
  marginTop: spacing.md,
}

const $sectionLabel: TextStyle = {
  marginBottom: spacing.sm,
}

const $typeGrid: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: spacing.sm,
}

const $typeButton: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.md,
  borderRadius: 8,
  borderWidth: 1,
  gap: spacing.xs,
}

const $typeIcon: TextStyle = {
  fontSize: 16,
}

const $textFieldContainer: ViewStyle = {
  marginBottom: 0,
}

const $descriptionInputWrapper: ViewStyle = {
  minHeight: 120,
  alignItems: "flex-start",
}

const $descriptionInput: TextStyle = {
  minHeight: 100,
  textAlignVertical: "top",
}

const $helperText: TextStyle = {
  marginTop: spacing.xs,
}

const $infoBox: ViewStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
  padding: spacing.md,
  marginHorizontal: spacing.md,
  marginTop: spacing.lg,
  borderRadius: 8,
  gap: spacing.sm,
}

const $infoText: TextStyle = {
  flex: 1,
  lineHeight: 20,
}

const $bottomCTA: ViewStyle = {
  padding: spacing.md,
  borderTopWidth: 1,
}

const $submitButton: ViewStyle = {
  width: "100%",
}
