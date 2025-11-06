  import React, {useState} from "react";
  import {View,Text,StyleSheet, TouchableOpacity,Button,ScrollView} from 'react-native';
  import { Ionicons } from '@expo/vector-icons';
  import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';



  export default function Registros({ navigation }){
    
      const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold,
    });

    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        </View>
      );
    }

    return (


<ScrollView style={styles.content}  contentContainerStyle={{ paddingBottom: 50 }}> 
<View style={styles.header}>
  <Ionicons name="chevron-back" size={50} color="#0264b0" style={styles.back} onPress={()=>navigation.navigate('Home')} />
  <Text style={styles.titulo}>Horas de trabalho</Text>
</View>
<View style={styles.divcard}>
    <View style={styles.card}>
      <Text style={styles.dia}>Dom 10/10/2025 </Text>
      <Text style={styles.dadoscard}>00:00</Text>
      <Text style={styles.dadoscard}>Você não trabalhou este dia!</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Seg 11/10/2025</Text>
      <Text style={styles.dadoscard}>Entrada: 08:01  - Saída: 18:05</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Ter 112/10/2025</Text>
      <Text style={styles.dadoscard}>Entrada: 08:01  - Saída: 19:01</Text>
      <Text style={[styles.dadoscard, styles.extra]}>Horas extra: 1 horas</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Qua 13/10/2025</Text>
      <Text style={styles.dadoscard}>Entrada: 08:01  - Saída: 18:05</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Qui 14/10/2025</Text>
      <Text style={styles.dadoscard}>00:00</Text>
      <Text style={[styles.falta, styles.dadoscard]}>Você faltou !</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Sex 15/10/2025</Text>
      <Text style={styles.dadoscard}>Entrada: 08:01  - Saída: 19:01</Text>
      <Text style={[styles.dadoscard, styles.extra]}>Horas extra: 1 horas</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Sáb 16/10/2025</Text>
      <Text style={styles.dadoscard}>Entrada: 08:01  - Saída: 18:05</Text>
    </View>
    <View style={styles.card}>
      <Text style={styles.dia}>Total de faltas e horas extra</Text>
      <Text style={[styles.falta, styles.dadoscard]}>Dias faltados: 1</Text>
      <Text style={[styles.dadoscard, styles.extra]}>Total de hora extra: 2:02 horas</Text>
    </View>
</View>
</ScrollView>

    );
  }

  const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#91c0e9ff',
  },
  header:{
      backgroundColor:'#FF4D4D',
    height:100
  },
  back:{
      marginTop:'10%'
  },
  divcard:{
    alignItems:'center',
  },
  titulo:{
    textAlign:'center',
    color:'#e9e9e9ff',
    fontFamily:'Poppins_400Regular',
    fontSize:20,
    top:-30
  },
  card:{
    backgroundColor:'#e9e9e9ff',
    borderColor:'086bad',
    borderWidth:2,
    width:'100%',
    height:120
  },
  dia:{
    fontFamily:'Poppins_400Regular',
    marginLeft:10,
    fontSize:18,
    color:'#086bad'
  },
  dadoscard:{
    marginLeft:10,
    fontSize:15
  },
  falta:{
    color:'red',
  },
  extra:{
    color:'green'
  },
  })