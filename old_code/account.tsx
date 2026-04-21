import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Carbon Footprint</Text>
        <Text style={styles.footprintValue}>76/100</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Eco-Warrior Level</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B4332',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#D8F3DC', // Very light mint green
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    color: '#2D6A4F',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  footprintValue: {
    fontSize: 36,
    fontWeight: '900',
    marginVertical: 15,
    color: '#081C15',
  },
  badge: {
    backgroundColor: '#40916C',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  }
});
