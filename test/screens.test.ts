/**
 * Screen exports test
 * Verifies that all screens are properly exported from the index
 */

import * as screens from "../app/screens"

describe("Screen Exports", () => {
  const expectedScreens = [
    "BookingHistoryScreen",
    "BookingScreen",
    "ChatScreen",
    "CreatePostScreen",
    "EditProfileScreen",
    "ForgotPasswordScreen",
    "GuideListScreen",
    "GuideProfileScreen",
    "MyReviewsScreen",
    "NotificationsScreen",
    "OTPVerificationScreen",
    "PlaceDetailsScreen",
    "PostDetailsScreen",
    "ProvinceDetailsScreen",
    "QuestionnaireScreen",
    "RecommendationsScreen",
    "SavedPlacesScreen",
    "SearchScreen",
    "SettingsScreen",
    "SubmitReviewScreen",
    "TourDetailsScreen",
    // Main screens
    "HomeScreen",
    "ExploreScreen",
    "MapScreen",
    "ForumScreen",
    "ProfileScreen",
    // Auth screens
    "LoginScreen",
    "RegisterScreen",
    "OnboardingScreen",
    "SplashScreen",
    "WelcomeScreen",
  ]

  it("exports all required screens", () => {
    expectedScreens.forEach((screenName) => {
      expect(screens).toHaveProperty(screenName)
      expect(typeof (screens as Record<string, unknown>)[screenName]).toBe("function")
    })
  })

  it("exports BookingHistoryScreen as a function component", () => {
    expect(typeof screens.BookingHistoryScreen).toBe("function")
  })

  it("exports BookingScreen as a function component", () => {
    expect(typeof screens.BookingScreen).toBe("function")
  })

  it("exports ChatScreen as a function component", () => {
    expect(typeof screens.ChatScreen).toBe("function")
  })

  it("exports CreatePostScreen as a function component", () => {
    expect(typeof screens.CreatePostScreen).toBe("function")
  })

  it("exports EditProfileScreen as a function component", () => {
    expect(typeof screens.EditProfileScreen).toBe("function")
  })

  it("exports ForgotPasswordScreen as a function component", () => {
    expect(typeof screens.ForgotPasswordScreen).toBe("function")
  })

  it("exports GuideListScreen as a function component", () => {
    expect(typeof screens.GuideListScreen).toBe("function")
  })

  it("exports GuideProfileScreen as a function component", () => {
    expect(typeof screens.GuideProfileScreen).toBe("function")
  })

  it("exports MyReviewsScreen as a function component", () => {
    expect(typeof screens.MyReviewsScreen).toBe("function")
  })

  it("exports NotificationsScreen as a function component", () => {
    expect(typeof screens.NotificationsScreen).toBe("function")
  })

  it("exports OTPVerificationScreen as a function component", () => {
    expect(typeof screens.OTPVerificationScreen).toBe("function")
  })

  it("exports PlaceDetailsScreen as a function component", () => {
    expect(typeof screens.PlaceDetailsScreen).toBe("function")
  })

  it("exports PostDetailsScreen as a function component", () => {
    expect(typeof screens.PostDetailsScreen).toBe("function")
  })

  it("exports ProvinceDetailsScreen as a function component", () => {
    expect(typeof screens.ProvinceDetailsScreen).toBe("function")
  })

  it("exports QuestionnaireScreen as a function component", () => {
    expect(typeof screens.QuestionnaireScreen).toBe("function")
  })

  it("exports RecommendationsScreen as a function component", () => {
    expect(typeof screens.RecommendationsScreen).toBe("function")
  })

  it("exports SavedPlacesScreen as a function component", () => {
    expect(typeof screens.SavedPlacesScreen).toBe("function")
  })

  it("exports SearchScreen as a function component", () => {
    expect(typeof screens.SearchScreen).toBe("function")
  })

  it("exports SettingsScreen as a function component", () => {
    expect(typeof screens.SettingsScreen).toBe("function")
  })

  it("exports SubmitReviewScreen as a function component", () => {
    expect(typeof screens.SubmitReviewScreen).toBe("function")
  })

  it("exports TourDetailsScreen as a function component", () => {
    expect(typeof screens.TourDetailsScreen).toBe("function")
  })
})
