import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useNavigation } from '@react-navigation/native';
export default function ProductScreen() {
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <TouchableOpacity onPress={() => {
        navigation.navigate("Product Details", { item: item });
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