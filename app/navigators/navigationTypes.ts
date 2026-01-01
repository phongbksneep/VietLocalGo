import { ComponentProps } from "react"
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

// Main Tab Navigator types
export type MainTabParamList = {
  Home: undefined
  Explore: undefined
  Map: undefined
  Forum: undefined
  Profile: undefined
}

// Demo navigator removed - demo screens deleted
// Legacy Demo Tab types (kept for compatibility)
export type DemoTabParamList = {
  DemoShowroom: undefined
  DemoCommunity: undefined
  DemoPodcastList: undefined
  DemoDebug: undefined
}

export type DemoTabScreenProps<T extends keyof DemoTabParamList> = NativeStackScreenProps<
  DemoTabParamList,
  T
>

// Preferences type for questionnaire
export interface TravelPreferences {
  travelType: string
  interests: string[]
  budget: number
  duration: number
}

// App Stack Navigator types
export type AppStackParamList = {
  // Auth screens
  Splash: undefined
  Onboarding: undefined
  Login: undefined
  Register: undefined
  ForgotPassword: undefined
  OTPVerification: { phone: string; type: "register" | "forgot" }
  // Main app
  Main: NavigatorScreenParams<MainTabParamList>
  // Detail screens
  TourDetails: { tourId: string }
  PlaceDetails: { placeId: string }
  GuideProfile: { guideId: string }
  ProvinceDetails: { provinceId: string }
  PostDetails: { postId: string }
  // Action screens
  Search: undefined
  Booking: { tourId: string }
  Chat: { recipientId: string; recipientName: string }
  CreatePost: undefined
  SubmitReview: { targetId: string; targetType: "place" | "tour" | "guide" }
  // AI Features
  Questionnaire: undefined
  Recommendations: { preferences: TravelPreferences }
  // Profile sections
  EditProfile: undefined
  Settings: undefined
  Notifications: undefined
  BookingHistory: undefined
  SavedPlaces: undefined
  MyReviews: undefined
  GuideList: { provinceId?: string }
  // Legacy
  Welcome: undefined
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Demo types removed

export interface NavigationProps extends Partial<
  ComponentProps<typeof NavigationContainer<AppStackParamList>>
> {}
