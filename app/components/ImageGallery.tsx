import { FC, useState } from "react"
import {
  Dimensions,
  FlatList,
  Image,
  ImageStyle,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  View,
  ViewStyle,
} from "react-native"

import { spacing } from "@/theme/spacing"

import { Icon } from "./Icon"
import { Text } from "./Text"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

interface ImageGalleryProps {
  images: string[]
  style?: ViewStyle
  imageStyle?: ImageStyle
  showIndicator?: boolean
  aspectRatio?: number
  onImagePress?: (index: number) => void
}

/**
 * ImageGallery component for displaying a horizontal scrollable image gallery
 * @param images - Array of image URLs
 * @param showIndicator - Whether to show page indicator (default: true)
 * @param aspectRatio - Aspect ratio for images (default: 16/9)
 * @param onImagePress - Callback when image is pressed
 */
export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  style,
  imageStyle,
  showIndicator = true,
  aspectRatio = 16 / 9,
  onImagePress,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreenVisible, setFullscreenVisible] = useState(false)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffset = event.nativeEvent.contentOffset.x
    const index = Math.round(contentOffset / SCREEN_WIDTH)
    setCurrentIndex(index)
  }

  const handleImagePress = (index: number) => {
    if (onImagePress) {
      onImagePress(index)
    } else {
      setFullscreenVisible(true)
    }
  }

  const renderImage = ({ item, index }: { item: string; index: number }) => (
    <Pressable onPress={() => handleImagePress(index)}>
      <Image
        source={{ uri: item }}
        style={[
          $galleryImage,
          { width: SCREEN_WIDTH, height: SCREEN_WIDTH / aspectRatio },
          imageStyle,
        ]}
        resizeMode="cover"
      />
    </Pressable>
  )

  const renderFullscreenImage = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={$fullscreenImage} resizeMode="contain" />
  )

  if (images.length === 0) {
    return (
      <View style={[$emptyContainer, style]}>
        <Icon icon="view" size={48} color="#BDBDBD" />
        <Text style={$emptyText}>Chưa có ảnh</Text>
      </View>
    )
  }

  return (
    <View style={style}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {showIndicator && images.length > 1 && (
        <View style={$indicatorContainer}>
          <View style={$indicatorBadge}>
            <Text size="xs" style={$indicatorText}>
              {currentIndex + 1}/{images.length}
            </Text>
          </View>
        </View>
      )}

      {/* Fullscreen Modal */}
      <Modal visible={fullscreenVisible} transparent animationType="fade">
        <View style={$modalContainer}>
          <Pressable style={$closeButton} onPress={() => setFullscreenVisible(false)}>
            <Icon icon="x" size={28} color="#FFFFFF" />
          </Pressable>

          <FlatList
            data={images}
            renderItem={renderFullscreenImage}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            initialScrollIndex={currentIndex}
            getItemLayout={(_, index) => ({
              length: SCREEN_WIDTH,
              offset: SCREEN_WIDTH * index,
              index,
            })}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  )
}

const $galleryImage: ImageStyle = {
  backgroundColor: "#F5F5F5",
}

const $emptyContainer: ViewStyle = {
  height: 200,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5F5F5",
}

const $emptyText = {
  color: "#BDBDBD",
  marginTop: spacing.sm,
}

const $indicatorContainer: ViewStyle = {
  position: "absolute",
  bottom: spacing.md,
  right: spacing.md,
}

const $indicatorBadge: ViewStyle = {
  backgroundColor: "rgba(0,0,0,0.6)",
  paddingHorizontal: spacing.sm,
  paddingVertical: spacing.xxs,
  borderRadius: 12,
}

const $indicatorText = {
  color: "#FFFFFF",
}

const $modalContainer: ViewStyle = {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.95)",
  justifyContent: "center",
}

const $closeButton: ViewStyle = {
  position: "absolute",
  top: 50,
  right: spacing.md,
  zIndex: 10,
  padding: spacing.sm,
}

const $fullscreenImage: ImageStyle = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT * 0.8,
}
