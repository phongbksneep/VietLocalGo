# VietLocalGo 🇻🇳

> App quảng bá ẩm thực và du lịch địa phương Việt Nam

[![React Native](https://img.shields.io/badge/React%20Native-0.73-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-50-black.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Ignite](https://img.shields.io/badge/Ignite-11.3-red.svg)](https://github.com/infinitered/ignite)

## 📱 Giới thiệu

**VietLocalGo** là ứng dụng mobile giúp du khách khám phá ẩm thực và du lịch địa phương Việt Nam. Bắt đầu từ tỉnh Nam Định với mục tiêu mở rộng ra toàn quốc 63 tỉnh thành.

### ✨ Tính năng chính

- 🗺️ **Khám phá địa điểm** - Tìm kiếm nhà hàng, di tích, đền chùa, làng nghề...
- 🍜 **Ẩm thực địa phương** - Phở bò gánh, bánh cuốn, nem nắm Nam Định...
- 📅 **Đặt tour** - Tour tâm linh, ẩm thực, biển với hướng dẫn viên địa phương
- 👥 **Kết nối hướng dẫn viên** - Chat trực tiếp, đặt lịch dễ dàng
- 💬 **Cộng đồng** - Chia sẻ trải nghiệm, hỏi đáp, review
- 🌐 **Đa ngôn ngữ** - Tiếng Việt & English
- 📍 **Bản đồ tương tác** - Tìm đường, khám phá xung quanh

## 📚 Documentation

- [Design System](./docs/DESIGN_SYSTEM.md) - UI/UX specifications
- [Coding Guidelines](./.github/copilot-instructions.md) - Development rules
- [Ignite Docs](https://github.com/infinitered/ignite/blob/master/docs/README.md) - Framework documentation

## Getting Started

```bash
npm install --legacy-peer-deps
npm run start
```

To make things work on your local simulator, or on your phone, you need first to [run `eas build`](https://github.com/infinitered/ignite/blob/master/docs/expo/EAS.md). We have many shortcuts on `package.json` to make it easier:

```bash
npm run build:ios:sim # build for ios simulator
npm run build:ios:device # build for ios device
npm run build:ios:prod # build for ios device
```

### `./assets` directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```tree
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/boilerplate/app/components/Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```typescript
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('assets/images/my_image.png')} />
  );
};
```

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe.

## Next Steps

### Ignite Cookbook

[Ignite Cookbook](https://ignitecookbook.com/) is an easy way for developers to browse and share code snippets (or “recipes”) that actually work.

### Upgrade Ignite boilerplate

Read our [Upgrade Guide](https://ignitecookbook.com/docs/recipes/UpdatingIgnite) to learn how to upgrade your Ignite project.

## Community

⭐️ Help us out by [starring on GitHub](https://github.com/infinitered/ignite), filing bug reports in [issues](https://github.com/infinitered/ignite/issues) or [ask questions](https://github.com/infinitered/ignite/discussions).

💬 Join us on [Slack](https://join.slack.com/t/infiniteredcommunity/shared_invite/zt-1f137np4h-zPTq_CbaRFUOR_glUFs2UA) to discuss.

📰 Make our Editor-in-chief happy by [reading the React Native Newsletter](https://reactnativenewsletter.com/).
