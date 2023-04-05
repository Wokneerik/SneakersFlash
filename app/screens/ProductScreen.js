import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from '../store/productSlice';


const ProductsScreen = ({ navigation }) => {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products)

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selected Product
            dispatch(productsSlice.actions.setSelectedProduct(item.id))


            navigation.navigate('Product Details', { id: item._id })
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({

  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }
});

export default ProductsScreen