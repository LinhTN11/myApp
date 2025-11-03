import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Lesson10Screen() {
  const navigation = useNavigation();

  // State danh sách sinh viên
  const [students, setStudents] = useState([
    { id: '1', name: 'Linh Tran', email: 'linh@example.com', phone: '0901 234 567' },
    { id: '2', name: 'Thuy Nguyen', email: 'thuy@example.com', phone: '0902 345 678' },
  ]);

  // State form thêm mới
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');

  // State hiển thị chi tiết
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = () => {
    if (!newName.trim()) return;
    const newStudent = {
      id: Date.now().toString(),
      name: newName,
      email: newEmail || 'example@gmail.com',
      phone: newPhone || '000 000 000',
    };
    setStudents([...students, newStudent]);
    setNewName('');
    setNewEmail('');
    setNewPhone('');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedStudent(item)} // Hiển thị chi tiết
    >
      <Ionicons name="person-circle-outline" size={40} color="#fff" />
      <View style={{ marginLeft: 12 }}>
        <ThemedText style={styles.name}>{item.name}</ThemedText>
        <ThemedText style={styles.email}>{item.email}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  // =============== GIAO DIỆN ===============

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          title: selectedStudent ? 'Chi tiết sinh viên' : 'Lesson 10 - Danh sách SV',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                selectedStudent ? setSelectedStudent(null) : navigation.goBack()
              }
              style={{ paddingHorizontal: 10 }}
            >
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Nếu có sinh viên được chọn → hiển thị chi tiết */}
      {selectedStudent ? (
        <View style={styles.detailCard}>
          <Image
            source={require('../assets/images/avt.webp')}
            style={styles.avatar}
            contentFit="cover"
          />
          <ThemedText style={styles.detailName}>{selectedStudent.name}</ThemedText>
          <ThemedText style={styles.job}>Sinh viên React Native</ThemedText>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Ionicons name="mail-outline" size={20} color="#aaa" />
            <ThemedText style={styles.contact}>{selectedStudent.email}</ThemedText>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={20} color="#aaa" />
            <ThemedText style={styles.contact}>{selectedStudent.phone}</ThemedText>
          </View>
        </View>
      ) : (
        <>
          {/* FORM THÊM SINH VIÊN */}
          <View style={styles.form}>
            <TextInput
              placeholder="Tên sinh viên"
              placeholderTextColor="#888"
              value={newName}
              onChangeText={setNewName}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              value={newEmail}
              onChangeText={setNewEmail}
              style={styles.input}
            />
            <TextInput
              placeholder="Số điện thoại"
              placeholderTextColor="#888"
              value={newPhone}
              onChangeText={setNewPhone}
              style={styles.input}
            />
            <TouchableOpacity style={styles.addButton} onPress={addStudent}>
              <Ionicons name="add-circle-outline" size={22} color="white" />
              <ThemedText style={styles.addText}>Thêm sinh viên</ThemedText>
            </TouchableOpacity>
          </View>

          {/* DANH SÁCH SINH VIÊN */}
          <FlatList
            data={students}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 30 }}
            style={{ width: '100%' }}
          />
        </>
      )}
    </ThemedView>
  );
}

// =============== STYLE ===============
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 20,
  },

  // Form thêm SV
  form: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 6,
  },

  // Danh sách
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    color: '#aaa',
    fontSize: 14,
  },

  // Chi tiết
  detailCard: {
    width: '88%',
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18,
  },
  detailName: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 4,
    color: '#fff',
  },
  job: {
    fontSize: 17,
    color: '#bbb',
    marginBottom: 18,
  },
  divider: {
    width: '70%',
    height: 1,
    backgroundColor: '#333',
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
    color: '#ddd',
  },
});
