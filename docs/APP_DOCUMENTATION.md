# VietLocalGo - Tài liệu Design & Chức năng

> **Phiên bản:** 1.0.0  
> **Ngày cập nhật:** 13/01/2026  
> **Nền tảng:** Android & iOS (React Native + Expo)

---

## 📱 Tổng quan ứng dụng

**VietLocalGo** là ứng dụng di động giúp du khách khám phá ẩm thực và du lịch địa phương Việt Nam, bắt đầu từ tỉnh Nam Định và mở rộng ra toàn quốc.

### Đối tượng người dùng
- Du khách trong nước (25-45 tuổi)
- Du khách quốc tế muốn khám phá Việt Nam
- Người địa phương muốn chia sẻ văn hóa
- Food blogger & travel influencer

### Giá trị cốt lõi
- 🎯 **Đơn giản**: Giao diện thân thiện, dễ sử dụng
- 🌍 **Địa phương**: Tôn vinh văn hóa và ẩm thực địa phương
- 🤝 **Cộng đồng**: Kết nối du khách với người địa phương
- 🔒 **Tin cậy**: Đánh giá minh bạch, thông tin chính xác

---

## 🎨 Thiết kế giao diện

### Bảng màu chính
| Màu | Mã màu | Ý nghĩa |
|-----|--------|---------|
| Primary | `#E94235` | Đỏ - Lấy cảm hứng từ bánh dày Nam Định |
| Secondary | `#4CAF50` | Xanh lá - Ruộng lúa Việt Nam |
| Accent Gold | `#FFB300` | Vàng - Di tích lịch sử |
| Accent Blue | `#2196F3` | Biển - Vùng biển Việt Nam |

### Typography
- Font chính: Inter / Noto Sans Vietnamese
- Hỗ trợ đa ngôn ngữ: Tiếng Việt & English

---

## 📲 Các màn hình chính

### 1. Màn hình Trang chủ (Home)
![Home Screen](./screenshots/01_home.png)

**Chức năng:**
- Hiển thị vị trí hiện tại của người dùng
- Thanh tìm kiếm nhanh
- Banner quảng cáo các sự kiện/lễ hội
- Quick Actions: Ẩm thực, Di tích, Tour, Hướng dẫn viên
- Danh sách tour đề xuất
- Danh sách ẩm thực nổi bật

---

### 2. Màn hình Khám phá (Explore)
![Explore Screen](./screenshots/02_explore.png)

**Chức năng:**
- Tìm kiếm địa điểm theo tên/từ khóa
- Lọc theo danh mục: Ẩm thực, Di tích, Đền chùa, Lễ hội, Làng nghề, Biển, Mua sắm
- Sắp xếp theo: Đề xuất, Đánh giá, Khoảng cách, Mới nhất
- Xem chi tiết địa điểm

---

### 3. Màn hình Bản đồ (Map)
![Map Screen](./screenshots/03_map.png)

**Chức năng:**
- Hiển thị bản đồ với các địa điểm đánh dấu
- Lọc hiển thị theo loại hình: Ẩm thực, Du lịch
- Xem thông tin nhanh khi tap vào marker
- Chỉ đường đến địa điểm

---

### 4. Màn hình Cộng đồng (Forum)
![Forum Screen](./screenshots/04_forum.png)

**Chức năng:**
- Danh sách bài viết từ cộng đồng
- Tabs: Tất cả, Hot 🔥, Mới nhất
- Like, Comment, Share bài viết
- Xem chi tiết bài viết
- Tạo bài viết mới

---

### 5. Màn hình Tài khoản (Profile)
![Profile Screen](./screenshots/05_profile.png)

**Chức năng:**
- Thông tin cá nhân: Avatar, tên, email
- Thống kê: Số tour, đánh giá, địa điểm đã lưu
- Menu tài khoản:
  - Lịch sử đặt tour
  - Đã lưu
  - Đánh giá của tôi
