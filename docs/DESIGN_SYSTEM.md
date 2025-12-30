# VietLocalGo - Design System & UI/UX Specification

> Version 1.0 | December 30, 2025

---

## 📱 App Overview

**VietLocalGo** là ứng dụng quảng bá ẩm thực và du lịch địa phương Việt Nam, bắt đầu từ tỉnh Nam Định và mở rộng ra toàn quốc.

### Target Users
- Du khách trong nước (25-45 tuổi)
- Du khách quốc tế muốn khám phá Việt Nam
- Người địa phương muốn chia sẻ văn hóa
- Food blogger & travel influencer

### Core Values
- 🎯 **Simple**: Dễ sử dụng như Grab
- 🌍 **Local-first**: Tôn vinh văn hóa địa phương
- 🤝 **Community**: Kết nối du khách với người địa phương
- 🔒 **Trust**: Đánh giá minh bạch, thông tin chính xác

---

## 🎨 Design Tokens

### Color Palette

```
Primary Colors (Màu chủ đạo - Lấy cảm hứng từ Nam Định)
├── Primary:        #E94235 (Đỏ - màu bánh dày Nam Định)
├── Primary Light:  #FF6B5B
├── Primary Dark:   #C62828
└── Primary 10%:    #FDE8E7

Secondary Colors
├── Secondary:      #4CAF50 (Xanh lá - ruộng lúa)
├── Secondary Light:#81C784
├── Secondary Dark: #388E3C
└── Secondary 10%:  #E8F5E9

Accent Colors
├── Accent Gold:    #FFB300 (Vàng - di tích)
├── Accent Blue:    #2196F3 (Biển)
├── Accent Orange:  #FF9800 (Ẩm thực)
└── Accent Purple:  #9C27B0 (Văn hóa)

Neutral Colors
├── Background:     #FFFFFF
├── Surface:        #F5F5F5
├── Border:         #E0E0E0
├── Text Primary:   #212121
├── Text Secondary: #757575
├── Text Disabled:  #BDBDBD
└── Overlay:        rgba(0,0,0,0.5)

Semantic Colors
├── Success:        #4CAF50
├── Warning:        #FF9800
├── Error:          #F44336
└── Info:           #2196F3
```

### Typography

```
Font Family: 
├── Primary: "Inter" (Latin) / "Noto Sans Vietnamese" (Vietnamese)
└── Accent:  "Playfair Display" (Headlines)

Font Sizes (using moderateScale):
├── xs:     12sp - Caption, labels
├── sm:     14sp - Body small, hints
├── md:     16sp - Body text
├── lg:     18sp - Subtitle
├── xl:     20sp - Title small
├── 2xl:    24sp - Title
├── 3xl:    28sp - Headline small
├── 4xl:    32sp - Headline
└── 5xl:    40sp - Display

Font Weights:
├── Regular:   400
├── Medium:    500
├── SemiBold:  600
└── Bold:      700

Line Heights:
├── Tight:    1.2
├── Normal:   1.5
└── Relaxed:  1.75
```

### Spacing Scale

```
Using scale() function:
├── xxs:    4dp
├── xs:     8dp
├── sm:     12dp
├── md:     16dp
├── lg:     24dp
├── xl:     32dp
├── 2xl:    48dp
├── 3xl:    64dp
└── 4xl:    96dp
```

### Border Radius

```
├── none:   0
├── sm:     4dp
├── md:     8dp
├── lg:     12dp
├── xl:     16dp
├── 2xl:    24dp
├── full:   9999dp (pill)
└── circle: 50%
```

### Shadows

```
Shadow Levels:
├── sm:   0 1dp 2dp rgba(0,0,0,0.1)
├── md:   0 2dp 4dp rgba(0,0,0,0.1)
├── lg:   0 4dp 8dp rgba(0,0,0,0.15)
├── xl:   0 8dp 16dp rgba(0,0,0,0.2)
└── 2xl:  0 16dp 32dp rgba(0,0,0,0.25)
```

---

## 🧩 Component Library

### 1. Buttons

```
Variants:
├── Primary:    Filled với primary color
├── Secondary:  Outlined với primary color
├── Tertiary:   Text-only
├── Danger:     Filled với error color
└── Ghost:      Transparent background

Sizes:
├── Small:  Height 32dp, padding 12dp
├── Medium: Height 44dp, padding 16dp (default)
└── Large:  Height 56dp, padding 24dp

States:
├── Default
├── Pressed (opacity 0.8)
├── Disabled (opacity 0.5)
└── Loading (với spinner)
```

### 2. Input Fields

