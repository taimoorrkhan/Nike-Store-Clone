import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  } from 'react-native';
import ProductScreen from './src/screen/productScreen';
import ProductDetailsScreen from './src/screen/productDetailsScreen';
import ShoppingCart from './src/screen/ShoppingCart';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
export default function App() {
  
  return (
    <Provider store={store}>

    <View style={styles.container}>

      <Navigation />
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  inputContainer: {
    width: "50%",
    padding: 1,
  },
});
