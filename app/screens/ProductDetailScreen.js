import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailScreen = () => {

  const product = useSelector((state) => state.products.selectedProduct)

  const dispatch = useDispatch()

  const { width } = useWindowDimensions()

  const addToCard = () => {
    dispatch(cartSlice.actions.addCartItem({ product }))
  }


  return (
    <View>
      <ScrollView>

        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          <Text style={styles.title} >{product.name}</Text>

          <Text style={styles.price}>${product.price}</Text>

          <Text style={styles.description} >{product.description}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity  onPress={addToCard} style={styles.button}>
        <Text style={styles.buttonText}>Add to card</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300'
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

export default ProductDetailScreen