import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingTop:40,
        alignItems:"center"
    },
    logoContainer:{
        paddingTop:30,
        flexDirection:"row",
        alignItems:"center",
        
    },
    logoImage:{
      width:200,
      height:80,
      resizeMode:"contain"
    },
    tasksContainer:{
        backgroundColor:"#81d4fa",
        marginVertical:15,
        padding:10,
        marginHorizontal:10,
        borderRadius:20,
        width:350
        
    },
    taskTitle:{
       fontSize:25,
       color:"#fff",
       fontWeight:"900",
       textAlign:"center",
    },
    taskDescription:{
        fontSize:17,
        color:"#81d4fa",
        fontWeight:"500",
        padding:10,
        backgroundColor:"#fff",
        borderRadius:8,
        margin:6
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