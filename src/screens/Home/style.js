import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingTop:40,
        alignItems:"center"
    },
    logoContainer:{
    },
    logoImage:{
      width:200,
      height:80,
      resizeMode:"contain"
    },
    tasksContainer:{
      
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#b5b5b5",
        padding: 2,
        paddingLeft: 15,
        marginVertical: 5,
        fontSize: 22,
        marginBottom:20,
      },

    addTaskContainer:{
        marginVertical:10,
        alignSelf:"center",
        backgroundColor:"#81d4fa",
        padding:15,
        borderRadius:50,
        elevation:10,
    }
})