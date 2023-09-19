import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import MainNavigator from "./MainNavigator";
import {useEffect,useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const [isAuth,setIsAuth] = useState(false);

  useEffect(()=>{
    const storedUserData = async () => {
        let value = await AsyncStorage.getItem("userData");
        console.log(value)
        if(value!== null){
          setIsAuth(true)
        }
    }
  },[]);

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
