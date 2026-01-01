/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Config from "@/config"
import { useAuth } from "@/context/AuthContext"
import { ErrorBoundary } from "@/screens/ErrorScreen/ErrorBoundary"
import { LoginScreen } from "@/screens/LoginScreen"
import { OnboardingScreen } from "@/screens/OnboardingScreen"
import { RegisterScreen } from "@/screens/RegisterScreen"
import { WelcomeScreen } from "@/screens/WelcomeScreen"
// Auth screens
import { ForgotPasswordScreen } from "@/screens/ForgotPasswordScreen"
import { OTPVerificationScreen } from "@/screens/OTPVerificationScreen"
// Detail screens
import { PlaceDetailsScreen } from "@/screens/PlaceDetailsScreen"
import { TourDetailsScreen } from "@/screens/TourDetailsScreen"
import { GuideProfileScreen } from "@/screens/GuideProfileScreen"
import { ProvinceDetailsScreen } from "@/screens/ProvinceDetailsScreen"
import { PostDetailsScreen } from "@/screens/PostDetailsScreen"
// Action screens
import { SearchScreen } from "@/screens/SearchScreen"
import { BookingScreen } from "@/screens/BookingScreen"
import { ChatScreen } from "@/screens/ChatScreen"
import { CreatePostScreen } from "@/screens/CreatePostScreen"
import { SubmitReviewScreen } from "@/screens/SubmitReviewScreen"
// AI Features
import { QuestionnaireScreen } from "@/screens/QuestionnaireScreen"
import { RecommendationsScreen } from "@/screens/RecommendationsScreen"
// Profile sections
import { EditProfileScreen } from "@/screens/EditProfileScreen"
import { SettingsScreen } from "@/screens/SettingsScreen"
import { NotificationsScreen } from "@/screens/NotificationsScreen"
import { BookingHistoryScreen } from "@/screens/BookingHistoryScreen"
import { SavedPlacesScreen } from "@/screens/SavedPlacesScreen"
import { MyReviewsScreen } from "@/screens/MyReviewsScreen"
import { GuideListScreen } from "@/screens/GuideListScreen"
import { useAppTheme } from "@/theme/context"

// Demo navigator removed - deleted unused demo screens
import { MainNavigator } from "./MainNavigator"
import type { AppStackParamList, NavigationProps } from "./navigationTypes"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
  const { isAuthenticated } = useAuth()

  const {
    theme: { colors },
  } = useAppTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName={isAuthenticated ? "Main" : "Onboarding"}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        </>
      )}

      {/* Common screens accessible from both auth states */}
      <Stack.Group>
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} />
        <Stack.Screen name="TourDetails" component={TourDetailsScreen} />
        <Stack.Screen name="GuideProfile" component={GuideProfileScreen} />
        <Stack.Screen name="ProvinceDetails" component={ProvinceDetailsScreen} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="SubmitReview" component={SubmitReviewScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />
        <Stack.Screen name="SavedPlaces" component={SavedPlacesScreen} />
        <Stack.Screen name="MyReviews" component={MyReviewsScreen} />
        <Stack.Screen name="GuideList" component={GuideListScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export const AppNavigator = (props: NavigationProps) => {
  const { navigationTheme } = useAppTheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme} {...props}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <AppStack />
      </ErrorBoundary>
    </NavigationContainer>
  )
}