```
Types:
├── Text Input
├── Password (với toggle visibility)
├── Search (với icon và clear button)
├── Phone (với country code)
├── OTP (4-6 boxes)
├── Textarea (multi-line)
└── Select/Dropdown

States:
├── Default
├── Focused (với primary border)
├── Error (với error border + message)
├── Disabled
└── Success (optional checkmark)
```

### 3. Cards

```
Types:
├── TourCard:       Image, title, rating, price, location
├── FoodCard:       Image, name, restaurant, price range
├── PlaceCard:      Image, name, category, distance
├── GuideCard:      Avatar, name, rating, specialties
├── ReviewCard:     Avatar, name, rating, text, images
├── PostCard:       Author, time, text, images, reactions
└── NotificationCard: Icon, title, description, time
```

### 4. Navigation

```
Components:
├── Header:         Title, back button, actions
├── TabBar:         5 tabs với icons (Home, Explore, Map, Forum, Profile)
├── BottomSheet:    Draggable modal từ dưới lên
└── Drawer:         Side menu (nếu cần)
```

---

## 📐 Screen Specifications

### Screen Categories

```
1. Onboarding Flow (3 screens)
2. Authentication (4 screens)
3. Main Tabs (5 screens)
4. Detail Screens (6 screens)
5. Action Screens (5 screens)
6. Settings (3 screens)
```

---

## 📱 SCREEN DESIGNS

### 1. SPLASH SCREEN

```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│        [App Logo]           │
│       VietLocalGo           │
│                             │
│    "Khám phá Việt Nam"      │
│                             │
│                             │
│      [Loading Spinner]      │
│                             │
└─────────────────────────────┘

Duration: 2-3 seconds
Animation: Logo fade in + scale
Transition: Slide to Onboarding/Home
```

### 2. ONBOARDING SCREENS (3 slides)

```
┌─────────────────────────────┐
│                             │
│    ┌───────────────────┐    │
│    │                   │    │
│    │   [Illustration]  │    │
│    │    Tour Guide     │    │
│    │                   │    │
│    └───────────────────┘    │
│                             │
│    Khám phá địa phương      │
│    ─────────────────────    │
│    Trải nghiệm văn hóa,     │
│    ẩm thực độc đáo tại      │
│    từng vùng miền           │
│                             │
│         ● ○ ○               │
│                             │
│    [  Bỏ qua  ] [ Tiếp  ]   │
│                             │
└─────────────────────────────┘

Slide 1: Khám phá địa phương (Local Discovery)
Slide 2: Kết nối hướng dẫn viên (Connect with Guides)
Slide 3: Chia sẻ trải nghiệm (Share Experience)
```

### 3. LOGIN SCREEN

```
┌─────────────────────────────┐
│     ←                       │
│                             │
│        [App Logo]           │
│                             │
│    Chào mừng trở lại!       │
│    ─────────────────────    │
│    Đăng nhập để tiếp tục    │
│                             │
│    ┌───────────────────┐    │
│    │ 📱 Số điện thoại  │    │
│    └───────────────────┘    │
│                             │
│    ┌───────────────────┐    │
│    │ 🔒 Mật khẩu    👁 │    │
│    └───────────────────┘    │
│                             │
│    [ ] Ghi nhớ đăng nhập    │
│                 Quên mật khẩu?│
│                             │
│    ┌───────────────────┐    │
│    │    ĐĂNG NHẬP      │    │
│    └───────────────────┘    │
│                             │
│    ────── Hoặc ──────       │
│                             │
│    [Google] [Facebook]      │
│    [       Apple      ]     │
│                             │
│    Chưa có tài khoản?       │
│    Đăng ký ngay             │
│                             │
└─────────────────────────────┘
```

### 4. REGISTER SCREEN

```
┌─────────────────────────────┐
│     ←    Đăng ký            │
│                             │
│    Tạo tài khoản mới        │
│    ─────────────────────    │
│                             │
│    ┌───────────────────┐    │
│    │ 👤 Họ và tên      │    │
│    └───────────────────┘    │
│                             │
│    ┌───────────────────┐    │
│    │ 📱 Số điện thoại  │    │
│    └───────────────────┘    │
│                             │
│    ┌───────────────────┐    │
│    │ ✉️ Email          │    │
│    └───────────────────┘    │
│                             │
│    ┌───────────────────┐    │
│    │ 🔒 Mật khẩu    👁 │    │
│    └───────────────────┘    │
│                             │
│    ┌───────────────────┐    │
│    │ 🔒 Xác nhận MK 👁 │    │
│    └───────────────────┘    │
│                             │
│    [ ] Tôi đồng ý với       │
│        Điều khoản sử dụng   │
│                             │
│    ┌───────────────────┐    │
│    │    ĐĂNG KÝ        │    │
│    └───────────────────┘    │
│                             │
│    Đã có tài khoản?         │
│    Đăng nhập                │
│                             │
└─────────────────────────────┘
```

