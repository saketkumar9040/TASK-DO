import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import MainNavigator from "./MainNavigator";
import {useEffect,useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
   const isAuth = useSelector((state) => state.auth.userData !== null);
  //  console.log(useSelector((state) => state.auth.userData))
   
  return (
    <NavigationContainer>
      {isAuth ? (
        <MainNavigator />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="register" component={RegisterScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthNavigator;
