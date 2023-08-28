import {View, Text, StyleSheet, Dimensions} from "react-native";
import {useState, useEffect} from "react";

export default function App(){

    const [windowDimension, setWindowDimension] = useState({
        window: Dimensions.get("window")
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({window}) => {
            setWindowDimension({window});

        })
        return () => subscription?.remove();
    });

    const {window} = windowDimension;
    const windowWidth = window.width;
    const windowHeight = window.height;

    return  (
        <View style={styles.container}>
            <View style={[
                styles.box,
                {
                    width: windowWidth > 500 ? '70%' :  "90%",
                    height: windowHeight > 600 ? '60%' : "90%",
                }

            ]}>
                <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Welcome !</Text>
            </View>
        </View>
    )
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
//
// console.log({windowWidth, windowHeight});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"plum",
        // padding: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    box:{
        // width: windowWidth > 500 ? '70%' :  "90%",
        // height: windowHeight > 600 ? '60%' : "90%",
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center"
    },
    // text: {
    //     fontSize: windowWidth > 500 ? 50 : 24
    // }

});