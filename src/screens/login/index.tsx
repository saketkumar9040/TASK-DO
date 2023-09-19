import { View, Text ,SafeAreaView,Image, TextInput} from 'react-native'
import React from 'react';
import { styles } from './style';
import logo from "../../../assets/images/todoIcon.png";
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image}/>
        </View>
        <View style={styles.inputContainer}>
        <FontAwesome name="user" size={34} color="#fff" />
              <TextInput
                 style={styles.textInput}
                 
              />
        </View>
        <View style={styles.inputContainer}>
        <FontAwesome name="user" size={34} color="#fff" />
              <TextInput
                 style={styles.textInput}

              />
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen