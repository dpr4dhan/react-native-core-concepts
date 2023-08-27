import {View, Text, StyleSheet} from "react-native";

export default function App(){
    return  (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>
                    StyleSheet Inheritance Example
                    <Text style={styles.boldText}>Text in bold.</Text>
                </Text>
            </View>
            <Text style={styles.title}>Stylesheet API</Text>
            <View style={[styles.box, styles.lightblueBg, styles.androidShadow]}>
                <Text>LightBlue Box</Text>
            </View>
            <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
                <Text>LightGreen Box</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor:"lightgray", padding: 60},
    darkMode: {backgroundColor: "black"},
    darkModeText: {color: "white"},
    boldText: {fontWeight: "bold"},
    title: {fontStyle: "italic", fontSize: 15},
    box: {
            height: 250,
            width: 250,
            paddingHorizontal: 50,
            paddingVertical:25,
            backgroundColor: "pink",
            marginVertical: 10,
            borderWidth: 2,
            borderColor: "violet",
            borderRadius:15,
        },
    lightblueBg: {backgroundColor: "lightblue"},
    lightgreenBg: {backgroundColor: "lightgreen"},
    //shadow property for ios
    boxShadow: {
        shadowColor: "blue",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    //shadow property for android
    androidShadow: {
        elevation: 10,
        shadowColor: "violet"
    }
});