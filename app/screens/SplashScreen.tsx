/**
 * SplashScreen - App launch screen with branding
 * Max 200 lines per rule
 */
import { useEffect } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

interface SplashScreenProps {
  onFinish?: () => void
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const { themed } = useAppTheme()

  const logoScale = useSharedValue(0)
  const logoOpacity = useSharedValue(0)
  const textOpacity = useSharedValue(0)

  useEffect(() => {
    // Logo animation
    logoScale.value = withSequence(
      withSpring(1.2, { damping: 8, stiffness: 100 }),
      withSpring(1, { damping: 8, stiffness: 100 }),
    )
    logoOpacity.value = withTiming(1, { duration: 500 })

    // Text animation with delay
    textOpacity.value = withDelay(400, withTiming(1, { duration: 500 }))

    // Navigate after animation
    const timer = setTimeout(() => {
      onFinish?.()
    }, 2500)

    return () => clearTimeout(timer)
  }, [logoOpacity, logoScale, textOpacity, onFinish])

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }))

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }))

  return (
    <View style={themed($container)}>
      <Animated.View style={[$logoContainer, logoAnimatedStyle]}>
        <Image source={require("@assets/images/logo.png")} style={$logo} resizeMode="contain" />
      </Animated.View>

      <Animated.View style={[$textContainer, textAnimatedStyle]}>
        <Animated.Text style={themed($title)}>VietLocalGo</Animated.Text>
        <Animated.Text style={themed($subtitle)}>Khám phá Việt Nam</Animated.Text>
      </Animated.View>
    </View>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  flex: 1,
  justifyContent: "center",
})

const $logoContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $logo: ImageStyle = {
  height: 120,
  width: 120,
}

const $textContainer: ViewStyle = {
  alignItems: "center",
  marginTop: 24,
}

const $title: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontSize: 32,
  fontWeight: "700",
})

const $subtitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 16,
  marginTop: 8,
})
