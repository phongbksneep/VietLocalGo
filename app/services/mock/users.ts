/**
 * Mock data for user and authentication
 */

export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  provinceId?: string
  bio?: string
  joinedAt: string
  reviewCount: number
  tourCount: number
  savedPlaces: string[]
  savedTours: string[]
  preferences: {
    categories: string[]
    languages: string[]
    notifications: {
      push: boolean
      email: boolean
      sms: boolean
    }
  }
}

export interface Booking {
  id: string

  userId: string
  tourId: string
  tourName: string
  tourImage: string
  guideId: string
  guideName: string
  date: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  paymentStatus: "pending" | "paid" | "refunded"
  notes?: string
  createdAt: string
}

export interface Notification {
  id: string
  userId: string
  type: "booking" | "message" | "like" | "comment" | "promo" | "system"
  title: string
  titleEn: string
  content: string
  contentEn: string
  icon: string
  isRead: boolean
  actionUrl?: string
  createdAt: string
}

// Current user mock data
export const currentUser: User = {
  id: "current-user",
  name: "Nguyễn Văn A",
  email: "nguyenvana@gmail.com",
  phone: "0912345678",
  avatar: "https://i.pravatar.cc/300?u=currentuser",
  provinceId: "nam-dinh",
  bio: "Yêu du lịch và ẩm thực Việt Nam 🇻🇳",
  joinedAt: "2024-06-15T00:00:00Z",
  reviewCount: 12,
  tourCount: 5,
  savedPlaces: ["pho-bo-ganh-nam-dinh", "phu-day", "bien-quat-lam"],
  savedTours: ["tour-phu-day-co-le", "tour-am-thuc-nam-dinh"],
  preferences: {
    categories: ["food", "heritage", "temple"],
    languages: ["vi", "en"],
    notifications: {
      push: true,
      email: true,
      sms: false,
    },
  },
}

// Bookings mock data
export const bookings: Booking[] = [
  {
    id: "booking-1",
    userId: "current-user",
    tourId: "tour-phu-day-co-le",
    tourName: "Tour Phủ Dầy - Chùa Cổ Lễ",
    tourImage: "https://picsum.photos/seed/tour1a/800/600",
    guideId: "guide-minh-duc",
    guideName: "Trần Minh Đức",
    date: "2025-01-15",
    guests: 2,
    totalPrice: 1050000,
    status: "confirmed",
    paymentStatus: "paid",
    notes: "Có 1 người lớn tuổi, xin hỗ trợ đi chậm",
    createdAt: "2025-01-10T14:30:00Z",
  },
  {
    id: "booking-2",
    userId: "current-user",
    tourId: "tour-am-thuc-nam-dinh",
    tourName: "Tour Ẩm thực Nam Định",
    tourImage: "https://picsum.photos/seed/foodtour1/800/600",
    guideId: "guide-thu-huong",
    guideName: "Lê Thu Hương",
    date: "2025-01-20",
    guests: 4,
    totalPrice: 1400000,
    status: "pending",
    paymentStatus: "pending",
    createdAt: "2025-01-14T09:00:00Z",
  },
  {
    id: "booking-3",
    userId: "current-user",
    tourId: "tour-bien-quat-lam",
    tourName: "Tour Biển Quất Lâm 2N1Đ",
    tourImage: "https://picsum.photos/seed/beachtour1/800/600",
    guideId: "guide-van-long",
    guideName: "Phạm Văn Long",
    date: "2024-12-20",
    guests: 2,
    totalPrice: 3000000,
    status: "completed",
    paymentStatus: "paid",
    createdAt: "2024-12-15T16:00:00Z",
  },
]

