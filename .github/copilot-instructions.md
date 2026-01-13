# VietLocalGo - Copilot Instructions

## 📱 Project Overview

VietLocalGo is a React Native mobile app for promoting local cuisine and tourism in Vietnam, starting with Nam Dinh province. Built with Expo, TypeScript, and React Navigation.

## 🛠️ Tech Stack

- **Framework**: React Native (Expo managed workflow)
- **Language**: TypeScript
- **Navigation**: React Navigation v6 (Native Stack + Bottom Tabs)
- **State**: React Context API
- **Styling**: React Native StyleSheet with themed styles
- **i18n**: react-i18next (Vietnamese + English)
- **Testing**: Jest + React Native Testing Library

## 📁 Project Structure

```
app/
├── components/       # Reusable UI components
├── config/          # App configuration
├── context/         # React Context providers
├── i18n/            # Translations (vi.ts, en.ts)
├── navigators/      # Navigation setup
├── screens/         # Screen components
│   ├── auth/        # Authentication screens
│   ├── main/        # Main tab screens
│   ├── detail/      # Detail screens
│   ├── action/      # Action screens (booking, chat, etc.)
│   └── profile/     # Profile & settings screens
├── services/        # API & mock services
├── theme/           # Colors, typography, spacing
└── utils/           # Utility functions
```

## 🎨 Coding Conventions

### Component Structure
```tsx
import { FC } from "react"
import { View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"
import { useAppTheme } from "@/theme/context"

type Props = NativeStackScreenProps<AppStackParamList, "ScreenName">

export const ScreenNameScreen: FC<Props> = ({ navigation }) => {
  const { t } = useTranslation()
  const { theme, themed } = useAppTheme()
  
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      {/* Content */}
    </Screen>
  )
}

// Styles at bottom
const $container: ViewStyle = { flex: 1 }
const $themedStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
})
```

### Naming Conventions
- **Screens**: `{Name}Screen.tsx` (PascalCase)
- **Components**: `{Name}.tsx` (PascalCase)
- **Styles**: `$camelCase` prefix with `$`
- **Translations**: `screenName.section.key` (camelCase)

### i18n Pattern
Always use bilingual Vietnamese-English:
```tsx
const { t } = useTranslation()
// In vi.ts: screenName: { title: "Tiêu đề" }
// In en.ts: screenName: { title: "Title" }
<Text>{t("screenName.title")}</Text>
```

## 🎯 Screen Templates

### Standard Screen Layout
```tsx
<Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
  {/* Header with back button */}
  <View style={$header}>
    <Pressable onPress={() => navigation.goBack()}>
      <Icon icon="back" size={24} color={theme.colors.text} />
    </Pressable>
    <Text preset="heading">{t("screen.title")}</Text>
    <View style={$spacer} />
  </View>
  
  {/* Content */}
</Screen>
```

## 🔗 Navigation

### Adding New Screen
1. Add type to `navigationTypes.ts`
2. Import in `AppNavigator.tsx`
3. Add `<Stack.Screen>` entry
4. Export from `screens/index.ts`

### Navigation Params
```tsx
// In navigationTypes.ts
export type AppStackParamList = {
  NewScreen: { paramId: string }
}

// Navigate
navigation.navigate("NewScreen", { paramId: "123" })
```

## 📝 Key Commands

```bash
npm start           # Start Expo dev server
npm run android     # Run on Android
npm run ios         # Run on iOS
npm test           # Run tests
npm run lint       # ESLint check
```

## ⚡ Quick Tips

1. Use `themed()` for theme-aware styles
2. Always handle loading/empty states
3. Use `testID` and `accessibilityLabel` for testing
4. Keep screens under 200 lines, extract to components
5. Mock data in `services/mock/` for development
