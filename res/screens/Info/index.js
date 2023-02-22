import { Text, Image, StyleSheet, View } from 'react-native';

const Info = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nguyễn Xuân Khoa</Text>
            <Text style={styles.text}>PH27009</Text>
            <Text style={styles.text}>CP17303</Text>
            
            <Image style={styles.image} source={require('../../../assets/6.jpg')} />
        </View>
    );
}

export default Info;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#5aba97',
        flex: 1,
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 5,
        color: '#fff',
        fontWeight: '500',

    },
    image: {
        marginTop: 10,
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});