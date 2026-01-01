/**
 * Mock data for user saved places
 */
export interface SavedPlace {
  id: string
  placeId: string
  placeName: string
  placeImage: string
  placeCategory: string
  placeAddress: string
  placeRating: number
  savedAt: string
}

export const savedPlaces: SavedPlace[] = [
  {
    id: "saved-1",
    placeId: "pho-bo-ganh",
    placeName: "Phở Bò Gánh Nam Định",
    placeImage: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400",
    placeCategory: "Ẩm thực",
    placeAddress: "123 Trần Hưng Đạo, TP Nam Định",
    placeRating: 4.9,
    savedAt: "2025-01-03T10:00:00Z",
  },
  {
    id: "saved-2",
    placeId: "chua-co-le",
    placeName: "Chùa Cổ Lễ",
    placeImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400",
    placeCategory: "Di tích",
    placeAddress: "Xã Trực Thái, Trực Ninh, Nam Định",
    placeRating: 4.8,
    savedAt: "2025-01-02T14:00:00Z",
  },
  {
    id: "saved-3",
    placeId: "phu-day",
    placeName: "Phủ Dầy",
    placeImage: "https://images.unsplash.com/photo-1581579439075-1e6fd0c7d5b1?w=400",
    placeCategory: "Tâm linh",
    placeAddress: "Xã Kim Thái, Vụ Bản, Nam Định",
    placeRating: 4.9,
    savedAt: "2025-01-01T09:00:00Z",
  },
  {
    id: "saved-4",
    placeId: "lang-hoa-vi-khe",
    placeName: "Làng hoa Vị Khê",
    placeImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
    placeCategory: "Làng nghề",
    placeAddress: "Xã Điền Xá, Nam Trực, Nam Định",
    placeRating: 4.7,
    savedAt: "2024-12-28T16:00:00Z",
  },
  {
    id: "saved-5",
    placeId: "bien-quat-lam",
    placeName: "Biển Quất Lâm",
    placeImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
    placeCategory: "Biển",
    placeAddress: "Giao Thủy, Nam Định",
    placeRating: 4.5,
    savedAt: "2024-12-25T11:00:00Z",
  },
]
