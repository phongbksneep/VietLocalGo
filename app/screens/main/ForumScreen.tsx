/**
 * ForumScreen - Community posts and discussions
 * Max 200 lines per rule
 */
import { useCallback, useState } from "react"
import { FlatList, Pressable, Share, TextStyle, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useTranslation } from "react-i18next"

import { Icon } from "@/components/Icon"
import { PostCard } from "@/components/PostCard"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { posts } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"

type Tab = "trending" | "recent" | "following"

export function ForumScreen() {
  const { t } = useTranslation()
  const { themed, theme } = useAppTheme()
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState<Tab>("trending")

  const tabs: { id: Tab; label: string }[] = [
    { id: "trending", label: t("forum.tabs.hot") },
    { id: "recent", label: t("forum.tabs.newest") },
    { id: "following", label: t("forum.tabs.following") },
  ]

  const renderPost = useCallback(
    ({ item }: { item: (typeof posts)[0] }) => (
      <PostCard
        id={item.id}
        userName={item.userName}
        userAvatar={item.userAvatar}
        content={item.content}
        images={item.images}
        date={item.createdAt}
        likeCount={item.likeCount}
        commentCount={item.commentCount}
        isLiked={item.isLiked}
        style={$postCard}
        onPress={() =>
          (navigation as any).navigate("PostDetails", { postId: item.id, source: "forum" })
        }
        onShare={() => {
          const message = `${item.userName}: ${item.content}`
          Share.share({ message })
        }}
        onMore={() =>
          (navigation as any).navigate("PostDetails", { postId: item.id, source: "forum" })
        }
      />
    ),
    [navigation],
  )

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)} safeAreaEdges={["top"]}>
      {/* Header */}
      <View style={$header}>
        <Text style={themed($title)}>{t("forum.title")}</Text>
        <Pressable
          style={themed($searchButton)}
          onPress={() => (navigation as any).navigate("Search", { source: "forum-search" })}
          accessibilityLabel="forum-search-button"
        >
          <Icon icon="components" size={20} color={theme.colors.text} />
        </Pressable>
      </View>

      {/* Tabs */}
      <View style={themed($tabContainer)}>
        {tabs.map((tab) => (
          <Pressable
            key={tab.id}
            style={[themed($tab), activeTab === tab.id && themed($tabActive)]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[themed($tabText), activeTab === tab.id && themed($tabTextActive)]}>
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Posts List */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$postsList}
        keyExtractor={(item) => item.id}
      />

      {/* FAB */}
      <Pressable
        style={themed($fab)}
        onPress={() => navigation.navigate("CreatePost" as never)}
        accessibilityLabel="forum-fab-create-post"
      >
        <Icon icon="components" size={24} color={theme.colors.background} />
      </Pressable>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  flex: 1,
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

const $searchButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.background,
  borderColor: colors.border,
  borderRadius: 10,
  borderWidth: 1,
  height: 40,
  justifyContent: "center",
  width: 40,
})

const $tabContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderBottomColor: colors.border,
  borderBottomWidth: 1,
  flexDirection: "row",
  marginTop: 16,
})

const $tab: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  paddingVertical: 12,
})

const $tabActive: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderBottomColor: colors.tint,
  borderBottomWidth: 2,
})

const $tabText: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.textDim,
  fontSize: 15,
  fontWeight: "500",
  textAlign: "center",
})

const $tabTextActive: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.tint,
})

const $postsList: ViewStyle = {
  padding: 16,
  paddingBottom: 100,
}

const $postCard: ViewStyle = {
  marginBottom: 16,
}

const $fab: ThemedStyle<ViewStyle> = ({ colors }) => ({
  alignItems: "center",
  backgroundColor: colors.tint,
  borderRadius: 28,
  bottom: 90,
  elevation: 6,
  height: 56,
  justifyContent: "center",
  position: "absolute",
  right: 16,
  shadowColor: colors.tint,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  width: 56,
})