### 5. HOME SCREEN (Main Tab)

```
┌─────────────────────────────┐
│ 📍 Nam Định      [🔔] [👤]  │
├─────────────────────────────┤
│                             │
│ ┌───────────────────────┐   │
│ │ 🔍 Tìm kiếm địa điểm  │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [Hero Banner Slider]  │   │
│ │  Lễ hội Phủ Dầy 2025  │   │
│ │     ● ○ ○ ○           │   │
│ └───────────────────────┘   │
│                             │
│ Quick Actions               │
│ ┌─────┬─────┬─────┬─────┐   │
│ │ 🍜  │ 🏛️  │ 🗺️  │ 👥  │   │
│ │Ẩm   │Di   │Tour │Hướng│   │
│ │thực │tích │     │dẫn  │   │
│ └─────┴─────┴─────┴─────┘   │
│                             │
│ Tour đề xuất cho bạn    >   │
│ ┌────────┐ ┌────────┐       │
│ │[Image] │ │[Image] │       │
│ │Phủ Dầy │ │Nhà thờ │       │
│ │⭐ 4.8  │ │⭐ 4.9  │       │
│ │500K/ng │ │Free    │       │
│ └────────┘ └────────┘       │
│                             │
│ Ẩm thực nổi bật         >   │
│ ┌────────┐ ┌────────┐       │
│ │[Image] │ │[Image] │       │
│ │Phở bò  │ │Bánh   │        │
│ │gánh    │ │cuốn   │        │
│ │⭐ 4.7  │ │⭐ 4.6 │        │
│ └────────┘ └────────┘       │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
│Home Explore Map  Forum Profile│
└─────────────────────────────┘
```

### 6. EXPLORE/DISCOVERY SCREEN

```
┌─────────────────────────────┐
│ ←   Khám phá         [⚙️]   │
├─────────────────────────────┤
│                             │
│ ┌───────────────────────┐   │
│ │ 🔍 Tìm kiếm...        │   │
│ └───────────────────────┘   │
│                             │
│ Danh mục                    │
│ ┌─────┬─────┬─────┬─────┐   │
│ │ 🍜  │ 🏛️  │ ⛩️  │ 🎭  │   │
│ │Ẩm   │Di   │Đền  │Lễ   │   │
│ │thực │tích │chùa │hội  │   │
│ ├─────┼─────┼─────┼─────┤   │
│ │ 🌾  │ 🏖️  │ 🛍️  │ 🎯  │   │
│ │Làng │Biển │Mua  │Tất  │   │
│ │nghề │     │sắm  │cả   │   │
│ └─────┴─────┴─────┴─────┘   │
│                             │
│ Bộ lọc: [Gần tôi▼] [⭐4+▼]  │
│                             │
│ ┌───────────────────────┐   │
│ │ [Image]               │   │
│ │ Chùa Cổ Lễ            │   │
│ │ 📍 2.5km • ⭐ 4.8 (234)│   │
│ │ Di tích lịch sử       │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [Image]               │   │
│ │ Phở Bò Gánh Nam Định  │   │
│ │ 📍 1.2km • ⭐ 4.9 (567)│   │
│ │ Ẩm thực đường phố     │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [Image]               │   │
│ │ Làng Hoa Vị Khê       │   │
│ │ 📍 5km • ⭐ 4.7 (123) │   │
│ │ Làng nghề truyền thống│   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 7. MAP SCREEN

```
┌─────────────────────────────┐
│ ←   Bản đồ           [⚙️]   │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ 🔍 Tìm kiếm địa điểm  │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │                       │   │
│ │     [Google Map]      │   │
│ │                       │   │
│ │    📍 Phở Gánh        │   │
│ │         📍            │   │
│ │    📍 Chùa     📍     │   │
│ │        Cổ Lễ  Phủ Dầy │   │
│ │              📍       │   │
│ │                       │   │
│ │    📍 Nhà thờ         │   │
│ │                       │   │
│ │             [📍]      │   │
│ │             [🧭]      │   │
│ └───────────────────────┘   │
│                             │
│ Filters:                    │
│ [🍜 Ẩm thực] [🏛️ Di tích]   │
│ [⛩️ Đền chùa] [🎭 Lễ hội]   │
│                             │
│ ┌───────────────────────┐   │
│ │ ━━━━━━━━━━━━━━━━━━━━  │   │
│ │ [📷]  Phở Bò Gánh     │   │
│ │       ⭐ 4.9 • 1.2km  │   │
│ │       [Chỉ đường]     │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 8. PLACE DETAILS SCREEN

