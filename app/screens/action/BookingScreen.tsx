import { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { Tour, tours } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type BookingScreenProps = NativeStackScreenProps<AppStackParamList, "Booking">

export const BookingScreen: FC<BookingScreenProps> = ({ navigation, route }) => {
  const { tourId } = route.params
  const { theme } = useAppTheme()

  const [tour, setTour] = useState<Tour | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState("")
  const [people, setPeople] = useState(2)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchTour = () => {
      const foundTour = tours.find((t) => t.id === tourId)
      setTour(foundTour || null)
      if (foundTour?.availableDates.length) {
        setSelectedDate(foundTour.availableDates[0])
      }
      setLoading(false)
    }
    fetchTour()
  }, [tourId])

  const isValid = selectedDate && name.trim() && phone.length >= 10

  const handleSubmit = async () => {
    if (!isValid || !tour) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // After successful booking go to booking history
    navigation.navigate("BookingHistory")
  }

  const totalPrice = tour ? tour.price * people : 0

  if (loading) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      </Screen>
    )
  }

  if (!tour) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <Icon icon="components" size={64} color={theme.colors.border} />
          <Text style={{ color: theme.colors.textDim }}>Không tìm thấy tour</Text>
        </View>
      </Screen>
    )
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View
        style={[
          $header,
          { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Đặt tour</Text>
        <View style={$spacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Tour Info */}
        <View style={[$tourCard, { backgroundColor: theme.colors.background }]}>
          <Image source={{ uri: tour.images[0] }} style={$tourImage} />
          <View style={$tourInfo}>
            <Text preset="bold" numberOfLines={2}>
              {tour.name}
            </Text>
            <View style={$tourMeta}>
              <Icon icon="view" size={14} color={theme.colors.textDim} />
              <Text size="xs" style={{ color: theme.colors.textDim }}>
                {tour.duration}
              </Text>
            </View>
          </View>
        </View>

        {/* Date Selection */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionTitle}>
            Chọn ngày khởi hành
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={$datesContainer}>
              {tour.availableDates.map((date) => {
                const isSelected = selectedDate === date
                return (
                  <Pressable
                    key={date}
                    style={[
                      $dateButton,
                      {
                        backgroundColor: isSelected
                          ? theme.colors.tint
                          : theme.colors.palette.neutral200,
                      },
                    ]}
                    onPress={() => setSelectedDate(date)}
                    testID={`date-${date}`}
                    accessibilityLabel={`date-${date}`}
                  >
                    <Text
                      size="xs"
                      style={isSelected ? $dateTextSelected : $dateTextDefault(theme)}
                    >
                      {date}
                    </Text>
                  </Pressable>
                )
              })}
            </View>
          </ScrollView>
        </View>

        {/* People */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionTitle}>
            Số người
          </Text>
          <View style={$peopleSelector}>
            <Pressable
              style={[$peopleButton, { backgroundColor: theme.colors.palette.neutral200 }]}
              onPress={() => setPeople(Math.max(tour.groupSize.min, people - 1))}
              testID="people-decrement"
              accessibilityLabel="people-decrement"
            >
              <Icon icon="caretLeft" size={18} color={theme.colors.text} />
            </Pressable>
            <Text preset="bold" style={$peopleCount}>
              {people}
            </Text>
            <Text
              testID="people-count"
              accessibilityLabel="people-count"
              preset="bold"
              style={$peopleCount}
            >
              {people}
            </Text>
            <Pressable
              style={[$peopleButton, { backgroundColor: theme.colors.palette.neutral200 }]}
              onPress={() => setPeople(Math.min(tour.groupSize.max, people + 1))}
              testID="people-increment"
              accessibilityLabel="people-increment"
            >
              <Icon icon="caretRight" size={18} color={theme.colors.text} />
            </Pressable>
          </View>
          <Text size="xs" style={$peopleHint(theme)}>
            Tối thiểu {tour.groupSize.min}, tối đa {tour.groupSize.max} người
          </Text>
        </View>

        {/* Contact Info */}
        <View style={$section}>
          <Text preset="formLabel" style={$sectionTitle}>
            Thông tin liên hệ
          </Text>
          <TextField
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            value={name}
            onChangeText={setName}
            containerStyle={$textField}
            testID="booking-name"
            accessibilityLabel="booking-name"
          />
          <TextField
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            containerStyle={$textField}
            testID="booking-phone"
            accessibilityLabel="booking-phone"
          />
        </View>

        {/* Price Summary */}
        <View style={[$summaryCard, { backgroundColor: theme.colors.palette.primary100 }]}>
          <Text preset="formLabel" style={$summaryTitle}>
            Tổng thanh toán
          </Text>
          <View style={$summaryRow}>
            <Text style={{ color: theme.colors.text }}>
              {tour.price.toLocaleString("vi-VN")}đ x {people} người
            </Text>
            <Text preset="bold" style={{ color: theme.colors.tint }}>
              {totalPrice.toLocaleString("vi-VN")}đ
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View
        style={[
          $bottomCTA,
          { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        ]}
      >
        <View style={$totalContainer}>
          <Text size="xs" style={{ color: theme.colors.textDim }}>
            Tổng cộng
          </Text>
          <Text preset="bold" style={[$totalPrice, { color: theme.colors.tint }]}>
            {totalPrice.toLocaleString("vi-VN")}đ
          </Text>
        </View>
        <Button
          preset="filled"
          text={isSubmitting ? "Đang xử lý..." : "Xác nhận đặt"}
          style={$submitButton}
          onPress={handleSubmit}
          testID="booking-submit-button"
          accessibilityLabel="booking-submit-button"
          disabled={!isValid || isSubmitting}
        />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.md,
}

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderBottomWidth: 1,
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
  padding: spacing.md,
  paddingBottom: 100,
}

const $tourCard: ViewStyle = {
  flexDirection: "row",
  borderRadius: 12,
  overflow: "hidden",
  marginBottom: spacing.lg,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 1,
}

const $tourImage: ImageStyle = {
  width: 100,
  height: 80,
}

const $tourInfo: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
  justifyContent: "center",
}

const $tourMeta: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
  marginTop: spacing.xxs,
}

const $section: ViewStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $datesContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
}

const $dateButton: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: 8,
}

const $peopleSelector: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.lg,
  marginBottom: spacing.xs,
}

const $peopleButton: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
}

const $peopleCount: TextStyle = {
  fontSize: 24,
  minWidth: 40,
  textAlign: "center",
}

const $textField: ViewStyle = {
  marginBottom: spacing.sm,
}

const $summaryCard: ViewStyle = {
  padding: spacing.md,
  borderRadius: 12,
}

const $summaryTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $summaryRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $bottomCTA: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: spacing.md,
  borderTopWidth: 1,
}

const $totalContainer: ViewStyle = {
  flex: 1,
}

const $totalPrice: TextStyle = {
  fontSize: 20,
}

const $submitButton: ViewStyle = {
  flex: 1,
  marginLeft: spacing.md,
}

const $dateTextSelected: TextStyle = {
  color: "#FFFFFF",
}

const $dateTextDefault = (theme: { colors: { text: string } }): TextStyle => ({
  color: theme.colors.text,
})

const $peopleHint = (theme: { colors: { textDim: string } }): TextStyle => ({
  color: theme.colors.textDim,
  textAlign: "center",
})
