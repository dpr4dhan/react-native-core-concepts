import {View, Text, StyleSheet, SafeAreaView, Platform} from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";


export default function App(){

    return  (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={ styles.box}>
                    <Text style={styles.text}>Welcome !</Text>
                    <CustomButton title="Press me" onPress={() => alert('Pressed')}/>
                </View>
            </View>
        </SafeAreaView>

    )
}

// Platform can only be used for small scenarios
const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: "plum"
    },
    container: {
        flex: 1,
        backgroundColor:"plum",
        paddingTop: Platform.OS === "android" ? 25 : 0
    },
    box:{
        padding: 30
    },
    text: {
        ...Platform.select({
            ios : {
                color: "black"
            },
            android: {
                color: "blue",
                fontStyle: "italic"
            }
        }),
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }

});