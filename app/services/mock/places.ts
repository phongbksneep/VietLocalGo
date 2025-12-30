/**
 * Mock data for places/attractions
 */

export type PlaceCategory =
  | "food"
  | "heritage"
  | "temple"
  | "festival"
  | "craft_village"
  | "beach"
  | "shopping"
  | "nature"

export interface Place {
  id: string
  name: string
  nameEn: string
  category: PlaceCategory
  provinceId: string
  address: string
  addressEn: string
  coordinates: {
    lat: number
    lng: number
  }
  rating: number
  reviewCount: number
  priceRange?: string
  openingHours?: string
  phone?: string
  website?: string
  description: string
  descriptionEn: string
  images: string[]
  amenities: string[]
  isOpen?: boolean
  distance?: number // in km, calculated dynamically
}

export const places: Place[] = [
  // NAM ĐỊNH - ẨM THỰC
  {
    id: "pho-bo-ganh-nam-dinh",
    name: "Phở Bò Gánh Nam Định",
    nameEn: "Nam Dinh Beef Pho (Traditional Style)",
    category: "food",
    provinceId: "nam-dinh",
    address: "123 Trần Hưng Đạo, TP Nam Định",
    addressEn: "123 Tran Hung Dao, Nam Dinh City",
    coordinates: { lat: 20.4342, lng: 106.1772 },
    rating: 4.9,
    reviewCount: 567,
    priceRange: "25,000đ - 50,000đ",
    openingHours: "6:00 - 22:00",
    phone: "0228 123 4567",
    description:
      "Phở bò gánh là đặc sản nổi tiếng của Nam Định với nước dùng đậm đà từ xương bò ninh kỹ, bánh phở mềm dai và thịt bò tái chín thơm ngon. Quán phục vụ theo kiểu gánh truyền thống, mang đậm hương vị quê hương.",
    descriptionEn:
      "Traditional beef pho is a famous specialty of Nam Dinh with rich broth from carefully simmered beef bones, soft chewy noodles and delicious rare and well-done beef. The shop serves in traditional style, bringing the authentic hometown flavor.",
    images: [
      "https://picsum.photos/seed/pho1/800/600",
      "https://picsum.photos/seed/pho2/800/600",
      "https://picsum.photos/seed/pho3/800/600",
    ],
    amenities: ["parking", "wifi", "air_conditioning", "card_payment"],
    isOpen: true,
  },
  {
    id: "banh-cuon-lang-kenh",
    name: "Bánh Cuốn Làng Kênh",
    nameEn: "Lang Kenh Rice Rolls",
    category: "food",
    provinceId: "nam-dinh",
    address: "45 Lê Hồng Phong, TP Nam Định",
    addressEn: "45 Le Hong Phong, Nam Dinh City",
    coordinates: { lat: 20.4285, lng: 106.1689 },
    rating: 4.7,
    reviewCount: 234,
    priceRange: "20,000đ - 40,000đ",
    openingHours: "5:30 - 21:00",
    phone: "0228 234 5678",
    description:
      "Bánh cuốn làng Kênh nổi tiếng với lớp bánh mỏng mịn, nhân thịt băm thơm ngon, ăn kèm chả quế và nước mắm chua ngọt đặc trưng.",
    descriptionEn:
      "Lang Kenh rice rolls are famous for their thin smooth layers, delicious minced meat filling, served with cinnamon sausage and special sweet-sour fish sauce.",
    images: [
      "https://picsum.photos/seed/banhcuon1/800/600",
      "https://picsum.photos/seed/banhcuon2/800/600",
    ],
    amenities: ["parking", "air_conditioning"],
    isOpen: true,
  },
  {
    id: "nem-nam-dinh",
    name: "Nem Nắm Nam Định",
    nameEn: "Nam Dinh Fermented Pork Roll",
    category: "food",
    provinceId: "nam-dinh",
    address: "78 Nguyễn Du, TP Nam Định",
    addressEn: "78 Nguyen Du, Nam Dinh City",
    coordinates: { lat: 20.4312, lng: 106.1745 },
    rating: 4.6,
    reviewCount: 189,
    priceRange: "30,000đ - 60,000đ",
    openingHours: "8:00 - 20:00",
    description:
      "Nem nắm là món ăn truyền thống của Nam Định, làm từ thịt lợn ướp gia vị đặc biệt, cuốn trong lá chuối, có vị chua nhẹ đặc trưng.",
    descriptionEn:
      "Fermented pork roll is a traditional dish of Nam Dinh, made from pork marinated with special spices, wrapped in banana leaves, with a characteristic light sour taste.",
    images: [
      "https://picsum.photos/seed/nem1/800/600",
      "https://picsum.photos/seed/nem2/800/600",
    ],
    amenities: ["parking", "takeaway"],
    isOpen: true,
  },

  // NAM ĐỊNH - DI TÍCH
  {
    id: "phu-day",
    name: "Quần thể di tích Phủ Dầy",
    nameEn: "Phu Day Relic Complex",
    category: "temple",
    provinceId: "nam-dinh",
    address: "Xã Kim Thái, huyện Vụ Bản, Nam Định",
    addressEn: "Kim Thai commune, Vu Ban district, Nam Dinh",
    coordinates: { lat: 20.3521, lng: 106.0845 },
    rating: 4.9,
    reviewCount: 1234,
    openingHours: "6:00 - 18:00",
    description:
      "Phủ Dầy là quần thể di tích thờ Mẫu lớn nhất Việt Nam, gắn liền với Thánh Mẫu Liễu Hạnh. Hàng năm, lễ hội Phủ Dầy thu hút hàng triệu du khách về tham dự.",
    descriptionEn:
      "Phu Day is the largest Mother Goddess worship complex in Vietnam, associated with Saint Mother Lieu Hanh. Annually, Phu Day festival attracts millions of visitors.",
    images: [
      "https://picsum.photos/seed/phuday1/800/600",
      "https://picsum.photos/seed/phuday2/800/600",
      "https://picsum.photos/seed/phuday3/800/600",
      "https://picsum.photos/seed/phuday4/800/600",
    ],
    amenities: ["parking", "restroom", "guide_available", "souvenir_shop"],
    isOpen: true,
  },
  {
    id: "chua-co-le",
    name: "Chùa Cổ Lễ",
    nameEn: "Co Le Pagoda",
    category: "temple",
    provinceId: "nam-dinh",
    address: "Thị trấn Cổ Lễ, huyện Trực Ninh, Nam Định",
    addressEn: "Co Le town, Truc Ninh district, Nam Dinh",
    coordinates: { lat: 20.3156, lng: 106.1234 },
    rating: 4.8,
    reviewCount: 856,
    openingHours: "5:00 - 18:00",
    description:
      "Chùa Cổ Lễ có kiến trúc độc đáo kết hợp Á-Âu, nổi tiếng với tượng Phật bằng đồng lớn nhất Đông Nam Á và cầu Cuốn 9 nhịp.",
    descriptionEn:
      "Co Le Pagoda has unique Asian-European architecture, famous for the largest bronze Buddha statue in Southeast Asia and the 9-span Cuon bridge.",
    images: [
      "https://picsum.photos/seed/chuacole1/800/600",
      "https://picsum.photos/seed/chuacole2/800/600",
      "https://picsum.photos/seed/chuacole3/800/600",
    ],
    amenities: ["parking", "restroom", "guide_available"],
    isOpen: true,
  },
  {
    id: "nha-tho-phat-diem",
    name: "Nhà thờ đá Phát Diệm",
    nameEn: "Phat Diem Stone Cathedral",
    category: "heritage",
    provinceId: "nam-dinh",
    address: "Thị trấn Phát Diệm, huyện Kim Sơn, Ninh Bình",
    addressEn: "Phat Diem town, Kim Son district, Ninh Binh",
    coordinates: { lat: 20.0842, lng: 106.0678 },
    rating: 4.9,
    reviewCount: 2156,
    openingHours: "6:00 - 17:00",
    description:
      "Quần thể nhà thờ đá Phát Diệm là kiệt tác kiến trúc kết hợp Đông-Tây, được xây dựng hoàn toàn bằng đá và gỗ lim trong suốt 30 năm (1875-1898).",
    descriptionEn:
      "Phat Diem stone cathedral complex is an architectural masterpiece combining East-West styles, built entirely of stone and ironwood over 30 years (1875-1898).",
    images: [
      "https://picsum.photos/seed/phatdiem1/800/600",
      "https://picsum.photos/seed/phatdiem2/800/600",
      "https://picsum.photos/seed/phatdiem3/800/600",
    ],
    amenities: ["parking", "restroom", "guide_available", "souvenir_shop"],
    isOpen: true,
  },

  // NAM ĐỊNH - LÀNG NGHỀ
  {
    id: "lang-hoa-vi-khe",
    name: "Làng hoa Vị Khê",
    nameEn: "Vi Khe Flower Village",
    category: "craft_village",
    provinceId: "nam-dinh",
    address: "Xã Điền Xá, huyện Nam Trực, Nam Định",
    addressEn: "Dien Xa commune, Nam Truc district, Nam Dinh",
    coordinates: { lat: 20.3678, lng: 106.1456 },
    rating: 4.7,
    reviewCount: 445,
    openingHours: "7:00 - 17:00",
    description:
      "Làng hoa Vị Khê nổi tiếng với nghề trồng hoa, cây cảnh truyền thống. Đặc biệt vào dịp Tết, nơi đây trở thành điểm đến check-in lý tưởng với hàng nghìn loại hoa đua nở.",
    descriptionEn:
      "Vi Khe Flower Village is famous for traditional flower and ornamental plant cultivation. Especially during Tet holiday, this place becomes an ideal check-in destination with thousands of blooming flowers.",
    images: [
      "https://picsum.photos/seed/vikhe1/800/600",
      "https://picsum.photos/seed/vikhe2/800/600",
      "https://picsum.photos/seed/vikhe3/800/600",
    ],
    amenities: ["parking", "photo_spot", "local_products"],
    isOpen: true,
  },

  // NAM ĐỊNH - BIỂN
  {
    id: "bien-quat-lam",
    name: "Biển Quất Lâm",
    nameEn: "Quat Lam Beach",
    category: "beach",
    provinceId: "nam-dinh",
    address: "Thị trấn Quất Lâm, huyện Giao Thủy, Nam Định",
    addressEn: "Quat Lam town, Giao Thuy district, Nam Dinh",
    coordinates: { lat: 20.2845, lng: 106.5123 },
    rating: 4.5,
    reviewCount: 678,
    description:
      "Biển Quất Lâm là bãi biển đẹp nhất Nam Định với bãi cát trải dài, nước biển trong xanh và nhiều resort, khách sạn phục vụ du khách.",
    descriptionEn:
      "Quat Lam Beach is the most beautiful beach in Nam Dinh with long sandy shores, clear blue water and many resorts and hotels serving visitors.",
    images: [
      "https://picsum.photos/seed/quatlam1/800/600",
      "https://picsum.photos/seed/quatlam2/800/600",
      "https://picsum.photos/seed/quatlam3/800/600",
    ],
    amenities: ["parking", "restroom", "restaurant", "beach_chair", "shower"],
    isOpen: true,
  },
]

// Helper functions
export const getPlacesByProvince = (provinceId: string): Place[] => {
  return places.filter((p) => p.provinceId === provinceId)
}

export const getPlacesByCategory = (category: PlaceCategory): Place[] => {
  return places.filter((p) => p.category === category)
}

export const getPlaceById = (id: string): Place | undefined => {
  return places.find((p) => p.id === id)
}

export const searchPlaces = (query: string): Place[] => {
  const lowercaseQuery = query.toLowerCase()
  return places.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.nameEn.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery),
  )
}

export const getTopRatedPlaces = (limit = 10): Place[] => {
  return [...places].sort((a, b) => b.rating - a.rating).slice(0, limit)
}

export const getNearbyPlaces = (
  lat: number,
  lng: number,
  radiusKm = 10,
): Place[] => {
  return places.filter((p) => {
    const distance = calculateDistance(lat, lng, p.coordinates.lat, p.coordinates.lng)
    return distance <= radiusKm
  })
}

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number => {
  const R = 6371 // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}
