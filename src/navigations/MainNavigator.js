import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/profile";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { useEffect } from "react";
import { addTask } from "../redux/taskSlice";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData !== null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const loggedInUser = auth.currentUser;
    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `Tasks/${loggedInUser.uid}`);
    onValue(childRef,(snapshot)=>{
      let tasks = {}
       for(let key in snapshot.val()){
        let task ={
          ...snapshot.val()[key],
          key
        }
        tasks[key]=task
       }
       dispatch(addTask({taskList:tasks}))
    })
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#81d4fa" },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={focused ? 34 : 24} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={focused ? 34 : 24} color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