- Menu cài đặt:
  - Ngôn ngữ
  - Thông báo
  - Quyền riêng tư
- Menu hỗ trợ:
  - Trợ giúp & Hỗ trợ
  - Góp ý & Phản hồi
  - Về ứng dụng
- Đăng xuất

---

## 📋 Các màn hình chi tiết

### 6. Lịch sử đặt tour (Booking History)
![Booking History](./screenshots/06_booking_history.png)

**Chức năng:**
- Tabs: Sắp tới, Đã hoàn thành, Đã hủy
- Danh sách các booking với:
  - Ảnh tour
  - Tên tour
  - Ngày đi
  - Số người
  - Tổng tiền
  - Trạng thái (Chờ xác nhận/Đã xác nhận/Hoàn thành/Đã hủy)
- Xem chi tiết booking

---

### 7. Địa điểm đã lưu (Saved Places)
![Saved Places](./screenshots/07_saved_places.png)

**Chức năng:**
- Danh sách các địa điểm đã lưu
- Hiển thị: Ảnh, tên, địa chỉ, rating
- Xóa khỏi danh sách yêu thích
- Navigate đến chi tiết địa điểm

---

### 8. Đánh giá của tôi (My Reviews)
![My Reviews](./screenshots/08_my_reviews.png)

**Chức năng:**
- Danh sách các đánh giá đã viết
- Phân loại theo: Địa điểm, Tour, Hướng dẫn viên
- Hiển thị: Rating, tiêu đề, nội dung, ảnh
- Chỉnh sửa/Xóa đánh giá

---

### 9. Ngôn ngữ (Language)
![Language](./screenshots/09_language.png)

**Chức năng:**
- Chọn ngôn ngữ hiển thị:
  - 🇻🇳 Tiếng Việt
  - 🇺🇸 English
- Thay đổi áp dụng ngay lập tức

---

### 10. Thông báo (Notifications)
![Notifications](./screenshots/10_notifications.png)

**Chức năng:**
- Danh sách thông báo:
  - Đặt tour (booking confirmation)
  - Tin nhắn mới
  - Lượt thích bài viết
  - Khuyến mãi
  - Hệ thống
- Đánh dấu đã đọc
- Navigate đến màn hình liên quan

---

### 11. Quyền riêng tư (Privacy)
![Privacy](./screenshots/11_privacy.png)

**Chức năng:**
- Cài đặt quyền riêng tư:
  - Chia sẻ vị trí
  - Chia sẻ hoạt động
  - Quảng cáo cá nhân hóa
- Chính sách bảo mật
- Quản lý dữ liệu:
  - Tải xuống dữ liệu
  - Xóa tất cả dữ liệu

---

### 12. Trợ giúp & Hỗ trợ (Help & Support)
![Help Support](./screenshots/12_help_support.png)

**Chức năng:**
- Liên hệ hỗ trợ:
  - Hotline 24/7
  - Email hỗ trợ
  - Chat trực tuyến
- Câu hỏi thường gặp (FAQ):
  - Cách đặt tour
  - Chính sách hủy
  - Phương thức thanh toán
  - Trở thành hướng dẫn viên
- Liên kết nhanh: Chính sách bảo mật, Điều khoản sử dụng

---

### 13. Góp ý & Phản hồi (Feedback)
![Feedback](./screenshots/13_feedback.png)

**Chức năng:**
- Loại phản hồi: Lỗi, Tính năng mới, Cải thiện, Khác
- Form gửi phản hồi:
  - Tiêu đề
  - Mô tả chi tiết
  - Email liên hệ (tùy chọn)
- Xác nhận gửi thành công

---

### 14. Về ứng dụng (About)
![About](./screenshots/14_about.png)

**Chức năng:**
- Thông tin ứng dụng:
  - Logo & tên
  - Tagline
  - Phiên bản
- Mô tả ứng dụng
- Tính năng nổi bật
- Social links: Facebook, Instagram, Website
- Liên kết pháp lý: Điều khoản, Bảo mật, Giấy phép

