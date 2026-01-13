/**
 * ProfileScreen - User profile and settings
 * Max 200 lines per rule
 */
import { Image, ImageStyle, Pressable, TextStyle, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useTranslation } from "react-i18next"

import { Icon, IconTypes } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { currentUser } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

interface MenuItem {
  id: string
  icon: IconTypes
  label: string
  value?: string
  onPress?: () => void
}

export function ProfileScreen() {
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()
  const user = currentUser
  const navigation = useNavigation()

  const menuSections: { title: string; items: MenuItem[] }[] = [
    {
      title: t("profile.account"),
      items: [
        {
          id: "bookings",
          icon: "components",
          label: t("profile.menu.bookingHistory"),
        },
        { id: "favorites", icon: "heart", label: t("profile.menu.savedPlaces") },
        { id: "reviews", icon: "community", label: t("profile.menu.myReviews") },
      ],
    },
    {
      title: t("profile.settings"),
      items: [
        {
          id: "language",
          icon: "components",
          label: t("profile.menu.language"),
          value: "Tiếng Việt",
        },
        { id: "notifications", icon: "bell", label: t("profile.menu.notifications") },
        { id: "privacy", icon: "lock", label: t("profile.menu.privacy") },
      ],
    },
    {
      title: t("profile.support"),
      items: [
        { id: "help", icon: "community", label: t("profile.menu.helpSupport") },
        { id: "feedback", icon: "components", label: t("profile.menu.feedback") },
        { id: "about", icon: "components", label: t("profile.menu.about") },
      ],
    },
  ]

  const handleMenuPress = (id: string) => {
    switch (id) {
      case "bookings":
        return navigation.navigate("BookingHistory" as never)
      case "favorites":
        return navigation.navigate("SavedPlaces" as never)
      case "reviews":
        return navigation.navigate("MyReviews" as never)
      case "notifications":
        return navigation.navigate("Notifications" as never)
      case "language":
        return navigation.navigate("Language" as never)
      case "privacy":
        return navigation.navigate("Privacy" as never)
      case "help":
        return navigation.navigate("HelpSupport" as never)
      case "feedback":
        return navigation.navigate("Feedback" as never)
      case "about":
        return navigation.navigate("About" as never)
      default:
        return navigation.navigate("Settings" as never)
    }
  }

  const renderMenuItem = (item: MenuItem, isLast: boolean) => (
    <Pressable
      key={item.id}
      style={[themed($menuItem), !isLast && themed($menuItemBorder)]}
      onPress={() => (item.onPress ? item.onPress() : handleMenuPress(item.id))}
      accessibilityLabel={`profile-menu-${item.id}`}
      testID={`profile-menu-${item.id}`}
    >
      <View style={themed($menuIconContainer)}>
        <Icon icon={item.icon} size={18} color={theme.colors.tint} />
      </View>
      <View style={$menuContent}>
        <Text style={themed($menuLabel)}>{item.label}</Text>
        {item.value && <Text style={themed($menuValue)}>{item.value}</Text>}
      </View>
      <Icon icon="caretRight" size={16} color={theme.colors.textDim} />
    </Pressable>
  )

  return (
    <Screen preset="scroll" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      {/* Header */}
      <View style={$header}>
        <Text style={themed($title)}>{t("profile.title")}</Text>
        <Pressable
          style={themed($settingsButton)}
          onPress={() => navigation.navigate("Settings" as never)}
          accessibilityLabel="settings-button"
        >
          <Icon icon="settings" size={22} color={theme.colors.text} />
        </Pressable>
      </View>

      {/* Profile Card */}
      <View style={themed($profileCard)}>
        <Image source={{ uri: user.avatar }} style={$avatar} />
        <View style={$profileInfo}>
          <Text style={themed($userName)}>{user.name}</Text>
          <Text style={themed($userEmail)}>{user.email}</Text>
        </View>
        <Pressable
          style={themed($editButton)}
          onPress={() => navigation.navigate("EditProfile" as never)}
          accessibilityLabel="edit-profile-button"
        >
          <Text style={themed($editText)}>{t("profile.editProfile")}</Text>
        </Pressable>
      </View>

      {/* Stats */}
      <View style={themed($statsContainer)}>
        <View style={$statItem}>
          <Text style={themed($statValue)}>12</Text>
          <Text style={themed($statLabel)}>{t("profile.stats.tours")}</Text>
        </View>
        <View style={themed($statDivider)} />
        <View style={$statItem}>
          <Text style={themed($statValue)}>28</Text>
          <Text style={themed($statLabel)}>{t("profile.stats.reviews")}</Text>
        </View>
        <View style={themed($statDivider)} />
        <View style={$statItem}>
          <Text style={themed($statValue)}>45</Text>
          <Text style={themed($statLabel)}>{t("profile.stats.saved")}</Text>
        </View>
      </View>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <View key={section.title} style={$menuSection}>
          <Text style={themed($sectionTitle)}>{section.title}</Text>
          <View style={themed($menuCard)}>
            {section.items.map((item, index) =>
              renderMenuItem(item, index === section.items.length - 1),
            )}
          </View>
        </View>
      ))}

      {/* Logout */}
      <Pressable
        style={themed($logoutButton)}
        onPress={() => navigation.navigate("Login" as never)}
        accessibilityLabel="logout-button"
      >
        <Icon icon="x" size={18} color={theme.colors.error} />
        <Text style={themed($logoutText)}>{t("profile.menu.logout")}</Text>
      </Pressable>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  paddingBottom: 100,
})

