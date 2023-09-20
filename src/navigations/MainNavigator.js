import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/profile";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{backgroundColor:"#81d4fa"},tabBarShowLabel:false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          headerShown: false, 
          tabBarIcon:({focused})=><FontAwesome name="home" size={focused?34:24} color="#fff" />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          headerShown: false,
          tabBarIcon:({focused})=><FontAwesome name="user"  size={focused?34:24} color="#fff" />
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
