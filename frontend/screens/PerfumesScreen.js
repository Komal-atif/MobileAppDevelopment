import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/PerfumeScreenStyles'; 

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const cardMargin = 10;
const itemWidth = (screenWidth - (numColumns + 1) * cardMargin) / numColumns;


const menPerfumes = [
  { id: '1', name: 'Aqua Di Gio', price: 'Rs.3500', rating: 4.8, image: require('../assets/men1.jpg') },
  { id: '2', name: 'Bleu de Chanel', price: 'Rs.4000', rating: 4.9, image: require('../assets/men2.jpg') },
  { id: '3', name: 'Dior Sauvage', price: 'Rs.3999', rating: 5.0, image: require('../assets/men3.jpg') },
  { id: '4', name: 'Versace Eros', price: 'Rs.1299', rating: 4.7, image: require('../assets/men4.jpg') },
  { id: '5', name: 'Tom Ford Noir', price: 'Rs.5000', rating: 4.8, image: require('../assets/men5.jpg') },
];

const womenPerfumes = [
  { id: '1', name: 'Chanel No. 5', price: 'Rs.1299', rating: 5.0, image: require('../assets/women1.jpg') },
  { id: '2', name: 'Dior J’adore', price: 'Rs.4000', rating: 4.9, image: require('../assets/women2.jpg') },
  { id: '3', name: 'Gucci Bloom', price: 'Rs.5000', rating: 4.8, image: require('../assets/women3.jpg') },
  { id: '4', name: 'YSL Black Opium', price: 'Rs.1299', rating: 4.7, image: require('../assets/women4.jpg') },
  { id: '5', name: 'Lancome La Vie', price: 'Rs.4800', rating: 4.6, image: require('../assets/women5.jpg') },
];

export default function PerfumeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Men');
  const items = selectedCategory === 'Men' ? menPerfumes : womenPerfumes;
  const navigation = useNavigation();

  const handleProductPress = (item) => {
    navigation.navigate('ProductScreen', { product: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { width: itemWidth }]}
      onPress={() => handleProductPress(item)}
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.rating}>⭐ {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Breadcrumb */}
      <View style={styles.breadcrumbContainer}>
        <Text style={styles.breadcrumbText}>
          Home <Text style={styles.breadcrumbSeparator}>{'>'} </Text>
          Perfumes <Text style={styles.breadcrumbSeparator}>{'>'} </Text>
          {selectedCategory}
        </Text>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => setSelectedCategory('Men')}>
          <View
            style={[
              styles.highlightCircle,
              selectedCategory === 'Men' && { borderColor: '#b8860b' },
            ]}
          >
            <Image source={require('../assets/men.jpg')} style={styles.categoryImage} />
          </View>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'Men' && { color: '#b8860b', fontWeight: '700' },
            ]}
          >
            Men
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedCategory('Women')}>
          <View
            style={[
              styles.highlightCircle,
              selectedCategory === 'Women' && { borderColor: '#b8860b' },
            ]}
          >
            <Image source={require('../assets/women.jpg')} style={styles.categoryImage} />
          </View>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === 'Women' && { color: '#b8860b', fontWeight: '700' },
            ]}
          >
            Women
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
