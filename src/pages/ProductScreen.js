import React, { useEffect, useState } from "react"
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { BikeItem } from "../components/BikeItem"
import { useApi } from "../hook/useApi"
const types = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Roadbike'
    }, {
        id: 3,
        name: 'Moutain'
    },
    {
        id: 4,
        name: 'Pina'
    },
]
export const ProductScreen = ({ navigation }) => {
    const {fetchData, findByTypeId, setData, data} = useApi('https://6457b5721a4c152cf98861de.mockapi.io/api/ck/bikes')
    const [typeChoose, setTypeChoose] = useState(types[0]);

    useEffect(() => {
        fetchData() 
        console.log(data)
    }, [])  

    useEffect(() => {
        if(typeChoose.id === 1) {
            fetchData()
        } else {
            findByTypeId(typeChoose.id)
        }
    }, [typeChoose])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Gọi API để lấy dữ liệu
          fetchData();
        });
    
        return unsubscribe;
      }, [navigation]);
    return (
        <>
                <SafeAreaView style={styles.container}>
                    <View style={{flex: 2}}> 
                        <Text style={[styles.textStyle, { marginVertical: 30, color: '#E94141', fontSize: 25, fontWeight: 'bold' }]}>The world’s Best Bike</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                                {types.map((item, index) => {
                                    return <TouchableOpacity key={item.id} style={{ borderRadius: 5, borderColor: '#E9414187', width: 100, height: 35,alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginHorizontal: 20 }} onPress={() => setTypeChoose(item)}>
                                        <Text style={[styles.textStyle, { color: typeChoose.id === item.id ? '#E94141' : '#BEB6B6' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{flex: 8}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={({ item }) => <BikeItem press={() => {navigation.navigate('productDetail', {data: item}); console.log('hi')}} item={item} key={item.id} />}
                            numColumns={2}
                        />
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