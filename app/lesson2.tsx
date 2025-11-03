import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Lesson2Screen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 8 }}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("lesson3")} style={{ paddingHorizontal: 8 }}>
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          ),
          title: 'Lesson 2',
        }}
      />

      <ThemedText style={styles.text}>Xin chào React Native!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 24, fontWeight: 'bold' },
});
