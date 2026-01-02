import { FC, useEffect, useState, useRef } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  Share,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useTranslation } from "react-i18next"

import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { Post, PostComment, posts } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type PostDetailsScreenProps = NativeStackScreenProps<AppStackParamList, "PostDetails">

export const PostDetailsScreen: FC<PostDetailsScreenProps> = ({ navigation, route }) => {
  const { postId } = route.params
  const { theme } = useAppTheme()
  const { t } = useTranslation()

  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [commentText, setCommentText] = useState("")
  const [commentLiked, setCommentLiked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchPost = () => {
      const foundPost = posts.find((p) => p.id === postId)
      if (foundPost) {
        setPost(foundPost)
        setIsLiked(foundPost.isLiked || false)
        setLikeCount(foundPost.likeCount)
      }
      setLoading(false)
    }
    fetchPost()
  }, [postId])

  const handleLike = () => {
    setIsLiked((prev) => !prev)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleComment = () => {
    if (!commentText.trim()) return
    // Mock adding comment
    setCommentText("")
  }

  const handleCommentLike = (commentId: string) => {
    setCommentLiked((prev) => ({ ...prev, [commentId]: !prev[commentId] }))
  }

  const handleReply = (userName: string) => {
    setCommentText(`@${userName} `)
    scrollRef.current?.scrollToEnd({ animated: true })
  }

  const handleSharePost = () => {
    Share.share({ message: `${post?.userName}: ${post?.content}` })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const scrollRef = useRef<ScrollView | null>(null)

  const renderComment = ({ item }: { item: PostComment }) => (
    <View style={$commentItem}>
      <Image source={{ uri: item.userAvatar }} style={$commentAvatar} />
      <View style={$commentContent}>
        <View style={$commentHeader}>
          <Text preset="bold" size="sm">
            {item.userName}
          </Text>
          <Text size="xxs" style={{ color: theme.colors.textDim }}>
            {formatDate(item.createdAt)}
          </Text>
        </View>
        <Text style={{ color: theme.colors.text }}>{item.content}</Text>
        <View style={$commentActions}>
          <Pressable
            style={$commentAction}
            onPress={() => handleCommentLike(item.id)}
            accessibilityLabel={`comment-like-${item.id}`}
          >
            <Icon
              icon="heart"
              size={14}
              color={commentLiked[item.id] ? theme.colors.palette.accent500 : theme.colors.textDim}
            />
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {item.likeCount + (commentLiked[item.id] ? 1 : 0)}
            </Text>
          </Pressable>
          <Pressable
            style={$commentAction}
            onPress={() => handleReply(item.userName)}
            accessibilityLabel={`comment-reply-${item.id}`}
          >
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              Trả lời
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )

  if (loading) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.tint} />
        </View>
      </Screen>
    )
  }

  if (!post) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$loadingContainer}>
          <Icon icon="components" size={64} color={theme.colors.border} />
          <Text style={{ color: theme.colors.textDim }}>Không tìm thấy bài viết</Text>
        </View>
      </Screen>
    )
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View style={[$header, { backgroundColor: theme.colors.background }]}>
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Text preset="heading">Bài viết</Text>
        <Pressable
          style={$moreButton}
          onPress={() => Share.share({ message: `${post.userName}: ${post.content}` })}
          accessibilityLabel="post-details-more"
        >
          <Icon icon="more" size={24} color={theme.colors.text} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={$scrollContent}>
        {/* Author Info */}
        <View style={$authorSection}>
          <Image source={{ uri: post.userAvatar }} style={$authorAvatar} />
          <View style={$authorInfo}>
            <Text preset="bold">{post.userName}</Text>
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {formatDate(post.createdAt)}
            </Text>
          </View>
        </View>

        {/* Content */}
        <Text style={[$postContent, { color: theme.colors.text }]}>{post.content}</Text>

        {/* Tags */}
        {post.tags.length > 0 && (
          <View style={$tagsContainer}>
            {post.tags.map((tag, index) => (
              <Text key={index} style={{ color: theme.colors.tint }}>
                {tag}
              </Text>
            ))}
          </View>
        )}

        {/* Images */}
        {post.images.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={$imagesContainer}
            contentContainerStyle={$imagesContent}
          >
            {post.images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={$postImage} />
            ))}
          </ScrollView>
        )}

        {/* Location */}
        {post.location && (
          <View style={$locationContainer}>
            <Icon icon="pin" size={14} color={theme.colors.textDim} />
            <Text size="xs" style={{ color: theme.colors.textDim }}>
              {post.location}
            </Text>
          </View>
        )}

        {/* Actions */}
        <View style={[$actionsBar, { borderTopColor: theme.colors.border }]}>
          <Pressable style={$actionButton} onPress={handleLike}>
            <Icon
              icon="heart"
              size={22}
              color={isLiked ? theme.colors.palette.accent500 : theme.colors.textDim}
            />
            <Text
              style={{
                color: isLiked ? theme.colors.palette.accent500 : theme.colors.textDim,
              }}
            >
              {likeCount}
            </Text>
          </Pressable>
          <Pressable
            style={$actionButton}
            onPress={() => scrollRef.current?.scrollToEnd({ animated: true })}
            accessibilityLabel="post-comment-button"
          >
            <Icon icon="components" size={22} color={theme.colors.textDim} />
            <Text style={{ color: theme.colors.textDim }}>{post.commentCount}</Text>
          </Pressable>
          <Pressable
            style={$actionButton}
            onPress={handleSharePost}
            accessibilityLabel="post-share-button"
          >
            <Icon icon="caretRight" size={22} color={theme.colors.textDim} />
            <Text style={{ color: theme.colors.textDim }}>{post.shareCount}</Text>
          </Pressable>
        </View>

        {/* Comments Section */}
        <View style={$commentsSection}>
          <Text preset="subheading" style={$commentsTitle}>
            {t("post.comments", { count: post.comments.length })}
          </Text>
          <FlatList
            data={post.comments}
            renderItem={renderComment}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={$commentSeparator} />}
            ListEmptyComponent={
              <View style={$emptyComments}>
                <Text style={{ color: theme.colors.textDim }}>{t("post.commentsEmpty")}</Text>
              </View>
            }
          />
        </View>
      </ScrollView>

      {/* Comment Input */}
      <View
        style={[
          $commentInputContainer,
          { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        ]}
      >
        <TextField
          containerStyle={$commentFieldContainer}
          inputWrapperStyle={$commentFieldWrapper}
          placeholder={t("post.writeCommentPlaceholder")}
          value={commentText}
          onChangeText={setCommentText}
          onSubmitEditing={handleComment}
        />
        <Pressable
          style={[
            $sendButton,
            { backgroundColor: commentText.trim() ? theme.colors.tint : theme.colors.border },
          ]}
          onPress={handleComment}
          disabled={!commentText.trim()}
        >
          <Icon
            icon="caretRight"
            size={18}
            color={commentText.trim() ? "#FFFFFF" : theme.colors.textDim}
          />
        </Pressable>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $loadingContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: spacing.md,
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

const $moreButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $scrollContent: ViewStyle = {
  paddingBottom: 80,
}

const $authorSection: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
}

