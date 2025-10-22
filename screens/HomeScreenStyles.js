import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headingContainer: {
    marginTop: 40,       // more space from the top
    marginLeft: 25,      // more space from the left
    marginRight: 25,     // consistent padding
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // no switch, so align left
  },
  headingText: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
  },
  heroContainer: {
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
  heroImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  section: { marginTop: 30, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginBottom: 15 },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  categoryCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  categoryImage: { width: '100%', height: 150, resizeMode: 'cover' },
  categoryName: { textAlign: 'center', paddingVertical: 8, fontSize: 16, fontWeight: '600' },
});

export default styles;
