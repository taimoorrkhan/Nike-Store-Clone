import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  } from 'react-native';
import ProductScreen from './src/screen/productScreen';
import ProductDetailsScreen from './src/screen/productDetailsScreen';
export default function App() {
  
  return (
    <View style={styles.container}>
      {/*  <ProductScreen /> */}
      <ProductDetailsScreen />
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
