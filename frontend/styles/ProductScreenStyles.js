import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 20, paddingHorizontal: 20 },
  
  notFoundText: { fontSize: 16, color: '#888', textAlign: 'center', marginTop: 50 },

  productImage: { alignSelf: 'center', borderRadius: 10, marginBottom: 15 },

  name: { fontSize: 20, fontWeight: '700', color: '#444', marginBottom: 5 },
  category: { fontSize: 14, color: '#666', marginBottom: 5 },
  rating: { fontSize: 14, color: '#e91e63', marginBottom: 15 },
  description: { fontSize: 14, color: '#666', lineHeight: 20, marginBottom: 15 },

  price: { fontSize: 18, fontWeight: '600', color: '#444', marginBottom: 20 },

  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  cartButton: { flex: 1, backgroundColor: '#b8860b', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginRight: 10 },
  wishlistButton: { flex: 1, backgroundColor: '#444', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
