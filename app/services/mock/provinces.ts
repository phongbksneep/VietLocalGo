/**
 * Mock data for Vietnamese provinces
 * Starting with Nam Định, expandable to all 63 provinces
 */

export interface Province {
  id: string
  name: string
  nameEn: string
  code: string
  region: "north" | "central" | "south"
  thumbnail: string
  description: string
  descriptionEn: string
  totalPlaces: number
  totalTours: number
  totalGuides: number
  coordinates: {
    lat: number
    lng: number
  }
}

export const provinces: Province[] = [
  {
    id: "nam-dinh",
    name: "Nam Định",
    nameEn: "Nam Dinh",
    code: "ND",
    region: "north",
    thumbnail: "https://picsum.photos/seed/namdinh/800/600",
    description:
      "Nam Định là tỉnh ven biển thuộc đồng bằng sông Hồng, nổi tiếng với di tích Phủ Dầy, chùa Cổ Lễ và ẩm thực phong phú như phở bò gánh, bánh cuốn làng Kênh.",
    descriptionEn:
      "Nam Dinh is a coastal province in the Red River Delta, famous for Phu Day relic, Co Le pagoda and rich cuisine like Pho Bo Ganh, Banh Cuon Lang Kenh.",
    totalPlaces: 156,
    totalTours: 24,
    totalGuides: 18,
    coordinates: {
      lat: 20.4388,
      lng: 106.1621,
    },
  },
  {
    id: "ha-noi",
    name: "Hà Nội",
    nameEn: "Hanoi",
    code: "HN",
    region: "north",
    thumbnail: "https://picsum.photos/seed/hanoi/800/600",
    description:
      "Thủ đô ngàn năm văn hiến với Hồ Gươm, Văn Miếu, phố cổ và ẩm thực đường phố nổi tiếng.",
    descriptionEn:
      "The thousand-year-old capital with Hoan Kiem Lake, Temple of Literature, Old Quarter and famous street food.",
    totalPlaces: 523,
    totalTours: 86,
    totalGuides: 124,
    coordinates: {
      lat: 21.0285,
      lng: 105.8542,
    },
  },
  {
    id: "ninh-binh",
    name: "Ninh Bình",
    nameEn: "Ninh Binh",
    code: "NB",
    region: "north",
    thumbnail: "https://picsum.photos/seed/ninhbinh/800/600",
    description:
      "Vùng đất cố đô với Tràng An, Tam Cốc - Bích Động, Cố đô Hoa Lư và núi non hùng vĩ.",
    descriptionEn:
      "Ancient capital land with Trang An, Tam Coc - Bich Dong, Hoa Lu Ancient Capital and majestic mountains.",
    totalPlaces: 89,
    totalTours: 32,
    totalGuides: 28,
    coordinates: {
      lat: 20.2506,
      lng: 105.9745,
    },
  },
]

export const getProvinceById = (id: string): Province | undefined => {
  return provinces.find((p) => p.id === id)
}

export const getProvincesByRegion = (region: Province["region"]): Province[] => {
  return provinces.filter((p) => p.region === region)
}
