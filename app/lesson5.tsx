import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function Lesson5Screen() {
  const navigation = useNavigation();

  const [math, setMath] = useState('');
  const [phys, setPhys] = useState('');
  const [chem, setChem] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const m = parseFloat(math);
    const p = parseFloat(phys);
    const c = parseFloat(chem);

    if (isNaN(m) || isNaN(p) || isNaN(c)) {
      setResult("Vui lòng nhập đủ và đúng điểm!");
      return;
    }

    setResult(((m + p + c) / 3).toFixed(2));
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
              onPress={() => navigation.navigate("lesson6")}
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          ),

          title: 'Lesson 5',
        }}
      />

      {/* CARD */}
      <View style={styles.card}>

        <ThemedText style={styles.title}>Tính điểm trung bình</ThemedText>

        {/* Input fields */}
        <TextInput
          style={styles.input}
          placeholder="Điểm Toán"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={math}
          onChangeText={setMath}
        />

        <TextInput
          style={styles.input}
          placeholder="Điểm Lý"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={phys}
          onChangeText={setPhys}
        />

        <TextInput
          style={styles.input}
          placeholder="Điểm Hóa"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={chem}
          onChangeText={setChem}
        />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <ThemedText style={styles.buttonText}>Tính điểm</ThemedText>
        </TouchableOpacity>

        {/* Result */}
        {result !== null && (
          <ThemedText style={styles.result}>
            {isNaN(result) ? result : `Điểm trung bình: ${result}`}
          </ThemedText>
        )}

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

    // Shadow iOS mịn
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#222',
  },

  input: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    marginVertical: 8,
    fontSize: 16,
    color: '#333',
  },

  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },

  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },
});
