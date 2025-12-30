/**
 * MapScreen - Map view with place markers
 * Max 200 lines per rule
 */
import { useState } from "react"
import { Pressable, TextStyle, View, ViewStyle } from "react-native"
import { useTranslation } from "react-i18next"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

export function MapScreen() {
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()
  const [selectedFilter, setSelectedFilter] = useState<"all" | "food" | "tourism">("all")

  const filters = [
    { id: "all" as const, label: t("map.all") },
    { id: "food" as const, label: t("map.food") },
    { id: "tourism" as const, label: t("map.tourism") },
  ]

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      {/* Search Bar Overlay */}
      <View style={$searchOverlay}>
        <Pressable style={themed($searchBar)}>
          <Icon icon="components" size={18} color={theme.colors.textDim} />
          <Text style={themed($searchPlaceholder)}>{t("map.searchPlace")}</Text>
        </Pressable>
      </View>

      {/* Map Placeholder */}
      <View style={themed($mapPlaceholder)}>
        <Icon icon="pin" size={48} color={theme.colors.textDim} />
        <Text style={themed($mapText)}>{t("map.mapPlaceholder")}</Text>
        <Text style={themed($mapSubtext)}>{t("map.integrationNote")}</Text>
      </View>

      {/* Filter Chips */}
      <View style={$filterContainer}>
        {filters.map((filter) => (
          <Pressable
            key={filter.id}
            style={[themed($filterChip), selectedFilter === filter.id && themed($filterChipActive)]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <Text
              style={[
                themed($filterChipText),
                selectedFilter === filter.id && themed($filterChipTextActive),
              ]}
            >
              {filter.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Bottom Action Bar */}
      <View style={themed($bottomBar)}>
        <Pressable style={themed($actionButton)}>
          <Icon icon="pin" size={20} color={theme.colors.tint} />
          <Text style={themed($actionText)}>{t("map.nearMe")}</Text>
        </Pressable>

        <Pressable style={themed($actionButton)}>
          <Icon icon="components" size={20} color={theme.colors.tint} />
          <Text style={themed($actionText)}>{t("map.directions")}</Text>
        </Pressable>

        <Pressable style={themed($actionButton)}>
          <Icon icon="heart" size={20} color={theme.colors.tint} />
          <Text style={themed($actionText)}>{t("map.saved")}</Text>
        </Pressable>
      </View>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  flex: 1,
})

const $searchOverlay: ViewStyle = {
  left: 0,
  paddingHorizontal: 16,
  paddingTop: 16,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 10,
}

const $searchBar: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderRadius: 12,
  elevation: 4,
  flexDirection: "row",
  height: 48,
  paddingHorizontal: 16,
  shadowColor: colors.text,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
})

const $searchPlaceholder: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  flex: 1,
  fontSize: 15,
  marginLeft: 10,
})

const $mapPlaceholder: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.border + "40",
  flex: 1,
  justifyContent: "center",
})

const $mapText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 18,
  fontWeight: "600",
  marginTop: 16,
})

const $mapSubtext: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 14,
  marginTop: 8,
  textAlign: "center",
})

const $filterContainer: ViewStyle = {
  bottom: 100,
  flexDirection: "row",
  gap: 8,
  left: 16,
  position: "absolute",
}

const $filterChip: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 20,
  borderWidth: 1,
  paddingHorizontal: 16,
  paddingVertical: 8,
})

const $filterChipActive: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.tint,
  borderColor: colors.tint,
})

const $filterChipText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 14,
})

const $filterChipTextActive: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.background,
})

const $bottomBar: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderTopColor: colors.border,
  borderTopWidth: 1,
  bottom: 0,
  flexDirection: "row",
  justifyContent: "space-around",
  left: 0,
  paddingBottom: 30,
  paddingTop: 12,
  position: "absolute",
  right: 0,
})

const $actionButton: ThemedStyle<ViewStyle> = () => ({
  alignItems: "center",
})

const $actionText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.text,
  fontSize: 12,
  marginTop: 4,
})
