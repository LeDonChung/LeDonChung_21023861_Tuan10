import { useEffect, useMemo, useState } from "react";
import { TouchableOpacity } from "react-native"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useApi } from "../hook/useApi";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export const ProductDetailScreen = ({route, navigation}) => {
    const {data} = route.params;
    const getSalePrice = (price, discount) => {
        return Math.round(price - (price / discount)); 
    }
    const {setLikeProduct} = useApi('https://6457b5721a4c152cf98861de.mockapi.io/api/ck/bikes')
    const [like, setLike] = useState(data.like);

    return (
        <>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.container}>
                    <View style={{backgroundColor: '#E941411A', borderRadius: 10, padding: 10, height: 390, justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
                        <Image style={{ height: 340, width: 300 }} resizeMode="contain" source={{uri: data.image}} />
                    </View>
                    <View style={{marginVertical: 20}}>
                        <Text style={[styles.textStyle, {fontSize: 35, fontWeight: 'bold'}]}>{data.name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.textStyle, {marginRight: 30, color: '#00000096', fontSize: 25, fontWeight: 'medium'}]}>{data.discount}% OFF | {getSalePrice(data.price, data.discount)}$</Text>
                            <Text style={[styles.textStyle, {color: '#000', fontSize: 25, fontWeight: 'medium', textDecorationLine: 'line-through'}]}>{data.price}$</Text>
                        </View>
                    </View>
                    <View style={{marginVertical: 20}}>
                        <Text style={[styles.textStyle, {color: '#000', fontSize: 25, fontWeight: 'bold', marginBottom: 20}]}>Description</Text>
                        <Text style={[styles.textStyle, {color: '#00000091', fontSize: 22, fontWeight: 'medium', marginBottom: 20}]}>
                            {data.description}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center' , marginBottom: 20}}>
                        {like ? 
                            <IconAntDesign name="heart" size={30} color="#E94141" onPress={() => {setLike(!like); setLikeProduct(data.id, !like)}} /> : <IconAntDesign name="hearto" size={30} color="#E94141" onPress={() => {setLike(!like); setLikeProduct(data.id, !like)}} />}
                        <TouchableOpacity style={{ borderRadius: 40, backgroundColor: '#E94141', paddingVertical: 10, flex: 1, marginLeft: 30 }}>
                            <Text style={[styles.textStyle, { fontSize: 27, fontWeight: 'bold', color: '#fff', textAlign: 'center' }]}>Add to card</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
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