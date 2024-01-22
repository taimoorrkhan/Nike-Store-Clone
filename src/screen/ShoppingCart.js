import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'
export default function ShoppingCart() {
  return (
    <>
    <FlatList 
      data={cart}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <View style={styles.totalsContainer}>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsText}>Subtotal</Text>
            <Text style={styles.totalsText}>$320.00</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsText}>Shipping</Text>
            <Text style={styles.totalsText}>$20.00</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsText}>Tax</Text>
            <Text style={styles.totalsText}>$0.00</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsTextBold}>Total</Text>
            <Text style={styles.totalsTextBold}>$340.00</Text>
          </View>
        </View>
      )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  totalsRow: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "10px",
  },
  totalsText: {
    fontSize: 16,
    color : "gray"
  },
  totalsTextBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: 'absolurete',
    backgroundColor: 'black',
    bottom: 0, 
    width: '90%',
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

