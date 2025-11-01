import React, {useState} from "react";
import {View,Text,StyleSheet, TouchableOpacity,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Registros({ navigation }){
  return (

    <View style={styles.content}>
       <Ionicons name="menu" size={50} color="#fff"  />
       <View style={styles.divcard}>
      

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
content:{
  flex:1,
  backgroundColor:'#0264b0',
  
  },
divcard:{
  alignItems:'center',
  flex:1,
  width:'100%',
  backgroundColor:'#000'

}
})