import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useNavigation } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Lesson4Screen() {
  const navigation = useNavigation();

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
              onPress={() => navigation.navigate("lesson5")} 
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          ),

          title: 'Lesson 4',
        }}
      />

      {/* CARD */}
      <View style={styles.card}>

        {/* Avatar */}
        <Image
          source={require('../assets/images/avt.webp')}
          style={styles.avatar}
          contentFit="cover"
        />

        {/* Name */}
        <ThemedText style={styles.name}>Linh Tran</ThemedText>

        {/* Job */}
        <ThemedText style={styles.job}>React Native Developer</ThemedText>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Contacts */}
        <View style={styles.row}>
          <Ionicons name="mail-outline" size={20} color="#5A5A5A" />
          <ThemedText style={styles.contact}>linh@example.com</ThemedText>
        </View>

        <View style={styles.row}>
          <Ionicons name="call-outline" size={20} color="#5A5A5A" />
          <ThemedText style={styles.contact}>0901 234 567</ThemedText>
        </View>

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
    width: '88%',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',

    // Shadow iOS nâng cấp
    shadowColor: '#ffffffff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 20,

    // Android
    elevation: 12,
    },


  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18,
  },

  name: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 4,
    color: '#222',
  },

  job: {
    fontSize: 17,
    color: '#6A6A6A',
    marginBottom: 18,
  },

  divider: {
    width: '70%',
    height: 1,
    backgroundColor: '#E6E6E6',
    marginVertical: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },

  contact: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});
