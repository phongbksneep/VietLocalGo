/**
 * Mock data for reviews
 */

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  targetId: string
  targetType: "place" | "tour" | "guide"
  rating: number
  title?: string
  content: string
  contentEn?: string
  images: string[]
  tags: string[]
  tagsEn?: string[]
  helpfulCount: number
  replyCount: number
  createdAt: string
  isVerified?: boolean
}

export const reviews: Review[] = [
  // Reviews for Phở Bò Gánh
  {
    id: "review-1",
    userId: "user-1",
    userName: "Nguyễn Văn An",
    userAvatar: "https://i.pravatar.cc/150?u=user1",
    targetId: "pho-bo-ganh-nam-dinh",
    targetType: "place",
    rating: 5,
    title: "Phở ngon nhất từng ăn!",
    content:
      "Đây là quán phở ngon nhất mà tôi từng được ăn. Nước dùng đậm đà, thơm mùi quế và hồi. Bánh phở mềm nhưng vẫn dai, thịt bò tái vừa chín tới. Giá cả hợp lý, phục vụ nhanh nhẹn. Nhất định sẽ quay lại!",
    contentEn:
      "This is the best pho I have ever eaten. The broth is rich, fragrant with cinnamon and star anise. The noodles are soft but still chewy, the rare beef is perfectly cooked. Reasonable price, quick service. Will definitely come back!",
    images: [
      "https://picsum.photos/seed/review1a/400/300",
      "https://picsum.photos/seed/review1b/400/300",
    ],
    tags: ["Ngon", "Sạch sẽ", "Giá tốt", "Phục vụ nhanh"],
    tagsEn: ["Delicious", "Clean", "Good price", "Quick service"],
    helpfulCount: 45,
    replyCount: 3,
    createdAt: "2025-01-15T08:30:00Z",
    isVerified: true,
  },
  {
    id: "review-2",
    userId: "user-2",
    userName: "Trần Thị Bình",
    userAvatar: "https://i.pravatar.cc/150?u=user2",
    targetId: "pho-bo-ganh-nam-dinh",
    targetType: "place",
    rating: 5,
    content:
      "Quán nhỏ nhưng phở rất ngon. Mình đến từ Hà Nội và thấy phở Nam Định khác hẳn, đậm đà hơn rất nhiều. Đặc biệt là nước mắm ăn kèm rất ngon!",
    images: [],
    tags: ["Ngon", "Đậm đà"],
    helpfulCount: 23,
    replyCount: 1,
    createdAt: "2025-01-10T09:15:00Z",
  },
  {
    id: "review-3",
    userId: "user-3",
    userName: "John Smith",
    userAvatar: "https://i.pravatar.cc/150?u=user3",
    targetId: "pho-bo-ganh-nam-dinh",
    targetType: "place",
    rating: 4,
    content:
      "Amazing pho! The flavor is incredible. A bit crowded during peak hours but worth the wait. The staff doesn't speak much English but they are very friendly and helpful.",
    images: [
      "https://picsum.photos/seed/review3a/400/300",
    ],
    tags: ["Delicious", "Authentic", "Crowded"],
    helpfulCount: 18,
    replyCount: 2,
    createdAt: "2025-01-08T12:00:00Z",
  },

  // Reviews for Phủ Dầy
  {
    id: "review-4",
    userId: "user-4",
    userName: "Lê Văn Cường",
    userAvatar: "https://i.pravatar.cc/150?u=user4",
    targetId: "phu-day",
    targetType: "place",
    rating: 5,
    title: "Di tích tâm linh đẹp và linh thiêng",
    content:
      "Phủ Dầy là nơi linh thiêng nhất mà tôi từng đến. Kiến trúc cổ kính, không gian thanh tịnh. Đi vào dịp lễ hội rất đông nhưng vẫn rất trang nghiêm. Nên đi sáng sớm để tránh đông đúc.",
    images: [
      "https://picsum.photos/seed/review4a/400/300",
      "https://picsum.photos/seed/review4b/400/300",
      "https://picsum.photos/seed/review4c/400/300",
    ],
    tags: ["Linh thiêng", "Kiến trúc đẹp", "Đông đúc"],
    helpfulCount: 67,
    replyCount: 5,
    createdAt: "2025-01-12T07:45:00Z",
    isVerified: true,
  },

  // Reviews for Tour
  {
    id: "review-5",
    userId: "user-5",
    userName: "Phạm Thị Dung",
    userAvatar: "https://i.pravatar.cc/150?u=user5",
    targetId: "tour-phu-day-co-le",
    targetType: "tour",
    rating: 5,
    title: "Tour tuyệt vời, hướng dẫn viên nhiệt tình",
    content:
      "Chuyến tour rất tuyệt vời! Anh Minh Đức hướng dẫn rất nhiệt tình, am hiểu sâu về lịch sử và văn hóa địa phương. Bữa trưa ngon, xe đưa đón thoải mái. Giá cả hợp lý so với chất lượng. Highly recommended!",
    images: [
      "https://picsum.photos/seed/review5a/400/300",
      "https://picsum.photos/seed/review5b/400/300",
    ],
    tags: ["Hướng dẫn tốt", "Đáng tiền", "Trải nghiệm tuyệt vời"],
    helpfulCount: 89,
    replyCount: 8,
    createdAt: "2025-01-14T18:30:00Z",
    isVerified: true,
  },
  {
    id: "review-6",
    userId: "user-6",
    userName: "Hoàng Văn Em",
    userAvatar: "https://i.pravatar.cc/150?u=user6",
    targetId: "tour-phu-day-co-le",
    targetType: "tour",
    rating: 4,
    content:
      "Tour tổ chức khá tốt, lịch trình hợp lý. Chỉ tiếc là thời gian ở mỗi điểm hơi ngắn, chưa được khám phá hết. Sẽ quay lại tự túc để có thêm thời gian.",
    images: [],
    tags: ["Tổ chức tốt", "Thời gian ngắn"],
    helpfulCount: 34,
    replyCount: 2,
    createdAt: "2025-01-11T16:00:00Z",
  },

  // Reviews for Guide
  {
    id: "review-7",
    userId: "user-7",
    userName: "Nguyễn Thị Giang",
    userAvatar: "https://i.pravatar.cc/150?u=user7",
    targetId: "guide-minh-duc",
    targetType: "guide",
    rating: 5,
    title: "Hướng dẫn viên chuyên nghiệp",
    content:
      "Anh Minh Đức là hướng dẫn viên rất chuyên nghiệp. Kiến thức sâu rộng, cách truyền đạt dễ hiểu và thú vị. Anh rất nhiệt tình giúp đỡ mọi người trong nhóm và chụp ảnh rất đẹp. 10/10!",
    images: [],
    tags: ["Chuyên nghiệp", "Nhiệt tình", "Kiến thức tốt"],
    helpfulCount: 56,
    replyCount: 4,
    createdAt: "2025-01-13T20:15:00Z",
    isVerified: true,
  },
  {
    id: "review-8",
    userId: "user-8",
    userName: "Sarah Johnson",
    userAvatar: "https://i.pravatar.cc/150?u=user8",
    targetId: "guide-thu-huong",
    targetType: "guide",
    rating: 5,
    content:
      "Thu Huong is an amazing guide! Her English is excellent and she knows so much about local culture and food. The food tour she led was the highlight of my trip to Vietnam. She even helped me buy some special local products to bring home.",
    images: [
      "https://picsum.photos/seed/review8a/400/300",
    ],
    tags: ["Excellent English", "Knowledgeable", "Friendly"],
    helpfulCount: 42,
    replyCount: 3,
    createdAt: "2025-01-09T14:30:00Z",
    isVerified: true,
  },
]

