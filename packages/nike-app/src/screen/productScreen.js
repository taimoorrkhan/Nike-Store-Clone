import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';
import { useGetProductQuery, useGetProductsQuery } from '../store/apiSlice';

export default function ProductScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { data, error, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  if (error) {
    return <Text>Error: {error}</Text>
  }
  const products = data.data;
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <TouchableOpacity onPress={() => {
      /*   dispatch(productSlice.actions.setSelectedProduct(item.id)); */
       
        navigation.navigate("Product Details",{id:item._id});
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