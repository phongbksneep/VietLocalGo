/**
 * Mock data index file
 * Export all mock data and helpers
 */

// Provinces
export * from "./provinces"

// Places
export * from "./places"

// Tours
export * from "./tours"

// Guides
export * from "./guides"

// Reviews
export * from "./reviews"

// Posts
export * from "./posts"

// Users
export * from "./users"

// Saved Places
export * from "./savedPlaces"

// Category definitions
export const categories = {
  food: {
    id: "food",
    name: "Ẩm thực",
    nameEn: "Food & Cuisine",
    icon: "restaurant",
    color: "#FF9800",
  },
  heritage: {
    id: "heritage",
    name: "Di tích lịch sử",
    nameEn: "Historical Heritage",
    icon: "account-balance",
    color: "#795548",
  },
  temple: {
    id: "temple",
    name: "Đền chùa",
    nameEn: "Temples & Pagodas",
    icon: "temple-buddhist",
    color: "#9C27B0",
  },
  festival: {
    id: "festival",
    name: "Lễ hội",
    nameEn: "Festivals",
    icon: "celebration",
    color: "#E91E63",
  },
  craft_village: {
    id: "craft_village",
    name: "Làng nghề",
    nameEn: "Craft Villages",
    icon: "handyman",
    color: "#4CAF50",
  },
  beach: {
    id: "beach",
    name: "Biển",
    nameEn: "Beaches",
    icon: "beach-access",
    color: "#2196F3",
  },
  shopping: {
    id: "shopping",
    name: "Mua sắm",
    nameEn: "Shopping",
    icon: "shopping-bag",
    color: "#F44336",
  },
  nature: {
    id: "nature",
    name: "Thiên nhiên",
    nameEn: "Nature",
    icon: "park",
    color: "#8BC34A",
  },
}

export const amenities = {
  parking: {
    id: "parking",
    name: "Đỗ xe",
    nameEn: "Parking",
    icon: "local-parking",
  },
  wifi: {
    id: "wifi",
    name: "Wifi",
    nameEn: "Wifi",
    icon: "wifi",
  },
  air_conditioning: {
    id: "air_conditioning",
    name: "Điều hòa",
    nameEn: "Air Conditioning",
    icon: "ac-unit",
  },
  card_payment: {
    id: "card_payment",
    name: "Thanh toán thẻ",
    nameEn: "Card Payment",
    icon: "credit-card",
  },
  restroom: {
    id: "restroom",
    name: "Nhà vệ sinh",
    nameEn: "Restroom",
    icon: "wc",
  },
  guide_available: {
    id: "guide_available",
    name: "Có hướng dẫn",
    nameEn: "Guide Available",
    icon: "support-agent",
  },
  souvenir_shop: {
    id: "souvenir_shop",
    name: "Quà lưu niệm",
    nameEn: "Souvenir Shop",
    icon: "card-giftcard",
  },
  restaurant: {
    id: "restaurant",
    name: "Nhà hàng",
    nameEn: "Restaurant",
    icon: "restaurant",
  },
  takeaway: {
    id: "takeaway",
    name: "Mang về",
    nameEn: "Takeaway",
    icon: "takeout-dining",
  },
  photo_spot: {
    id: "photo_spot",
    name: "Điểm chụp ảnh",
    nameEn: "Photo Spot",
    icon: "camera-alt",
  },
  local_products: {
    id: "local_products",
    name: "Đặc sản địa phương",
    nameEn: "Local Products",
    icon: "storefront",
  },
  beach_chair: {
    id: "beach_chair",
    name: "Ghế bãi biển",
    nameEn: "Beach Chair",
    icon: "deck",
  },
  shower: {
    id: "shower",
    name: "Phòng tắm",
    nameEn: "Shower",
    icon: "shower",
  },
}

// Home screen data helpers
export const getHomeScreenData = () => {
  const { getTopRatedPlaces, getPlacesByCategory } = require("./places")
  const { getPopularTours } = require("./tours")
  const { getHotPosts } = require("./posts")

  return {
    featuredTours: getPopularTours(4),
    topFoodPlaces: getPlacesByCategory("food").slice(0, 4),
    topAttractions: getTopRatedPlaces(4),
    hotPosts: getHotPosts(3),
  }
}

// Quick actions for home screen
export const quickActions = [
  {
    id: "food",
    name: "Ẩm thực",
    nameEn: "Food",
    icon: "🍜",
    color: "#FF9800",
    route: "Explore",
    params: { category: "food" },
  },
  {
    id: "heritage",
    name: "Di tích",
    nameEn: "Heritage",
    icon: "🏛️",
    color: "#795548",
    route: "Explore",
    params: { category: "heritage" },
  },
  {
    id: "tours",
    name: "Tour",
    nameEn: "Tours",
    icon: "🗺️",
    color: "#4CAF50",
    route: "TourList",
  },
  {
    id: "guides",
    name: "Hướng dẫn",
    nameEn: "Guides",
    icon: "👥",
    color: "#2196F3",
    route: "GuideList",
  },
]

// Banner slides for home screen
export const bannerSlides = [
  {
    id: "banner-1",
    title: "Lễ hội Phủ Dầy 2025",
    titleEn: "Phu Day Festival 2025",
    subtitle: "Khám phá tín ngưỡng thờ Mẫu",
    subtitleEn: "Explore Mother Goddess worship",
    image: "https://picsum.photos/seed/banner1/800/400",
    actionUrl: "/place/phu-day",
  },
  {
    id: "banner-2",
    title: "Ẩm thực Nam Định",
    titleEn: "Nam Dinh Cuisine",
    subtitle: "Phở bò gánh - Đặc sản không thể bỏ qua",
    subtitleEn: "Traditional Beef Pho - A must-try specialty",
    image: "https://picsum.photos/seed/banner2/800/400",
    actionUrl: "/category/food",
  },
  {
    id: "banner-3",
    title: "Làng hoa Vị Khê",
    titleEn: "Vi Khe Flower Village",
    subtitle: "Check-in mùa Tết cùng ngàn hoa",
    subtitleEn: "Tet season check-in with thousands of flowers",
    image: "https://picsum.photos/seed/banner3/800/400",
    actionUrl: "/place/lang-hoa-vi-khe",
  },
  {
    id: "banner-4",
    title: "Giảm 20% Tour cuối tuần",
    titleEn: "20% off Weekend Tours",
    subtitle: "Đặt ngay - Số lượng có hạn",
    subtitleEn: "Book now - Limited availability",
    image: "https://picsum.photos/seed/banner4/800/400",
    actionUrl: "/tours",
  },
]
