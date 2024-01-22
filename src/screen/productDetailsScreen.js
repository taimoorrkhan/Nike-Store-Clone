import { StyleSheet, Text, View, Image, FlatList,useWindowDimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'

import products from '../data/products'

export default function ProductDetailsScreen() {

  const addToCart = () => {
    console.warn('Add to cart')
  }
  const product = products[0];
  const {width} = useWindowDimensions();
  return (
    <View>
      <ScrollView>
      <FlatList
        data={product.images}
        renderItem={({ item }) => <Image source={{ uri: item }} style={{ width:width , aspectRatio: 1 }} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}$</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      
      {/* Cart Button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 2,
  },
  description: {
    marginVertical: 10,
    lineHeight: 30,
    fontWeight: '300',
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: "90%",
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
})