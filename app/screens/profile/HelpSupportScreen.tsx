/**
 * HelpSupportScreen - Help & Support center
 */
import { FC, useState } from "react"
import { Linking, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Icon, IconTypes } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type HelpSupportScreenProps = NativeStackScreenProps<AppStackParamList, "HelpSupport">

interface FAQItem {
  id: string
  question: string
  answer: string
}

export const HelpSupportScreen: FC<HelpSupportScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { t } = useTranslation()
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: t("helpSupport.faq.booking.question"),
      answer: t("helpSupport.faq.booking.answer"),
    },
    {
      id: "2",
      question: t("helpSupport.faq.cancel.question"),
      answer: t("helpSupport.faq.cancel.answer"),
    },
    {
      id: "3",
      question: t("helpSupport.faq.payment.question"),
      answer: t("helpSupport.faq.payment.answer"),
    },
    {
      id: "4",
      question: t("helpSupport.faq.guide.question"),
      answer: t("helpSupport.faq.guide.answer"),
    },
  ]

  const contactOptions = [
    {
      id: "phone",
      icon: "components" as IconTypes,
      title: t("helpSupport.contact.phone.title"),
      subtitle: "1900 xxxx xx",
      action: () => Linking.openURL("tel:1900000000"),
    },
    {
      id: "email",
      icon: "components" as IconTypes,
      title: t("helpSupport.contact.email.title"),
      subtitle: "support@vietlocalgo.com",
      action: () => Linking.openURL("mailto:support@vietlocalgo.com"),
    },
    {
      id: "chat",
      icon: "components" as IconTypes,
      title: t("helpSupport.contact.chat.title"),
      subtitle: t("helpSupport.contact.chat.subtitle"),
      action: () => navigation.navigate("Chat", { recipientId: "support", recipientName: "Support" }),
    },
  ]

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">{t("helpSupport.title")}</Text>
        <View style={$spacer} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={$scrollContent}>
        {/* Contact Options */}
        <View style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {t("helpSupport.contactTitle")}
          </Text>
          <View style={[$card, { backgroundColor: theme.colors.background }]}>
            {contactOptions.map((option, index) => (
              <Pressable
                key={option.id}
                style={[
                  $contactItem,
                  index < contactOptions.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                  },
                ]}
                onPress={option.action}
                testID={`contact-${option.id}`}
              >
                <View style={[$iconContainer, { backgroundColor: theme.colors.palette.primary100 }]}>
                  <Icon icon={option.icon} size={20} color={theme.colors.tint} />
                </View>
                <View style={$contactContent}>
                  <Text preset="bold" style={{ color: theme.colors.text }}>
                    {option.title}
                  </Text>
                  <Text size="xs" style={{ color: theme.colors.textDim }}>
                    {option.subtitle}
                  </Text>
                </View>
                <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
              </Pressable>
            ))}
          </View>
        </View>

        {/* FAQ Section */}
        <View style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {t("helpSupport.faqTitle")}
          </Text>
          <View style={[$card, { backgroundColor: theme.colors.background }]}>
            {faqItems.map((item, index) => (
              <View
                key={item.id}
                style={[
                  index < faqItems.length - 1 && {
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                  },
                ]}
              >
                <Pressable
                  style={$faqQuestion}
                  onPress={() => toggleFAQ(item.id)}
                  testID={`faq-${item.id}`}
                >
                  <Text style={[$questionText, { color: theme.colors.text }]}>{item.question}</Text>
                  <Icon
                    icon={expandedFAQ === item.id ? "caretRight" : "caretRight"}
                    size={18}
                    color={theme.colors.textDim}
                    style={{ transform: [{ rotate: expandedFAQ === item.id ? "90deg" : "0deg" }] }}
                  />
                </Pressable>
                {expandedFAQ === item.id && (
                  <View style={[$faqAnswer, { backgroundColor: theme.colors.palette.neutral100 }]}>
                    <Text style={{ color: theme.colors.textDim, lineHeight: 20 }}>{item.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Quick Links */}
        <View style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {t("helpSupport.quickLinks")}
          </Text>
          <View style={[$card, { backgroundColor: theme.colors.background }]}>
            <Pressable
              style={$linkItem}
              onPress={() => navigation.navigate("Privacy" as never)}
            >
              <Icon icon="lock" size={20} color={theme.colors.tint} />
              <Text style={{ color: theme.colors.text, flex: 1 }}>
                {t("helpSupport.links.privacy")}
              </Text>
              <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
            </Pressable>
            <View style={[$divider, { backgroundColor: theme.colors.border }]} />
            <Pressable
              style={$linkItem}
              onPress={() => Linking.openURL("https://vietlocalgo.com/terms")}
            >
              <Icon icon="components" size={20} color={theme.colors.tint} />
              <Text style={{ color: theme.colors.text, flex: 1 }}>
                {t("helpSupport.links.terms")}
              </Text>
              <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
            </Pressable>
          </View>
        </View>
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

const $contactItem: ViewStyle = {
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

const $contactContent: ViewStyle = {
  flex: 1,
  gap: 2,
}

const $faqQuestion: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.md,
  gap: spacing.md,
}

const $questionText: TextStyle = {
  flex: 1,
  fontWeight: "600",
}

const $faqAnswer: ViewStyle = {
  padding: spacing.md,
  paddingTop: 0,
  marginHorizontal: spacing.sm,
  marginBottom: spacing.sm,
  borderRadius: 8,
}

const $linkItem: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.md,
  gap: spacing.md,
}

const $divider: ViewStyle = {
  height: 1,
  marginHorizontal: spacing.md,
}
