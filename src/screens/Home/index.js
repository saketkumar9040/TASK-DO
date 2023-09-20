import { View, Text, TouchableOpacity,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style';
import logo from "../../../assets/images/homeIcon.png"

const HomeScreen = () => {
  return (
    <>
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage}/>
      </View>
    </SafeAreaView>
     <TouchableOpacity style={styles.addTaskContainer}>
     <Entypo name="add-to-list" size={40} color="#fff" />
     </TouchableOpacity>
    </>
  );
}

export default HomeScreen