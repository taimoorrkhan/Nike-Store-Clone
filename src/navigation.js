
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './screen/productScreen';
import ProductDetailsScreen from './screen/productDetailsScreen';
import ShoppingCart from './screen/ShoppingCart';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { selectNumOFItems } from './store/cartSlice';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const numOfItems = useSelector(selectNumOFItems);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        }
      }}  >
        <Stack.Screen name="Products" component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => <TouchableOpacity onPress={() => {
              navigation.navigate("Cart");

            }}
              style={
                {
                  flexDirection: 'row',
                }
              }>
              <FontAwesome5 name="shopping-cart" size={18} color="gray" />
              <View style={{
                backgroundColor: 'transparent',
                rouded: 100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                marginLeft: 10,
                padding: 2,
                rouded: 100,
                marginTop: -9,
                borderRadius: 100,

              }}>
                <Text style={{ marginLeft: 7, fontWeight: 'bold', color: "red", fontSize: 16 }}>
                  {
                    numOfItems > 0 && numOfItems ? numOfItems: ""
                  }
                </Text>
              </View>

            </TouchableOpacity>
          })
          } />
        <Stack.Screen name="Product Details"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: "",
            animation: 'slide_from_bottom',
          }
          }
          component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCart} options={{
          presentation: 'fullScreenModal',
          headerTitle: ""
        }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}