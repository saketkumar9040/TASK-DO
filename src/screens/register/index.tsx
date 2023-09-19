import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import logo from "../../../assets/images/todoIcon2.png";
import { FontAwesome, Zocial, Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebaseConfig";

const RegisterScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const submitHandler = async () => {
     try {
      if(userDetails.name===""|| userDetails.email===""||userDetails.phone===""||userDetails.password===""){
        return Alert.alert("OOPS😯","Please enter all the fields")
      }
      const registerUser = await createUserWithEmailAndPassword(auth,userDetails.email,userDetails.password);
      const {uid} = registerUser.user
      console.log(uid);
      
     } catch (error) {
        console.log(error.message);
        Alert.alert("Sorry😪","failed to register user")
     }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        style={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={34} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter name here"
            value={userDetails.name}
            onChangeText={(e) => setUserDetails({ ...userDetails, name: e })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Zocial name="email" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter e-mail here"
            value={userDetails.email}
            onChangeText={(e) => setUserDetails({ ...userDetails, email: e })}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={32} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter phone no here"
            value={userDetails.phone}
            keyboardType="numeric"
            onChangeText={(e) => setUserDetails({ ...userDetails, phone: e })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Entypo name="lock" size={24} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password here"
            value={userDetails.password}
            secureTextEntry={true}
            onChangeText={(e) =>
              setUserDetails({ ...userDetails, password: e })
            }
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => submitHandler()}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.newUserText}>Already a user ?</Text>
          <TouchableOpacity
            style={styles.registerButtonContainer}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.registerText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
