import { useEffect, useState } from "react"
import { Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SelectDropdown from "react-native-select-dropdown"
import IconF5 from "react-native-vector-icons/FontAwesome5"
const types = [
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
export const EditScreen = ({navigaion, route}) => {
    const [bike, setBike] = useState({});
    const [typeChoose, setTypeChoose] = useState(types[0]);
    const {data} = route.params;
    const [title, setTitle] = useState('ADD')
    useEffect(() => {

        if(data !== null && data !== undefined) {
            setTitle(data.title);
            setBike(data.bike);
            setTypeChoose(types.find((value) => value.id === data.bike.typeId));
        }
    }, [])
    return (
    
            <SafeAreaView>
                <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 19, fontWeight: '700', color: "#000" }}>{title}</Text>
                </View>
    
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'medium', textAlign: 'left', width: "90%", marginHorizontal: 'auto', marginVertical: 5 }}>Name: </Text>
                    <TextInput
                        value={bike.name}
                        onChangeText={text => { setBike({ ...bike, name: text }) }}
                        placeholder="Enter bike name"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: "90%", height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                        }}
                    />
                </View>
    
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'medium', textAlign: 'left', width: "90%", marginHorizontal: 'auto', marginVertical: 5 }}>
                        Image link:
                    </Text>
                    <TextInput
                        value={bike.image}
                        onChangeText={text => { setBike({ ...bike, image: text }) }}
                        placeholder="Enter link image"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: "90%", height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                        }}
                    />
                </View>
    
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'medium', textAlign: 'left', width: "90%", marginHorizontal: 'auto', marginVertical: 5 }}>
                        Price:
                    </Text>
                    <TextInput
                        value={bike.price}
                        onChangeText={text => { setBike({ ...bike, name: text }) }}
                        placeholder="Enter price"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: "90%", height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
    }}
                    />
                </View>
    
                <View style={{width: "90%", marginHorizontal: 'auto', marginVertical: 15}}>
                    <SelectDropdown
                        data={types.length ? types : []}
                        onSelect={(selectedItem, index) => {
                            setTypeChoose(selectedItem);
                            setBike({...bike, typeId: typeChoose.id})                        
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={{
                                    width: "100%", height: 35, borderWidth: 1, borderColor: "#E94141", borderRadius: 8,
                                    paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <Text style={{}}>
                                        {(typeChoose && typeChoose.name) || 'Bike category'}
                                    </Text>
                                    <IconF5 name={isOpened ? 'chevron-up' : 'chevron-down'} style={{}} />
                                </View>
                            );
                        }}
    
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                                    <Text style={[{ fontSize: 15 }]}>{item.name}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={{}}
    
                    />
                </View>
    
            </SafeAreaView>
    )
}