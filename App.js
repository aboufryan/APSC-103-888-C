import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, QPID!</Text>
          <Text style={styles.subtitle}>Lets Check Our Carbon Footprint!</Text>
        </View>
        <TouchableOpacity style={styles.profileCircle} />
      </View>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#888" />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search Products..." 
          placeholderTextColor="#888"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Friends</Text>
          <View style={styles.grid}>
            {['Rubin', 'Ryan', 'Ishan', 'Lucas'].map((item, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <View style={styles.iconPlaceholder} />
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sustainability Score</Text>
          <TouchableOpacity style={styles.SusCard}>
            <Text style={styles.SusTitle}>80/100</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.section}>
        <View style={styles.grid}>
          {['Home', 'Shopping', 'Account'].map((item, index)=>(
            <TouchableOpacity key={index} style={styles.pages}>
              <View style={styles.iconPlaceholder}/>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 14,
    color: '#187c8b',
  },
  profileCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#179b43',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    borderRadius: 12,
    height: 50,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryItem: {
    width: (width - 60) / 4,
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#2cab44',
    borderRadius: 15,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
  },
  SusCard: {
    backgroundColor: '#169a3e',
    borderRadius: 20,
    padding: 25,
    height: 150,
    justifyContent: 'center',
  },
  SusTitle: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '900',
  },
});

export default App;