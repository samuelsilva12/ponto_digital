import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ActivityIndicator } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
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
        <TextInput style={styles.inputEmail} placeholder="Matricula: ex(4444)" />
        <TextInput style={styles.inputSenha} placeholder="Senha" secureTextEntry />
        <Button title="Login" color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    color: '#1953c0ff',
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
    borderColor: '#e2e2e2ff',
    backgroundColor: '#f8f8f8ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  inputSenha: {
    width: 200,
    height: 60,
    borderWidth: 4,
    borderColor: '#e2e2e2ff',
    backgroundColor: '#f8f8f8ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
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
});
