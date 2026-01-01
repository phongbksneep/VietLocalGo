import { FC, useState, useRef, useEffect, useCallback } from "react"
import {
  FlatList,
  Image,
  ImageStyle,
  KeyboardAvoidingView,
  Platform,
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
import { guides } from "@/services/mock"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type ChatScreenProps = NativeStackScreenProps<AppStackParamList, "Chat">

interface Message {
  id: string
  text: string
  senderId: string
  timestamp: Date
  isRead: boolean
}

export const ChatScreen: FC<ChatScreenProps> = ({ navigation, route }) => {
  const { recipientId, recipientName } = route.params
  const { theme } = useAppTheme()
  const flatListRef = useRef<FlatList>(null)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! Tôi có thể giúp gì cho bạn?",
      senderId: recipientId,
      timestamp: new Date(Date.now() - 3600000),
      isRead: true,
    },
    {
      id: "2",
      text: "Chào bạn! Tôi muốn hỏi về tour Phủ Dầy",
      senderId: "me",
      timestamp: new Date(Date.now() - 3500000),
      isRead: true,
    },
    {
      id: "3",
      text: "Dạ, tour Phủ Dầy rất phù hợp cho du khách muốn tìm hiểu văn hóa tâm linh. Tour kéo dài 1 ngày, bao gồm tham quan Phủ Dầy và Chùa Cổ Lễ.",
      senderId: recipientId,
      timestamp: new Date(Date.now() - 3400000),
      isRead: true,
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isOnline, setIsOnline] = useState(false)

  // Get recipient info
  const recipient = guides.find((g) => g.id === recipientId)

  useEffect(() => {
    if (recipient) {
      setIsOnline(recipient.isOnline)
    }
  }, [recipient])

  const scrollToBottom = useCallback(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true })
    }
  }, [messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleSend = () => {
    if (!inputText.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      senderId: "me",
      timestamp: new Date(),
      isRead: false,
    }

    setMessages((prev) => [...prev, newMessage])
    setInputText("")

    // Simulate reply after 1.5s
    setTimeout(() => {
      const replyMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.",
        senderId: recipientId,
        timestamp: new Date(),
        isRead: true,
      }
      setMessages((prev) => [...prev, replyMessage])
    }, 1500)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
  }

  const renderMessage = ({ item }: { item: Message }) => {
    const isMe = item.senderId === "me"

    return (
      <View style={isMe ? $myMessageContainer : $theirMessageContainer}>
        {!isMe && recipient && <Image source={{ uri: recipient.avatar }} style={$messageAvatar} />}
        <View
          style={[
            $messageBubble,
            isMe
              ? { backgroundColor: theme.colors.tint }
              : { backgroundColor: theme.colors.palette.neutral200 },
          ]}
        >
          <Text style={[$messageText, isMe ? $messageTextMe : $messageTextOther(theme)]}>
            {item.text}
          </Text>
          <Text size="xxs" style={[$messageTime, isMe ? $messageTimeMe : $messageTimeOther(theme)]}>
            {formatTime(item.timestamp)}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      {/* Header */}
      <View
        style={[
          $header,
          { backgroundColor: theme.colors.background, borderBottomColor: theme.colors.border },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()} style={$backButton}>
          <Icon icon="back" size={24} color={theme.colors.text} />
        </Pressable>
        <Pressable
          style={$headerProfile}
          onPress={() => navigation.navigate("GuideProfile", { guideId: recipientId })}
        >
          {recipient && (
            <View style={$headerAvatarContainer}>
              <Image source={{ uri: recipient.avatar }} style={$headerAvatar} />
              {isOnline && (
                <View style={[$onlineDot, { backgroundColor: theme.colors.palette.primary500 }]} />
              )}
            </View>
          )}
          <View style={$headerInfo}>
            <Text preset="bold">{recipientName}</Text>
            <Text
              size="xs"
              style={{ color: isOnline ? theme.colors.palette.primary500 : theme.colors.textDim }}
            >
              {isOnline ? "Đang hoạt động" : "Ngoại tuyến"}
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={$moreButton}
          onPress={() => navigation.navigate("GuideProfile", { guideId: recipientId })}
          accessibilityLabel="chat-more-button"
        >
          <Icon icon="more" size={24} color={theme.colors.text} />
        </Pressable>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={$keyboardAvoid}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={$messagesList}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={$emptyContainer}>
              <Icon icon="components" size={48} color={theme.colors.border} />
              <Text style={{ color: theme.colors.textDim }}>Bắt đầu cuộc trò chuyện</Text>
            </View>
          }
        />

        {/* Input */}
        <View
          style={[
            $inputContainer,
            { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
          ]}
        >
          <TextField
            containerStyle={$textFieldContainer}
            inputWrapperStyle={$textFieldWrapper}
            style={$textInput}
            placeholder="Nhập tin nhắn..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSend}
            returnKeyType="send"
          />
          <Pressable
            style={[
              $sendButton,
              {
                backgroundColor: inputText.trim()
                  ? theme.colors.tint
                  : theme.colors.palette.neutral300,
              },
            ]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <Icon
              icon="caretRight"
              size={20}
              color={inputText.trim() ? "#FFFFFF" : theme.colors.textDim}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $header: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.sm,
  borderBottomWidth: 1,
}

const $backButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $headerProfile: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm,
}

const $headerAvatarContainer: ViewStyle = {
  position: "relative",
}

const $headerAvatar: ImageStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
}

const $onlineDot: ViewStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 12,
  height: 12,
  borderRadius: 6,
  borderWidth: 2,
  borderColor: "#FFFFFF",
}

const $headerInfo: ViewStyle = {
  flex: 1,
}

const $moreButton: ViewStyle = {
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
}

const $keyboardAvoid: ViewStyle = {
  flex: 1,
}

const $messagesList: ViewStyle = {
  padding: spacing.md,
  gap: spacing.sm,
}

const $emptyContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: spacing.xxxl,
  gap: spacing.sm,
}

const $myMessageContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginBottom: spacing.xs,
}

const $theirMessageContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  gap: spacing.xs,
  marginBottom: spacing.xs,
}

const $messageAvatar: ImageStyle = {
  width: 28,
  height: 28,
  borderRadius: 14,
}

const $messageBubble: ViewStyle = {
  maxWidth: "75%",
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  borderRadius: 16,
}

const $messageText: TextStyle = {
  fontSize: 15,
  lineHeight: 20,
}

const $messageTime: TextStyle = {
  marginTop: spacing.xxs,
  textAlign: "right",
}

const $inputContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  padding: spacing.sm,
  gap: spacing.sm,
  borderTopWidth: 1,
}

const $textFieldContainer: ViewStyle = {
  flex: 1,
}

const $textFieldWrapper: ViewStyle = {
  borderRadius: 24,
}

const $textInput: TextStyle = {
  paddingVertical: spacing.xs,
}

const $sendButton: ViewStyle = {
  width: 44,
  height: 44,
  borderRadius: 22,
  justifyContent: "center",
  alignItems: "center",
}

const $messageTextMe: TextStyle = {
  color: "#FFFFFF",
}

const $messageTextOther = (theme: { colors: { text: string } }): TextStyle => ({
  color: theme.colors.text,
})

const $messageTimeMe: TextStyle = {
  color: "rgba(255,255,255,0.7)",
}

const $messageTimeOther = (theme: { colors: { textDim: string } }): TextStyle => ({
  color: theme.colors.textDim,
})