const $header: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 16,
  paddingTop: 16,
}

const $title: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 24,
  fontWeight: "700",
})

const $settingsButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 10,
  borderWidth: 1,
  height: 40,
  justifyContent: "center",
  width: 40,
})

const $profileCard: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 16,
  borderWidth: 1,
  flexDirection: "row",
  marginHorizontal: 16,
  marginTop: 24,
  padding: 16,
})

const $avatar: ImageStyle = {
  borderRadius: 30,
  height: 60,
  width: 60,
}

const $profileInfo: ViewStyle = {
  flex: 1,
  marginLeft: 16,
}

const $userName: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 18,
  fontWeight: "600",
})

const $userEmail: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 14,
  marginTop: 4,
})

const $editButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.tint + "15",
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 6,
})

const $editText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
  fontSize: 13,
  fontWeight: "500",
})

const $statsContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 16,
  borderWidth: 1,
  flexDirection: "row",
  marginHorizontal: 16,
  marginTop: 16,
  padding: 16,
})

const $statItem: ViewStyle = {
  alignItems: "center",
  flex: 1,
}

const $statValue: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 20,
  fontWeight: "700",
})

const $statLabel: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 12,
  marginTop: 4,
})

const $statDivider: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.border,
  width: 1,
})

const $menuSection: ViewStyle = {
  marginTop: 24,
}

const $sectionTitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 13,
  fontWeight: "600",
  marginBottom: 8,
  marginLeft: 16,
  textTransform: "uppercase",
})

const $menuCard: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 16,
  borderWidth: 1,
  marginHorizontal: 16,
})

const $menuItem: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
  flexDirection: "row",
  padding: 14,
})

const $menuItemBorder: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderBottomColor: colors.border,
  borderBottomWidth: 1,
})

const $menuIconContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.tint + "15",
  borderRadius: 8,
  height: 32,
  justifyContent: "center",
  width: 32,
})

const $menuContent: ViewStyle = {
  flex: 1,
  marginLeft: 12,
}

const $menuLabel: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 15,
})

const $menuValue: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 13,
  marginTop: 2,
})

const $logoutButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.error + "15",
  borderRadius: 12,
  flexDirection: "row",
  justifyContent: "center",
  marginHorizontal: 16,
  marginTop: 24,
  paddingVertical: 14,
})

const $logoutText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.error,
  fontSize: 15,
  fontWeight: "600",
  marginLeft: 8,
})
