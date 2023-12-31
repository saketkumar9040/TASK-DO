import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, Fontisto } from "@expo/vector-icons";
import { styles } from "./style";
import logo from "../../../assets/images/homeIcon.png";
import { Dialog, Button, TextInput } from "react-native-paper";
import { auth } from "../../firebase/firebaseConfig";
import { child, getDatabase, push, ref, remove, update } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/taskSlice";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const loggedInUser = auth.currentUser;

  const allTasks = useSelector((state) => state.task.taskList);
  const taskList = Object.values(allTasks)
  // console.log(Object.values(allTasks))
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hideDialog = () => {
    setOpenDialog(!openDialog);
  };

  const addTaskHandler = async () => {
    try {

      // ADDING TASK TO REALTIME DATABASE =========================================>

      const taskData = {
        title,
        description,
        createdAt: new Date().toISOString(),
        completed: false,
      };

      const dbRef = ref(getDatabase());
      const childRef = child(dbRef, `Tasks/${loggedInUser.uid}`);
      await push(childRef, taskData);

      // DISPATCHING TASK DATA TO LOCAL STORE ==========================================>

      setOpenDialog(false);
      setTitle("");
      setDescription("");

      Alert.alert("Hurray 🤗", "Task added successfully");
      
    } catch (error) {
      console.log(error.message);
      setOpenDialog(false);
      setTitle("");
      setDescription("");
      Alert.alert("Sorry 😣", "Task cannot be added at the moment");
    }
  };

  const markCompletedHandler = async (item) => {
     try {
      console.log(item.key)
      const status = !item.completed
      const dbRef = ref(getDatabase());
      const childRef = child(dbRef,`Tasks/${loggedInUser.uid}/${item.key}`)
      const updatedTask = {
        ...item,
        completed:status
      }
      await update(childRef,updatedTask);

     } catch (error) {
      console.log(error)
     }
  };

  const editTaskHandler = async (item) => {
    
  }
  
  const deleteTaskHandler = async (item) => {
     try {
      const dbRef = ref(getDatabase());
      const childRef = child(dbRef,`Tasks/${loggedInUser.uid}/${item.key}`)
      await remove(childRef);
      Alert.alert("Task deleted successfully")
     } catch (error) {
        console.log(error)
     }
  }
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        {taskList.length > 0 ? (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={taskList}
              renderItem={(item) => {
                // console.log(item.item);
                return (
                  <>
                    <View style={styles.tasksContainer}>
                      <Text style={styles.taskTitle}>{item.item.title}</Text>
                      <Text style={styles.taskDescription}>
                        {item.item.description}
                      </Text>
                      <View style={styles.taskIconContainer}>
                        <TouchableOpacity onPress={()=>markCompletedHandler(item.item)}>
                        <Fontisto name={item.item.completed?"checkbox-active":"checkbox-passive"} size={30} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>deleteTaskHandler(item.item)}>
                        <AntDesign name="delete" size={30} color="#fff" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>
                );
              }}
            />
          </>
        ) : (
          <></>
        )}
      </SafeAreaView>
      <TouchableOpacity
        style={styles.addTaskContainer}
        onPress={() => hideDialog()}
      >
        <Entypo name="add-to-list" size={40} color="#fff" />
      </TouchableOpacity>

      <Dialog
        visible={openDialog}
        onDismiss={() => hideDialog()}
        style={{ backgroundColor: "#81d4fa", borderRadius: 30 }}
      >
        <Dialog.Title style={{ color: "white", fontWeight: 800 }}>
          ADD A TASK
        </Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.input}
            placeholder="Enter Title"
            value={title}
            onChangeText={(e) => setTitle(e)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter description"
            value={description}
            onChangeText={(e) => setDescription(e)}
            autoCapitalize="none"
            multiline={true}
            numberOfLines={4}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => hideDialog()}>
              <Text style={{ fontSize: 20, color: "white" }}>CANCEL</Text>
            </TouchableOpacity>
            <Button
              onPress={() => addTaskHandler()}
              color="#900"
              disabled={!title || !description}
              style={{ fontSize: 20, color: "white" }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>ADD</Text>
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

export default HomeScreen;
