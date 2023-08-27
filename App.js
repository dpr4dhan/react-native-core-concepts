import { View, Button, Text, Modal, StatusBar, ActivityIndicator, Alert} from 'react-native';
import {useState} from "react";
import Greet from "./components/Greet";

const logoImg = require('./assets/adaptive-icon.png')

// StatusBar  is for android
//But Text style can be changed on both

export default function App(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
    return <View style={{flex: 1, backgroundColor: "plum", padding: 60}}>
            <StatusBar backgroundColor="green"
                barStyle="light-content"
                hidden={isStatusBarVisible}
            />
            <Button title="Toggle StatusBar" onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}/>
            <Greet name="Dhiraj"/>
            <Greet name="Pradhan"/>
            <ActivityIndicator size="large" color="midnightblue" animating={true}/>

            <Button title="Alert!" onPress={() => Alert.alert('Invalid Data !')} />
            <Button title="Alert 2 !" onPress={() => Alert.alert('Invalid Data !', 'DOB incorrect')} />
            <Button title="Alert 3 !"
                    onPress={() => Alert.alert('Invalid Data !', 'DOB incorrect', [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed")
                        },
                        {
                            text: "Done",
                            onPress: () => console.log("Done Pressed")
                        }
                    ])}
            />


            <Button title="Click Me!" onPress={() => setIsModalVisible(true)}
                color="midnightblue"
            />
            <Modal
                visible={isModalVisible}
                onRequestClose={ () => setIsModalVisible(false) }
                animationType="slide"
                presentationStyle="formSheet" //just for iOS
            >
                <View style={{backgroundColor: "lightblue", flex: 1, padding:60}}>
                    <Text>Modal Content</Text>
                    <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)}/>
                </View>
            </Modal>

        </View>
}