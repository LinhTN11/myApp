import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationIndependentTree } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

// ====== Các màn hình con ======
function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Home</ThemedText>
    </ThemedView>
  );
}

function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Search</ThemedText>
    </ThemedView>
  );
}

function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.text}>Settings</ThemedText>
    </ThemedView>
  );
}

// ====== Màn hình chính Lesson 9 ======
export default function Lesson9Screen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={{ flex: 1, backgroundColor: '#0d0d0d' }}>
      {/* Thanh top bar */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: 'Lesson 9',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-back" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('lesson10')}
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-forward" size={26} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Bottom Tabs */}
      <NavigationIndependentTree>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#1a1a1a',
              borderTopColor: '#333',
              height: 60,
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#777',
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;

              if (route.name === 'Home')
                iconName = focused ? 'home' : 'home-outline';
              else if (route.name === 'Search')
                iconName = focused ? 'search' : 'search-outline';
              else if (route.name === 'Settings')
                iconName = focused ? 'settings' : 'settings-outline';

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationIndependentTree>
    </ThemedView>
  );
}

// ====== STYLE ======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d', // theme tối
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white', // chữ trắng
  },
});