// Helper functions
export const getReviewsByTarget = (
  targetId: string,
  targetType: Review["targetType"],
): Review[] => {
  return reviews.filter(
    (r) => r.targetId === targetId && r.targetType === targetType,
  )
}

export const getReviewById = (id: string): Review | undefined => {
  return reviews.find((r) => r.id === id)
}

export const getReviewsByUser = (userId: string): Review[] => {
  return reviews.filter((r) => r.userId === userId)
}

export const getRecentReviews = (limit = 10): Review[] => {
  return [...reviews]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}

export const calculateAverageRating = (targetId: string): number => {
  const targetReviews = reviews.filter((r) => r.targetId === targetId)
  if (targetReviews.length === 0) return 0
  const sum = targetReviews.reduce((acc, r) => acc + r.rating, 0)
  return Math.round((sum / targetReviews.length) * 10) / 10
}

export const formatDate = (dateString: string, locale = "vi-VN"): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) {
    return locale === "vi-VN" ? `${diffMins} phút trước` : `${diffMins} minutes ago`
  } else if (diffHours < 24) {
    return locale === "vi-VN" ? `${diffHours} giờ trước` : `${diffHours} hours ago`
  } else if (diffDays < 7) {
    return locale === "vi-VN" ? `${diffDays} ngày trước` : `${diffDays} days ago`
  } else {
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }
}
