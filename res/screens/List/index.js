import { useEffect, useState } from 'react';
import { Button, FlatList, Pressable, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { API_CONTACTS } from '../../helpers/api';

const List = (props) => {
    const navigation = props.navigation;

    const isFocus = useIsFocused();

    const [list,setList] = useState([]);

    const refreshList = () => {
        fetch(API_CONTACTS)
        .then((res) => res.json())
        .then((data) => setList(data))
        .catch((err) => console.log(err));
    }

    useEffect(
        () => {
            refreshList();
        },
        [isFocus]
    )

    const funcAdd = () => {
        navigation.navigate('Add');
    }

    const funcUpdate = (toUpdateId) => {
        fetch(API_CONTACTS + '/' + toUpdateId)
        .then((res) => res.json())
        .then((data) => navigation.navigate('Update', { toUpdateData : data }));
    }

    const funcDelete = (toDeleteId) => {
        fetch(API_CONTACTS + '/' + toDeleteId, {method: 'DELETE'})
        .then((data) => refreshList())
        .catch((err) => console.log(err));
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => funcAdd()}>
                <Text style={styles.pressable}>Thêm</Text>
            </Pressable>
            <SafeAreaView style={styles.listBox}>
                <FlatList
                    data={list}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.id}</Text>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.address}</Text>
                            <Text style={styles.text}>{item.number}</Text>
                            <Text style={styles.text}>{item.logo}</Text>
                            <Text style={styles.text}>{item.status}</Text>
                            
                            <Pressable onPress={() => {funcUpdate(item.id)}}>
                                <Text style={styles.button}>Sửa</Text>
                            </Pressable>
                            
                            <Pressable onPress={() => {funcDelete(item.id)}}>
                                <Text style={styles.button}>Xóa</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    />
            </SafeAreaView>
        </View>
    );
}

export default List;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    pressable: {
        fontSize: 22,
        backgroundColor: '#00cf5d',
        color: '#fff',
        paddingVertical: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: '#00a437',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '300',
    },
    item: {
        backgroundColor: '#5fd9bbe6',
        borderStyle: 'solid',
        borderColor: '#00a5ad',
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        color: '#fff',
    },
    button: {
        color: '#000',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#0075f3',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginVertical: 5,
        textTransform: 'uppercase',
        fontWeight: '600',
        borderColor: '#005eff',
        borderRadius: 2,
        borderWidth: 1,
    },
    listBox: {
        marginTop: 10,
        marginBottom: 30,
    }
});