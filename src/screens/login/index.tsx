import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import logo from "../../../assets/images/todoIcon1.png";
import { Entypo, Zocial } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    console.log("login in...");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <Zocial name="email" size={24} color="#fff" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter e-mail here"
          value={userDetails.email}
          onChangeText={(e)=>setUserDetails({...userDetails,email:e})}
        />
      </View>
      <View style={styles.inputContainer}>
        <Entypo name="lock" size={24} color="#fff" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password here"
          secureTextEntry={true}
          value={userDetails.password}
          onChangeText={(e)=>setUserDetails({...userDetails,password:e})}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => submitHandler()}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.newUserText}>New to TASK-DO ?</Text>
        <TouchableOpacity
          style={styles.registerButtonContainer}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