---

### 15. Chi tiết Tour (Tour Details)
![Tour Details](./screenshots/15_tour_details.png)

**Chức năng:**
- Gallery ảnh tour
- Thông tin tour:
  - Tên, rating, số đánh giá
  - Thời lượng, số người
  - Địa điểm, đón trả
- Lịch trình chi tiết
- Bao gồm/Không bao gồm
- Thông tin hướng dẫn viên
- Đánh giá từ khách
- Nút đặt tour với giá

---

### 16. Chi tiết Địa điểm (Place Details)
![Place Details](./screenshots/16_place_details.png)

**Chức năng:**
- Gallery ảnh địa điểm
- Thông tin:
  - Tên, rating, số đánh giá
  - Địa chỉ
  - Giờ mở cửa
  - Khoảng giá
- Giới thiệu chi tiết
- Tiện ích có sẵn
- Đánh giá & nhận xét
- Nút: Chỉ đường, Viết đánh giá

---

### 17. Tìm kiếm (Search)
![Search](./screenshots/17_search.png)

**Chức năng:**
- Thanh tìm kiếm với gợi ý
- Lịch sử tìm kiếm gần đây
- Kết quả tìm kiếm theo loại:
  - Địa điểm
  - Tour
  - Hướng dẫn viên
  - Bài viết
- Lọc kết quả

---

### 18. Chỉnh sửa hồ sơ (Edit Profile)
![Edit Profile](./screenshots/18_edit_profile.png)

**Chức năng:**
- Thay đổi avatar
- Cập nhật thông tin:
  - Họ tên
  - Email
  - Số điện thoại
  - Giới thiệu bản thân
- Thông tin tài khoản: Ngày tham gia, số bài viết, số đánh giá
- Xóa tài khoản (Danger zone)

---

### 19. Cài đặt (Settings)
![Settings](./screenshots/19_settings.png)

**Chức năng:**
- Tài khoản:
  - Chỉnh sửa hồ sơ
  - Đổi mật khẩu
  - Ngôn ngữ
- Thông báo:
  - Thông báo đẩy
  - Vị trí
- Giao diện:
  - Chế độ tối
- Khác:
  - Về ứng dụng
  - Trợ giúp & Hỗ trợ
  - Chính sách bảo mật
- Đăng xuất

---

## 🚀 Tính năng nổi bật

### 1. Đa ngôn ngữ (i18n)
- Hỗ trợ Tiếng Việt và English
- Chuyển đổi ngôn ngữ tức thì
- Tự động phát hiện ngôn ngữ thiết bị

### 2. AI Recommendations
- Khảo sát sở thích người dùng
- Gợi ý tour phù hợp dựa trên:
  - Phong cách du lịch
  - Ngân sách
  - Số người đi cùng

### 3. Chat trực tiếp
- Nhắn tin với hướng dẫn viên
- Hỗ trợ ảnh và file
- Trạng thái online/offline

### 4. Đánh giá & Review
- Rating 5 sao
- Viết nhận xét chi tiết
- Đính kèm ảnh/video
- Thống kê số lượt helpful

### 5. Bookmark & Lưu trữ
- Lưu địa điểm yêu thích
- Lưu tour quan tâm
- Đồng bộ cross-device

---

## 📱 Thông số kỹ thuật

| Thuộc tính | Giá trị |
|------------|---------|
| Framework | React Native + Expo |
| Ngôn ngữ | TypeScript |
| Navigation | React Navigation v6 |
| State Management | React Context API |
| i18n | react-i18next |
| Min Android | Android 5.0+ (API 21) |
| Min iOS | iOS 13.0+ |

---

## 📞 Liên hệ

- **Email:** support@vietlocalgo.com
- **Hotline:** 1900 xxxx xx
- **Website:** https://vietlocalgo.com
- **Facebook:** https://facebook.com/vietlocalgo

---

*© 2025 VietLocalGo. All rights reserved.*