```
┌─────────────────────────────┐
│ ←                   [♡][↗️] │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │                       │   │
│ │   [Image Gallery]     │   │
│ │   ← [1/5] →           │   │
│ │                       │   │
│ └───────────────────────┘   │
│                             │
│ Phở Bò Gánh Nam Định        │
│ ⭐ 4.9 (567 đánh giá)       │
│                             │
│ 📍 123 Trần Hưng Đạo,       │
│    TP Nam Định              │
│ 🕐 6:00 - 22:00 • Đang mở   │
│ 📞 0228 xxx xxx             │
│ 💰 25,000đ - 50,000đ        │
│                             │
│ ───────────────────────     │
│                             │
│ Giới thiệu                  │
│ Phở bò gánh là đặc sản      │
│ nổi tiếng của Nam Định...   │
│ [Xem thêm]                  │
│                             │
│ ───────────────────────     │
│                             │
│ Tiện ích                    │
│ [🅿️ Đỗ xe] [📶 Wifi]        │
│ [💳 Thẻ] [🌬️ Điều hòa]      │
│                             │
│ ───────────────────────     │
│                             │
│ Đánh giá & Nhận xét (567)   │
│ ┌───────────────────────┐   │
│ │ [👤] Nguyễn Văn A     │   │
│ │ ⭐⭐⭐⭐⭐ • 2 ngày trước │   │
│ │ "Phở ngon xuất sắc,   │   │
│ │  nước dùng đậm đà..." │   │
│ │ [📷][📷][📷]           │   │
│ └───────────────────────┘   │
│                             │
│ [Xem tất cả đánh giá]       │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ [Chỉ đường] [Viết đánh giá]│
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 9. TOUR DETAILS SCREEN

```
┌─────────────────────────────┐
│ ←                   [♡][↗️] │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │   [Image Gallery]     │   │
│ │   ← [1/8] →           │   │
│ └───────────────────────┘   │
│                             │
│ Tour Phủ Dầy - Chùa Cổ Lễ   │
│ ⭐ 4.8 (234 đánh giá)       │
│                             │
│ ┌─────────────────────────┐ │
│ │ 🕐 1 ngày  │ 👥 2-15 người│ │
│ │ 📍 Nam Định│ 🚗 Có đưa đón│ │
│ └─────────────────────────┘ │
│                             │
│ Lịch trình                  │
│ ├─ 7:00  Đón khách         │
│ ├─ 8:30  Tham quan Phủ Dầy │
│ ├─ 11:00 Ăn trưa đặc sản   │
│ ├─ 13:30 Chùa Cổ Lễ        │
│ ├─ 15:00 Làng hoa Vị Khê   │
│ └─ 17:00 Kết thúc          │
│                             │
│ Bao gồm                     │
│ ✅ Xe đưa đón               │
│ ✅ Hướng dẫn viên           │
│ ✅ Bữa trưa                 │
│ ✅ Vé tham quan             │
│                             │
│ Không bao gồm               │
│ ❌ Chi phí cá nhân          │
│ ❌ Tip cho HDV              │
│                             │
│ Hướng dẫn viên              │
│ ┌───────────────────────┐   │
│ │ [👤] Trần Minh Đức    │   │
│ │ ⭐ 4.9 • 5 năm KN     │   │
│ │ [Xem profile] [Chat]  │   │
│ └───────────────────────┘   │
│                             │
│ Đánh giá từ khách du lịch   │
│ [Xem 234 đánh giá]          │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ 500,000đ/người        │   │
│ │ [    ĐẶT TOUR    ]    │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 10. BOOKING SCREEN

