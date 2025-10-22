import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../styles/SummerScreenStyles'; 

const pretItems = [
  { id: '1', name: 'Floral Dress', price: 'Rs.3000', rating: 4.8, image: require('../assets/summer_pret1.jpg') },
  { id: '2', name: 'Summer Suit', price: 'Rs.3000', rating: 4.7, image: require('../assets/summer_pret2.jpg') },
  { id: '3', name: 'Casual Top', price: 'Rs.3000', rating: 4.5, image: require('../assets/summer_pret3.jpg') },
  { id: '4', name: 'Maxi Dress', price: 'Rs.7999', rating: 4.9, image: require('../assets/summer_pret4.jpg') },
  { id: '5', name: 'Shorts Set', price: 'Rs.3000', rating: 4.6, image: require('../assets/summer_pret5.jpg') },
  { id: '6', name: 'Sleeveless Dress', price: 'Rs.7999', rating: 4.8, image: require('../assets/summer_pret6.jpg') },
  { id: '7', name: 'Summer Top', price: 'Rs.3000', rating: 4.7, image: require('../assets/summer_pret7.jpg') },
  { id: '8', name: 'Beach Dress', price: 'Rs.7999', rating: 4.9, image: require('../assets/summer_pret8.jpg') },
];

const unstitchedItems = [
  { id: '1', name: 'Fabric 1', price: 'Rs.3000', rating: 4.4, image: require('../assets/summer_unstitched1.jpg') },
  { id: '2', name: 'Fabric 2', price: 'Rs.3000', rating: 4.5, image: require('../assets/summer_unstitched2.jpg') },
  { id: '3', name: 'Fabric 3', price: 'Rs.7999', rating: 4.6, image: require('../assets/summer_unstitched3.jpg') },
  { id: '4', name: 'Fabric 4', price: 'Rs.2599', rating: 4.5, image: require('../assets/summer_unstitched4.jpg') },
  { id: '5', name: 'Fabric 5', price: 'Rs.2700', rating: 4.7, image: require('../assets/summer_unstitched5.jpg') },
  { id: '6', name: 'Fabric 6', price: 'Rs.4999', rating: 4.6, image: require('../assets/summer_unstitched6.jpg') },
  { id: '7', name: 'Fabric 7', price: 'Rs.2599', rating: 4.5, image: require('../assets/summer_unstitched7.jpg') },
  { id: '8', name: 'Fabric 8', price: 'Rs.3000', rating: 4.7, image: require('../assets/summer_unstitched8.jpg') },
];

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns - 20;

export default function SummerScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Pret');
  const items = selectedCategory === 'Pret' ? pretItems : unstitchedItems;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card(itemWidth)}
      onPress={() => navigation.navigate('ProductScreen', { product: item })}
    >
      <Image source={item.image} style={styles.image(itemWidth)} />
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
          Summer Collection <Text style={styles.breadcrumbSeparator}>{'>'} </Text>
          {selectedCategory}
        </Text>
      </View>

      {/* Category Icons */}
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => setSelectedCategory('Pret')}>
          <View style={styles.highlightCircle(selectedCategory === 'Pret')}>
            <Image source={require('../assets/summer_pret_icon.jpg')} style={styles.categoryImage} />
          </View>
          <Text style={styles.categoryText(selectedCategory === 'Pret')}>Pret</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedCategory('Unstitched')}>
          <View style={styles.highlightCircle(selectedCategory === 'Unstitched')}>
            <Image source={require('../assets/summer_unstitched_icon.jpg')} style={styles.categoryImage} />
          </View>
          <Text style={styles.categoryText(selectedCategory === 'Unstitched')}>Unstitched</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
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
