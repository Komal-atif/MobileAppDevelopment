import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { CartContext } from '../context/CartContext';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './CartScreenStyles';

export default function CartScreen() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
            {item.name}
          </Text>
          <TouchableOpacity onPress={() => removeFromCart(item)}>
            <Icon name="trash-outline" size={22} color="#e91e63" />
          </TouchableOpacity>
        </View>
        {item.selectedSize && <Text style={styles.size}>Size: {item.selectedSize}</Text>}
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.qtyButton} onPress={() => updateQuantity(item, -1)}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyNumber}>{item.quantity}</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={() => updateQuantity(item, 1)}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // Correct total calculation
  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10); // remove Rs. and commas
    return sum + numericPrice * item.quantity;
  }, 0);

  return (
    <SafeAreaView style={styles.safeContainer}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 140, paddingTop: 10 }} // space for total
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: Rs.{total}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