```
┌─────────────────────────────┐
│ ←   Đặt tour                │
├─────────────────────────────┤
│                             │
│ Tour Phủ Dầy - Chùa Cổ Lễ   │
│ 500,000đ/người              │
│                             │
│ ───────────────────────     │
│                             │
│ Chọn ngày                   │
│ ┌───────────────────────┐   │
│ │ 📅 15/01/2025         │   │
│ └───────────────────────┘   │
│                             │
│ Số người                    │
│ ┌───────────────────────┐   │
│ │  [-]     2      [+]   │   │
│ └───────────────────────┘   │
│                             │
│ Thông tin liên hệ           │
│ ┌───────────────────────┐   │
│ │ 👤 Nguyễn Văn A       │   │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 📱 0912 345 678       │   │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ ✉️ email@example.com  │   │
│ └───────────────────────┘   │
│                             │
│ Ghi chú (tùy chọn)          │
│ ┌───────────────────────┐   │
│ │ Có trẻ em 5 tuổi...   │   │
│ └───────────────────────┘   │
│                             │
│ ───────────────────────     │
│                             │
│ Tổng kết                    │
│ Tour x 2 người    1,000,000đ│
│ Phí dịch vụ          50,000đ│
│ ─────────────────────────── │
│ Tổng cộng        1,050,000đ │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ [  TIẾN HÀNH THANH TOÁN ]│   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 11. GUIDE LIST SCREEN

```
┌─────────────────────────────┐
│ ←   Hướng dẫn viên   [🔍]   │
├─────────────────────────────┤
│                             │
│ Bộ lọc:                     │
│ [Gần tôi▼] [Đánh giá▼]      │
│ [Ngôn ngữ▼] [Chuyên môn▼]   │
│                             │
│ ┌───────────────────────┐   │
│ │ [👤]                  │   │
│ │ Trần Minh Đức         │   │
│ │ ⭐ 4.9 (156 đánh giá) │   │
│ │ 📍 Nam Định • 5 năm KN│   │
│ │ 🏷️ Di tích, Ẩm thực   │   │
│ │ 🌐 VI, EN             │   │
│ │ 💰 300K/giờ           │   │
│ │ [Xem profile] [Chat]  │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [👤]                  │   │
│ │ Lê Thu Hương          │   │
│ │ ⭐ 4.8 (89 đánh giá)  │   │
│ │ 📍 Nam Định • 3 năm KN│   │
│ │ 🏷️ Làng nghề, Văn hóa │   │
│ │ 🌐 VI, EN, CN         │   │
│ │ 💰 250K/giờ           │   │
│ │ [Xem profile] [Chat]  │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [👤]                  │   │
│ │ Phạm Văn Long         │   │
│ │ ⭐ 4.7 (67 đánh giá)  │   │
│ │ 📍 Nam Định • 2 năm KN│   │
│ │ 🏷️ Biển, Thiên nhiên  │   │
│ │ 🌐 VI                 │   │
│ │ 💰 200K/giờ           │   │
│ │ [Xem profile] [Chat]  │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 12. CHAT SCREEN

```
┌─────────────────────────────┐
│ ←   Trần Minh Đức    [📞]   │
│     🟢 Online               │
├─────────────────────────────┤
│                             │
│      ┌─────────────────┐    │
│      │ Xin chào! Tôi   │    │
│      │ có thể giúp gì? │    │
│      └─────────────────┘    │
│                    10:30    │
│                             │
│ ┌─────────────────┐         │
│ │ Chào anh, tôi   │         │
│ │ muốn book tour  │         │
│ │ Phủ Dầy ngày    │         │
│ │ 15/01 được      │         │
│ │ không ạ?        │         │
│ └─────────────────┘         │
│ 10:32                       │
│                             │
│      ┌─────────────────┐    │
│      │ Dạ được bạn nhé!│    │
│      │ Ngày đó tôi rảnh│    │
│      │ Tour có 2 người │    │
│      │ đúng không ạ?   │    │
│      └─────────────────┘    │
│                    10:33    │
│                             │
│ ┌─────────────────┐         │
│ │ Dạ đúng rồi ạ   │         │
│ └─────────────────┘         │
│ 10:34                       │
│                             │
│      ┌─────────────────┐    │
│      │ 📎 Tour Details │    │
│      │ Phủ Dầy - Cổ Lễ │    │
│      │ 500K/người      │    │
│      │ [Xem chi tiết]  │    │
│      └─────────────────┘    │
│                    10:35    │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ [📷][📎] Aa...  [➤]   │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 13. FORUM SCREEN

```
┌─────────────────────────────┐
│ ←   Cộng đồng        [✏️]   │
├─────────────────────────────┤
│                             │
│ Tabs:                       │
│ [Tất cả] [Hot 🔥] [Mới nhất]│
│                             │
│ ┌───────────────────────┐   │
│ │ [👤] Nguyễn Văn A     │   │
│ │ 2 giờ trước           │   │
│ │                       │   │
│ │ Vừa đi tour Phủ Dầy   │   │
│ │ về, cảnh đẹp quá các  │   │
│ │ bạn ơi! Recommend     │   │
│ │ 100% 🥰               │   │
│ │                       │   │
│ │ [📷][📷][📷][+2]      │   │
│ │                       │   │
│ │ ❤️ 234  💬 45  ↗️ 12   │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [👤] Trần Thị B       │   │
│ │ 5 giờ trước           │   │
│ │                       │   │
│ │ Hỏi mọi người: Phở    │   │
│ │ gánh chỗ nào ngon     │   │
│ │ nhất Nam Định ạ?      │   │
│ │                       │   │
│ │ ❤️ 56   💬 23  ↗️ 5    │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [👤] Lê Văn C         │   │
│ │ 1 ngày trước          │   │
│ │                       │   │
│ │ Review chi tiết làng  │   │
│ │ hoa Vị Khê mùa Tết    │   │
│ │ [Xem thêm...]         │   │
│ │                       │   │
│ │ [📷][📷][📷][📷]      │   │
│ │                       │   │
│ │ ❤️ 567  💬 89  ↗️ 34   │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 14. CREATE POST SCREEN

