/**
 * Screen Components Integration Tests
 * Basic smoke tests to ensure screens can be imported and are function components
 */

import * as screens from "../app/screens"

describe("Screen Components Smoke Tests", () => {
  // Auth Screens
  describe("Auth Screens", () => {
    it("exports LoginScreen as a function component", () => {
      expect(typeof screens.LoginScreen).toBe("function")
    })

    it("exports RegisterScreen as a function component", () => {
      expect(typeof screens.RegisterScreen).toBe("function")
    })

    it("exports ForgotPasswordScreen as a function component", () => {
      expect(typeof screens.ForgotPasswordScreen).toBe("function")
    })

    it("exports OTPVerificationScreen as a function component", () => {
      expect(typeof screens.OTPVerificationScreen).toBe("function")
    })

    it("exports OnboardingScreen as a function component", () => {
      expect(typeof screens.OnboardingScreen).toBe("function")
    })

    it("exports SplashScreen as a function component", () => {
      expect(typeof screens.SplashScreen).toBe("function")
    })

    it("exports WelcomeScreen as a function component", () => {
      expect(typeof screens.WelcomeScreen).toBe("function")
    })
  })

  // Main Screens
  describe("Main Screens", () => {
    it("exports HomeScreen as a function component", () => {
      expect(typeof screens.HomeScreen).toBe("function")
    })

    it("exports ExploreScreen as a function component", () => {
      expect(typeof screens.ExploreScreen).toBe("function")
    })

    it("exports MapScreen as a function component", () => {
      expect(typeof screens.MapScreen).toBe("function")
    })

    it("exports ForumScreen as a function component", () => {
      expect(typeof screens.ForumScreen).toBe("function")
    })

    it("exports ProfileScreen as a function component", () => {
      expect(typeof screens.ProfileScreen).toBe("function")
    })
  })

  // Detail Screens
  describe("Detail Screens", () => {
    it("exports PlaceDetailsScreen as a function component", () => {
      expect(typeof screens.PlaceDetailsScreen).toBe("function")
    })

    it("exports TourDetailsScreen as a function component", () => {
      expect(typeof screens.TourDetailsScreen).toBe("function")
    })

    it("exports GuideProfileScreen as a function component", () => {
      expect(typeof screens.GuideProfileScreen).toBe("function")
    })

    it("exports ProvinceDetailsScreen as a function component", () => {
      expect(typeof screens.ProvinceDetailsScreen).toBe("function")
    })

    it("exports PostDetailsScreen as a function component", () => {
      expect(typeof screens.PostDetailsScreen).toBe("function")
    })
  })

  // Action Screens
  describe("Action Screens", () => {
    it("exports BookingScreen as a function component", () => {
      expect(typeof screens.BookingScreen).toBe("function")
    })

    it("exports ChatScreen as a function component", () => {
      expect(typeof screens.ChatScreen).toBe("function")
    })

    it("exports CreatePostScreen as a function component", () => {
      expect(typeof screens.CreatePostScreen).toBe("function")
    })

    it("exports SearchScreen as a function component", () => {
      expect(typeof screens.SearchScreen).toBe("function")
    })

    it("exports QuestionnaireScreen as a function component", () => {
      expect(typeof screens.QuestionnaireScreen).toBe("function")
    })

    it("exports RecommendationsScreen as a function component", () => {
      expect(typeof screens.RecommendationsScreen).toBe("function")
    })

    it("exports GuideListScreen as a function component", () => {
      expect(typeof screens.GuideListScreen).toBe("function")
    })

    it("exports SubmitReviewScreen as a function component", () => {
      expect(typeof screens.SubmitReviewScreen).toBe("function")
    })
  })

  // Profile Screens
  describe("Profile Screens", () => {
    it("exports EditProfileScreen as a function component", () => {
      expect(typeof screens.EditProfileScreen).toBe("function")
    })

    it("exports SettingsScreen as a function component", () => {
      expect(typeof screens.SettingsScreen).toBe("function")
    })

    it("exports NotificationsScreen as a function component", () => {
      expect(typeof screens.NotificationsScreen).toBe("function")
    })

    it("exports BookingHistoryScreen as a function component", () => {
      expect(typeof screens.BookingHistoryScreen).toBe("function")
    })

    it("exports SavedPlacesScreen as a function component", () => {
      expect(typeof screens.SavedPlacesScreen).toBe("function")
    })

    it("exports MyReviewsScreen as a function component", () => {
      expect(typeof screens.MyReviewsScreen).toBe("function")
    })
  })
})
