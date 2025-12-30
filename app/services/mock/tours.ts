/**
 * Mock data for tours
 */

export interface ItineraryItem {
  time: string
  activity: string
  activityEn: string
  location?: string
  locationEn?: string
  duration?: string
}

export interface Tour {
  id: string
  name: string
  nameEn: string
  provinceId: string
  description: string
  descriptionEn: string
  images: string[]
  duration: string
  durationEn: string
  groupSize: {
    min: number
    max: number
  }
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  includes: string[]
  includesEn: string[]
  excludes: string[]
  excludesEn: string[]
  itinerary: ItineraryItem[]
  guideId: string
  availableDates: string[]
  categories: string[]
  difficulty: "easy" | "moderate" | "hard"
  isPopular?: boolean
  discount?: number
}

export const tours: Tour[] = [
  {
    id: "tour-phu-day-co-le",
    name: "Tour Phủ Dầy - Chùa Cổ Lễ",
    nameEn: "Phu Day - Co Le Pagoda Tour",
    provinceId: "nam-dinh",
    description:
      "Khám phá hai di tích tâm linh nổi tiếng nhất Nam Định. Tham quan quần thể Phủ Dầy thờ Thánh Mẫu Liễu Hạnh và chùa Cổ Lễ với kiến trúc độc đáo.",
    descriptionEn:
      "Explore the two most famous spiritual sites in Nam Dinh. Visit Phu Day complex worshipping Saint Mother Lieu Hanh and Co Le Pagoda with unique architecture.",
    images: [
      "https://picsum.photos/seed/tour1a/800/600",
      "https://picsum.photos/seed/tour1b/800/600",
      "https://picsum.photos/seed/tour1c/800/600",
      "https://picsum.photos/seed/tour1d/800/600",
    ],
    duration: "1 ngày",
    durationEn: "1 day",
    groupSize: { min: 2, max: 15 },
    price: 500000,
    originalPrice: 650000,
    rating: 4.8,
    reviewCount: 234,
    includes: [
      "Xe đưa đón tận nơi",
      "Hướng dẫn viên chuyên nghiệp",
      "Bữa trưa đặc sản địa phương",
      "Vé tham quan các điểm",
      "Nước uống",
      "Bảo hiểm du lịch",
    ],
    includesEn: [
      "Door-to-door pickup",
      "Professional tour guide",
      "Local specialty lunch",
      "Entrance tickets",
      "Drinking water",
      "Travel insurance",
    ],
    excludes: ["Chi phí cá nhân", "Tip cho hướng dẫn viên", "Đồ lễ (nếu cần)"],
    excludesEn: ["Personal expenses", "Tips for guide", "Offerings (if needed)"],
    itinerary: [
      {
        time: "7:00",
        activity: "Đón khách tại điểm hẹn",
        activityEn: "Pick up guests at meeting point",
        location: "TP Nam Định",
        locationEn: "Nam Dinh City",
      },
      {
        time: "8:30",
        activity: "Tham quan Phủ Dầy",
        activityEn: "Visit Phu Day Complex",
        location: "Phủ Dầy, Vụ Bản",
        locationEn: "Phu Day, Vu Ban",
        duration: "2.5 giờ",
      },
      {
        time: "11:00",
        activity: "Ăn trưa đặc sản địa phương",
        activityEn: "Local specialty lunch",
        location: "Nhà hàng địa phương",
        locationEn: "Local restaurant",
        duration: "1 giờ",
      },
      {
        time: "12:30",
        activity: "Di chuyển đến Chùa Cổ Lễ",
        activityEn: "Travel to Co Le Pagoda",
        duration: "30 phút",
      },
      {
        time: "13:00",
        activity: "Tham quan Chùa Cổ Lễ",
        activityEn: "Visit Co Le Pagoda",
        location: "Chùa Cổ Lễ, Trực Ninh",
        locationEn: "Co Le Pagoda, Truc Ninh",
        duration: "2 giờ",
      },
      {
        time: "15:00",
        activity: "Mua sắm đặc sản, quà lưu niệm",
        activityEn: "Shopping for local specialties and souvenirs",
        duration: "1 giờ",
      },
      {
        time: "16:00",
        activity: "Trả khách về điểm hẹn",
        activityEn: "Drop off guests at meeting point",
      },
    ],
    guideId: "guide-minh-duc",
    availableDates: [
      "2025-01-15",
      "2025-01-16",
      "2025-01-18",
      "2025-01-20",
      "2025-01-22",
      "2025-01-25",
      "2025-01-28",
      "2025-02-01",
      "2025-02-05",
    ],
    categories: ["spiritual", "culture", "heritage"],
    difficulty: "easy",
    isPopular: true,
    discount: 23,
  },
  {
    id: "tour-am-thuc-nam-dinh",
    name: "Tour Ẩm thực Nam Định",
    nameEn: "Nam Dinh Food Tour",
    provinceId: "nam-dinh",
    description:
      "Trải nghiệm hành trình ẩm thực độc đáo, khám phá những món ăn nổi tiếng nhất của Nam Định: phở bò gánh, bánh cuốn làng Kênh, nem nắm, bánh gai...",
    descriptionEn:
      "Experience a unique culinary journey, discover the most famous dishes of Nam Dinh: traditional beef pho, Lang Kenh rice rolls, fermented pork roll, banh gai...",
    images: [
      "https://picsum.photos/seed/foodtour1/800/600",
      "https://picsum.photos/seed/foodtour2/800/600",
      "https://picsum.photos/seed/foodtour3/800/600",
    ],
    duration: "Nửa ngày (4-5 tiếng)",
    durationEn: "Half day (4-5 hours)",
    groupSize: { min: 2, max: 8 },
    price: 350000,
    rating: 4.9,
    reviewCount: 456,
    includes: [
      "Hướng dẫn viên địa phương",
      "Thử 5-6 món ăn đặc sản",
      "Nước uống không giới hạn",
      "Bảo hiểm du lịch",
    ],
    includesEn: [
      "Local guide",
      "Taste 5-6 specialty dishes",
      "Unlimited drinks",
      "Travel insurance",
    ],
    excludes: ["Di chuyển cá nhân", "Tip cho hướng dẫn viên", "Mua đồ về làm quà"],
    excludesEn: ["Personal transportation", "Tips for guide", "Purchasing souvenirs"],
    itinerary: [
      {
        time: "7:00",
        activity: "Gặp mặt tại quán phở bò gánh",
        activityEn: "Meet at traditional beef pho shop",
        location: "Phở Hùng",
        duration: "45 phút",
      },
      {
        time: "8:00",
        activity: "Thưởng thức bánh cuốn làng Kênh",
        activityEn: "Enjoy Lang Kenh rice rolls",
        location: "Bánh cuốn Bà Tám",
        duration: "30 phút",
      },
      {
        time: "9:00",
        activity: "Tham quan chợ Rồng, thử nem nắm",
        activityEn: "Visit Rong market, try fermented pork roll",
        location: "Chợ Rồng",
        duration: "1 giờ",
      },
      {
        time: "10:30",
        activity: "Thưởng thức bánh gai, bánh nhãn",
        activityEn: "Taste banh gai, banh nhan",
        location: "Làng Giai Phạm",
        duration: "45 phút",
      },
      {
        time: "11:30",
        activity: "Kết thúc tour, hướng dẫn mua đặc sản",
        activityEn: "End tour, guide for buying specialties",
      },
    ],
    guideId: "guide-thu-huong",
    availableDates: [
      "2025-01-15",
      "2025-01-16",
      "2025-01-17",
      "2025-01-18",
      "2025-01-19",
      "2025-01-20",
    ],
    categories: ["food", "culture"],
    difficulty: "easy",
    isPopular: true,
  },
  {
    id: "tour-bien-quat-lam",
    name: "Tour Biển Quất Lâm 2N1Đ",
    nameEn: "Quat Lam Beach Tour 2D1N",
    provinceId: "nam-dinh",
    description:
      "Tận hưởng không khí biển trong lành, tắm biển, thưởng thức hải sản tươi sống và nghỉ dưỡng tại resort ven biển.",
    descriptionEn:
      "Enjoy fresh sea air, beach swimming, fresh seafood and relax at beachside resort.",
    images: [
      "https://picsum.photos/seed/beachtour1/800/600",
      "https://picsum.photos/seed/beachtour2/800/600",
      "https://picsum.photos/seed/beachtour3/800/600",
    ],
    duration: "2 ngày 1 đêm",
    durationEn: "2 days 1 night",
    groupSize: { min: 4, max: 20 },
    price: 1500000,
    originalPrice: 1800000,
    rating: 4.6,
    reviewCount: 189,
    includes: [
      "Xe đưa đón",
      "1 đêm nghỉ resort 3 sao",
      "3 bữa ăn (1 trưa, 1 tối, 1 sáng)",
      "Hướng dẫn viên",
      "Bảo hiểm du lịch",
    ],
    includesEn: [
      "Transportation",
      "1 night at 3-star resort",
      "3 meals (1 lunch, 1 dinner, 1 breakfast)",
      "Tour guide",
      "Travel insurance",
    ],
    excludes: ["Chi phí cá nhân", "Thuê phao bơi, dù che", "Đồ uống ngoài bữa ăn"],
    excludesEn: ["Personal expenses", "Swimming float, umbrella rental", "Drinks outside meals"],
    itinerary: [
      {
        time: "Ngày 1 - 7:00",
        activity: "Khởi hành từ Nam Định",
        activityEn: "Depart from Nam Dinh",
      },
      {
        time: "Ngày 1 - 9:00",
        activity: "Đến Quất Lâm, nhận phòng",
        activityEn: "Arrive at Quat Lam, check in",
      },
      {
        time: "Ngày 1 - 10:00",
        activity: "Tắm biển, vui chơi",
        activityEn: "Beach swimming and activities",
      },
      {
        time: "Ngày 1 - 12:00",
        activity: "Ăn trưa hải sản",
        activityEn: "Seafood lunch",
      },
      {
        time: "Ngày 1 - 14:00",
        activity: "Nghỉ ngơi, tự do khám phá",
        activityEn: "Rest and free exploration",
      },
      {
        time: "Ngày 1 - 18:00",
        activity: "Ngắm hoàng hôn, ăn tối BBQ",
        activityEn: "Watch sunset, BBQ dinner",
      },
      {
        time: "Ngày 2 - 7:00",
        activity: "Ăn sáng, tắm biển",
        activityEn: "Breakfast, beach swimming",
      },
      {
        time: "Ngày 2 - 11:00",
        activity: "Trả phòng, về Nam Định",
        activityEn: "Check out, return to Nam Dinh",
      },
    ],
    guideId: "guide-van-long",
    availableDates: ["2025-01-18", "2025-01-25", "2025-02-01", "2025-02-08", "2025-02-15"],
    categories: ["beach", "relaxation"],
    difficulty: "easy",
    discount: 17,
  },
  {
    id: "tour-lang-hoa-vi-khe",
    name: "Tour Làng Hoa Vị Khê",
    nameEn: "Vi Khe Flower Village Tour",
    provinceId: "nam-dinh",
    description:
      "Khám phá làng hoa cây cảnh nổi tiếng nhất miền Bắc, đặc biệt đẹp vào dịp Tết với hàng nghìn loại hoa đua nở.",
    descriptionEn:
      "Explore the most famous flower village in the North, especially beautiful during Tet with thousands of blooming flowers.",
    images: [
      "https://picsum.photos/seed/flowertour1/800/600",
      "https://picsum.photos/seed/flowertour2/800/600",
      "https://picsum.photos/seed/flowertour3/800/600",
    ],
    duration: "Nửa ngày (3-4 tiếng)",
    durationEn: "Half day (3-4 hours)",
    groupSize: { min: 2, max: 10 },
    price: 250000,
    rating: 4.7,
    reviewCount: 312,
    includes: ["Hướng dẫn viên địa phương", "Bữa nhẹ", "Hoa tặng (1 chậu nhỏ)", "Bảo hiểm du lịch"],
    includesEn: ["Local guide", "Light meal", "Flower gift (1 small pot)", "Travel insurance"],
    excludes: ["Di chuyển cá nhân", "Mua hoa thêm"],
    excludesEn: ["Personal transportation", "Additional flower purchases"],
    itinerary: [
      {
        time: "8:00",
        activity: "Gặp mặt tại cổng làng Vị Khê",
        activityEn: "Meet at Vi Khe village gate",
      },
      {
        time: "8:15",
        activity: "Giới thiệu lịch sử làng hoa",
        activityEn: "Introduction to flower village history",
        duration: "30 phút",
      },
      {
        time: "9:00",
        activity: "Tham quan các vườn hoa, cây cảnh",
        activityEn: "Visit flower and ornamental gardens",
        duration: "2 giờ",
      },
      {
        time: "11:00",
        activity: "Chụp ảnh check-in, mua hoa",
        activityEn: "Photo taking, flower shopping",
        duration: "1 giờ",
      },
      {
        time: "12:00",
        activity: "Kết thúc tour",
        activityEn: "End tour",
      },
    ],
    guideId: "guide-thu-huong",
    availableDates: [
      "2025-01-10",
      "2025-01-12",
      "2025-01-15",
      "2025-01-18",
      "2025-01-20",
      "2025-01-22",
      "2025-01-25",
    ],
    categories: ["nature", "culture", "photography"],
    difficulty: "easy",
  },
]

// Helper functions
export const getToursByProvince = (provinceId: string): Tour[] => {
  return tours.filter((t) => t.provinceId === provinceId)
}

export const getTourById = (id: string): Tour | undefined => {
  return tours.find((t) => t.id === id)
}

export const getPopularTours = (limit = 5): Tour[] => {
  return tours.filter((t) => t.isPopular).slice(0, limit)
}

export const getToursByCategory = (category: string): Tour[] => {
  return tours.filter((t) => t.categories.includes(category))
}

export const searchTours = (query: string): Tour[] => {
  const lowercaseQuery = query.toLowerCase()
  return tours.filter(
    (t) =>
      t.name.toLowerCase().includes(lowercaseQuery) ||
      t.nameEn.toLowerCase().includes(lowercaseQuery) ||
      t.description.toLowerCase().includes(lowercaseQuery),
  )
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ"
}
