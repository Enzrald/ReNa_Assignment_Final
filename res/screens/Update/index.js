import { useEffect, useState } from 'react';
import { TextInput, StyleSheet, Pressable, Text, View, Alert } from 'react-native';
import { API_CONTACTS } from '../../helpers/api';

const Update = (props) => {
    const navigation = props.navigation;
    const toUpdateData = props.route.params?.toUpdateData;

    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [number,setNumber] = useState('');
    const [logo,setLogo] = useState('');
    const [status,setStatus] = useState(0);

    useEffect(
        () => {
            if(toUpdateData){
                setName(toUpdateData.name);
                setAddress(toUpdateData.address);
                setNumber(toUpdateData.number);
                setLogo(toUpdateData.logo);
                setStatus(toUpdateData.status);
            }
        },
        [toUpdateData?.id]
    )

    const funcValidate = () => {
        if(
            name.length == 0 ||
            address.length == 0 ||
            number.length == 0 ||
            logo.length == 0 ||
            status.toString.length == 0 ||
            isNaN(status)
        ){
            Alert.alert(
                'Bản ghi không hợp lệ',
                'Vui lòng điền đúng thông tin và không được để trống',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('Validation failed'),
                        style: 'cancel'
                    }
                ]
            );
            return false;
        }
        return true;
    }

    const funcClear = () => {
        setName('');
        setAddress('');
        setNumber('');
        setLogo('');
        setStatus(0);
    }

    const funcUpdate = () => {
        if(funcValidate()){
            const newContact = {
                name: name,
                address: address,
                number: number,
                logo:  logo,
                status: status
            }
    
            fetch(API_CONTACTS + '/' + toUpdateData.id,
                {
                    method: 'PUT',
                    body: JSON.stringify(newContact),
                    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
                })
            .then(() => {navigation.goBack()})
            .catch((err) => console.log(err));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.textInput} placeholder={'Tên'} value={name} onChangeText={(input) => setName(input)}/>
                <TextInput style={styles.textInput} placeholder={'Địa chỉ'} value={address} onChangeText={(input) => setAddress(input)}/>
                <TextInput style={styles.textInput} placeholder={'SĐT'} value={number} onChangeText={(input) => setNumber(input)}/>
                <TextInput style={styles.textInput} placeholder={'Link ảnh'} value={logo} onChangeText={(input) => setLogo(input)}/>
                <TextInput style={styles.textInput} placeholder={'Trạng thái'} value={status.toString()} onChangeText={(input) => setStatus(input)}/>

                <Pressable style={styles.outerPress} onPress={() => funcClear()}>
                    <Text style={styles.pressable}>Làm mới</Text>
                </Pressable>
                
                <Pressable style={styles.outerPress} onPress={() => funcUpdate()}>
                    <Text style={styles.pressable}>Lưu</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Update;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        flex: 1,
    },
    pressable: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: '#fff'
    },
    outerPress: {
        marginVertical: 5,
        backgroundColor: '#ff000076',
        paddingVertical: 4,
        borderColor: '#03befc98',
        borderWidth: 1,
        borderRadius: 2,
    },
    textInput: {
        textAlign: 'left',
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        fontSize: 18,
        marginBottom: 10,
        borderColor: '#00000077',
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 10,
        paddingVertical: 1,
    },
    form: {
        padding: 10,
        backgroundColor: '#78ecde80',
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 1
    },
});