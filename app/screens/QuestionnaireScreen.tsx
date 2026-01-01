import { FC, useState } from "react"
import { Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type QuestionnaireScreenProps = NativeStackScreenProps<AppStackParamList, "Questionnaire">

interface TravelType {
  id: string
  icon: string
  label: string
}

const TRAVEL_TYPES: TravelType[] = [
  { id: "heritage", icon: "🏛️", label: "Di tích lịch sử" },
  { id: "food", icon: "🍜", label: "Ẩm thực" },
  { id: "temple", icon: "⛩️", label: "Tâm linh" },
  { id: "craft", icon: "🌾", label: "Làng nghề" },
  { id: "festival", icon: "🎭", label: "Lễ hội" },
  { id: "beach", icon: "🏖️", label: "Biển" },
]

const TRAVEL_STYLES = [
  { id: "solo", label: "Một mình" },
  { id: "couple", label: "Cặp đôi" },
  { id: "family", label: "Gia đình" },
  { id: "group", label: "Nhóm bạn" },
]

const BUDGET_RANGES = [
  { id: "low", label: "Tiết kiệm", desc: "< 500K/ngày" },
  { id: "medium", label: "Vừa phải", desc: "500K - 1M/ngày" },
  { id: "high", label: "Thoải mái", desc: "> 1M/ngày" },
]

export const QuestionnaireScreen: FC<QuestionnaireScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [currentStep, setCurrentStep] = useState(0)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedStyle, setSelectedStyle] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")

  const totalSteps = 3
  const progress = ((currentStep + 1) / totalSteps) * 100

  const toggleType = (id: string) => {
    if (selectedTypes.includes(id)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== id))
    } else if (selectedTypes.length < 3) {
      setSelectedTypes([...selectedTypes, id])
    }
  }

  const canContinue = () => {
    switch (currentStep) {
      case 0:
        return selectedTypes.length > 0
      case 1:
        return selectedStyle !== ""
      case 2:
        return selectedBudget !== ""
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const budgetMap: Record<string, number> = { low: 500000, medium: 1000000, high: 2000000 }
      navigation.navigate("Recommendations", {
        preferences: {
          travelType: selectedStyle,
          interests: selectedTypes,
          budget: budgetMap[selectedBudget] || 1000000,
          duration: 1,
        },
      })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      navigation.goBack()
    }
  }

  const renderStep1 = () => (
    <View style={$stepContent}>
      <Text preset="heading" style={$stepTitle}>
        Bạn thích loại hình du lịch nào?
      </Text>
      <Text style={[$stepDesc, { color: theme.colors.textDim }]}>(Chọn tối đa 3)</Text>

      <View style={$optionsGrid}>
        {TRAVEL_TYPES.map((type) => {
          const isSelected = selectedTypes.includes(type.id)
          return (
            <Pressable
              key={type.id}
              onPress={() => toggleType(type.id)}
              style={[
                $optionCard,
                {
                  backgroundColor: isSelected
                    ? theme.colors.palette.primary100
                    : theme.colors.background,
                  borderColor: isSelected ? theme.colors.tint : theme.colors.border,
                },
              ]}
            >
              <Text style={$optionIcon}>{type.icon}</Text>
              <Text style={[$optionLabel, isSelected && { color: theme.colors.tint }]}>
                {type.label}
              </Text>
              {isSelected && (
                <View style={[$checkMark, { backgroundColor: theme.colors.tint }]}>
                  <Icon icon="check" size={12} color={theme.colors.palette.neutral100} />
                </View>
              )}
            </Pressable>
          )
        })}
      </View>
    </View>
  )

  const renderStep2 = () => (
    <View style={$stepContent}>
      <Text preset="heading" style={$stepTitle}>
        Bạn thường đi du lịch với ai?
      </Text>

      <View style={$optionsList}>
        {TRAVEL_STYLES.map((style) => {
          const isSelected = selectedStyle === style.id
          return (
            <Pressable
              key={style.id}
              onPress={() => setSelectedStyle(style.id)}
              style={[
                $listOption,
                {
                  backgroundColor: isSelected
                    ? theme.colors.palette.primary100
                    : theme.colors.background,
                  borderColor: isSelected ? theme.colors.tint : theme.colors.border,
                },
              ]}
            >
              <Text style={[$listOptionText, isSelected && { color: theme.colors.tint }]}>
                {style.label}
              </Text>
              {isSelected && <Icon icon="check" size={20} color={theme.colors.tint} />}
            </Pressable>
          )
        })}
      </View>
    </View>
  )

  const renderStep3 = () => (
    <View style={$stepContent}>
      <Text preset="heading" style={$stepTitle}>
        Ngân sách du lịch của bạn?
      </Text>

      <View style={$optionsList}>
        {BUDGET_RANGES.map((budget) => {
          const isSelected = selectedBudget === budget.id
          return (
            <Pressable
              key={budget.id}
              onPress={() => setSelectedBudget(budget.id)}
              style={[
                $listOption,
                {
                  backgroundColor: isSelected
                    ? theme.colors.palette.primary100
                    : theme.colors.background,
                  borderColor: isSelected ? theme.colors.tint : theme.colors.border,
                },
              ]}
            >
              <View>
                <Text style={[$listOptionText, isSelected && { color: theme.colors.tint }]}>
                  {budget.label}
                </Text>
                <Text style={[$budgetDesc, { color: theme.colors.textDim }]}>{budget.desc}</Text>
              </View>
              {isSelected && <Icon icon="check" size={20} color={theme.colors.tint} />}
            </Pressable>
          )
        })}
      </View>
    </View>
  )

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={handleBack} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="subheading">Khảo sát sở thích</Text>
        <View style={$spacer} />
      </View>

      {/* Progress Bar */}
      <View style={$progressContainer}>
        <Text style={[$progressText, { color: theme.colors.textDim }]}>
          Bước {currentStep + 1}/{totalSteps}
        </Text>
        <View style={[$progressBar, { backgroundColor: theme.colors.border }]}>
          <View
            style={[$progressFill, { width: `${progress}%`, backgroundColor: theme.colors.tint }]}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={$scrollContent}>
        {currentStep === 0 && renderStep1()}
        {currentStep === 1 && renderStep2()}
        {currentStep === 2 && renderStep3()}
      </ScrollView>

      {/* Bottom Button */}
      <View style={[$bottomBar, { backgroundColor: theme.colors.background }]}>
        <Button
          text={currentStep === totalSteps - 1 ? "Hoàn thành" : "Tiếp tục"}
          preset="filled"
          onPress={handleNext}
          disabled={!canContinue()}
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

