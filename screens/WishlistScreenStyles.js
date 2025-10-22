import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#fff' },

  // Empty state
  emptyText: { fontSize: 16, color: '#888', textAlign: 'center', marginTop: 50 },

  // Item Card
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  image: { width: 110, height: 150, borderRadius: 10 },
  info: { marginLeft: 12, flex: 1 },

  nameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 18, fontWeight: '600', color: '#333', flexShrink: 1 },
  size: { fontSize: 14, color: '#555', marginTop: 2 },
  price: { fontSize: 16, color: '#b8860b', marginTop: 4 },
  rating: { fontSize: 14, color: '#e91e63', marginTop: 4 },
});

export default styles;
