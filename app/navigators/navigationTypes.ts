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

// App Stack Navigator types
export type AppStackParamList = {
  // Auth screens
  Splash: undefined
  Onboarding: undefined
  Login: undefined
  Register: undefined
  // Main app
  Main: NavigatorScreenParams<MainTabParamList>
  // Detail screens
  TourDetails: { tourId: string }
  PlaceDetails: { placeId: string }
  GuideProfile: { guideId: string }
  ProvinceDetails: { provinceId: string }
  // Action screens
  Search: undefined
  Booking: { tourId: string }
  Chat: { recipientId: string }
  CreatePost: undefined
  // Legacy
  Welcome: undefined
  // Demo removed
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
