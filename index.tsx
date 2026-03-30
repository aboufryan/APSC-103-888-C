import { Text, View } from '@/components/Themed';
import { FlatList, StyleSheet } from 'react-native';

const FRIENDS = [
  { id: '1', name: 'Rubin' },
  { id: '2', name: 'Lucas' },
  { id: '3', name: 'Ishan' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back!</Text>
      
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Friends</Text>
        <FlatList
          data={FRIENDS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Text style={styles.friendName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Clean White
    padding: 20,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2D6A4F', // Dark Green
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#52B788', // Light Green
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
  },
  friendItem: {
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#40916C', // Green accent
  },
  friendName: {
    color: '#1B4332',
  }
});
