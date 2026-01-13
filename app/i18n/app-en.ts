/**
 * English translations for VietLocalGo
 * Secondary language for international users
 */

const appEn = {
  // Common strings used across the app
  common: {
    ok: "OK",
    cancel: "Cancel",
    back: "Back",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    done: "Done",
    loading: "Loading...",
    retry: "Retry",
    search: "Search",
    seeAll: "See all",
    seeMore: "See more",
    close: "Close",
    continue: "Continue",
    skip: "Skip",
    next: "Next",
    previous: "Previous",
    confirm: "Confirm",
    submit: "Submit",
    send: "Send",
    share: "Share",
    filter: "Filter",
    sort: "Sort",
    apply: "Apply",
    reset: "Reset",
    yes: "Yes",
    no: "No",
    or: "Or",
    and: "And",
    error: "Error",
    success: "Success",
    warning: "Warning",
    info: "Info",
    noData: "No data",
    noResults: "No results found",
    pullToRefresh: "Pull to refresh",
    loadMore: "Load more",
  },

  // Error messages
  errors: {
    generic: "Something went wrong",
    network: "Network connection error",
    timeout: "Request timed out",
    serverError: "Server error",
    notFound: "Not found",
    unauthorized: "Session expired",
    invalidEmail: "Invalid email",
    invalidPhone: "Invalid phone number",
    invalidPassword: "Password must be at least 6 characters",
    passwordMismatch: "Passwords do not match",
    required: "This field is required",
    minLength: "Minimum {{count}} characters",
    maxLength: "Maximum {{count}} characters",
  },

  // Validation messages
  validation: {
    email: {
      required: "Please enter email",
      invalid: "Invalid email",
    },
    phone: {
      required: "Please enter phone number",
      invalid: "Invalid phone number",
    },
    password: {
      required: "Please enter password",
      minLength: "Password must be at least 6 characters",
      weak: "Password is too weak",
    },
    name: {
      required: "Please enter your name",
      minLength: "Name must be at least 2 characters",
    },
  },

  // Splash Screen
  splash: {
    tagline: "Discover Vietnam",
  },

  // Onboarding Screens
  onboarding: {
    slide1: {
      title: "Discover Local",
      description: "Experience unique culture and cuisine in every region of Vietnam",
    },
    slide2: {
      title: "Connect with Guides",
      description: "Meet local guides who know the area, experience like a local",
    },
    slide3: {
      title: "Share Experiences",
      description: "Capture memories, share stories and connect with the travel community",
    },
    getStarted: "Get Started",
    skip: "Skip",
    next: "Next",
  },

  // Auth Screens
  auth: {
    login: {
      title: "Welcome Back!",
      subtitle: "Sign in to continue",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter phone number",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginButton: "Sign In",
      orContinueWith: "Or continue with",
      noAccount: "Don't have an account?",
      signUp: "Sign up now",
    },
    register: {
      title: "Create Account",
      subtitle: "Sign up to discover Vietnam",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter phone number",
      emailLabel: "Email",
      emailPlaceholder: "Enter email",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter password",
      confirmPasswordLabel: "Confirm Password",
      confirmPasswordPlaceholder: "Re-enter password",
      agreeToTerms: "I agree to the",
      termsOfService: "Terms of Service",
      and: "and",
      privacyPolicy: "Privacy Policy",
      registerButton: "Sign Up",
      haveAccount: "Already have an account?",
      signIn: "Sign in",
    },
    forgotPassword: {
      title: "Forgot Password",
      subtitle: "Enter your phone number to receive verification code",
      sendCode: "Send Code",
      backToLogin: "Back to login",
    },
    otp: {
      title: "OTP Verification",
      subtitle: "Enter the 6-digit code sent to {{phone}}",
      resend: "Resend code",
      resendIn: "Resend in {{seconds}}s",
      verify: "Verify",
    },
  },

  // Home Screen
  home: {
    greeting: "Hello",
    welcome: "Welcome",
    searchPlaceholder: "Search places, food...",
    currentLocation: "Current location",
    quickActions: {
      food: "Food",
      heritage: "Heritage",
      tours: "Tours",
      guides: "Guides",
    },
    sections: {
      featuredTours: "Featured Tours",
      featuredProvinces: "Featured Provinces",
      recommendedForYou: "Recommended For You",
      topFood: "Top Food",
      nearbyPlaces: "Nearby Places",
      hotPosts: "Hot Posts",
    },
    seeAll: "See all",
    popularTours: "Popular Tours",
    bookNow: "Book Now",
    perPerson: "/person",
  },

  // Explore Screen
  explore: {
    title: "Explore",
    searchPlaceholder: "Search...",
    categories: {
      all: "All",
      food: "Food",
      heritage: "Heritage",
      temple: "Temples",
      festival: "Festivals",
      craftVillage: "Craft Villages",
      beach: "Beaches",
      shopping: "Shopping",
      nature: "Nature",
    },
    filters: {
      nearMe: "Near me",
      rating: "Rating",
      priceRange: "Price",
      openNow: "Open now",
    },
    sortBy: {
      recommended: "Recommended",
      rating: "Highest rated",
      distance: "Nearest",
      newest: "Newest",
    },
    sortByLabel: "Sort by",
    results: "{{count}} results",
    noResults: "No places found",
  },

  // Map Screen
  map: {
    title: "Map",
    searchPlaceholder: "Search places...",
    searchPlace: "Search...",
    mapPlaceholder: "Map placeholder",
    integrationNote: "Map integration is not configured in this demo",
    all: "All",
    food: "Food",
    tourism: "Tourism",
    filters: {
      food: "Food",
      heritage: "Heritage",
      temple: "Temples",
      festival: "Festivals",
    },
    directions: "Directions",
    distance: "{{distance}} km",
    eta: "{{time}} min",
    myLocation: "My location",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    nearMe: "Near me",
    saved: "Saved",
  },

  // Forum Screen
  forum: {
    title: "Community",
    createPost: "Create Post",
    tabs: {
      all: "All",
      hot: "Hot 🔥",
      newest: "Newest",
      following: "Following",
    },
    post: {
      like: "Like",
      comment: "Comment",
      share: "Share",
      comments: "{{count}} comments",
      commentsEmpty: "No comments yet",
      writeCommentPlaceholder: "Write a comment...",
      likes: "{{count}} likes",
      shares: "{{count}} shares",
      readMore: "Read more",
      viewAllComments: "View all {{count}} comments",
      detailsTitle: "Post",
      notFound: "Post not found",
    },
    createPostScreen: {
      title: "Create Post",
      placeholder: "What's on your mind about your trip?",
      addLocation: "Add location",
      addTags: "Add hashtags",
      privacy: "Privacy",
      public: "Public",
      friends: "Friends",
      private: "Private",
      post: "Post",
      categoryLabel: "Category",
      categories: {
        question: "Question",
        review: "Review",
        share: "Share",
        tips: "Tips",
      },
      titleLabel: "Title",
      titlePlaceholder: "Enter post title (min 10 characters)",
      contentLabel: "Content",
      contentPlaceholder: "Share your experience... (min 20 characters)",
      imagesLabel: "Images",
      addImage: "Add image",
      maxImages: "Up to 5 images",
      guidelines: {
        title: "Posting guidelines",
        content:
          "• Content must be related to travel\n• No spam or advertising\n• Respect the community",
      },
    },
    empty: {
      title: "No posts yet",
      subtitle: "Be the first to share your experience!",
    },
    detailsTitle: "Post",
    notFound: "Post not found",
    share: "Share",
  },
  demoShowroom: {
    removedTitle: "Demo screens removed",
    removedBody: "These screens were internal demos and have been removed.",
  },

  // Profile Screen
  profile: {
    title: "Profile",
    editProfile: "Edit Profile",
    stats: {
      reviews: "Reviews",
      tours: "Tours",
      saved: "Saved",
    },
    menu: {
      personalInfo: "Personal Information",
      bookingHistory: "Booking History",
      savedPlaces: "Saved",
      myReviews: "My Reviews",
      myReviewsScreen: {
        empty: {
          title: "No reviews yet",
          subtitle: "Share your experience with the community",
        },
        title: "My Reviews",
        avgRating: "Avg rating",
        helpful: "Helpful",
        reviewsLabel: "Reviews",
        helpfulCount: "{{count}} people found this helpful",
        type: {
          place: "Place",
          tour: "Tour",
          guide: "Guide",
        },
      },
      notifications: "Notifications",
      privacy: "Privacy",
      feedback: "Feedback",
      about: "About",
      language: "Language",
      helpSupport: "Help & Support",
      settings: "Settings",
      logout: "Log Out",
    },
    language: {
      vietnamese: "Tiếng Việt",
      english: "English",
    },
    account: "Account",
    settings: "Settings",
    support: "Support",
  },
  editProfile: {
    title: "Edit Profile",
    changeAvatar: "Change avatar",
    fields: {
      fullName: "Full name",
      email: "Email",
      phone: "Phone number",
      bio: "Bio",
    },
    placeholders: {
      fullName: "Enter your full name",
      email: "Enter email",
      phone: "Enter phone number",
      bio: "Write a short bio...",
    },
    deleteTitle: "Delete account?",
    deleteConfirm: "Are you sure you want to delete your account? This action cannot be undone.",
    info: {
      joinDate: "Join date",
      posts: "Posts",
      reviews: "Reviews",
    },
    dangerTitle: "Danger zone",
    deleteAccount: "Delete account",
    save: "Save changes",
    saving: "Saving...",
  },

  // Tour Screens
  tour: {
    list: {
      title: "Tours",
      filters: {
        duration: "Duration",
        price: "Price",
        rating: "Rating",
      },
    },
    details: {
      title: "Tour Details",
      duration: "Duration",
      groupSize: "Group Size",
      people: "{{min}}-{{max}} people",
      notFound: "Tour not found",
      price: "Price",
      perPerson: "/person",
      rating: "{{rating}} ({{count}} reviews)",
      overview: "Overview",
      itinerary: "Itinerary",
      includes: "Includes",
      excludes: "Excludes",
      reviews: "Reviews",
      guide: "Tour Guide",
      viewProfile: "View Profile",
      chat: "Chat",
      bookTour: "Book Tour",
      save: "Save",
      share: "Share",
    },
    booking: {
      title: "Book Tour",
      selectDate: "Select Date",
      guests: "Guests",
      contactInfo: "Contact Information",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email",
      notes: "Notes (optional)",
      notesPlaceholder: "Special requests...",
      summary: "Summary",
      tourPrice: "Tour x {{count}} guests",
      serviceFee: "Service Fee",
      total: "Total",
      proceedToPayment: "Proceed to Payment",
      confirmBooking: "Confirm Booking",
    },
  },

  // Place Screens
  place: {
    details: {
      title: "Place Details",
      rating: "{{rating}} ({{count}} reviews)",
      distance: "{{distance}} km",
      openNow: "Open now",
      closed: "Closed",
      openingHours: "Opening Hours",
      address: "Address",
      phone: "Phone",
      website: "Website",
      priceRange: "Price Range",
      about: "About",
      amenities: "Amenities",
      reviews: "Reviews",
      photos: "Photos",
      directions: "Directions",
      writeReview: "Write Review",
      seeAllReviews: "See all reviews",
      notFound: "Place not found",
    },
  },

  // Guide Screens
  guide: {
    list: {
      title: "Tour Guides",
      filters: {
        rating: "Rating",
        experience: "Experience",
        language: "Language",
        specialty: "Specialty",
      },
      online: "Online",
      offline: "Offline",
    },
    profile: {
      title: "Guide Profile",
      experience: "{{years}} years experience",
      totalTours: "{{count}} tours completed",
      rating: "{{rating}} ({{count}} reviews)",
      hourlyRate: "{{rate}}/hour",
      about: "About",
      specialties: "Specialties",
      languages: "Languages",
      reviews: "Reviews",
      tours: "Guide's Tours",
      chat: "Chat",
      bookGuide: "Book Guide",
      responseTime: "Usually responds within {{time}}",
      notFound: "Guide not found",
    },
  },

  // Chat Screen
  chat: {
    title: "Messages",
    inputPlaceholder: "Type a message...",
    send: "Send",
    online: "Online",
    offline: "Offline",
    empty: {
      title: "Start a conversation",
    },
    typing: "Typing...",
    today: "Today",
    yesterday: "Yesterday",
    attachImage: "Attach image",
    attachFile: "Attach file",
  },

  // Review Screen
  review: {
    title: "Write Review",
    ratingLabel: "Your Rating",
    ratingHints: {
      1: "Terrible",
      2: "Poor",
      3: "Average",
      4: "Good",
      5: "Excellent",
    },
    contentLabel: "Your Review",
    contentPlaceholder: "Share your experience...",
    addPhotos: "Add photos/videos",
    tags: "Tags",
    submit: "Submit Review",
    thankYou: "Thank you for your review!",
    characterCount: "{{current}}/{{max}} characters",
  },

  // Notifications Screen
  notifications: {
    title: "Notifications",
    markAllRead: "Mark all as read",
    empty: {
      title: "No notifications",
      subtitle: "You'll receive notifications when there are updates",
    },
    types: {
      booking: "Booking",
      message: "Message",
      like: "Like",
      comment: "Comment",
      promo: "Promotion",
      system: "System",
    },
    time: {
      justNow: "Just now",
      minutesAgo: "{{count}} minutes ago",
      hoursAgo: "{{count}} hours ago",
      daysAgo: "{{count}} days ago",
    },
  },

  // Settings Screen
  settings: {
    title: "Settings",
    sections: {
      account: "Account",
      notifications: "Notifications",
      app: "App",
      support: "Support",
    },
    items: {
      editProfile: "Edit Profile",
      changePassword: "Change Password",
      twoFactor: "Two-Factor Authentication",
      pushNotifications: "Push Notifications",
      emailNotifications: "Email Notifications",
      messageNotifications: "Messages",
      language: "Language",
      darkMode: "Dark Mode",
      locationPermission: "Location Permission",
      faq: "FAQ",
      contactSupport: "Contact Support",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      about: "About",
      version: "Version",
      logout: "Log Out",
      deleteAccount: "Delete Account",
    },
    logout: {
      title: "Log Out",
      message: "Are you sure you want to log out?",
      confirm: "Log Out",
      cancel: "Cancel",
    },
  },

  // Search Screen
  search: {
    title: "Search",
    placeholder: "Search places, tours, guides...",
    recent: "Recent Searches",
    clearAll: "Clear all",
    suggestions: "Suggestions",
    results: {
      places: "Places",
      tours: "Tours",
      guides: "Guides",
      posts: "Posts",
    },
    noResults: "No results found for '{{query}}'",
    tryAgain: "Try a different search term",
    empty: "No results",
  },

  // Booking History
  bookingHistory: {
    title: "Booking History",
    tabs: {
      upcoming: "Upcoming",
      completed: "Completed",
      cancelled: "Cancelled",
    },
    status: {
      pending: "Pending",
      confirmed: "Confirmed",
      completed: "Completed",
      cancelled: "Cancelled",
    },
    empty: {
      title: "No bookings yet",
      subtitle: "Explore and book a tour now!",
      action: "Explore Tours",
    },
    details: {
      bookingId: "Booking ID",
      date: "Date",
      guests: "Guests",
      total: "Total",
      guide: "Guide",
      contact: "Contact",
      cancelBooking: "Cancel Booking",
      writeReview: "Write Review",
      bookAgain: "Book Again",
    },
    people: "{{count}} people",
  },

  // Province / Cards
  province: {
    places: "{{count}} places",
    tours: "{{count}} tours",
    notFound: "Province not found",
  },

  // Image Gallery
  imageGallery: {
    empty: "No images",
  },

  // Saved Places
  savedPlaces: {
    title: "Saved",
    tabs: {
      places: "Places",
      tours: "Tours",
    },
    savedCount: "{{count}} saved places",
    empty: {
      title: "No saved items",
      subtitle: "Save your favorite places and tours",
      action: "Explore Now",
    },
  },

  // Empty States
  emptyState: {
    generic: {
      title: "No data",
      subtitle: "Please try again later",
      action: "Retry",
    },
    noInternet: {
      title: "No internet connection",
      subtitle: "Check your internet connection",
      action: "Retry",
    },
    error: {
      title: "Something went wrong",
      subtitle: "Please try again later",
      action: "Retry",
    },
  },

  // Tab Bar
  tabBar: {
    home: "Home",
    explore: "Explore",
    map: "Map",
    forum: "Community",
    profile: "Profile",
  },

  // Questionnaire
  questionnaire: {
    title: "Preference Survey",
    subtitle: "Help us recommend better for you",
    step: "Step {{current}}/{{total}}",
    questions: {
      travelStyle: {
        title: "What type of travel do you prefer?",
        subtitle: "Select up to 3",
      },
      budget: {
        title: "What's your travel budget?",
        subtitle: "Select 1",
      },
      groupSize: {
        title: "Who do you usually travel with?",
        subtitle: "Select 1",
      },
    },
    continue: "Continue",
    skip: "Skip",
    finish: "Finish",
  },

  // Recommendations
  recommendations: {
    title: "Recommendations",
    basedOnPreferences: "Based on your preferences",
    matchPercentage: "{{percentage}}% match",
    found: "{{count}} tours found",
    refresh: "Refresh recommendations",
    noSuitableTours: "No suitable tours found",
  },

  // Time & Date
  time: {
    today: "Today",
    yesterday: "Yesterday",
    tomorrow: "Tomorrow",
    daysAgo: "{{count}} days ago",
    hoursAgo: "{{count}} hours ago",
    minutesAgo: "{{count}} minutes ago",
    justNow: "Just now",
  },

  // Units
  units: {
    km: "km",
    m: "m",
    hour: "hour",
    minute: "min",
    day: "day",
    night: "night",
    person: "person",
    review: "review",
  },

  // Currency
  currency: {
    vnd: "₫",
    format: "{{amount}}₫",
  },

  // Language Screen
  language: {
    title: "Language",
    description: "Choose your preferred display language",
    info: "Language changes will be applied immediately across the entire app.",
  },

  // Privacy Screen
  privacy: {
    title: "Privacy",
    settingsTitle: "Privacy Settings",
    policyTitle: "Privacy Policy",
    dataTitle: "Data Management",
    settings: {
      location: {
        title: "Share Location",
        description: "Allow the app to access your location to suggest nearby places",
      },
      activity: {
        title: "Share Activity",
        description: "Allow friends to see your activity on the app",
      },
      ads: {
        title: "Personalized Ads",
        description: "Receive ads based on your interests and activity",
      },
    },
    policyContent:
      "VietLocalGo is committed to protecting your privacy. We collect and process personal data transparently, only for the purpose of improving user experience and providing better services.",
    downloadData: "Download my data",
    deleteData: "Delete all data",
    lastUpdated: "Last updated",
  },

  // Help & Support Screen
  helpSupport: {
    title: "Help & Support",
    contactTitle: "Contact Support",
    faqTitle: "Frequently Asked Questions",
    quickLinks: "Quick Links",
    contact: {
      phone: {
        title: "Hotline",
        subtitle: "24/7",
      },
      email: {
        title: "Support Email",
        subtitle: "Response within 24h",
      },
      chat: {
        title: "Live Chat",
        subtitle: "Chat with support agent",
      },
    },
    faq: {
      booking: {
        question: "How to book a tour?",
        answer:
          "You can book a tour by selecting your preferred tour, choosing date and number of guests, then proceed to payment. You will receive confirmation via email and in-app notification.",
      },
      cancel: {
        question: "What is the cancellation policy?",
        answer:
          "You can cancel for free within 24 hours of booking. Cancel 7+ days before departure for 80% refund. Cancel within 7 days for 50% refund.",
      },
      payment: {
        question: "What payment methods are supported?",
        answer:
          "We support bank cards, e-wallets (MoMo, ZaloPay, VNPay), and bank transfers.",
      },
      guide: {
        question: "How to become a guide?",
        answer:
          "You can register as a guide in Account > Become a Guide. We will review and contact you within 3-5 business days.",
      },
    },
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },

  // Feedback Screen
  feedback: {
    title: "Feedback",
    description:
      "We value your feedback. Every suggestion helps us improve the app.",
    typeLabel: "Feedback Type",
    types: {
      bug: "Bug",
      feature: "New Feature",
      improvement: "Improvement",
      other: "Other",
    },
    titleLabel: "Title",
    titlePlaceholder: "Briefly describe the issue or suggestion",
    descriptionLabel: "Detailed Description",
    descriptionPlaceholder: "Please describe in detail so we can better understand...",
    emailLabel: "Contact Email (optional)",
    emailPlaceholder: "email@example.com",
    emailHelper: "Leave your email if you want us to respond",
    info: "Your feedback will be sent to the development team and processed as soon as possible.",
    submit: "Submit Feedback",
    submitting: "Submitting...",
    successTitle: "Submitted Successfully!",
    successMessage: "Thank you for your feedback. We will review and improve the app.",
  },

  // About Screen
  about: {
    title: "About",
    tagline: "Discover Vietnam your way",
    version: "Version",
    description:
      "VietLocalGo is an app that helps you explore local cuisine and tourism in Vietnam. Connect with local guides, share experiences, and find the best places.",
    featuresTitle: "Key Features",
    features: {
      explore: "Explore tourist spots and cuisine",
      food: "Find local delicious food",
      guides: "Connect with local guides",
      community: "Share experiences with community",
    },
    followUs: "Follow Us",
    legalTitle: "Legal",
    links: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      licenses: "Open Source Licenses",
    },
    madeWith: "Made with ❤️ in Vietnam",
    allRights: "All rights reserved.",
  },
}

export default appEn
