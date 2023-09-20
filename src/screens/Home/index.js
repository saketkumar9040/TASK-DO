import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style';

const HomeScreen = () => {
  return (
    <>
    <View style={styles.mainContainer}>
      <Text>HomeScreen</Text>
    </View>
     <TouchableOpacity style={styles.addTaskContainer}>
     <Entypo name="add-to-list" size={40} color="#fff" />
     </TouchableOpacity>
    </>
  );
}

export default HomeScreen