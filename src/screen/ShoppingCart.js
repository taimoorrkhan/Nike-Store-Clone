import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItem'
import { useSelector,useDispatch } from 'react-redux'
import { selectSubtotal, selectTotal, cartSlice, } from '../store/cartSlice'
import { useCreateOrderMutation } from '../store/apiSlice'
export default function ShoppingCart() {
  const [createOrder,{data,error,isLoading}] = useCreateOrderMutation();
  const Subtotal = useSelector(selectSubtotal);
  const total = useSelector(selectTotal);
  const deliveryFee = useSelector((state) => state.cart.deliveryFee);
  const tax = useSelector((state) => state.cart.tax);
  const freeDeliveryFrom = useSelector((state) => state.cart.freeDeliveryFrom);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const createOrderBtn = async () => { 
    if(cartItems.length === 0){
      return alert('Your cart is empty');
    }
    const result = await createOrder({
      item: cartItems,
      total: total,
      subtotal: Subtotal,
      deliveryFee: deliveryFee,
      tax: tax,
      customer: {
        name: "John Doe",
        email: "",
      },
      data: new Date().toISOString(),
    });
    if (result.data?.status === 'OK') {
      alert(`
      Orderded Successfully.
      Your order has been placed 
      successfully.
      Your order number is ${result.data.data.ref}.
      `
      );
      dispatch(cartSlice.actions.clearCart());
    }
  }
  return (
    <>
    <FlatList 
        data={cartItems}
      renderItem={({ item }) => <CartListItem cartItem={item} />}
      ListFooterComponent={() => (
        <View style={styles.totalsContainer}>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsText}>Subtotal</Text>
            <Text style={styles.totalsText}>${Subtotal}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsText}>Shipping</Text>
            <Text style={styles.totalsText}>${
              Subtotal > freeDeliveryFrom ? 0 : deliveryFee.toFixed(2)
            }</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsText}>Tax</Text>
            <Text style={styles.totalsText}>${tax.toFixed(2)}</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsTextBold}>Total</Text>
            <Text style={styles.totalsTextBold}>${total}</Text>
          </View>
        </View>
      )}
      />
      <TouchableOpacity onPress={createOrderBtn} style={styles.button}>
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

