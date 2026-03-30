import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function ShoppingScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search sustainable products..."
        placeholderTextColor="#95D5B2"
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Shopping Results</Text>
        <Text style={styles.searchText}>Searching for: {search || "Everything"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 50,
  },
  searchBar: {
    height: 50,
    borderWidth: 1.5,
    borderColor: '#40916C', // Leaf Green
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  content: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D6A4F',
    marginBottom: 10,
  },
  searchText: {
    color: '#52B788',
  }
});