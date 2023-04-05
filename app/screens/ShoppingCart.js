import { useNavigation } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import CartListItem from "../components/CartListItem"
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice"

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  )
}


const ShoppingCart = () => {

  const cartItems = useSelector(state => state.cart.items)
  const navigation = useNavigation()
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Product')} style={styles.button}>
        <Text style={styles.buttonText}>Chekout</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: 'gainsboro'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  }
})

export default ShoppingCart