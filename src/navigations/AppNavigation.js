import { StartScreen } from "../pages/StartScreen"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProductScreen } from "../pages/ProductScreen";
import { ProductDetailScreen } from "../pages/ProductDetailScreen";
const Stack= createStackNavigator()
export const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {flex: 1}}}>
                    <Stack.Screen name="start" component={StartScreen}/>
                    <Stack.Screen name="products" component={ProductScreen}/>
                    <Stack.Screen name="productDetail" component={ProductDetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}