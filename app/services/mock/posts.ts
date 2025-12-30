/**
 * Mock data for forum posts
 */

export interface PostComment {
  id: string
  postId: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  likeCount: number
  createdAt: string
}

export interface Post {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  contentEn?: string
  images: string[]
  location?: string
  locationEn?: string
  provinceId?: string
  tags: string[]
  likeCount: number
  commentCount: number
  shareCount: number
  comments: PostComment[]
  createdAt: string
  isLiked?: boolean
  isSaved?: boolean
}

export const posts: Post[] = [
  {
    id: "post-1",
    userId: "user-1",
    userName: "Nguyễn Văn An",
    userAvatar: "https://i.pravatar.cc/150?u=user1",
    content:
      "Vừa đi tour Phủ Dầy về, cảnh đẹp quá các bạn ơi! Recommend 100% 🥰\n\nPhủ Dầy thực sự là nơi rất linh thiêng và yên bình. Kiến trúc cổ kính, không gian thoáng đãng. Đặc biệt được nghe anh hướng dẫn kể về lịch sử Thánh Mẫu Liễu Hạnh rất hay.\n\nAi có dịp đến Nam Định nhớ ghé thăm nhé!",
    images: [
      "https://picsum.photos/seed/post1a/800/600",
      "https://picsum.photos/seed/post1b/800/600",
      "https://picsum.photos/seed/post1c/800/600",
      "https://picsum.photos/seed/post1d/800/600",
      "https://picsum.photos/seed/post1e/800/600",
    ],
    location: "Phủ Dầy, Nam Định",
    provinceId: "nam-dinh",
    tags: ["#namdinh", "#phuday", "#dulich", "#tamlinh"],
    likeCount: 234,
    commentCount: 45,
    shareCount: 12,
    comments: [
      {
        id: "comment-1-1",
        postId: "post-1",
        userId: "user-2",
        userName: "Trần Thị Bình",
        userAvatar: "https://i.pravatar.cc/150?u=user2",
        content: "Đẹp quá! Bạn đi tour của ai vậy?",
        likeCount: 5,
        createdAt: "2025-01-15T10:00:00Z",
      },
      {
        id: "comment-1-2",
        postId: "post-1",
        userId: "user-1",
        userName: "Nguyễn Văn An",
        userAvatar: "https://i.pravatar.cc/150?u=user1",
        content: "@Trần Thị Bình Mình đi tour của anh Minh Đức trên VietLocalGo đó bạn, rất nhiệt tình!",
        likeCount: 3,
        createdAt: "2025-01-15T10:15:00Z",
      },
    ],
    createdAt: "2025-01-15T08:30:00Z",
    isLiked: false,
    isSaved: false,
  },
  {
    id: "post-2",
    userId: "user-2",
    userName: "Trần Thị Bình",
    userAvatar: "https://i.pravatar.cc/150?u=user2",
    content:
      "Hỏi mọi người: Phở gánh chỗ nào ngon nhất Nam Định ạ? 🍜\n\nMình sắp đi Nam Định, muốn tìm quán phở ngon authentic nhất. Mọi người có recommend không ạ?",
    images: [],
    provinceId: "nam-dinh",
    tags: ["#namdinh", "#phogacha", "#amthuc", "#hoidan"],
    likeCount: 56,
    commentCount: 23,
    shareCount: 5,
    comments: [
      {
        id: "comment-2-1",
        postId: "post-2",
        userId: "user-3",
        userName: "Lê Văn Cường",
        userAvatar: "https://i.pravatar.cc/150?u=user3",
        content: "Bạn thử quán Phở Hùng trên đường Trần Hưng Đạo nhé, ngon lắm!",
        likeCount: 12,
        createdAt: "2025-01-14T09:30:00Z",
      },
      {
        id: "comment-2-2",
        postId: "post-2",
        userId: "user-4",
        userName: "Phạm Thị Dung",
        userAvatar: "https://i.pravatar.cc/150?u=user4",
        content: "Phở Bà Tâm chợ Rồng cũng ngon bạn ơi, mở từ 5h sáng",
        likeCount: 8,
        createdAt: "2025-01-14T10:00:00Z",
      },
    ],
    createdAt: "2025-01-14T09:15:00Z",
    isLiked: true,
    isSaved: false,
  },
  {
    id: "post-3",
    userId: "user-5",
    userName: "Hoàng Văn Em",
    userAvatar: "https://i.pravatar.cc/150?u=user5",
    content:
      "Review chi tiết làng hoa Vị Khê mùa Tết 🌸🌺\n\nNhư đã hứa, mình viết review chi tiết cho các bạn có ý định đến làng hoa Vị Khê dịp Tết này:\n\n✅ Thời điểm đẹp nhất: 20-28 tháng Chạp\n✅ Giá hoa: Dao động từ 50k-500k tùy loại\n✅ Parking: Có bãi đỗ xe rộng, 10k/xe máy, 20k/ô tô\n✅ Nên đi sáng sớm hoặc chiều tà để tránh nắng và đông\n\nMẹo: Mặc áo dài chụp ảnh rất đẹp nhé các bạn! 📸",
    images: [
      "https://picsum.photos/seed/post3a/800/600",
      "https://picsum.photos/seed/post3b/800/600",
      "https://picsum.photos/seed/post3c/800/600",
      "https://picsum.photos/seed/post3d/800/600",
    ],
    location: "Làng Hoa Vị Khê, Nam Định",
    provinceId: "nam-dinh",
    tags: ["#namdinh", "#vikhe", "#langhoa", "#tet", "#review"],
    likeCount: 567,
    commentCount: 89,
    shareCount: 34,
    comments: [],
    createdAt: "2025-01-13T14:00:00Z",
    isLiked: false,
    isSaved: true,
  },
  {
    id: "post-4",
    userId: "user-6",
    userName: "Sarah Johnson",
    userAvatar: "https://i.pravatar.cc/150?u=user6",
    content:
      "Just had the most amazing food tour in Nam Dinh! 🍜✨\n\nThe traditional beef pho here is completely different from Hanoi - richer broth, more aromatic. Also tried banh cuon and nem nam for the first time. \n\nBig thanks to my guide Thu Huong for showing me the best local spots! If you're visiting Vietnam, don't skip Nam Dinh!",
    contentEn:
      "Just had the most amazing food tour in Nam Dinh! The traditional beef pho here is completely different from Hanoi - richer broth, more aromatic. Also tried banh cuon and nem nam for the first time. Big thanks to my guide Thu Huong for showing me the best local spots! If you're visiting Vietnam, don't skip Nam Dinh!",
    images: [
      "https://picsum.photos/seed/post4a/800/600",
      "https://picsum.photos/seed/post4b/800/600",
    ],
    location: "Nam Định, Vietnam",
    provinceId: "nam-dinh",
    tags: ["#namdinh", "#foodtour", "#vietnamfood", "#travel"],
    likeCount: 189,
    commentCount: 34,
    shareCount: 8,
    comments: [],
    createdAt: "2025-01-12T16:30:00Z",
    isLiked: false,
    isSaved: false,
  },
  {
    id: "post-5",
    userId: "user-7",
    userName: "Nguyễn Thị Giang",
    userAvatar: "https://i.pravatar.cc/150?u=user7",
    content:
      "Tips tiết kiệm khi du lịch Nam Định 💰\n\n1. Đi xe khách từ Hà Nội chỉ 80-100k, 2 tiếng là tới\n2. Thuê xe máy 100-150k/ngày để tự túc khám phá\n3. Ăn sáng phở 30-40k, trưa tối 50-80k là no căng\n4. Homestay giá rẻ từ 200k/đêm\n5. Book tour qua app để được giá tốt hơn\n\nTổng chi phí 2 ngày 1 đêm của mình: ~1tr5 bao gồm ăn uống, đi lại, 1 tour 🤑",
    images: [],
    provinceId: "nam-dinh",
    tags: ["#namdinh", "#dulich", "#tietkiem", "#tips"],
    likeCount: 892,
    commentCount: 156,
    shareCount: 78,
    comments: [],
    createdAt: "2025-01-10T20:00:00Z",
    isLiked: true,
    isSaved: true,
  },
]

// Helper functions
export const getPostsByProvince = (provinceId: string): Post[] => {
  return posts.filter((p) => p.provinceId === provinceId)
}

export const getPostById = (id: string): Post | undefined => {
  return posts.find((p) => p.id === id)
}

export const getPostsByUser = (userId: string): Post[] => {
  return posts.filter((p) => p.userId === userId)
}

export const getHotPosts = (limit = 10): Post[] => {
  return [...posts]
    .sort((a, b) => b.likeCount + b.commentCount - (a.likeCount + a.commentCount))
    .slice(0, limit)
}

export const getRecentPosts = (limit = 10): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit)
}

export const searchPosts = (query: string): Post[] => {
  const lowercaseQuery = query.toLowerCase()
  return posts.filter(
    (p) =>
      p.content.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowercaseQuery)),
  )
}

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  )
}
