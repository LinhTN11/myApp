import { useRouter } from 'expo-router'; // ✅ dùng useRouter để điều hướng
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <TouchableOpacity onPress={() => router.push('/lesson1')}>
          <ThemedText
            type="title"
            style={{
              fontFamily: Fonts.rounded,
              color: '#007AFF',
            }}>
            Explore
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <Collapsible title="File-based routing">
        <ThemedText>
          This app includes example code to help you get started.
        </ThemedText>
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/lesson1.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>.
        </ThemedText>
        <ThemedText>
          The layout file in{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
      </Collapsible>

      {/* ... các phần còn lại giữ nguyên */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
