import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import styles from '../styles/SalesScreenStyles'; 

const saleItems = [
  { id: '1', name: 'Item 1', price: '$70.00', rating: 4.8, image: require('../assets/summer9.jpg') },
  { id: '2', name: 'Item 2', price: '$85.00', rating: 4.7, image: require('../assets/summer10.jpg') },
  { id: '3', name: 'Item 3', price: '$75.00', rating: 4.6, image: require('../assets/summer_pret2.jpg') },
  { id: '4', name: 'Item 4', price: '$60.00', rating: 4.5, image: require('../assets/summer_pret5.jpg') },
  { id: '5', name: 'Item 5', price: '$50.00', rating: 4.4, image: require('../assets/summer_unstitched4.jpg') },
  { id: '6', name: 'Item 6', price: '$55.00', rating: 4.6, image: require('../assets/summer_unstitched7.jpg') },
  { id: '7', name: 'Item 7', price: '$65.00', rating: 4.7, image: require('../assets/unstitched2.jpg') },
  { id: '8', name: 'Item 8', price: '$70.00', rating: 4.8, image: require('../assets/unstitched6.jpg') },
  { id: '9', name: 'Item 9', price: '$90.00', rating: 4.9, image: require('../assets/men2.jpg') },
  { id: '10', name: 'Item 10', price: '$100.00', rating: 5.0, image: require('../assets/women1.jpg') },
];

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns - 20;

export default function SaleScreen({ navigation }) {
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
          Sale
        </Text>
      </View>

      <FlatList
        data={saleItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
