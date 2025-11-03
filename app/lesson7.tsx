import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function Lesson7Screen() {
  const navigation = useNavigation();

  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim().length === 0) return;
    setList([...list, { id: Date.now().toString(), text: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setList(list.filter(item => item.id !== id));
  };

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
            <TouchableOpacity onPress={() => navigation.navigate("lesson8")} style={{ paddingHorizontal: 10 }}>
              <Ionicons name="chevron-forward" size={28} color="white" />
            </TouchableOpacity>
          ),

          title: 'Lesson 7',
        }}
      />

      {/* CARD */}
      <View style={styles.card}>

        <ThemedText style={styles.title}>Danh sách công việc</ThemedText>

        {/* Input */}
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Nhập công việc..."
            placeholderTextColor="#999"
            value={task}
            onChangeText={setTask}
          />

          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <ThemedText style={styles.addText}>Thêm</ThemedText>
          </TouchableOpacity>
        </View>

        {/* List */}
        {/* List */}
        <FlatList
        style={{ width: '100%', marginTop: 15, maxHeight: 5 * 64 }} // 5 task * ~64px mỗi dòng
        data={list}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
            <TouchableOpacity
            onLongPress={() => deleteTask(item.id)}
            style={styles.taskRow}
            >
            <ThemedText style={styles.taskText}>{item.text}</ThemedText>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Ionicons name="close" size={22} color="#888" />
            </TouchableOpacity>
            </TouchableOpacity>
        )}
        />
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
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 18,
    color: '#222',
  },

  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },

  addButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginLeft: 10,
  },

  addText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  taskRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    marginVertical: 5,
  },

  taskText: {
    fontSize: 16,
    color: '#333',
  },
});
