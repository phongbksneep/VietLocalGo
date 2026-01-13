/**
 * Vietnamese translations for VietLocalGo
 * Primary language for the app
 */

const vi = {
  // Common strings used across the app
  common: {
    ok: "Đồng ý",
    cancel: "Hủy",
    back: "Quay lại",
    save: "Lưu",
    delete: "Xóa",
    edit: "Sửa",
    done: "Xong",
    loading: "Đang tải...",
    retry: "Thử lại",
    search: "Tìm kiếm",
    seeAll: "Xem tất cả",
    seeMore: "Xem thêm",
    close: "Đóng",
    continue: "Tiếp tục",
    skip: "Bỏ qua",
    next: "Tiếp",
    previous: "Trước",
    confirm: "Xác nhận",
    submit: "Gửi",
    send: "Gửi",
    share: "Chia sẻ",
    filter: "Lọc",
    sort: "Sắp xếp",
    apply: "Áp dụng",
    reset: "Đặt lại",
    yes: "Có",
    no: "Không",
    or: "Hoặc",
    and: "Và",
    error: "Lỗi",
    success: "Thành công",
    warning: "Cảnh báo",
    info: "Thông tin",
    noData: "Không có dữ liệu",
    noResults: "Không tìm thấy kết quả",
    pullToRefresh: "Kéo để làm mới",
    loadMore: "Tải thêm",
  },

  // Error messages
  errors: {
    generic: "Đã có lỗi xảy ra",
    network: "Lỗi kết nối mạng",
    timeout: "Hết thời gian chờ",
    serverError: "Lỗi máy chủ",
    notFound: "Không tìm thấy",
    unauthorized: "Phiên đăng nhập hết hạn",
    invalidEmail: "Email không hợp lệ",
    invalidPhone: "Số điện thoại không hợp lệ",
    invalidPassword: "Mật khẩu phải có ít nhất 6 ký tự",
    passwordMismatch: "Mật khẩu không khớp",
    required: "Trường này là bắt buộc",
    minLength: "Tối thiểu {{count}} ký tự",
    maxLength: "Tối đa {{count}} ký tự",
  },

  // Validation messages
  validation: {
    email: {
      required: "Vui lòng nhập email",
      invalid: "Email không hợp lệ",
    },
    phone: {
      required: "Vui lòng nhập số điện thoại",
      invalid: "Số điện thoại không hợp lệ",
    },
    password: {
      required: "Vui lòng nhập mật khẩu",
      minLength: "Mật khẩu phải có ít nhất 6 ký tự",
      weak: "Mật khẩu quá yếu",
    },
    name: {
      required: "Vui lòng nhập họ tên",
      minLength: "Họ tên phải có ít nhất 2 ký tự",
    },
  },

  // Splash Screen
  splash: {
    tagline: "Khám phá Việt Nam",
  },

  // Onboarding Screens
  onboarding: {
    slide1: {
      title: "Khám phá địa phương",
      description: "Trải nghiệm văn hóa, ẩm thực độc đáo tại từng vùng miền Việt Nam",
    },
    slide2: {
      title: "Kết nối hướng dẫn viên",
      description: "Gặp gỡ những người dẫn đường am hiểu địa phương, trải nghiệm như người bản xứ",
    },
    slide3: {
      title: "Chia sẻ trải nghiệm",
      description: "Ghi lại kỷ niệm, chia sẻ câu chuyện và kết nối với cộng đồng du lịch",
    },
    getStarted: "Bắt đầu",
    skip: "Bỏ qua",
    next: "Tiếp",
  },

  // Auth Screens
  auth: {
    login: {
      title: "Chào mừng trở lại!",
      subtitle: "Đăng nhập để tiếp tục",
      phoneLabel: "Số điện thoại",
      phonePlaceholder: "Nhập số điện thoại",
      passwordLabel: "Mật khẩu",
      passwordPlaceholder: "Nhập mật khẩu",
      rememberMe: "Ghi nhớ đăng nhập",
      forgotPassword: "Quên mật khẩu?",
      loginButton: "Đăng nhập",
      orContinueWith: "Hoặc tiếp tục với",
      noAccount: "Chưa có tài khoản?",
      signUp: "Đăng ký ngay",
    },
    register: {
      title: "Tạo tài khoản",
      subtitle: "Đăng ký để khám phá Việt Nam",
      nameLabel: "Họ và tên",
      namePlaceholder: "Nhập họ và tên",
      phoneLabel: "Số điện thoại",
      phonePlaceholder: "Nhập số điện thoại",
      emailLabel: "Email",
      emailPlaceholder: "Nhập email",
      passwordLabel: "Mật khẩu",
      passwordPlaceholder: "Nhập mật khẩu",
      confirmPasswordLabel: "Xác nhận mật khẩu",
      confirmPasswordPlaceholder: "Nhập lại mật khẩu",
      agreeToTerms: "Tôi đồng ý với",
      termsOfService: "Điều khoản sử dụng",
      and: "và",
      privacyPolicy: "Chính sách bảo mật",
      registerButton: "Đăng ký",
      haveAccount: "Đã có tài khoản?",
      signIn: "Đăng nhập",
    },
    forgotPassword: {
      title: "Quên mật khẩu",
      subtitle: "Nhập số điện thoại để nhận mã xác thực",
      sendCode: "Gửi mã",
      backToLogin: "Quay lại đăng nhập",
    },
    otp: {
      title: "Xác thực OTP",
      subtitle: "Nhập mã 6 số đã gửi đến {{phone}}",
      resend: "Gửi lại mã",
      resendIn: "Gửi lại sau {{seconds}}s",
      verify: "Xác thực",
    },
  },

  // Home Screen
  home: {
    greeting: "Xin chào",
    welcome: "Xin chào",
    searchPlaceholder: "Tìm kiếm địa điểm, ẩm thực...",
    currentLocation: "Vị trí hiện tại",
    quickActions: {
      food: "Ẩm thực",
      heritage: "Di tích",
      tours: "Tour",
      guides: "Hướng dẫn",
    },
    sections: {
      featuredTours: "Tour nổi bật",
      featuredProvinces: "Tỉnh nổi bật",
      recommendedForYou: "Đề xuất cho bạn",
      topFood: "Ẩm thực hàng đầu",
      nearbyPlaces: "Địa điểm gần bạn",
      hotPosts: "Bài viết nổi bật",
    },
    seeAll: "Xem tất cả",
    popularTours: "Tour phổ biến",
    bookNow: "Đặt ngay",
    perPerson: "/người",
  },

  // Explore Screen
  explore: {
    title: "Khám phá",
    searchPlaceholder: "Tìm kiếm...",
    categories: {
      all: "Tất cả",
      food: "Ẩm thực",
      heritage: "Di tích",
      temple: "Đền chùa",
      festival: "Lễ hội",
      craftVillage: "Làng nghề",
      beach: "Biển",
      shopping: "Mua sắm",
      nature: "Thiên nhiên",
    },
    filters: {
      nearMe: "Gần tôi",
      rating: "Đánh giá",
      priceRange: "Giá",
      openNow: "Đang mở",
    },
    sortBy: {
      recommended: "Đề xuất",
      rating: "Đánh giá cao nhất",
      distance: "Gần nhất",
      newest: "Mới nhất",
    },
    sortByLabel: "Sắp xếp theo",
    results: "{{count}} kết quả",
    noResults: "Không tìm thấy địa điểm nào",
  },

  // Map Screen
  map: {
    title: "Bản đồ",
    searchPlaceholder: "Tìm kiếm địa điểm...",
    searchPlace: "Tìm kiếm...",
    mapPlaceholder: "Chưa tích hợp bản đồ",
    integrationNote: "Tính năng bản đồ chưa được cấu hình trong demo này",
    all: "Tất cả",
    food: "Ẩm thực",
    tourism: "Du lịch",
    filters: {
      food: "Ẩm thực",
      heritage: "Di tích",
      temple: "Đền chùa",
      festival: "Lễ hội",
    },
    directions: "Chỉ đường",
    distance: "{{distance}} km",
    eta: "{{time}} phút",
    myLocation: "Vị trí của tôi",
    zoomIn: "Phóng to",
    zoomOut: "Thu nhỏ",
    nearMe: "Gần tôi",
    saved: "Đã lưu",
  },

  // Forum Screen
  forum: {
    title: "Cộng đồng",
    createPost: "Tạo bài viết",
    tabs: {
      all: "Tất cả",
      hot: "Hot 🔥",
      newest: "Mới nhất",
      following: "Đang theo dõi",
    },
    post: {
      like: "Thích",
      comment: "Bình luận",
      share: "Chia sẻ",
      comments: "{{count}} bình luận",
      commentsEmpty: "Chưa có bình luận nào",
      writeCommentPlaceholder: "Viết bình luận...",
      likes: "{{count}} lượt thích",
      shares: "{{count}} lượt chia sẻ",
      readMore: "Xem thêm",
      viewAllComments: "Xem tất cả {{count}} bình luận",
    },
    createPostScreen: {
      title: "Tạo bài viết",
      placeholder: "Bạn đang nghĩ gì về chuyến đi?",
      addLocation: "Thêm vị trí",
      addTags: "Thêm hashtag",
      privacy: "Quyền riêng tư",
      public: "Công khai",
      friends: "Bạn bè",
      private: "Riêng tư",
      post: "Đăng",
      categoryLabel: "Danh mục",
      categories: {
        question: "Hỏi đáp",
        review: "Review",
        share: "Chia sẻ",
        tips: "Mẹo hay",
      },
      titleLabel: "Tiêu đề",
      titlePlaceholder: "Nhập tiêu đề bài viết (tối thiểu 10 ký tự)",
      contentLabel: "Nội dung",
      contentPlaceholder: "Chia sẻ trải nghiệm của bạn... (tối thiểu 20 ký tự)",
      imagesLabel: "Hình ảnh",
      addImage: "Thêm ảnh",
      maxImages: "Tối đa 5 ảnh",
      guidelines: {
        title: "Lưu ý khi đăng bài",
        content:
          "• Nội dung phải liên quan đến du lịch\n• Không spam hoặc quảng cáo\n• Tôn trọng cộng đồng",
      },
    },
    empty: {
      title: "Chưa có bài viết",
      subtitle: "Hãy là người đầu tiên chia sẻ trải nghiệm!",
    },
  },

  // Profile Screen
  profile: {
    title: "Tài khoản",
    editProfile: "Chỉnh sửa hồ sơ",
    stats: {
      reviews: "Đánh giá",
      tours: "Tour",
      saved: "Đã lưu",
    },
    menu: {
      personalInfo: "Thông tin cá nhân",
      bookingHistory: "Lịch sử đặt tour",
      savedPlaces: "Đã lưu",
      myReviews: "Đánh giá của tôi",
      myReviewsScreen: {
        empty: {
          title: "Chưa có đánh giá nào",
          subtitle: "Chia sẻ trải nghiệm của bạn với cộng đồng",
        },
        avgRating: "TB sao",
        helpful: "Hữu ích",
        reviewsLabel: "Đánh giá",
        helpfulCount: "{{count}} người thấy hữu ích",
        type: {
          place: "Địa điểm",
          tour: "Tour",
          guide: "Hướng dẫn viên",
        },
      },
      notifications: "Thông báo",
      privacy: "Quyền riêng tư",
      feedback: "Phản hồi",
      about: "Về ứng dụng",
      language: "Ngôn ngữ",
      helpSupport: "Trợ giúp & Hỗ trợ",
      settings: "Cài đặt",
      logout: "Đăng xuất",
    },
    language: {
      vietnamese: "Tiếng Việt",
      english: "English",
    },
  },
  editProfile: {
    title: "Chỉnh sửa hồ sơ",
    changeAvatar: "Thay đổi ảnh",
    fields: {
      fullName: "Họ và tên",
      email: "Email",
      phone: "Số điện thoại",
      bio: "Giới thiệu",
    },
    placeholders: {
      fullName: "Nhập họ và tên",
      email: "Nhập email",
      phone: "Nhập số điện thoại",
      bio: "Viết vài dòng về bạn...",
    },
    deleteTitle: "Xóa tài khoản?",
    deleteConfirm: "Bạn có chắc muốn xóa tài khoản? Hành động này không thể hoàn tác.",
    info: {
      joinDate: "Ngày tham gia",
      posts: "Số bài viết",
      reviews: "Số đánh giá",
    },
    dangerTitle: "Vùng nguy hiểm",
    deleteAccount: "Xóa tài khoản",
    save: "Lưu thay đổi",
    saving: "Đang lưu...",
  },

  // Tour Screens
  tour: {
    list: {
      title: "Tour du lịch",
      filters: {
        duration: "Thời gian",
        price: "Giá",
        rating: "Đánh giá",
      },
    },
    details: {
      title: "Chi tiết tour",
      duration: "Thời gian",
      groupSize: "Số người",
      people: "{{min}}-{{max}} người",
      price: "Giá",
      perPerson: "/người",
      rating: "{{rating}} ({{count}} đánh giá)",
      overview: "Tổng quan",
      itinerary: "Lịch trình",
      includes: "Bao gồm",
      excludes: "Không bao gồm",
      reviews: "Đánh giá",
      guide: "Hướng dẫn viên",
      viewProfile: "Xem hồ sơ",
      chat: "Nhắn tin",
      bookTour: "Đặt tour",
      save: "Lưu",
      share: "Chia sẻ",
    },
    booking: {
      title: "Đặt tour",
      selectDate: "Chọn ngày",
      guests: "Số người",
      contactInfo: "Thông tin liên hệ",
      name: "Họ tên",
      phone: "Số điện thoại",
      email: "Email",
      notes: "Ghi chú (tùy chọn)",
      notesPlaceholder: "Yêu cầu đặc biệt...",
      summary: "Tổng kết",
      tourPrice: "Tour x {{count}} người",
      serviceFee: "Phí dịch vụ",
      total: "Tổng cộng",
      proceedToPayment: "Tiến hành thanh toán",
      confirmBooking: "Xác nhận đặt tour",
    },
  },

  // Place Screens
  place: {
    details: {
      title: "Chi tiết địa điểm",
      rating: "{{rating}} ({{count}} đánh giá)",
      distance: "{{distance}} km",
      openNow: "Đang mở",
      closed: "Đã đóng",
      openingHours: "Giờ mở cửa",
      address: "Địa chỉ",
      phone: "Điện thoại",
      website: "Website",
      priceRange: "Khoảng giá",
      about: "Giới thiệu",
      amenities: "Tiện ích",
      reviews: "Đánh giá & Nhận xét",
      photos: "Hình ảnh",
      directions: "Chỉ đường",
      writeReview: "Viết đánh giá",
      seeAllReviews: "Xem tất cả đánh giá",
    },
  },

  // Guide Screens
  guide: {
    list: {
      title: "Hướng dẫn viên",
      filters: {
        rating: "Đánh giá",
        experience: "Kinh nghiệm",
        language: "Ngôn ngữ",
        specialty: "Chuyên môn",
      },
      online: "Online",
      offline: "Offline",
    },
    profile: {
      title: "Hồ sơ hướng dẫn viên",
      experience: "{{years}} năm kinh nghiệm",
      totalTours: "{{count}} tour đã dẫn",
      rating: "{{rating}} ({{count}} đánh giá)",
      hourlyRate: "{{rate}}/giờ",
      about: "Giới thiệu",
      specialties: "Chuyên môn",
      languages: "Ngôn ngữ",
      reviews: "Đánh giá",
      tours: "Tour của hướng dẫn viên",
      chat: "Nhắn tin",
      bookGuide: "Đặt lịch",
      responseTime: "Thường trả lời trong {{time}}",
    },
  },

  // Chat Screen
  chat: {
    title: "Tin nhắn",
    inputPlaceholder: "Nhập tin nhắn...",
    send: "Gửi",
    online: "Đang hoạt động",
    offline: "Ngoại tuyến",
    empty: {
      title: "Bắt đầu cuộc trò chuyện",
    },
    typing: "Đang nhập...",
    today: "Hôm nay",
    yesterday: "Hôm qua",
    attachImage: "Đính kèm ảnh",
    attachFile: "Đính kèm file",
  },

  // Review Screen
  review: {
    title: "Viết đánh giá",
    ratingLabel: "Đánh giá của bạn",
    ratingHints: {
      1: "Rất tệ",
      2: "Tệ",
      3: "Bình thường",
      4: "Tốt",
      5: "Tuyệt vời",
    },
    contentLabel: "Nhận xét",
    contentPlaceholder: "Chia sẻ trải nghiệm của bạn...",
    addPhotos: "Thêm ảnh/video",
    tags: "Gắn thẻ",
    submit: "Gửi đánh giá",
    thankYou: "Cảm ơn đánh giá của bạn!",
    characterCount: "{{current}}/{{max}} ký tự",
  },

  // Notifications Screen
  notifications: {
    title: "Thông báo",
    markAllRead: "Đánh dấu đã đọc",
    empty: {
      title: "Không có thông báo",
      subtitle: "Bạn sẽ nhận thông báo khi có cập nhật mới",
    },
    types: {
      booking: "Đặt tour",
      message: "Tin nhắn",
      like: "Lượt thích",
      comment: "Bình luận",
      promo: "Khuyến mãi",
      system: "Hệ thống",
    },
    time: {
      justNow: "Vừa xong",
      minutesAgo: "{{count}} phút trước",
      hoursAgo: "{{count}} giờ trước",
      daysAgo: "{{count}} ngày trước",
    },
  },

  // Settings Screen
  settings: {
    title: "Cài đặt",
    sections: {
      account: "Tài khoản",
      notifications: "Thông báo",
      app: "Ứng dụng",
      support: "Hỗ trợ",
    },
    items: {
      editProfile: "Chỉnh sửa hồ sơ",
      changePassword: "Đổi mật khẩu",
      twoFactor: "Bảo mật 2 lớp",
      pushNotifications: "Thông báo đẩy",
      emailNotifications: "Thông báo email",
      messageNotifications: "Tin nhắn",
      language: "Ngôn ngữ",
      darkMode: "Chế độ tối",
      locationPermission: "Quyền vị trí",
      faq: "Câu hỏi thường gặp",
      contactSupport: "Liên hệ hỗ trợ",
      termsOfService: "Điều khoản sử dụng",
      privacyPolicy: "Chính sách bảo mật",
      about: "Về ứng dụng",
      version: "Phiên bản",
      logout: "Đăng xuất",
      deleteAccount: "Xóa tài khoản",
    },
    logout: {
      title: "Đăng xuất",
      message: "Bạn có chắc muốn đăng xuất?",
      confirm: "Đăng xuất",
      cancel: "Hủy",
    },
  },

  // Search Screen
  search: {
    title: "Tìm kiếm",
    placeholder: "Tìm kiếm địa điểm, tour, hướng dẫn viên...",
    recent: "Tìm kiếm gần đây",
    clearAll: "Xóa tất cả",
    suggestions: "Gợi ý",
    results: {
      places: "Địa điểm",
      tours: "Tour",
      guides: "Hướng dẫn viên",
      posts: "Bài viết",
    },
    noResults: "Không tìm thấy kết quả cho '{{query}}'",
    tryAgain: "Thử tìm kiếm với từ khóa khác",
  },

  // Booking History
  bookingHistory: {
    title: "Lịch sử đặt tour",
    tabs: {
      upcoming: "Sắp tới",
      completed: "Đã hoàn thành",
      cancelled: "Đã hủy",
    },
    status: {
      pending: "Chờ xác nhận",
      confirmed: "Đã xác nhận",
      completed: "Đã hoàn thành",
      cancelled: "Đã hủy",
    },
    empty: {
      title: "Chưa có đặt tour",
      subtitle: "Khám phá và đặt tour ngay!",
      action: "Khám phá tour",
    },
    details: {
      bookingId: "Mã đặt tour",
      date: "Ngày đi",
      guests: "Số người",
      total: "Tổng tiền",
      guide: "Hướng dẫn viên",
      contact: "Liên hệ",
      cancelBooking: "Hủy đặt tour",
      writeReview: "Viết đánh giá",
      bookAgain: "Đặt lại",
    },
    people: "{{count}} người",
  },

  // Province / Cards
  province: {
    places: "{{count}} địa điểm",
    tours: "{{count}} tour",
  },

  // Image Gallery
  imageGallery: {
    empty: "Chưa có ảnh",
  },

  // Saved Places
  savedPlaces: {
    title: "Đã lưu",
    tabs: {
      places: "Địa điểm",
      tours: "Tour",
    },
    savedCount: "Đã lưu {{count}} địa điểm",
    empty: {
      title: "Chưa có mục đã lưu",
      subtitle: "Lưu địa điểm và tour yêu thích của bạn",
      action: "Khám phá ngay",
    },
  },

  // Empty States
  emptyState: {
    generic: {
      title: "Không có dữ liệu",
      subtitle: "Thử lại sau nhé",
      action: "Thử lại",
    },
    noInternet: {
      title: "Không có kết nối mạng",
      subtitle: "Kiểm tra kết nối internet của bạn",
      action: "Thử lại",
    },
    error: {
      title: "Đã có lỗi xảy ra",
      subtitle: "Vui lòng thử lại sau",
      action: "Thử lại",
    },
  },

  // Tab Bar
  tabBar: {
    home: "Trang chủ",
    explore: "Khám phá",
    map: "Bản đồ",
    forum: "Cộng đồng",
    profile: "Tài khoản",
  },

  // Questionnaire
  questionnaire: {
    title: "Khảo sát sở thích",
    subtitle: "Giúp chúng tôi gợi ý tốt hơn cho bạn",
    step: "Bước {{current}}/{{total}}",
    questions: {
      travelStyle: {
        title: "Bạn thích loại hình du lịch nào?",
        subtitle: "Chọn tối đa 3",
      },
      budget: {
        title: "Ngân sách du lịch của bạn?",
        subtitle: "Chọn 1",
      },
      groupSize: {
        title: "Bạn thường đi du lịch với ai?",
        subtitle: "Chọn 1",
      },
    },
    continue: "Tiếp tục",
    skip: "Bỏ qua",
    finish: "Hoàn thành",
  },

  // Recommendations
  recommendations: {
    title: "Gợi ý cho bạn",
    basedOnPreferences: "Dựa trên sở thích của bạn",
    matchPercentage: "Phù hợp {{percentage}}%",
    found: "{{count}} tour phù hợp",
    refresh: "Làm mới gợi ý",
  },

  // Time & Date
  time: {
    today: "Hôm nay",
    yesterday: "Hôm qua",
    tomorrow: "Ngày mai",
    daysAgo: "{{count}} ngày trước",
    hoursAgo: "{{count}} giờ trước",
    minutesAgo: "{{count}} phút trước",
    justNow: "Vừa xong",
  },

  // Units
  units: {
    km: "km",
    m: "m",
    hour: "giờ",
    minute: "phút",
    day: "ngày",
    night: "đêm",
    person: "người",
    review: "đánh giá",
  },

  // Currency
  currency: {
    vnd: "đ",
    format: "{{amount}}đ",
  },

  // Language Screen
  language: {
    title: "Ngôn ngữ",
    description: "Chọn ngôn ngữ hiển thị cho ứng dụng",
    info: "Thay đổi ngôn ngữ sẽ áp dụng ngay lập tức cho toàn bộ ứng dụng.",
  },

  // Privacy Screen
  privacy: {
    title: "Quyền riêng tư",
    settingsTitle: "Cài đặt quyền riêng tư",
    policyTitle: "Chính sách bảo mật",
    dataTitle: "Quản lý dữ liệu",
    settings: {
      location: {
        title: "Chia sẻ vị trí",
        description: "Cho phép ứng dụng truy cập vị trí của bạn để gợi ý địa điểm gần đó",
      },
      activity: {
        title: "Chia sẻ hoạt động",
        description: "Cho phép bạn bè xem hoạt động của bạn trên ứng dụng",
      },
      ads: {
        title: "Quảng cáo cá nhân hóa",
        description: "Nhận quảng cáo dựa trên sở thích và hoạt động của bạn",
      },
    },
    policyContent:
      "VietLocalGo cam kết bảo vệ quyền riêng tư của bạn. Chúng tôi thu thập và xử lý dữ liệu cá nhân một cách minh bạch, chỉ sử dụng cho mục đích cải thiện trải nghiệm người dùng và cung cấp dịch vụ tốt hơn.",
    downloadData: "Tải xuống dữ liệu của tôi",
    deleteData: "Xóa tất cả dữ liệu",
    lastUpdated: "Cập nhật lần cuối",
  },

  // Help & Support Screen
  helpSupport: {
    title: "Trợ giúp & Hỗ trợ",
    contactTitle: "Liên hệ hỗ trợ",
    faqTitle: "Câu hỏi thường gặp",
    quickLinks: "Liên kết nhanh",
    contact: {
      phone: {
        title: "Hotline",
        subtitle: "24/7",
      },
      email: {
        title: "Email hỗ trợ",
        subtitle: "Phản hồi trong 24h",
      },
      chat: {
        title: "Chat trực tuyến",
        subtitle: "Nhắn tin với hỗ trợ viên",
      },
    },
    faq: {
      booking: {
        question: "Làm thế nào để đặt tour?",
        answer:
          "Bạn có thể đặt tour bằng cách chọn tour yêu thích, chọn ngày và số người, sau đó tiến hành thanh toán. Bạn sẽ nhận được xác nhận qua email và thông báo trong ứng dụng.",
      },
      cancel: {
        question: "Chính sách hủy tour như thế nào?",
        answer:
          "Bạn có thể hủy tour miễn phí trong vòng 24h sau khi đặt. Hủy trước 7 ngày khởi hành sẽ được hoàn 80% phí. Hủy trong vòng 7 ngày sẽ được hoàn 50%.",
      },
      payment: {
        question: "Các phương thức thanh toán được hỗ trợ?",
        answer:
          "Chúng tôi hỗ trợ thanh toán qua thẻ ngân hàng, ví điện tử (MoMo, ZaloPay, VNPay), và chuyển khoản ngân hàng.",
      },
      guide: {
        question: "Làm sao để trở thành hướng dẫn viên?",
        answer:
          "Bạn có thể đăng ký làm hướng dẫn viên trong mục Tài khoản > Trở thành hướng dẫn viên. Chúng tôi sẽ xem xét và liên hệ với bạn trong 3-5 ngày làm việc.",
      },
    },
    links: {
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản sử dụng",
    },
  },

  // Feedback Screen
  feedback: {
    title: "Góp ý & Phản hồi",
    description:
      "Chúng tôi rất trân trọng ý kiến của bạn. Mọi góp ý sẽ giúp chúng tôi cải thiện ứng dụng tốt hơn.",
    typeLabel: "Loại phản hồi",
    types: {
      bug: "Lỗi",
      feature: "Tính năng mới",
      improvement: "Cải thiện",
      other: "Khác",
    },
    titleLabel: "Tiêu đề",
    titlePlaceholder: "Mô tả ngắn gọn vấn đề hoặc đề xuất",
    descriptionLabel: "Mô tả chi tiết",
    descriptionPlaceholder: "Vui lòng mô tả chi tiết để chúng tôi hiểu rõ hơn...",
    emailLabel: "Email liên hệ (tùy chọn)",
    emailPlaceholder: "email@example.com",
    emailHelper: "Để lại email nếu bạn muốn chúng tôi phản hồi",
    info: "Phản hồi của bạn sẽ được gửi đến đội ngũ phát triển và được xử lý trong thời gian sớm nhất.",
    submit: "Gửi phản hồi",
    submitting: "Đang gửi...",
    successTitle: "Gửi thành công!",
    successMessage: "Cảm ơn bạn đã góp ý. Chúng tôi sẽ xem xét và cải thiện ứng dụng.",
  },

  // About Screen
  about: {
    title: "Về ứng dụng",
    tagline: "Khám phá Việt Nam theo cách của bạn",
    version: "Phiên bản",
    description:
      "VietLocalGo là ứng dụng giúp bạn khám phá ẩm thực và du lịch địa phương Việt Nam. Kết nối với hướng dẫn viên bản địa, chia sẻ trải nghiệm và tìm kiếm những địa điểm tuyệt vời nhất.",
    featuresTitle: "Tính năng nổi bật",
    features: {
      explore: "Khám phá địa điểm du lịch và ẩm thực",
      food: "Tìm kiếm món ăn ngon địa phương",
      guides: "Kết nối với hướng dẫn viên bản địa",
      community: "Chia sẻ trải nghiệm với cộng đồng",
    },
    followUs: "Theo dõi chúng tôi",
    legalTitle: "Pháp lý",
    links: {
      terms: "Điều khoản sử dụng",
      privacy: "Chính sách bảo mật",
      licenses: "Giấy phép mã nguồn mở",
    },
    madeWith: "Được phát triển với ❤️ tại Việt Nam",
    allRights: "Bảo lưu mọi quyền.",
  },
}

export default vi
