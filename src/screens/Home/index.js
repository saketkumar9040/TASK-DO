import { View, Text, TouchableOpacity,SafeAreaView, Image, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style';
import logo from "../../../assets/images/homeIcon.png"
import { Dialog ,Button,TextInput} from 'react-native-paper';
import {auth} from "../../firebase/firebaseConfig"
import {child, getDatabase, push, ref } from "firebase/database"
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
const HomeScreen = () => {

  const dispatch = useDispatch();

  const taskList = useSelector((state)=>state.task.taskList);
  console.log(taskList)
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const hideDialog = () => {
    setOpenDialog(!openDialog);
  };

  const addTaskHandler = async () => {
       try {
        // FETCHING LOGGED IN USER DETAILS =========================================>
        const loggedInUser = auth.currentUser;

        // ADDING TASK TO REALTIME DATABASE =========================================>

        const taskData = {
          title,
          description,
          createdAt: new Date().toISOString(),
          completed:false,
        };

        const dbRef = ref(getDatabase());
        const childRef = child(dbRef,`Tasks/${loggedInUser.uid}`);
        await push(childRef,taskData);

        // DISPATCHING TASK DATA TO LOCAL STORE ==========================================>
        
        dispatch(addTask({task:taskData}));
        setOpenDialog(false)

        Alert.alert("Hurray 🤗", "Task added successfully")

       } catch (error) {
          console.log(error.message);
          setOpenDialog(false)
          Alert.alert("Sorry 😣","Task cannot be added at the moment")
       }
  };

  return (
    <>
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage}/>
      </View>
      <ScrollView style={styles.tasksContainer}>
         
      </ScrollView>
    </SafeAreaView>
    <TouchableOpacity style={styles.addTaskContainer} onPress={()=>hideDialog()}>
     <Entypo name="add-to-list" size={40} color="#fff" />
     </TouchableOpacity>
   
    <Dialog
        visible={openDialog}
        onDismiss={()=>hideDialog()}
        style={{ backgroundColor: "#81d4fa",borderRadius:30, }}
      >
        <Dialog.Title style={{ color: "white", fontWeight: 800 }}>
          ADD A TASK
        </Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.input}
            placeholder="Enter Title"
            value={title}
            onChangeText={(e)=>setTitle(e)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter description"
            value={description}
            onChangeText={(e)=>setDescription(e)}
            autoCapitalize="none"
            multiline={true}
            numberOfLines={4}
          />
          <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between" }}>
            <TouchableOpacity onPress={()=>hideDialog()}>
              <Text  style={{ fontSize: 20, color: "white" }}>CANCEL</Text>
            </TouchableOpacity>
            <Button
              onPress={()=>addTaskHandler()}
              color="#900"
              disabled={!title || !description }
              style={{ fontSize: 20, color: "white" }}
            >
              <Text  style={{ fontSize: 20, color: "white" }}>
              ADD
              </Text>   
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
}

export default HomeScreen