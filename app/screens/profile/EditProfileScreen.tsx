import { FC, useState } from "react"
import {
  Alert,
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { AppStackParamList } from "@/navigators/navigationTypes"
import { useAppTheme } from "@/theme/context"
import { spacing } from "@/theme/spacing"

type EditProfileScreenProps = NativeStackScreenProps<AppStackParamList, "EditProfile">

export const EditProfileScreen: FC<EditProfileScreenProps> = ({ navigation }) => {
  const { theme } = useAppTheme()

  const [avatar, setAvatar] = useState("https://i.pravatar.cc/300?u=currentuser")
  const [fullName, setFullName] = useState("Nguyễn Văn A")
  const [email, setEmail] = useState("nguyenvana@gmail.com")
  const [phone, setPhone] = useState("0912345678")
  const [bio, setBio] = useState("Yêu du lịch và khám phá văn hóa Việt Nam")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isValid = fullName.trim().length >= 2 && email.includes("@")

  const handleChangeAvatar = () => {
    // Mock changing avatar
    const avatars = [
      "https://i.pravatar.cc/300?u=user1",
      "https://i.pravatar.cc/300?u=user2",
      "https://i.pravatar.cc/300?u=user3",
    ]
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)]
    setAvatar(randomAvatar)
  }

  const handleSubmit = async () => {
    if (!isValid) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    navigation.goBack()
  }

  const handleDeleteAccount = () => {
    Alert.alert(
      "Xóa tài khoản",
      "Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác.",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xóa",
          style: "destructive",
          onPress: () => {
            // mock delete -> navigate to Login
            navigation.navigate("Login" as never)
          },
        },
      ],
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
        <Text preset="heading">Chỉnh sửa hồ sơ</Text>
        <View style={$spacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={$scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Avatar Section */}
        <View style={$avatarSection}>
          <View style={$avatarContainer}>
            <Image source={{ uri: avatar }} style={$avatar} />
            <Pressable
              style={[$changeAvatarButton, { backgroundColor: theme.colors.tint }]}
              onPress={handleChangeAvatar}
            >
              <Icon icon="components" size={16} color="#FFFFFF" />
            </Pressable>
          </View>
          <Pressable onPress={handleChangeAvatar}>
            <Text style={{ color: theme.colors.tint }}>Thay đổi ảnh đại diện</Text>
          </Pressable>
        </View>

        {/* Form Fields */}
        <View style={$formSection}>
          <TextField
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            value={fullName}
            onChangeText={setFullName}
            containerStyle={$textFieldContainer}
          />

          <TextField
            label="Email"
            placeholder="Nhập email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={$textFieldContainer}
          />

          <TextField
            label="Số điện thoại"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            containerStyle={$textFieldContainer}
          />

          <TextField
            label="Giới thiệu bản thân"
            placeholder="Viết vài dòng về bạn..."
            value={bio}
            onChangeText={setBio}
            multiline
            containerStyle={$textFieldContainer}
            inputWrapperStyle={$bioInputWrapper}
            style={$bioInput}
          />
        </View>

        {/* Account Info */}
        <View style={[$infoCard, { backgroundColor: theme.colors.palette.neutral100 }]}>
          <View style={$infoRow}>
            <Text style={{ color: theme.colors.textDim }}>Ngày tham gia</Text>
            <Text preset="bold">15/01/2024</Text>
          </View>
          <View style={[$divider, { backgroundColor: theme.colors.border }]} />
          <View style={$infoRow}>
            <Text style={{ color: theme.colors.textDim }}>Số bài viết</Text>
            <Text preset="bold">12</Text>
          </View>
          <View style={[$divider, { backgroundColor: theme.colors.border }]} />
          <View style={$infoRow}>
            <Text style={{ color: theme.colors.textDim }}>Số đánh giá</Text>
            <Text preset="bold">8</Text>
          </View>
        </View>

        {/* Danger Zone */}
        <View style={$dangerSection}>
          <Text preset="formLabel" style={$dangerTitle}>
            Vùng nguy hiểm
          </Text>
          <Pressable
            style={[$dangerButton, { borderColor: theme.colors.error }]}
            onPress={handleDeleteAccount}
            accessibilityLabel="delete-account-button"
          >
            <Icon icon="x" size={18} color={theme.colors.error} />
            <Text style={{ color: theme.colors.error }}>Xóa tài khoản</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View
        style={[
          $bottomCTA,
          { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        ]}
      >
        <Button
          preset="filled"
          text={isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
          style={$submitButton}
          onPress={handleSubmit}
          disabled={!isValid || isSubmitting}
        />
      </View>
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
  borderBottomWidth: 1,
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

const $scrollContent: ViewStyle = {
  padding: spacing.md,
  paddingBottom: 100,
}

const $avatarSection: ViewStyle = {
  alignItems: "center",
  marginBottom: spacing.xl,
}

const $avatarContainer: ViewStyle = {
  position: "relative",
  marginBottom: spacing.sm,
}

const $avatar: ImageStyle = {
  width: 100,
  height: 100,
  borderRadius: 50,
}

const $changeAvatarButton: ViewStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 32,
  height: 32,
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 3,
  borderColor: "#FFFFFF",
}

const $formSection: ViewStyle = {
  marginBottom: spacing.lg,
}

const $textFieldContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $bioInputWrapper: ViewStyle = {
  minHeight: 100,
  alignItems: "flex-start",
}

const $bioInput: TextStyle = {
  minHeight: 80,
  textAlignVertical: "top",
}

const $infoCard: ViewStyle = {
  borderRadius: 12,
  padding: spacing.md,
  marginBottom: spacing.lg,
}

const $infoRow: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: spacing.xs,
}

const $divider: ViewStyle = {
  height: 1,
  marginVertical: spacing.xs,
}

const $dangerSection: ViewStyle = {
  marginBottom: spacing.lg,
}

const $dangerTitle: TextStyle = {
  marginBottom: spacing.sm,
}

const $dangerButton: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.xs,
  padding: spacing.md,
  borderRadius: 12,
  borderWidth: 1,
}

const $bottomCTA: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: spacing.md,
  borderTopWidth: 1,
}

const $submitButton: ViewStyle = {
  width: "100%",
}
