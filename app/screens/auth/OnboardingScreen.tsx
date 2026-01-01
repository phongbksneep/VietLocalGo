/**
 * OnboardingScreen - App introduction with swipeable slides
 * Max 200 lines per rule
 */
import { useRef, useState } from "react"
import {
  Dimensions,
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import type { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

interface OnboardingItem {
  id: string
  title: string
  description: string
  image: number
}

interface OnboardingScreenProps {
  onComplete?: () => void
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const { t } = useTranslation()
  const { themed } = useAppTheme()
  const flatListRef = useRef<FlatList>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, "Onboarding">>()

  const slides: OnboardingItem[] = [
    {
      id: "1",
      title: t("onboarding.slide1.title"),
      description: t("onboarding.slide1.description"),
      image: require("@assets/images/logo.png"),
    },
    {
      id: "2",
      title: t("onboarding.slide2.title"),
      description: t("onboarding.slide2.description"),
      image: require("@assets/images/logo.png"),
    },
    {
      id: "3",
      title: t("onboarding.slide3.title"),
      description: t("onboarding.slide3.description"),
      image: require("@assets/images/logo.png"),
    },
  ]

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 })
    } else {
      // Prefer navigation to Login so user can sign in after onboarding
      onComplete?.()
      navigation.replace("Login")
    }
  }

  const handleSkip = () => {
    onComplete?.()
    navigation.replace("Login")
  }

  const renderSlide = ({ item }: { item: OnboardingItem }) => (
    <View style={$slide}>
      <Image source={item.image} style={$slideImage} resizeMode="contain" />
      <Text style={themed($slideTitle)}>{item.title}</Text>
      <Text style={themed($slideDescription)}>{item.description}</Text>
    </View>
  )

  const renderPagination = () => (
    <View style={$pagination}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[themed($dot), index === currentIndex ? themed($dotActive) : themed($dotInactive)]}
        />
      ))}
    </View>
  )

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      <Pressable style={$skipButton} onPress={handleSkip}>
        <Text style={themed($skipText)}>{t("onboarding.skip")}</Text>
      </Pressable>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH)
          setCurrentIndex(index)
        }}
        keyExtractor={(item) => item.id}
      />

      {renderPagination()}

      <Pressable style={themed($nextButton)} onPress={handleNext}>
        <Text style={themed($nextText)}>
          {currentIndex === slides.length - 1 ? t("onboarding.getStarted") : t("onboarding.next")}
        </Text>
      </Pressable>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  flex: 1,
})

const $skipButton: ViewStyle = {
  alignSelf: "flex-end",
  padding: 16,
  paddingTop: 50,
}

const $skipText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 14,
})

const $slide: ViewStyle = {
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
  paddingHorizontal: 40,
  width: SCREEN_WIDTH,
}

const $slideImage: ImageStyle = {
  height: 250,
  marginBottom: 40,
  width: 250,
}

const $slideTitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 28,
  fontWeight: "700",
  marginBottom: 16,
  textAlign: "center",
})

const $slideDescription: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 16,
  lineHeight: 24,
  textAlign: "center",
})

const $pagination: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: 30,
}

const $dot: ThemedStyle<ViewStyle> = () => ({
  borderRadius: 4,
  height: 8,
  marginHorizontal: 4,
})

const $dotActive: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.tint,
  width: 24,
})

const $dotInactive: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.border,
  width: 8,
})

const $nextButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.tint,
  borderRadius: 12,
  marginBottom: 50,
  marginHorizontal: 24,
  paddingVertical: 16,
})

const $nextText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
  fontSize: 16,
  fontWeight: "600",
})
