import { ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Cell, Row, Rows, Table, TableWrapper } from "react-native-table-component"
import { useDispatch, useSelector } from "react-redux"
import { fetchBikes, removeById } from "../redux/slices/BikeSlice"
import { TouchableOpacity } from "react-native"
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
export const DashboardScreen = ({ navigation }) => {
    const bikes = useSelector((state) => state.bikes.value);

    const dispatch = useDispatch();

    const [table, setTable] = useState(
        {
            tableHead: ['ID', 'Name', 'Price', 'typeId', 'Action'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '456\n789'],
                ['a', 'b', 'c', 'd']
            ]
        }
    )
    useEffect(() => {
        dispatch(fetchBikes())
    }, [navigation, bikes])
    useEffect(() => {
        let data = bikes.map((value) => {
            return [value.id, value.name, value.price, types.find((type) => type.id === value.typeId).name,
                ''
            ]
        })

        setTable({
            tableHead: ['ID', 'Name', 'Price', 'typeId', 'Action'],
            tableData: data
        })
    }, [bikes])

    const element = (data, index) => (

        <View >
            <TouchableOpacity onPress={() => { dispatch(removeById({id: data.id})) }} style={{ margin: 5 }}>
                <View style={styles.btn}> 
                    <Text style={styles.btnText}>Remove</Text> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('edit', { data: { title: 'UPDATE', bike: data } }) }} style={{ margin: 5 }}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Update</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingVertical: 20 }}>Bikes Dashboard</Text>
                    <TouchableOpacity style={{ borderRadius: 40, backgroundColor: '#E94141', paddingVertical: 5, marginHorizontal: 5, paddingHorizontal: 10 }} onPress={() => {
                        navigation.navigate('edit', { data: { title: 'ADD', bike: {} } })
                    }}>
                        <Text style={[styles.textStyle, { fontSize: 14, fontWeight: 'bold', color: '#fff', textAlign: 'center' }]}>Create</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={table.tableHead} style={styles.head} textStyle={styles.text} />

                        {
                            table.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex} data={cellIndex === 4 ? element(bikes.find((value) => rowData[0] === value.id), index) : cellData} textStyle={styles.text} />
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }


                    </Table>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: '#fff'
    },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
})