import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Lesson8Screen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("lesson9")} style={{ paddingHorizontal: 10 }}>
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          ),       
          title: 'Lesson 8',
        }}
      />    
      {/* CARD */}
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('lesson4')}
        >
          <Ionicons name="person-circle-outline" size={24} color="white" />
          <ThemedText style={styles.buttonText}>Xem hồ sơ</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

// ===== STYLE =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '88%',
    backgroundColor: 'white',
    borderRadius: 70,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: 'center',

    // Shadow iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 20,

    // Android
    elevation: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
    marginBottom: 25,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
});
