import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./style";
import logo from "../../../assets/images/todoIcon1.png";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={34} color="#fff" />
        <TextInput style={styles.textInput} placeholder="Enter e-mail here" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={34} color="#fff" />
        <TextInput style={styles.textInput} placeholder="Enter Password here" />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.newUserText}>New to TASK-DO ?</Text>
        <TouchableOpacity style={styles.registerButtonContainer} onPress={()=>navigation.navigate("register")}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
