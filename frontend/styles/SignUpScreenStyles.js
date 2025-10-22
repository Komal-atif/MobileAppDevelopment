import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#b8860b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#b8860b',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialButton: {
    padding: 10,
    borderRadius: 6,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#333',
  },
  link: {
    color: '#b8860b',
    fontWeight: '600',
  },
});