const $progressContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.sm,
}

const $progressText: TextStyle = {
  fontSize: 12,
  marginBottom: spacing.xs,
}

const $progressBar: ViewStyle = {
  height: 4,
  borderRadius: 2,
  overflow: "hidden",
}

const $progressFill: ViewStyle = {
  height: "100%",
  borderRadius: 2,
}

const $scrollContent: ViewStyle = {
  flexGrow: 1,
  padding: spacing.lg,
}

const $stepContent: ViewStyle = {
  flex: 1,
}

const $stepTitle: TextStyle = {
  marginBottom: spacing.xs,
}

const $stepDesc: TextStyle = {
  fontSize: 14,
  marginBottom: spacing.lg,
}

const $optionsGrid: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: spacing.sm,
}

const $optionCard: ViewStyle = {
  width: "48%",
  padding: spacing.md,
  borderRadius: 12,
  borderWidth: 2,
  alignItems: "center",
  position: "relative",
}

const $optionIcon: TextStyle = {
  fontSize: 32,
  marginBottom: spacing.xs,
}

const $optionLabel: TextStyle = {
  fontSize: 14,
  fontWeight: "500",
  textAlign: "center",
}

const $checkMark: ViewStyle = {
  position: "absolute",
  top: 8,
  right: 8,
  width: 20,
  height: 20,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
}

const $optionsList: ViewStyle = {
  gap: spacing.sm,
  marginTop: spacing.md,
}

const $listOption: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: spacing.md,
  borderRadius: 12,
  borderWidth: 2,
}

const $listOptionText: TextStyle = {
  fontSize: 16,
  fontWeight: "500",
}

const $budgetDesc: TextStyle = {
  fontSize: 12,
  marginTop: spacing.xxs,
}

const $bottomBar: ViewStyle = {
  padding: spacing.md,
  borderTopWidth: 1,
  borderTopColor: "#E0E0E0",
}
