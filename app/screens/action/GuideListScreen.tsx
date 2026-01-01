import { FC, useCallback, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { Guide, guides as mockGuides } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type GuideListScreenProps = NativeStackScreenProps<AppStackParamList, "GuideList">

export const GuideListScreen: FC<GuideListScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [guides, setGuides] = useState<Guide[]>([])
  const [filteredGuides, setFilteredGuides] = useState<Guide[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const specialties = ["Văn hóa", "Lịch sử", "Ẩm thực", "Tâm linh"]

  useEffect(() => {
    const fetchGuides = () => {
      setTimeout(() => {
        setGuides(mockGuides)
        setFilteredGuides(mockGuides)
        setLoading(false)
      }, 500)
    }
    fetchGuides()
  }, [])

  const filterGuides = useCallback(() => {
    let result = [...guides]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (g) => g.name.toLowerCase().includes(query) || g.bio.toLowerCase().includes(query),
      )
    }

    if (selectedSpecialty) {
      result = result.filter((g) => g.specialties.includes(selectedSpecialty))
    }

    setFilteredGuides(result)
  }, [guides, searchQuery, selectedSpecialty])

  useEffect(() => {
    filterGuides()
  }, [filterGuides])

  const handleGuidePress = (guide: Guide) => {
    navigation.navigate("GuideProfile", { guideId: guide.id })
  }

  const renderSpecialtyFilter = (specialty: string) => {
    const isSelected = selectedSpecialty === specialty
    return (
      <Pressable
        key={specialty}
        style={[
          $filterChip,
          {
            backgroundColor: isSelected ? theme.colors.tint : theme.colors.palette.neutral200,
            borderColor: isSelected ? theme.colors.tint : theme.colors.border,
          },
        ]}
        onPress={() => setSelectedSpecialty(isSelected ? null : specialty)}
      >
        <Text
          size="xs"
          style={{ color: isSelected ? theme.colors.palette.neutral100 : theme.colors.text }}
        >
          {specialty}
        </Text>
      </Pressable>
    )
  }

  const renderGuide = ({ item }: { item: Guide }) => (
    <Pressable
      style={[
        $guideCard,
        {
          backgroundColor: theme.colors.palette.neutral100,
          borderColor: theme.colors.border,
        },
      ]}
      onPress={() => handleGuidePress(item)}
    >
      <Image source={{ uri: item.avatar }} style={$guideAvatar} />
      <View style={$guideInfo}>
        <Text preset="bold" numberOfLines={1}>
          {item.name}
        </Text>
        <View style={$ratingContainer}>
          <Icon icon="heart" size={14} color="#FFB800" />
          <Text size="xs" style={{ marginLeft: spacing.xxs }}>
            {item.rating} ({item.reviewCount} đánh giá)
          </Text>
        </View>
        <View style={$specialtiesContainer}>
          {item.specialties.slice(0, 2).map((s) => (
            <View
              key={s}
              style={[$specialtyTag, { backgroundColor: theme.colors.palette.primary100 }]}
            >
              <Text size="xxs" style={{ color: theme.colors.tint }}>
                {s}
              </Text>
            </View>
          ))}
        </View>
        <View style={$languagesRow}>
          <Icon icon="community" size={14} color={theme.colors.textDim} />
          <Text size="xs" style={[$languageText, { color: theme.colors.textDim }]}>
            {item.languages.join(", ")}
          </Text>
        </View>
      </View>
      <View style={$guidePrice}>
        <Text preset="bold" style={{ color: theme.colors.tint }}>
          {item.hourlyRate.toLocaleString("vi-VN")}đ
        </Text>
        <Text size="xxs" style={{ color: theme.colors.textDim }}>
          /giờ
        </Text>
      </View>
    </Pressable>
  )

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Hướng dẫn viên</Text>
        <View style={$spacer} />
      </View>

      {/* Search */}
      <View style={$searchContainer}>
        <TextField
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Tìm kiếm hướng dẫn viên..."
          LeftAccessory={() => (
            <View style={$searchIcon}>
              <Icon icon="community" size={20} color={theme.colors.textDim} />
            </View>
          )}
          inputWrapperStyle={$searchInput}
        />
      </View>

      {/* Filters */}
      <View style={$filtersContainer}>{specialties.map(renderSpecialtyFilter)}</View>

      {/* Results count */}
      <View style={$resultsHeader}>
        <Text style={{ color: theme.colors.textDim }}>{filteredGuides.length} hướng dẫn viên</Text>
      </View>

      {loading ? (
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      ) : (
        <FlatList
          data={filteredGuides}
          renderItem={renderGuide}
          keyExtractor={(item) => item.id}
          contentContainerStyle={$listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="community" size={64} color={theme.colors.border} />
              <Text style={{ color: theme.colors.textDim, marginTop: spacing.md }}>
                Không tìm thấy hướng dẫn viên
              </Text>
            </View>
          }
        />
      )}
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
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

const $searchContainer: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.sm,
}

const $searchIcon: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginLeft: spacing.sm,
}

const $searchInput: ViewStyle = {
  borderRadius: 12,
}

const $filtersContainer: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing.md,
  gap: spacing.xs,
}

const $filterChip: ViewStyle = {
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.sm,
  borderRadius: 20,
  borderWidth: 1,
}

const $resultsHeader: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const $listContent: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.lg,
}

const $guideCard: ViewStyle = {
  flexDirection: "row",
  padding: spacing.sm,
  borderRadius: 12,
  borderWidth: 1,
  marginBottom: spacing.sm,
}

const $guideAvatar: ImageStyle = {
  width: 80,
  height: 80,
  borderRadius: 40,
}

const $guideInfo: ViewStyle = {
  flex: 1,
  marginLeft: spacing.sm,
  justifyContent: "center",
}

const $ratingContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: spacing.xxs,
}

const $specialtiesContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.xxs,
  marginTop: spacing.xxs,
}

const $specialtyTag: ViewStyle = {
  paddingVertical: 2,
  paddingHorizontal: spacing.xs,
  borderRadius: 4,
}

const $languagesRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: spacing.xxs,
}

const $languageText: TextStyle = {
  marginLeft: spacing.xxs,
}

const $guidePrice: ViewStyle = {
  alignItems: "flex-end",
  justifyContent: "center",
}

const $emptyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing.xxxl,
}
