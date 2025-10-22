import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext'; 
import { WishlistContext } from '../context/WishlistContext'; 
import styles from '../styles/ProductScreenStyles';

const screenWidth = Dimensions.get('window').width;

export default function ProductScreen() {
  const route = useRoute();
  const { product } = route.params || {};

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Product not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Product Image */}
      <Image
        source={product.image}
        style={[styles.productImage, { width: screenWidth * 0.9, height: screenWidth * 0.9 }]}
        resizeMode="contain"
      />

      {/* Product Info */}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.category}>Perfume</Text>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
      <Text style={styles.description}>
        This luxurious fragrance blends elegance and charm, perfect for any occasion. Let your scent speak for you.
      </Text>

      {/* Price */}
      <Text style={styles.price}>{product.price}</Text>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cartButton} onPress={() => addToCart(product)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wishlistButton} onPress={() => addToWishlist(product)}>
          <Text style={styles.buttonText}>Add to Wishlist</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
