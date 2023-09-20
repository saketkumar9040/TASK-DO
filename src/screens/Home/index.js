import { View, Text, TouchableOpacity,SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style';
import logo from "../../../assets/images/homeIcon.png"
import { Dialog ,Button,TextInput} from 'react-native-paper';

const HomeScreen = () => {
  const [openDialog, setopenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title)
  console.log(description)
 
  const hideDialog = () => {
    setopenDialog(!openDialog);
  };

  const addTaskHandler = async () => {
 
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