import { FC, useState } from "react"
import { Pressable, Switch, TextStyle, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Icon, IconTypes } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAuth } from "@/context/AuthContext"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type SettingsScreenProps = NativeStackScreenProps<AppStackParamList, "Settings">

interface SettingItem {
  id: string
  icon: IconTypes
  label: string
  type: "toggle" | "navigate" | "action"
  value?: boolean
}

export const SettingsScreen: FC<SettingsScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()
  const { logout } = useAuth()

  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [locationEnabled, setLocationEnabled] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const settingsSections = [
    {
      title: "Tài khoản",
      items: [
        {
          id: "edit_profile",
          icon: "community" as IconTypes,
          label: "Chỉnh sửa hồ sơ",
          type: "navigate" as const,
        },
        {
          id: "change_password",
          icon: "lock" as IconTypes,
          label: "Đổi mật khẩu",
          type: "navigate" as const,
        },
        {
          id: "language",
          icon: "components" as IconTypes,
          label: "Ngôn ngữ",
          type: "navigate" as const,
        },
      ],
    },
    {
      title: "Thông báo",
      items: [
        {
          id: "push_notifications",
          icon: "bell" as IconTypes,
          label: "Thông báo đẩy",
          type: "toggle" as const,
          value: notificationsEnabled,
        },
        {
          id: "location",
          icon: "pin" as IconTypes,
          label: "Vị trí",
          type: "toggle" as const,
          value: locationEnabled,
        },
      ],
    },
    {
      title: "Giao diện",
      items: [
        {
          id: "dark_mode",
          icon: "view" as IconTypes,
          label: "Chế độ tối",
          type: "toggle" as const,
          value: darkMode,
        },
      ],
    },
    {
      title: "Khác",
      items: [
        {
          id: "about",
          icon: "components" as IconTypes,
          label: "Về ứng dụng",
          type: "navigate" as const,
        },
        {
          id: "help",
          icon: "components" as IconTypes,
          label: "Trợ giúp & Hỗ trợ",
          type: "navigate" as const,
        },
        {
          id: "privacy",
          icon: "lock" as IconTypes,
          label: "Chính sách bảo mật",
          type: "navigate" as const,
        },
      ],
    },
  ]

  const handleToggle = (id: string) => {
    switch (id) {
      case "push_notifications":
        setNotificationsEnabled((prev) => !prev)
        break
      case "location":
        setLocationEnabled((prev) => !prev)
        break
      case "dark_mode":
        setDarkMode((prev) => !prev)
        break
    }
  }

  const handleNavigate = (id: string) => {
    switch (id) {
      case "edit_profile":
        navigation.navigate("EditProfile")
        break
    }
  }

  const handleLogout = async () => {
    await logout()
    navigation.reset({
      index: 0,
      routes: [{ name: "Onboarding" }],
    })
  }

  const renderSettingItem = (item: SettingItem) => (
    <Pressable
      key={item.id}
      style={[$settingItem, { backgroundColor: theme.colors.background }]}
      onPress={() => {
        if (item.type === "navigate") {
          handleNavigate(item.id)
        }
      }}
      disabled={item.type === "toggle"}
    >
      <View style={$settingLeft}>
        <View style={[$iconContainer, { backgroundColor: theme.colors.palette.primary100 }]}>
          <Icon icon={item.icon} size={20} color={theme.colors.tint} />
        </View>
        <Text style={{ color: theme.colors.text }}>{item.label}</Text>
      </View>
      {item.type === "toggle" ? (
        <Switch
          value={item.value}
          onValueChange={() => handleToggle(item.id)}
          trackColor={{ false: theme.colors.border, true: theme.colors.tint }}
          thumbColor="#FFFFFF"
        />
      ) : (
        <Icon icon="caretRight" size={18} color={theme.colors.textDim} />
      )}
    </Pressable>
  )

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Cài đặt</Text>
        <View style={$spacer} />
      </View>

      {/* Settings Sections */}
      {settingsSections.map((section, index) => (
        <View key={index} style={$section}>
          <Text preset="formLabel" style={[$sectionTitle, { color: theme.colors.textDim }]}>
            {section.title}
          </Text>
          <View style={[$sectionContent, { backgroundColor: theme.colors.background }]}>
            {section.items.map((item, itemIndex) => (
              <View key={item.id}>
                {renderSettingItem(item)}
                {itemIndex < section.items.length - 1 && (
                  <View style={[$divider, { backgroundColor: theme.colors.border }]} />
                )}
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Logout Button */}
      <Pressable
        style={[$logoutButton, { borderColor: theme.colors.error }]}
        onPress={handleLogout}
      >
        <Icon icon="x" size={20} color={theme.colors.error} />
        <Text style={{ color: theme.colors.error }}>Đăng xuất</Text>
      </Pressable>

      {/* Version */}
      <Text style={[$versionText, { color: theme.colors.textDim }]}>Phiên bản 1.0.0</Text>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingBottom: spacing.xl,
}

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $backButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $spacer: ViewStyle = {
  width: 40,
}

const $section: ViewStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  paddingHorizontal: spacing.md,
  marginBottom: spacing.xs,
}

const $sectionContent: ViewStyle = {
  marginHorizontal: spacing.md,
  borderRadius: 12,
  overflow: "hidden",
}

const $settingItem: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: spacing.md,
}

const $settingLeft: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
}

const $iconContainer: ViewStyle = {
  width: 36,
  height: 36,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
}

const $divider: ViewStyle = {
  height: 1,
  marginLeft: spacing.md + 36 + spacing.sm,
}

const $logoutButton: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.sm,
  marginHorizontal: spacing.md,
  padding: spacing.md,
  borderRadius: 12,
  borderWidth: 1,
}

const $versionText: TextStyle = {
  textAlign: "center",
  marginTop: spacing.lg,
}
