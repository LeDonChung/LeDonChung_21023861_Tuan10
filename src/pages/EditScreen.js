import { useEffect, useState } from "react"
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SelectDropdown from "react-native-select-dropdown"
import IconF5 from "react-native-vector-icons/FontAwesome5"
import { useDispatch } from "react-redux"
import { addBike, updateBikes } from "../redux/slices/BikeSlice"
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
export const EditScreen = ({ navigation, route }) => {
    const [bike, setBike] = useState({ image: 'https://loremflickr.com/640/480/transport' });
    const [typeChoose, setTypeChoose] = useState(types[0]);
    const { data } = route.params;
    const [title, setTitle] = useState('ADD')
    const dispatch = useDispatch();
    useEffect(() => {

        if (data !== null && data !== undefined) {
            setTitle(data.title);
            setBike(data.bike);
            setTypeChoose(types.find((value) => value.id === data.bike.typeId));
        }
    }, [])
    const handlerActionSubmit = async () => {
        setBike({ ...bike, discount: parseFloat(bike.discount), price: parseFloat(bike.price) });
        if (bike.id !== undefined && bike.id !== null) {
            await dispatch(updateBikes({ id: bike.id, body: bike })); 
        } else {
            setBike({ ...bike, like: false, image: 'https://loremflickr.com/640/480/transport' });
            await dispatch(addBike({ body: bike }));
        }

        // merge
        navigation.navigate('dashboard',
            {
                merge: true
            }
        );
    }
    return (


        <SafeAreaView style={{ paddingHorizontal: 15 }}>
            <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 19, fontWeight: '700', color: "#000" }}>{title}</Text>
            </View>
            <View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5 }}>Name: </Text>
                    <TextInput
                        value={bike.name}
                        onChangeText={text => { setBike({ ...bike, name: text }) }}
                        placeholder="Enter bike name"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: '100%',
                            height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                        }}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5 }}>
                        Image link:
                    </Text>
                    <TextInput
                        value={bike.image}
                        onChangeText={text => { setBike({ ...bike, image: text }) }}
                        placeholder="Enter link image"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: '100%',
                            height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                        }}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5 }}>
                        Price:
                    </Text>
                    <TextInput
                        value={bike.price}
                        onChangeText={text => { setBike({ ...bike, price: text }) }}
                        placeholder="Enter price"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: '100%',
                            height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                        }}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5 }}>
                        Discount:
                    </Text>
                    <TextInput
                        value={bike.discount}
                        onChangeText={text => { setBike({ ...bike, discount: text }) }}
                        placeholder="Enter discount"
                        placeholderTextColor={"#c4c4c4"}
                        style={{
                            width: '100%',
                            height: 35,
                            borderWidth: 1, borderColor: '#E94141',
                            borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                        }}
                    />
                </View>
                <View style={{ marginVertical: 15 }}>
                    <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5 }}>
                        Type:
                    </Text>
                    <SelectDropdown
                        data={types.length ? types : []}
                        onSelect={async (selectedItem, index) => {
                            await setTypeChoose(selectedItem);

                            setBike({ ...bike, typeId: selectedItem.id })
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={{
                                    height: 35, borderWidth: 1, borderColor: "#E94141", borderRadius: 8,
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
                        dropdownStyle={{ width: '100%' }}

                    />
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 15, textAlign: 'left', marginVertical: 5 }}>
                            Decription:
                        </Text>
                        <TextInput
                            value={bike.description}
                            onChangeText={text => { setBike({ ...bike, description: text }) }}
                            placeholder="Enter description"
                            placeholderTextColor={"#c4c4c4"}
                            numberOfLines={5}
                            style={{
                                width: '100%',
                                height: 100,
                                borderWidth: 1, borderColor: '#E94141',
                                borderRadius: 8, marginHorizontal: 'auto', paddingHorizontal: 15
                            }}
                        />
                    </View>
                    <TouchableOpacity style={{ marginTop: 20, borderRadius: 40, backgroundColor: '#E94141', paddingVertical: 10, marginVertical: 5 }} onPress={() => handlerActionSubmit()}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}