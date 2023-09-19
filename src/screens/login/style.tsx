import { StyleSheet ,Platform} from "react-native";

export const styles = StyleSheet.create({
   mainContainer:{
      paddingTop:Platform.OS ==="android"?40:0
   },
   imageContainer:{
      padding:30,
      alignItems:"center",
      backgroundColor:"#81d4fa",
      marginBottom:40,
   },
   image:{
    width:150,
    height:150,
    resizeMode:"contain"
   },
   inputContainer:{
    flexDirection:"row",
    alignItems:"center",
    margin:20,
    paddingHorizontal:10,
    backgroundColor:'#81d4fa',
    // paddingVertical:2,
   },
   textInput:{
    flex:1,
    fontSize:20,
    marginLeft:15,
    backgroundColor:'#fff',
    padding:10,
   },
   buttonContainer:{
    marginTop:20,
    alignSelf:'center',
    backgroundColor:"#81d4fa",
    paddingHorizontal:50,
   },
   buttonText:{
     color:"#fff",
     fontSize:25,
     letterSpacing:2,
     fontWeight:"800"
   }
})
