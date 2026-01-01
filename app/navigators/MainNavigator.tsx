/**
 * MainNavigator - Bottom Tab Navigator for main app screens
 */
import { View, ViewStyle } from "react-native"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"

import { Icon, IconTypes } from "@/components/Icon"
import { ExploreScreen, ForumScreen, HomeScreen, MapScreen, ProfileScreen } from "@/screens"
import { useAppTheme } from "@/theme/context"

import type { AppStackParamList, AppStackScreenProps } from "./navigationTypes"

export type MainTabParamList = {
  Home: undefined
  Explore: undefined
  Map: undefined
  Forum: undefined
  Profile: undefined
}

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

interface TabIconProps {
  icon: IconTypes
  label: string
  focused: boolean
}

function TabIcon({ icon, focused }: TabIconProps) {
  const { theme } = useAppTheme()

  return (
    <View style={$tabIconContainer}>
      <Icon icon={icon} size={26} color={focused ? theme.colors.tint : theme.colors.textDim} />
    </View>
  )
}

export function MainNavigator() {
  const { theme } = useAppTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: 70,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="podcast" label="Trang chủ" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="components" label="Khám phá" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon icon="pin" label="Bản đồ" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="community" label="Cộng đồng" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="settings" label="Cá nhân" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabIconContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}
