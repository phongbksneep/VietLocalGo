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
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type NotificationsScreenProps = NativeStackScreenProps<AppStackParamList, "Notifications">

interface Notification {
  id: string
  type: "booking" | "message" | "like" | "promotion" | "system"
  title: string
  body: string
  image?: string
  createdAt: string
  isRead: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "booking",
    title: "Đặt tour thành công",
    body: "Tour Phủ Dầy - Chùa Cổ Lễ đã được xác nhận. Ngày khởi hành: 15/02/2025",
    image: "https://picsum.photos/seed/notif1/200/200",
    createdAt: "2025-01-20T10:00:00Z",
    isRead: false,
  },
  {
    id: "2",
    type: "message",
    title: "Tin nhắn mới",
    body: "HDV Minh Đức đã gửi tin nhắn cho bạn",
    image: "https://i.pravatar.cc/200?u=minhduc",
    createdAt: "2025-01-20T09:30:00Z",
    isRead: false,
  },
  {
    id: "3",
    type: "like",
    title: "Bài viết được yêu thích",
    body: "Trần Thị B và 12 người khác đã thích bài viết của bạn",
    createdAt: "2025-01-19T15:00:00Z",
    isRead: true,
  },
  {
    id: "4",
    type: "promotion",
    title: "Ưu đãi đặc biệt!",
    body: "Giảm 20% tất cả tour Nam Định trong tháng 2",
    image: "https://picsum.photos/seed/promo1/200/200",
    createdAt: "2025-01-18T08:00:00Z",
    isRead: true,
  },
  {
    id: "5",
    type: "system",
    title: "Cập nhật ứng dụng",
    body: "Phiên bản mới 1.1.0 đã sẵn sàng để cập nhật",
    createdAt: "2025-01-15T12:00:00Z",
    isRead: true,
  },
]

export const NotificationsScreen: FC<NotificationsScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotifications = () => {
      setTimeout(() => {
        setNotifications(mockNotifications)
        setLoading(false)
      }, 500)
    }
    fetchNotifications()
  }, [])

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const handleNotificationPress = (notification: Notification) => {
    handleMarkAsRead(notification.id)
    switch (notification.type) {
      case "booking":
        navigation.navigate("BookingHistory")
        break
      case "message":
        navigation.navigate("Chat", { recipientId: "guide-minh-duc", recipientName: "Minh Đức" })
        break
    }
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "booking":
        return "check"
      case "message":
        return "components"
      case "like":
        return "heart"
      case "promotion":
        return "heart"
      case "system":
        return "settings"
      default:
        return "bell"
    }
  }

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "booking":
        return theme.colors.palette.secondary500
      case "message":
        return theme.colors.tint
      case "like":
        return theme.colors.palette.accent500
      case "promotion":
        return "#FF9800"
      case "system":
        return theme.colors.textDim
      default:
        return theme.colors.tint
    }
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (hours < 1) return "Vừa xong"
    if (hours < 24) return `${hours} giờ trước`
    if (days < 7) return `${days} ngày trước`
    return date.toLocaleDateString("vi-VN")
  }

  const renderNotification = ({ item }: { item: Notification }) => (
    <Pressable
      style={[
        $notificationItem,
        {
          backgroundColor: item.isRead ? theme.colors.background : theme.colors.palette.primary100,
        },
      ]}
      onPress={() => handleNotificationPress(item)}
    >
      <View style={[$iconContainer, { backgroundColor: getNotificationColor(item.type) + "20" }]}>
        <Icon
          icon={
            getNotificationIcon(item.type) as "check" | "components" | "heart" | "settings" | "bell"
          }
          size={20}
          color={getNotificationColor(item.type)}
        />
      </View>
      <View style={$notificationContent}>
        <View style={$notificationHeader}>
          <Text preset="bold" numberOfLines={1} style={$notificationTitle}>
            {item.title}
          </Text>
          {!item.isRead && <View style={[$unreadDot, { backgroundColor: theme.colors.tint }]} />}
        </View>
        <Text numberOfLines={2} style={{ color: theme.colors.textDim }}>
          {item.body}
        </Text>
        <Text size="xxs" style={{ color: theme.colors.textDim, marginTop: spacing.xxs }}>
          {formatTime(item.createdAt)}
        </Text>
      </View>
      {item.image && <Image source={{ uri: item.image }} style={$notificationImage} />}
    </Pressable>
  )

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Thông báo</Text>
        <View style={$spacer} />
      </View>

      {/* Unread count */}
      {unreadCount > 0 && (
        <View style={[$unreadBanner, { backgroundColor: theme.colors.palette.primary100 }]}>
          <Text style={{ color: theme.colors.tint }}>{unreadCount} thông báo chưa đọc</Text>
        </View>
      )}

      {loading ? (
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={$listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="bell" size={64} color={theme.colors.border} />
              <Text style={{ color: theme.colors.textDim }}>Không có thông báo</Text>
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

const $unreadBanner: ViewStyle = {
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.md,
  alignItems: "center",
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $listContent: ViewStyle = {
  paddingVertical: spacing.sm,
}

const $notificationItem: ViewStyle = {
  flexDirection: "row",
  padding: spacing.md,
  gap: spacing.sm,
}

const $iconContainer: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
}

const $notificationContent: ViewStyle = {
  flex: 1,
}

const $notificationHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
}

const $notificationTitle: TextStyle = {
  flex: 1,
}

const $unreadDot: ViewStyle = {
  width: 8,
  height: 8,
  borderRadius: 4,
}

const $notificationImage: ImageStyle = {
  width: 48,
  height: 48,
  borderRadius: 8,
}

const $emptyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing.xxxl,
  gap: spacing.md,
}