```
┌─────────────────────────────┐
│ ←   Tạo bài viết    [Đăng]  │
├─────────────────────────────┤
│                             │
│ ┌───────────────────────┐   │
│ │ [👤] Nguyễn Văn A     │   │
│ │ 🌍 Công khai ▼        │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │                       │   │
│ │ Bạn đang nghĩ gì về   │   │
│ │ chuyến đi?            │   │
│ │                       │   │
│ │                       │   │
│ │                       │   │
│ │                       │   │
│ │                       │   │
│ └───────────────────────┘   │
│                             │
│ ┌─────┬─────┬─────┬─────┐   │
│ │[📷1]│[📷2]│[📷3]│[+]  │   │
│ └─────┴─────┴─────┴─────┘   │
│                             │
│ Gắn thẻ địa điểm            │
│ ┌───────────────────────┐   │
│ │ 📍 Thêm vị trí...     │   │
│ └───────────────────────┘   │
│                             │
│ Gắn thẻ chủ đề              │
│ ┌───────────────────────┐   │
│ │ #namdinh #dulich      │   │
│ │ #amthuc               │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ [📷] [🎥] [📍] [#️⃣]    │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 15. PROFILE SCREEN

```
┌─────────────────────────────┐
│         Tài khoản    [⚙️]   │
├─────────────────────────────┤
│                             │
│        ┌─────────┐          │
│        │  [👤]   │          │
│        │ Avatar  │          │
│        └─────────┘          │
│       Nguyễn Văn A          │
│     @nguyenvana • Nam Định  │
│                             │
│ ┌─────────┬─────────┐       │
│ │   12    │    5    │       │
│ │ Đánh giá│  Tour   │       │
│ └─────────┴─────────┘       │
│                             │
│ ───────────────────────     │
│                             │
│ ┌───────────────────────┐   │
│ │ 👤  Thông tin cá nhân │ > │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ 📅  Lịch sử đặt tour  │ > │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ❤️  Đã lưu            │ > │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ⭐  Đánh giá của tôi  │ > │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ 🔔  Thông báo         │ > │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ 🌐  Ngôn ngữ: Tiếng Việt│>│
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ❓  Trợ giúp & Hỗ trợ │ > │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ 🚪  Đăng xuất         │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 16. QUESTIONNAIRE SCREEN

```
┌─────────────────────────────┐
│ ←   Khảo sát sở thích       │
├─────────────────────────────┤
│                             │
│ Bước 1/3                    │
│ ████████░░░░░░░░░░░         │
│                             │
│ Bạn thích loại hình         │
│ du lịch nào?                │
│                             │
│ (Chọn tối đa 3)             │
│                             │
│ ┌───────────────────────┐   │
│ │ ✅ 🏛️ Di tích lịch sử  │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ☐ 🍜 Ẩm thực          │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ✅ ⛩️ Tâm linh         │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ☐ 🌾 Làng nghề        │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ☐ 🎭 Lễ hội           │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ ✅ 🏖️ Biển            │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ [    TIẾP TỤC    ]    │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 17. RECOMMENDATIONS SCREEN

```
┌─────────────────────────────┐
│ ←   Gợi ý cho bạn    [🔄]   │
├─────────────────────────────┤
│                             │
│ ┌───────────────────────┐   │
│ │ 🎯 Dựa trên sở thích  │   │
│ │    của bạn            │   │
│ └───────────────────────┘   │
│                             │
│ Phù hợp nhất (95%)          │
│ ┌───────────────────────┐   │
│ │ [Image]               │   │
│ │ Tour Phủ Dầy          │   │
│ │ ⭐ 4.9 • 🕐 1 ngày     │   │
│ │ 💰 500K/người         │   │
│ │ Match: 95%            │   │
│ │ [Xem chi tiết]        │   │
│ └───────────────────────┘   │
│                             │
│ Có thể bạn thích (87%)      │
│ ┌───────────────────────┐   │
│ │ [Image]               │   │
│ │ Biển Quất Lâm         │   │
│ │ ⭐ 4.7 • 📍 35km       │   │
│ │ Match: 87%            │   │
│ │ [Xem chi tiết]        │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ [Image]               │   │
│ │ Chùa Cổ Lễ            │   │
│ │ ⭐ 4.8 • 📍 5km        │   │
│ │ Match: 82%            │   │
│ │ [Xem chi tiết]        │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 18. SUBMIT REVIEW SCREEN

