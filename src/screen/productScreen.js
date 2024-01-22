import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import products from '../data/products'
export default function ProductScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <View style={styles.itemContainer}  >
        <Image source={{ uri: item.image, }} style={styles.image} />
      </View>
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