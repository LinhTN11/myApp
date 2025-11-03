import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Lesson6Screen() {
  const navigation = useNavigation();

  const [color, setColor] = useState('#FF6B6B'); // màu mặc định

  const randomColor = () => {
    const newColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(newColor);
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("lesson7")}
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          ),

          title: 'Lesson 6',
        }}
      />

      {/* CARD */}
      <View style={styles.card}>

        <ThemedText style={styles.title}>Đổi màu nền</ThemedText>

        {/* Color box */}
        <View style={[styles.colorBox, { backgroundColor: color }]} />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={randomColor}>
          <ThemedText style={styles.buttonText}>Đổi màu</ThemedText>
        </TouchableOpacity>

        {/* Show current color code */}
        <ThemedText style={styles.colorText}>{color.toUpperCase()}</ThemedText>

      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',

    // Shadow iOS đẹp
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#222',
  },

  colorBox: {
    width: '100%',
    height: 120,
    borderRadius: 16,
    marginBottom: 20,
  },

  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },

  colorText: {
    marginTop: 15,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
