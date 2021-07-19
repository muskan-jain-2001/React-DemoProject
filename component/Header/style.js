import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
    
  },
  menu: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  }
});

export default styles;