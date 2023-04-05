import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Image, Pressable, StyleSheet, Text } from "react-native"
import { useSelector } from 'react-redux'
import { selectNumberOfItems } from '../store/cartSlice'
import ProductDetailScreen from "./ProductDetailScreen"
import ProductsScreen from "./ProductScreen"
import ShoppingCart from "./ShoppingCart"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const numberOfItem = useSelector(selectNumberOfItems)

  function LogoTitle() {
    return (
      <Image
        style={styles.logo}
        source={require('../../assets/SneakerFlashLogo.png')}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Product"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () =>
            (
              <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                <FontAwesome5 style={{ alignSelf: 'center' }} name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500', alignSelf: 'center', }}>{numberOfItem}</Text>
              </Pressable>

            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailScreen} options={{
          presentation: 'modal'
          // presentation: 'modal' for IOS
        }} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 44,
    height: 44,
  },
});

export default Navigation