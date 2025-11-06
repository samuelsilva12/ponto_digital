import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App({ navigation}) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ffc108" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.cabecalho}>Bem-vindo ao seu aplicativo de ponto digital</Text>
      <StatusBar style="auto" />
      <View style={styles.dados}>
        <TextInput style={styles.inputEmail} placeholder="Matricula: ex(4444)"  />
        <TextInput style={styles.inputSenha} placeholder="Senha" secureTextEntry textContentType='password' />
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Home')}> 
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Gestores')}> 
          <Text style={styles.textBtn}>Gestores</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c0e9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    color: '#eeececff',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 40,
    textAlign: 'center',
  },
  logo: {
    width: 170,
    height: 150,
  },
  inputEmail: {
    width: 200,
    height: 60,
    borderWidth: 4,
    borderColor: '#b31921',
    backgroundColor: '#f8f8f8ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    marginBottom: 10,
    color:'#086bad',
    fontFamily:'Poppins_400Regular'
  },
  inputSenha: {
    width: 200,
    height: 60,
    borderWidth: 4,
    borderColor: '#b31921',
    backgroundColor: '#f8f8f8ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
    color:'#086bad',
    fontFamily:'Poppins_400Regular'
  },
  dados: {
    marginBottom: 300,
    backgroundColor: '#ffffff',
    padding: 40,
    borderColor: '#000',
    borderWidth: 0.2,
    elevation: 9,
    borderRadius: 10,
  },
  btn:{
    marginTop:10,
    height:'2rem',
    backgroundColor:'#ed2633',
    borderRadius:4,
    
  },
  textBtn:{
    textAlign:'center',
    paddingTop:5,
    fontFamily:'Poppins_700Bold',
    color:'#ffffffff'
  }
});
