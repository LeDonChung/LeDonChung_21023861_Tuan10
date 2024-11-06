import { TouchableOpacity } from "react-native"
import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

export const StartScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{flex: 3, justifyContent: 'center'}}>
                    <Text style={[styles.textStyle, {fontSize: 26, fontWeight: 'bold', textAlign: 'center'}]}>A premium online store for sporter and their stylish choice</Text>
                </View>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 290, height: 270}} source={require('./../../assets/1.png')} resizeMode="contain"/>
                </View>
                <View style={{flex: 2}}>
                    <Text style={[styles.textStyle, {fontSize: 26, fontWeight: 'bold', textAlign: 'center'}]}>POWER BIKE {'\n'}SHOP</Text>
                </View>
                <View style={{flex: 2}}>
                    <TouchableOpacity style={{borderRadius: 40, backgroundColor: '#E94141', paddingVertical: 10}} onPress={() => navigation.navigate('products')}>
                        <Text style={[styles.textStyle, {fontSize: 27, fontWeight: 'bold', color: '#fff', textAlign: 'center'}]}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'regular',
        color: '#000',
        fontFamily: 'Roboto'
    }
})