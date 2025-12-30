# 🚀 Hướng dẫn Push lên GitHub

## Bước 1: Tạo Repository trên GitHub

1. Truy cập [github.com/new](https://github.com/new)
2. Đặt tên repository: `VietLocalGo`
3. Chọn **Private** hoặc **Public** tùy ý
4. **KHÔNG** tick vào "Add a README file" (đã có sẵn)
5. Click **Create repository**

## Bước 2: Kết nối và Push

Sau khi tạo repository, chạy các lệnh sau trong terminal:

```bash
# Thêm remote origin (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/VietLocalGo.git

# Đổi branch sang main (nếu cần)
git branch -M main

# Push code lên GitHub
git push -u origin main
```

## Bước 3: Xác thực

Nếu được hỏi username/password:
- **Username**: GitHub username của bạn
- **Password**: Dùng **Personal Access Token** (không phải password GitHub)

### Tạo Personal Access Token:
1. Vào [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Đặt tên, chọn expiration
4. Tick vào `repo` (full control)
5. Click "Generate token"
6. Copy token và dùng thay password

## Hoặc dùng GitHub CLI (Recommended)

```bash
# Cài đặt GitHub CLI
brew install gh

# Đăng nhập
gh auth login

# Tạo và push trong 1 lệnh
gh repo create VietLocalGo --private --source=. --push
```

## ✅ Sau khi Push thành công

Repository của bạn sẽ có:
- 📁 Source code React Native
- 📄 README.md với thông tin dự án
- 📄 docs/DESIGN_SYSTEM.md với design specifications
- 📄 .github/copilot-instructions.md với coding rules
- 📁 app/services/mock/ với mock data

## 🔧 Tiếp theo

1. **Clone về máy khác**: `git clone https://github.com/YOUR_USERNAME/VietLocalGo.git`
2. **Cài dependencies**: `npm install`
3. **Chạy app**: `npm start`

---

Cần hỗ trợ? Liên hệ qua Issues trên GitHub!
