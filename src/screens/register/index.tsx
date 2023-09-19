import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import { styles } from "./style";
import logo from "../../../assets/images/todoIcon2.png";
import { FontAwesome } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={{marginBottom:20}} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={34} color="#fff" />
          <TextInput style={styles.textInput} placeholder="Enter name here" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={34} color="#fff" />
          <TextInput style={styles.textInput} placeholder="Enter e-mail here" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={34} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter phone no here"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={34} color="#fff" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password here"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
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
