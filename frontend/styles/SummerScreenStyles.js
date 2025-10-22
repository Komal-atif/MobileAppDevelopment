import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 80,
  },
  breadcrumbContainer: {
    marginLeft: 20,
    marginBottom: 15,
  },
  breadcrumbText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
  breadcrumbSeparator: {
    fontWeight: '700',
    color: '#444',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  highlightCircle: (isSelected) => ({
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: isSelected ? '#b8860b' : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  }),
  categoryImage: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  categoryText: (isSelected) => ({
    fontSize: 14,
    color: isSelected ? '#b8860b' : '#333',
    fontWeight: isSelected ? '700' : '600',
    textAlign: 'center',
    marginTop: 5,
  }),
  list: {
    paddingHorizontal: 10,
  },
  card: (itemWidth) => ({
    backgroundColor: '#f9f9f9',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: itemWidth,
    alignItems: 'center',
  }),
  image: (itemWidth) => ({
    width: itemWidth - 20,
    height: itemWidth - 20,
    borderRadius: 8,
    marginBottom: 8,
  }),
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  rating: {
    fontSize: 12,
    color: '#e91e63',
    marginTop: 4,
  },
});
