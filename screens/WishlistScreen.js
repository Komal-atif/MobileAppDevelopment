import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { WishlistContext } from '../context/WishlistContext';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './WishlistScreenStyles'; // external style

export default function WishlistScreen() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
            {item.name}
          </Text>
          <TouchableOpacity onPress={() => removeFromWishlist(item)}>
            <Icon name="trash-outline" size={22} color="#e91e63" />
          </TouchableOpacity>
        </View>
        {item.selectedSize && <Text style={styles.size}>Size: {item.selectedSize}</Text>}
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      {wishlistItems.length === 0 ? (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      ) : (
        <FlatList
          data={wishlistItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        />
      )}
    </SafeAreaView>
  );
}