```
┌─────────────────────────────┐
│ ←   Viết đánh giá           │
├─────────────────────────────┤
│                             │
│ ┌───────────────────────┐   │
│ │ [📷] Phở Bò Gánh      │   │
│ │ 📍 Nam Định           │   │
│ └───────────────────────┘   │
│                             │
│ Đánh giá của bạn            │
│ ┌───────────────────────┐   │
│ │   ⭐ ⭐ ⭐ ⭐ ☆        │   │
│ │     Rất tốt            │   │
│ └───────────────────────┘   │
│                             │
│ Nhận xét                    │
│ ┌───────────────────────┐   │
│ │ Chia sẻ trải nghiệm   │   │
│ │ của bạn...            │   │
│ │                       │   │
│ │                       │   │
│ │                       │   │
│ │                       │   │
│ │                       │   │
│ └───────────────────────┘   │
│                 0/500 ký tự │
│                             │
│ Thêm ảnh/video              │
│ ┌─────┬─────┬─────┬─────┐   │
│ │[📷] │[📷] │[📷] │ [+] │   │
│ └─────┴─────┴─────┴─────┘   │
│                             │
│ Tags                        │
│ [Ngon] [Sạch sẽ] [Giá tốt]  │
│ [Phục vụ tốt] [View đẹp]    │
│                             │
├─────────────────────────────┤
│ ┌───────────────────────┐   │
│ │ [    GỬI ĐÁNH GIÁ   ] │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

### 19. NOTIFICATIONS SCREEN

```
┌─────────────────────────────┐
│ ←   Thông báo        [⚙️]   │
├─────────────────────────────┤
│                             │
│ Hôm nay                     │
│ ┌───────────────────────┐   │
│ │ 🔔 Đặt tour thành công│   │
│ │ Tour Phủ Dầy ngày     │   │
│ │ 15/01/2025 đã được    │   │
│ │ xác nhận              │   │
│ │ 10 phút trước         │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ 💬 Tin nhắn mới       │   │
│ │ Trần Minh Đức đã gửi  │   │
│ │ tin nhắn cho bạn      │   │
│ │ 2 giờ trước           │   │
│ └───────────────────────┘   │
│                             │
│ Hôm qua                     │
│ ┌───────────────────────┐   │
│ │ ❤️ Lượt thích mới     │   │
│ │ 15 người đã thích bài │   │
│ │ viết của bạn          │   │
│ │ 1 ngày trước          │   │
│ └───────────────────────┘   │
│                             │
│ ┌───────────────────────┐   │
│ │ 🎉 Khuyến mãi         │   │
│ │ Giảm 20% tour cuối    │   │
│ │ tuần tại Nam Định     │   │
│ │ 1 ngày trước          │   │
│ └───────────────────────┘   │
│                             │
│ Tuần này                    │
│ ┌───────────────────────┐   │
│ │ ⭐ Đánh giá của bạn   │   │
│ │ "Phở Bò Gánh" đã nhận │   │
│ │ 23 lượt helpful       │   │
│ │ 3 ngày trước          │   │
│ └───────────────────────┘   │
│                             │
├─────────────────────────────┤
│ 🏠    🧭    🗺️    💬    👤  │
└─────────────────────────────┘
```

### 20. SETTINGS SCREEN

```
┌─────────────────────────────┐
│ ←   Cài đặt                 │
├─────────────────────────────┤
│                             │
│ TÀI KHOẢN                   │
│ ┌───────────────────────┐   │
│ │ 👤 Chỉnh sửa hồ sơ    │ > │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 🔒 Đổi mật khẩu       │ > │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 🔐 Bảo mật 2 lớp      │ > │
│ └───────────────────────┘   │
│                             │
│ THÔNG BÁO                   │
│ ┌───────────────────────┐   │
│ │ 🔔 Push notification  │[⚪]│
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ ✉️ Email notification │[⚪]│
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 💬 Tin nhắn          │[●]│
│ └───────────────────────┘   │
│                             │
│ ỨNG DỤNG                    │
│ ┌───────────────────────┐   │
│ │ 🌐 Ngôn ngữ          │VI >│
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 🌙 Chế độ tối        │[⚪]│
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 📍 Quyền vị trí      │ > │
│ └───────────────────────┘   │
│                             │
│ HỖ TRỢ                      │
│ ┌───────────────────────┐   │
│ │ ❓ FAQ               │ > │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 📞 Liên hệ hỗ trợ    │ > │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 📜 Điều khoản sử dụng│ > │
│ └───────────────────────┘   │
│ ┌───────────────────────┐   │
│ │ 🛡️ Chính sách bảo mật│ > │
│ └───────────────────────┘   │
│                             │
│ Version 1.0.0               │
│                             │
└─────────────────────────────┘
```

---

## 🧭 Navigation Structure

```
App
├── AuthStack (when not logged in)
│   ├── Splash
│   ├── Onboarding
│   ├── Login
│   ├── Register
│   ├── ForgotPassword
│   └── OTPVerification
│
└── MainStack (when logged in)
    ├── MainTabs
    │   ├── HomeTab
    │   │   └── HomeScreen
    │   ├── ExploreTab
    │   │   └── ExploreScreen
    │   ├── MapTab
    │   │   └── MapScreen
    │   ├── ForumTab
    │   │   └── ForumScreen
    │   └── ProfileTab
    │       └── ProfileScreen
    │
    └── Modals/Stacks
        ├── PlaceDetails
        ├── TourDetails
        ├── Booking
        ├── GuideList
        ├── GuideProfile
        ├── Chat
        ├── CreatePost
        ├── PostDetails
        ├── Questionnaire
        ├── Recommendations
        ├── SubmitReview
        ├── Notifications
        ├── Settings
        ├── EditProfile
        ├── BookingHistory
        ├── SavedPlaces
        └── MyReviews
