import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {isAuth ? (
        <MainNavigator />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthNavigator;
