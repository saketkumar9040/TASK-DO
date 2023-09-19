import { View, Text ,SafeAreaView,Image, TextInput, TouchableOpacity} from 'react-native'
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
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
            <Text style={styles.newUserText}>New to TASK-DO ?</Text>
            <TouchableOpacity style={styles.registerButtonContainer}>
            <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen