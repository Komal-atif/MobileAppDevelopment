import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './WinterScreenStyles';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const itemWidth = screenWidth / numColumns - 20;

const pretItems = [
  { id: '1', name: 'Brown Jacket', price: 'Rs.3999', rating: 4.9, image: require('../assets/winter1.jpg') },
  { id: '2', name: 'Brown Suit', price: 'Rs.8000', rating: 5.0, image: require('../assets/winter2.jpg') },
  { id: '3', name: 'Wool Coat', price: 'Rs.2400', rating: 4.8, image: require('../assets/winter3.jpg') },
  { id: '4', name: 'Puffer Jacket', price: 'Rs.6000', rating: 4.7, image: require('../assets/winter4.jpg') },
  { id: '5', name: 'Long Overcoat', price: 'Rs.8000', rating: 5.0, image: require('../assets/winter5.jpg') },
  { id: '6', name: 'Hooded Jacket', price: 'Rs.3999', rating: 4.6, image: require('../assets/winter6.jpg') },
  { id: '7', name: 'Fleece Hoodie', price: 'Rs.6000', rating: 4.5, image: require('../assets/winter7.jpg') },
  { id: '8', name: 'Trench Coat', price: 'Rs.8000', rating: 4.9, image: require('../assets/winter8.jpg') },
];

const unstitchedItems = [
  { id: '1', name: 'Unstitched 1', price: 'Rs.6000', rating: 4.5, image: require('../assets/unstitched1.jpg') },
  { id: '2', name: 'Unstitched 2', price: 'Rs.8000', rating: 4.6, image: require('../assets/unstitched2.jpg') },
  { id: '3', name: 'Unstitched 3', price: 'Rs.2400', rating: 4.7, image: require('../assets/unstitched3.jpg') },
  { id: '4', name: 'Unstitched 4', price: 'Rs.6000', rating: 4.4, image: require('../assets/unstitched4.jpg') },
  { id: '5', name: 'Unstitched 5', price: 'Rs.8000', rating: 4.8, image: require('../assets/unstitched5.jpg') },
  { id: '6', name: 'Unstitched 6', price: 'Rs.2400', rating: 4.6, image: require('../assets/unstitched6.jpg') },
  { id: '7', name: 'Unstitched 7', price: 'Rs.6000', rating: 4.5, image: require('../assets/unstitched7.jpg') },
  { id: '8', name: 'Unstitched 8', price: 'Rs.8000', rating: 4.7, image: require('../assets/unstitched8.jpg') },
];

export default function WinterScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Pret');
  const items = selectedCategory === 'Pret' ? pretItems : unstitchedItems;

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigation = useNavigation();

  const handleProductPress = (item) => {
    navigation.navigate('ProductScreen', {
      product: item,
      onAddToCart: () => addToCart(item),
      onAddToWishlist: () => addToWishlist(item),
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card, { width: itemWidth }]} onPress={() => handleProductPress(item)}>
      <Image source={item.image} style={styles.image} />
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
          Winter Collection <Text style={styles.breadcrumbSeparator}>{'>'} </Text>
          {selectedCategory}
        </Text>
      </View>

      {/* Category Icons */}
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => setSelectedCategory('Pret')}>
          <View style={[styles.highlightCircle, selectedCategory === 'Pret' && { borderColor: '#b8860b' }]}>
            <Image source={require('../assets/pret.jpg')} style={styles.categoryImage} />
          </View>
          <Text style={[styles.categoryText, selectedCategory === 'Pret' && { color: '#b8860b', fontWeight: '700' }]}>
            Pret
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedCategory('Unstitched')}>
          <View style={[styles.highlightCircle, selectedCategory === 'Unstitched' && { borderColor: '#b8860b' }]}>
            <Image source={require('../assets/unstiched.jpg')} style={styles.categoryImage} />
          </View>
          <Text style={[styles.categoryText, selectedCategory === 'Unstitched' && { color: '#b8860b', fontWeight: '700' }]}>
            Unstitched
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
