import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  } from 'react-native';
import ProductScreen from './src/screen/productScreen';
import ProductDetailsScreen from './src/screen/productDetailsScreen';
import ShoppingCartScreen from './src/screen/ShoppingCart';
export default function App() {
  
  return (
    <View >
      {/*  <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCartScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