```

---

## 📊 Mock Data Structure

### Province
```typescript
interface Province {
  id: string
  name: string
  nameEn: string
  code: string
  region: "north" | "central" | "south"
  thumbnail: string
  description: string
  totalPlaces: number
  totalTours: number
}
```

### Place
```typescript
interface Place {
  id: string
  name: string
  nameEn: string
  category: PlaceCategory
  provinceId: string
  address: string
  coordinates: { lat: number; lng: number }
  rating: number
  reviewCount: number
  priceRange?: string
  openingHours?: string
  phone?: string
  website?: string
  description: string
  images: string[]
  amenities: string[]
  isOpen?: boolean
}

type PlaceCategory = 
  | "food" 
  | "heritage" 
  | "temple" 
  | "festival" 
  | "craft_village" 
  | "beach" 
  | "shopping"
```

### Tour
```typescript
interface Tour {
  id: string
  name: string
  nameEn: string
  provinceId: string
  description: string
  images: string[]
  duration: string
  groupSize: { min: number; max: number }
  price: number
  rating: number
  reviewCount: number
  includes: string[]
  excludes: string[]
  itinerary: ItineraryItem[]
  guideId: string
  availableDates: string[]
}

interface ItineraryItem {
  time: string
  activity: string
  location?: string
}
```

### Guide
```typescript
interface Guide {
  id: string
  name: string
  avatar: string
  provinceId: string
  experience: number // years
  rating: number
  reviewCount: number
  specialties: string[]
  languages: string[]
  hourlyRate: number
  bio: string
  isOnline: boolean
}
```

### Review
```typescript
interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  targetId: string
  targetType: "place" | "tour" | "guide"
  rating: number
  content: string
  images: string[]
  tags: string[]
  helpfulCount: number
  createdAt: string
}
```

### Post
```typescript
interface Post {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  images: string[]
  location?: string
  tags: string[]
  likeCount: number
  commentCount: number
  shareCount: number
  createdAt: string
}
```

---

## 🎯 Interaction Patterns

### 1. Touch Feedback
- All touchable elements have visual feedback
- Use Pressable with opacity change (0.7) on press
- Minimum touch target: 48dp x 48dp

### 2. Loading States
- Skeleton loading for lists and cards
- Spinner for buttons during action
- Pull-to-refresh for lists

### 3. Empty States
- Friendly illustration
- Clear message
- Action button when applicable

### 4. Error States
- Red color indication
- Clear error message
- Retry action when applicable

### 5. Animations
- Page transitions: slide horizontal
- Modal: slide from bottom
- Cards: fade in on scroll
- Like/Favorite: scale bounce

---

## 📱 Responsive Breakpoints

```
Small:   < 375dp (iPhone SE)
Medium:  375-414dp (iPhone 12-14)
Large:   > 414dp (iPhone Plus/Max, Android)
Tablet:  > 768dp
```

---

*Document Version: 1.0*
*Last Updated: December 30, 2025*
