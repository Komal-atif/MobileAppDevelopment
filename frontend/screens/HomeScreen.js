import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/HomeScreenStyles';

const categories = [
  { id: 2, name: 'Winter', image: require('../assets/winter.jpg'), screen: 'Winter' },
  { id: 3, name: 'Summer', image: require('../assets/summer.jpg'), screen: 'Summer' },
  { id: 4, name: 'Perfumes', image: require('../assets/perfumes.jpg'), screen: 'Perfumes' },
  { id: 5, name: 'Sale', image: require('../assets/sale.jpg'), screen: 'Sale' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* KFITS Heading */}
      <View style={styles.headingContainer}>
        <Text style={[styles.headingText, { color: '#b8860b' }]}>KFITS</Text>
      </View>

      <ScrollView style={{ paddingBottom: 150 }}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image source={require('../assets/home.jpg')} style={styles.heroImage} />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: '#222' }]}>Shop by Category</Text>

          <View style={styles.categoryGrid}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[styles.categoryCard, { backgroundColor: '#fafafa' }]}
                onPress={() => navigation.navigate(cat.screen)}
              >
                <Image source={cat.image} style={styles.categoryImage} />
                <Text style={[styles.categoryName, { color: '#222' }]}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