const $authorAvatar: ImageStyle = {
  width: 44,
  height: 44,
  borderRadius: 22,
}

const $authorInfo: ViewStyle = {
  flex: 1,
}

const $postContent: TextStyle = {
  paddingHorizontal: spacing.md,
  lineHeight: 24,
  marginBottom: spacing.md,
}

const $tagsContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: spacing.xs,
  paddingHorizontal: spacing.md,
  marginBottom: spacing.md,
}

const $imagesContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $imagesContent: ViewStyle = {
  paddingHorizontal: spacing.md,
  gap: spacing.sm,
}

const $postImage: ImageStyle = {
  width: 280,
  height: 200,
  borderRadius: 12,
}

const $locationContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
  paddingHorizontal: spacing.md,
  marginBottom: spacing.md,
}

const $actionsBar: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  paddingVertical: spacing.md,
  borderTopWidth: 1,
  marginHorizontal: spacing.md,
}

const $actionButton: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
}

const $commentsSection: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingTop: spacing.md,
}

const $commentsTitle: TextStyle = {
  marginBottom: spacing.md,
}

const $commentItem: ViewStyle = {
  flexDirection: "row",
  gap: spacing.sm,
}

const $commentAvatar: ImageStyle = {
  width: 36,
  height: 36,
  borderRadius: 18,
}

const $commentContent: ViewStyle = {
  flex: 1,
}

const $commentHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.xxs,
}

const $commentActions: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  marginTop: spacing.xs,
}

const $commentAction: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xxs,
}

const $commentSeparator: ViewStyle = {
  height: spacing.md,
}

const $emptyComments: ViewStyle = {
  alignItems: "center",
  paddingVertical: spacing.lg,
}

const $commentInputContainer: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.sm,
  gap: spacing.sm,
  borderTopWidth: 1,
}

const $commentFieldContainer: ViewStyle = {
  flex: 1,
}

const $commentFieldWrapper: ViewStyle = {
  borderRadius: 20,
}

const $sendButton: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
}
