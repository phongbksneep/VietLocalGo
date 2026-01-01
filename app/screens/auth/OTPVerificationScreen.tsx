import { FC, useCallback, useEffect, useRef, useState } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type OTPVerificationScreenProps = NativeStackScreenProps<AppStackParamList, "OTPVerification">

type TextFieldRef = React.ElementRef<typeof TextField>

const OTP_LENGTH = 6

export const OTPVerificationScreen: FC<OTPVerificationScreenProps> = ({ navigation, route }) => {
  const { phone, type } = route.params
  const { theme } = useAppTheme()

  const [otp, setOtp] = useState("")
  const [countdown, setCountdown] = useState(60)
  const [isVerifying, setIsVerifying] = useState(false)
  const inputRef = useRef<TextFieldRef>(null)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [countdown])

  const handleOtpChange = useCallback((value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "")
    if (numericValue.length <= OTP_LENGTH) {
      setOtp(numericValue)
    }
  }, [])

  const handleResend = useCallback(() => {
    setCountdown(60)
    setOtp("")
    inputRef.current?.focus()
  }, [])

  const handleVerify = useCallback(async () => {
    if (otp.length !== OTP_LENGTH) return

    setIsVerifying(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsVerifying(false)

    if (type === "forgot") {
      navigation.navigate("Login")
    } else {
      navigation.navigate("Main", { screen: "Home" })
    }
  }, [otp, type, navigation])

  const isValid = otp.length === OTP_LENGTH

  const renderOtpBoxes = () => {
    const boxes = []
    for (let i = 0; i < OTP_LENGTH; i++) {
      const digit = otp[i] || ""
      const isFilled = digit !== ""
      boxes.push(
        <View
          key={i}
          style={[
            $otpBox,
            {
              borderColor: isFilled ? theme.colors.tint : theme.colors.border,
              backgroundColor: theme.colors.background,
            },
          ]}
        >
          <Text preset="bold" size="xxl">
            {digit}
          </Text>
        </View>,
      )
    }
    return boxes
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
          Xác minh OTP
        </Text>
        <Text style={[$subtitle, { color: theme.colors.textDim }]}>
          Nhập mã 6 số đã gửi đến {phone}
        </Text>

        {/* OTP Display Boxes */}
        <Pressable style={$otpContainer} onPress={() => inputRef.current?.focus()}>
          {renderOtpBoxes()}
        </Pressable>

        {/* Hidden TextField for input */}
        <TextField
          ref={inputRef}
          value={otp}
          onChangeText={handleOtpChange}
          keyboardType="number-pad"
          maxLength={OTP_LENGTH}
          autoFocus
          containerStyle={$hiddenInput}
          inputWrapperStyle={$hiddenInput}
        />

        {/* Countdown */}
        <View style={$resendContainer}>
          {countdown > 0 ? (
            <Text style={{ color: theme.colors.textDim }}>Gửi lại mã sau {countdown}s</Text>
          ) : (
            <Pressable onPress={handleResend}>
              <Text style={{ color: theme.colors.tint }}>Gửi lại mã</Text>
            </Pressable>
          )}
        </View>

        <Button
          preset="filled"
          text={isVerifying ? "Đang xác minh..." : "Xác minh"}
          style={$submitButton}
          onPress={handleVerify}
          disabled={!isValid || isVerifying}
        />
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
  alignItems: "center",
}

const $title: TextStyle = {
  marginBottom: spacing.xs,
}

const $subtitle: TextStyle = {
  marginBottom: spacing.xl,
  textAlign: "center",
}

const $otpContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  gap: spacing.sm,
  marginBottom: spacing.lg,
}

const $otpBox: ViewStyle = {
  width: 48,
  height: 56,
  borderWidth: 2,
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
}

const $hiddenInput: ViewStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  opacity: 0,
}

const $resendContainer: ViewStyle = {
  marginBottom: spacing.xl,
}

const $submitButton: ViewStyle = {
  width: "100%",
}