// Notifications mock data
export const notifications: Notification[] = [
  {
    id: "notif-1",
    userId: "current-user",
    type: "booking",
    title: "Đặt tour thành công",
    titleEn: "Booking confirmed",
    content: "Tour Phủ Dầy - Chùa Cổ Lễ ngày 15/01/2025 đã được xác nhận",
    contentEn: "Phu Day - Co Le Pagoda Tour on 15/01/2025 has been confirmed",
    icon: "check-circle",
    isRead: false,
    actionUrl: "/bookings/booking-1",
    createdAt: "2025-01-14T10:00:00Z",
  },
  {
    id: "notif-2",
    userId: "current-user",
    type: "message",
    title: "Tin nhắn mới",
    titleEn: "New message",
    content: "Trần Minh Đức đã gửi tin nhắn cho bạn",
    contentEn: "Tran Minh Duc sent you a message",
    icon: "message-circle",
    isRead: false,
    actionUrl: "/chat/guide-minh-duc",
    createdAt: "2025-01-14T08:30:00Z",
  },
  {
    id: "notif-3",
    userId: "current-user",
    type: "like",
    title: "Lượt thích mới",
    titleEn: "New likes",
    content: "15 người đã thích bài viết của bạn",
    contentEn: "15 people liked your post",
    icon: "heart",
    isRead: true,
    actionUrl: "/posts/post-1",
    createdAt: "2025-01-13T20:00:00Z",
  },
  {
    id: "notif-4",
    userId: "current-user",
    type: "promo",
    title: "Khuyến mãi",
    titleEn: "Promotion",
    content: "Giảm 20% tour cuối tuần tại Nam Định. Đặt ngay!",
    contentEn: "20% off weekend tours in Nam Dinh. Book now!",
    icon: "tag",
    isRead: true,
    actionUrl: "/tours",
    createdAt: "2025-01-12T09:00:00Z",
  },
  {
    id: "notif-5",
    userId: "current-user",
    type: "system",
    title: "Đánh giá được yêu thích",
    titleEn: "Review appreciated",
    content: "Đánh giá của bạn về 'Phở Bò Gánh' đã nhận được 23 lượt helpful",
    contentEn: "Your review of 'Pho Bo Ganh' received 23 helpful votes",
    icon: "star",
    isRead: true,
    actionUrl: "/reviews/review-1",
    createdAt: "2025-01-11T15:30:00Z",
  },
]

// Helper functions
export const getUserById = (id: string): User | null => {
  if (id === "current-user") return currentUser
  return null
}

export const getBookingsByUser = (userId: string): Booking[] => {
  return bookings.filter((b) => b.userId === userId)
}

export const getBookingById = (id: string): Booking | undefined => {
  return bookings.find((b) => b.id === id)
}

export const getUpcomingBookings = (userId: string): Booking[] => {
  const now = new Date()
  return bookings.filter(
    (b) => b.userId === userId && new Date(b.date) >= now && b.status !== "cancelled",
  )
}

export const getPastBookings = (userId: string): Booking[] => {
  const now = new Date()
  return bookings.filter((b) => b.userId === userId && new Date(b.date) < now)
}

export const getNotificationsByUser = (userId: string): Notification[] => {
  return notifications.filter((n) => n.userId === userId)
}

export const getUnreadNotifications = (userId: string): Notification[] => {
  return notifications.filter((n) => n.userId === userId && !n.isRead)
}

export const getUnreadCount = (userId: string): number => {
  return getUnreadNotifications(userId).length
}

// Saved places helpers
export const isSavedPlace = (placeId: string) => {
  return currentUser.savedPlaces.includes(placeId)
}

export const toggleSavedPlace = (placeId: string) => {
  const idx = currentUser.savedPlaces.indexOf(placeId)
  if (idx >= 0) {
    currentUser.savedPlaces.splice(idx, 1)
    return false
  }
  currentUser.savedPlaces.push(placeId)
  return true
}

export const isSavedTour = (tourId: string) => {
  return currentUser.savedTours.includes(tourId)
}

export const toggleSavedTour = (tourId: string) => {
  const idx = currentUser.savedTours.indexOf(tourId)
  if (idx >= 0) {
    currentUser.savedTours.splice(idx, 1)
    return false
  }
  currentUser.savedTours.push(tourId)
  return true
}
