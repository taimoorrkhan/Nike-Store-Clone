import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';
export default function ProductScreen() {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <TouchableOpacity onPress={() => {
        dispatch(productSlice.actions.setSelectedProduct(item.id));
        navigation.navigate("Product Details");
      }} style={styles.itemContainer}  >
        <Image source={{ uri: item.image, }} style={styles.image} />
      </TouchableOpacity>
      }
      numColumns={2}

    />
  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});