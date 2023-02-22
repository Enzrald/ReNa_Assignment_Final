import { StyleSheet, Text, Pressable, Image, View } from "react-native";

const Home = (props) => {

    const navigation = props.navigation;

    const switchScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/fpt_logo.png')} />

            <Pressable style={styles.outerPress} onPress={() => switchScreen('Info')}>
                <Text style={styles.pressable}>Info</Text>
            </Pressable>
            
            <Pressable style={styles.outerPress} onPress={() => switchScreen('List')}>
                <Text style={styles.pressable}>List</Text>
            </Pressable>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 5,
        flex: 1
    },
    image: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,

    },
    pressable: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 15,
        textAlign: 'center',
        borderColor: '#00000077',
        borderStyle: 'solid',
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: '#00cf5d',
        color: '#fff',
        
    },
    outerPress: {
        marginVertical: 15
    }
});