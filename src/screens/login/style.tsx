import { StyleSheet ,Platform} from "react-native";

export const styles = StyleSheet.create({
   mainContainer:{
      // paddingTop:Platform.OS ==="android"?40:0
   },
   imageContainer:{
      paddingTop:80,
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
    borderRadius:10,
   },
   buttonText:{
     color:"#fff",
     fontSize:25,
     letterSpacing:2,
     fontWeight:"800"
   },
   registerContainer:{
    marginTop:30,
    alignSelf:"center",
    gap:20,
   },
   newUserText:{
    fontSize:18,
    color:"#81d4fa",
    fontWeight:"900",
    letterSpacing:2
   },
   registerButtonContainer:{
     paddingHorizontal:30,
     borderWidth:4,
     borderColor:"#81d4fa",
     borderRadius:10,
   },
   registerText:{
       textAlign:"center",
       color:"#81d4fA",
       fontSize:20,
       fontWeight:"900",
       letterSpacing:2,
   }
})
