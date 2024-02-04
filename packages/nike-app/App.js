import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,  } from 'react-native';
import ProductScreen from './src/screen/productScreen';
import ProductDetailsScreen from './src/screen/productDetailsScreen';
import ShoppingCart from './src/screen/ShoppingCart';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  
  return (
    <Provider store={store}>

      <View style={styles.container}>
        <StripeProvider publishableKey="pk_test_51Og7P5BAkn8ouOIqplNlQkQSDwL7sQWbLW8Z4nK8lAlQ8b3mmr75pANU9zw7vdni39POp65aM7f6hDqonUL9zmI700NCBwGd1g">


      <Navigation />
          <StatusBar style="auto" />
        </StripeProvider>
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
