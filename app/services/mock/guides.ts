/**
 * Mock data for tour guides
 */

export interface Guide {
  id: string
  name: string
  avatar: string
  provinceId: string
  experience: number // years
  rating: number
  reviewCount: number
  totalTours: number
  specialties: string[]
  specialtiesEn: string[]
  languages: string[]
  hourlyRate: number
  bio: string
  bioEn: string
  isOnline: boolean
  isVerified: boolean
  responseTime: string
  responseTimeEn: string
  phone?: string
  email?: string
}

export const guides: Guide[] = [
  {
    id: "guide-minh-duc",
    name: "Trần Minh Đức",
    avatar: "https://i.pravatar.cc/300?u=minhduc",
    provinceId: "nam-dinh",
    experience: 5,
    rating: 4.9,
    reviewCount: 156,
    totalTours: 324,
    specialties: ["Di tích lịch sử", "Tâm linh", "Ẩm thực"],
    specialtiesEn: ["Historical sites", "Spiritual", "Cuisine"],
    languages: ["Tiếng Việt", "English"],
    hourlyRate: 300000,
    bio: "Xin chào! Tôi là Minh Đức, hướng dẫn viên du lịch chuyên nghiệp với 5 năm kinh nghiệm tại Nam Định. Tôi sinh ra và lớn lên tại đây, am hiểu sâu sắc về văn hóa, lịch sử và ẩm thực địa phương. Hãy để tôi đưa bạn khám phá những điều tuyệt vời nhất của quê hương tôi!",
    bioEn:
      "Hello! I'm Minh Duc, a professional tour guide with 5 years of experience in Nam Dinh. Born and raised here, I have deep knowledge of local culture, history and cuisine. Let me take you to discover the best things about my hometown!",
    isOnline: true,
    isVerified: true,
    responseTime: "Thường trả lời trong 30 phút",
    responseTimeEn: "Usually responds within 30 minutes",
    phone: "0912345678",
    email: "minhduc.guide@gmail.com",
  },
  {
    id: "guide-thu-huong",
    name: "Lê Thu Hương",
    avatar: "https://i.pravatar.cc/300?u=thuhuong",
    provinceId: "nam-dinh",
    experience: 3,
    rating: 4.8,
    reviewCount: 89,
    totalTours: 178,
    specialties: ["Làng nghề", "Văn hóa", "Ẩm thực"],
    specialtiesEn: ["Craft villages", "Culture", "Cuisine"],
    languages: ["Tiếng Việt", "English", "中文"],
    hourlyRate: 250000,
    bio: "Chào bạn! Tôi là Thu Hương, một cô gái Nam Định yêu quê hương và muốn chia sẻ vẻ đẹp của nơi đây với mọi người. Tôi chuyên dẫn tour làng nghề truyền thống và ẩm thực địa phương. Đặc biệt, tôi có thể giao tiếp bằng tiếng Trung nên rất thuận tiện cho du khách Trung Quốc.",
    bioEn:
      "Hi! I'm Thu Huong, a Nam Dinh girl who loves my hometown and wants to share its beauty with everyone. I specialize in traditional craft village and local food tours. Especially, I can communicate in Chinese which is convenient for Chinese tourists.",
    isOnline: true,
    isVerified: true,
    responseTime: "Thường trả lời trong 1 giờ",
    responseTimeEn: "Usually responds within 1 hour",
    phone: "0923456789",
    email: "thuhuong.guide@gmail.com",
  },
  {
    id: "guide-van-long",
    name: "Phạm Văn Long",
    avatar: "https://i.pravatar.cc/300?u=vanlong",
    provinceId: "nam-dinh",
    experience: 2,
    rating: 4.7,
    reviewCount: 67,
    totalTours: 98,
    specialties: ["Biển", "Thiên nhiên", "Thể thao"],
    specialtiesEn: ["Beach", "Nature", "Sports"],
    languages: ["Tiếng Việt"],
    hourlyRate: 200000,
    bio: "Xin chào các bạn! Tôi là Văn Long, chuyên hướng dẫn các tour biển và thiên nhiên tại Nam Định. Với kinh nghiệm 2 năm làm hướng dẫn viên và am hiểu vùng biển Quất Lâm, tôi sẽ giúp bạn có những trải nghiệm tuyệt vời nhất.",
    bioEn:
      "Hello everyone! I'm Van Long, specializing in beach and nature tours in Nam Dinh. With 2 years of guide experience and deep knowledge of Quat Lam coastal area, I will help you have the best experiences.",
    isOnline: false,
    isVerified: true,
    responseTime: "Thường trả lời trong 2 giờ",
    responseTimeEn: "Usually responds within 2 hours",
    phone: "0934567890",
    email: "vanlong.guide@gmail.com",
  },
  {
    id: "guide-hong-nhung",
    name: "Nguyễn Hồng Nhung",
    avatar: "https://i.pravatar.cc/300?u=hongnhung",
    provinceId: "nam-dinh",
    experience: 4,
    rating: 4.9,
    reviewCount: 112,
    totalTours: 256,
    specialties: ["Tâm linh", "Lễ hội", "Văn hóa"],
    specialtiesEn: ["Spiritual", "Festivals", "Culture"],
    languages: ["Tiếng Việt", "English"],
    hourlyRate: 280000,
    bio: "Chào mừng đến với Nam Định! Tôi là Hồng Nhung, hướng dẫn viên chuyên về các tour tâm linh và lễ hội. Tôi có kiến thức sâu rộng về tín ngưỡng thờ Mẫu, lễ hội Phủ Dầy và các di tích tâm linh tại Nam Định.",
    bioEn:
      "Welcome to Nam Dinh! I'm Hong Nhung, a guide specializing in spiritual and festival tours. I have extensive knowledge of Mother Goddess worship, Phu Day festival and spiritual sites in Nam Dinh.",
    isOnline: true,
    isVerified: true,
    responseTime: "Thường trả lời trong 45 phút",
    responseTimeEn: "Usually responds within 45 minutes",
    phone: "0945678901",
    email: "hongnhung.guide@gmail.com",
  },
]

// Helper functions
export const getGuidesByProvince = (provinceId: string): Guide[] => {
  return guides.filter((g) => g.provinceId === provinceId)
}

export const getGuideById = (id: string): Guide | undefined => {
  return guides.find((g) => g.id === id)
}

export const getOnlineGuides = (): Guide[] => {
  return guides.filter((g) => g.isOnline)
}

export const getGuidesBySpecialty = (specialty: string): Guide[] => {
  return guides.filter(
    (g) => g.specialties.includes(specialty) || g.specialtiesEn.includes(specialty),
  )
}

export const getTopRatedGuides = (limit = 5): Guide[] => {
  return [...guides].sort((a, b) => b.rating - a.rating).slice(0, limit)
}

export const searchGuides = (query: string): Guide[] => {
  const lowercaseQuery = query.toLowerCase()
  return guides.filter(
    (g) =>
      g.name.toLowerCase().includes(lowercaseQuery) ||
      g.specialties.some((s) => s.toLowerCase().includes(lowercaseQuery)) ||
      g.specialtiesEn.some((s) => s.toLowerCase().includes(lowercaseQuery)),
  )
}

export const formatRate = (rate: number): string => {
  return new Intl.NumberFormat("vi-VN").format(rate) + "đ/giờ"
}
