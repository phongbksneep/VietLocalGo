import { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { tours } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type BookingHistoryScreenProps = NativeStackScreenProps<AppStackParamList, "BookingHistory">

interface Booking {
  id: string
  tourId: string
  tourName: string
  tourImage: string
  date: string
  people: number
  totalPrice: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: string
}

const mockBookings: Booking[] = [
  {
    id: "booking-1",
    tourId: "tour-phu-day-co-le",
    tourName: "Tour Phủ Dầy - Chùa Cổ Lễ",
    tourImage: "https://picsum.photos/seed/booking1/400/300",
    date: "2025-02-15",
    people: 2,
    totalPrice: 1000000,
    status: "confirmed",
    createdAt: "2025-01-20",
  },
  {
    id: "booking-2",
    tourId: "tour-lang-nghe",
    tourName: "Tour làng nghề truyền thống",
    tourImage: "https://picsum.photos/seed/booking2/400/300",
    date: "2025-01-10",
    people: 4,
    totalPrice: 1600000,
    status: "completed",
    createdAt: "2025-01-05",
  },
  {
    id: "booking-3",
    tourId: "tour-bien",
    tourName: "Tour biển Quất Lâm",
    tourImage: "https://picsum.photos/seed/booking3/400/300",
    date: "2025-01-25",
    people: 3,
    totalPrice: 1200000,
    status: "pending",
    createdAt: "2025-01-22",
  },
  {
    id: "booking-4",
    tourId: "tour-am-thuc",
    tourName: "Tour ẩm thực Nam Định",
    tourImage: "https://picsum.photos/seed/booking4/400/300",
    date: "2024-12-20",
    people: 2,
    totalPrice: 700000,
    status: "cancelled",
    createdAt: "2024-12-15",
  },
]

type TabType = "upcoming" | "completed" | "cancelled"

export const BookingHistoryScreen: FC<BookingHistoryScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [activeTab, setActiveTab] = useState<TabType>("upcoming")
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = () => {
      // Simulate loading
      setTimeout(() => {
        setBookings(mockBookings)
        setLoading(false)
      }, 500)
    }
    fetchBookings()
  }, [])

  const getFilteredBookings = () => {
    switch (activeTab) {
      case "upcoming":
        return bookings.filter((b) => b.status === "pending" || b.status === "confirmed")
      case "completed":
        return bookings.filter((b) => b.status === "completed")
      case "cancelled":
        return bookings.filter((b) => b.status === "cancelled")
    }
  }

  const getStatusColor = (status: Booking["status"]) => {
    switch (status) {
      case "pending":
        return "#FF9800" // warning
      case "confirmed":
        return theme.colors.palette.primary500
      case "completed":
        return "#4CAF50" // success
      case "cancelled":
        return theme.colors.error
    }
  }

  const getStatusLabel = (status: Booking["status"]) => {
    switch (status) {
      case "pending":
        return "Chờ xác nhận"
      case "confirmed":
        return "Đã xác nhận"
      case "completed":
        return "Hoàn thành"
      case "cancelled":
        return "Đã hủy"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const handleBookingPress = (booking: Booking) => {
    const tour = tours.find((t) => t.id === booking.tourId)
    if (tour) {
      navigation.navigate("TourDetails", { tourId: booking.tourId })
    }
  }

  const renderBookingCard = ({ item }: { item: Booking }) => (
    <Pressable
      style={[$bookingCard, { backgroundColor: theme.colors.background }]}
      onPress={() => handleBookingPress(item)}
    >
      <Image source={{ uri: item.tourImage }} style={$tourImage} />
      <View style={$cardContent}>
        <View style={$cardHeader}>
          <Text preset="bold" numberOfLines={1} style={$tourName}>
            {item.tourName}
          </Text>
          <View style={[$statusBadge, { backgroundColor: getStatusColor(item.status) + "20" }]}>
            <Text size="xxs" style={{ color: getStatusColor(item.status) }}>
              {getStatusLabel(item.status)}
            </Text>
          </View>
        </View>

        <View style={$cardDetails}>
          <View style={$detailRow}>
            <Icon icon="view" size={14} color={theme.colors.textDim} />
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {formatDate(item.date)}
            </Text>
          </View>
          <View style={$detailRow}>
            <Icon icon="community" size={14} color={theme.colors.textDim} />
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {item.people} người
            </Text>
          </View>
        </View>

        <View style={$cardFooter}>
          <Text preset="bold" style={{ color: theme.colors.tint }}>
            {item.totalPrice.toLocaleString("vi-VN")}đ
          </Text>
          <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
        </View>
      </View>
    </Pressable>
  )

  const filteredBookings = getFilteredBookings()

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Lịch sử đặt tour</Text>
        <View style={$spacer} />
      </View>

      {/* Tabs */}
      <View style={[$tabsContainer, { backgroundColor: theme.colors.background }]}>
        {(["upcoming", "completed", "cancelled"] as TabType[]).map((tab) => {
          const labels = { upcoming: "Sắp tới", completed: "Hoàn thành", cancelled: "Đã hủy" }
          const isActive = activeTab === tab
          return (
            <Pressable
              key={tab}
              style={[
                $tabButton,
                isActive && { borderBottomColor: theme.colors.tint, borderBottomWidth: 2 },
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                preset={isActive ? "bold" : "default"}
                style={{ color: isActive ? theme.colors.tint : theme.colors.textDim }}
              >
                {labels[tab]}
              </Text>
            </Pressable>
          )
        })}
      </View>

      {loading ? (
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      ) : (
        <FlatList
          data={filteredBookings}
          renderItem={renderBookingCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={$listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="components" size={64} color={theme.colors.border} />
              <Text style={{ color: theme.colors.textDim }}>Không có đặt tour nào</Text>
            </View>
          }
        />
      )}
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

const $tabsContainer: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing.md,
}

const $tabButton: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.sm,
  alignItems: "center",
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $listContent: ViewStyle = {
  padding: spacing.md,
  gap: spacing.md,
}

const $bookingCard: ViewStyle = {
  flexDirection: "row",
  borderRadius: 12,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
}

const $tourImage: ImageStyle = {
  width: 100,
  height: 100,
}

const $cardContent: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
  justifyContent: "space-between",
}

const $cardHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: spacing.xs,
}

const $tourName: TextStyle = {
  flex: 1,
}

const $statusBadge: ViewStyle = {
  paddingHorizontal: spacing.xs,
  paddingVertical: 2,
  borderRadius: 4,
}

const $cardDetails: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
}

const $detailRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $cardFooter: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $emptyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing.xxxl,
  gap: spacing.md,
}
