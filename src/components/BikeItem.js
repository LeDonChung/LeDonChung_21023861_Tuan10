import { TouchableHighlight } from "react-native"
import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export const BikeItem = ({ item, press }) => {
    return (
        <>
            {item.id ?
                <TouchableOpacity onPress={press} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7BA8326', borderRadius: 10, margin: 10, height: 300, width: 167 }}>
                    {
                        item.like ?
                            <Image style={{ width: 25, height: 25, position: 'absolute', left: 10, top: 10 }} source={require('./../../assets/ic_heart.png')} resizeMode="contain" />
                            :
                            <Image style={{ width: 25, height: 25, position: 'absolute', left: 10, top: 10 }} source={require('./../../assets/ic_un_heart.png')} resizeMode="contain" />
                    }
                    <Image source={{uri: item.image}} style={{ width: 100, height: 100 }} resizeMode="contain" />
                    <Text numberOfLines={2} style={[styles.textStyle, { fontSize: 20, paddingHorizontal: 10 }]}>
                        {item.name}
                    </Text>
                    <Text style={[styles.textStyle, { fontSize: 20, textAlign: 'center' }]}>
                        <Text style={{ color: '#F7BA83' }}>$ </Text>{item.price}
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={{ flex: 1, alignItems: 'left', justifyContent: 'center', backgroundColor: '#fff', opacity: 0, borderRadius: 10, margin: 10, height: 200, width: 167 }}>

                </TouchableOpacity>
            }
        </>
    )
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 20,
        fontWeight: 'regular',
        color: '#000',
        fontFamily: 'Roboto'
    }
})