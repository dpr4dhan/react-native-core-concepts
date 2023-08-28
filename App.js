import {View, StyleSheet} from "react-native";
import Box from "./components/Box";

export default function App(){
    return (
        <View style={styles.container}>
            <Box style={{backgroundColor: "red"}}>Box 1</Box>
            <Box style={{backgroundColor: "blue"}}>Box 2</Box>
            <Box style={{backgroundColor: "green"}}>Box 3</Box>
            <Box style={{backgroundColor: "violet"}}>Box 4</Box>
            <Box style={{backgroundColor: "pink"}}>Box 5</Box>
            <Box style={{backgroundColor: "cyan"}}>Box 6</Box>
            <Box style={{backgroundColor: "orange"}}>Box 7</Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        flexWrap: "wrap",
        height: 300,
        marginTop: 64,
        borderWidth: 6,
        borderColor: "black"
    }
})