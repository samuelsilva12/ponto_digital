import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import LoginScreen  from './LoginScreen';
import Home from './Home'
import Registros from "./Registros";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registros">
        <Stack.Screen 
        name="LoginScreen"
        component={LoginScreen}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        
        />
        <Stack.Screen
        name="Registros"
        component={Registros}
        options={{title:'Tela de registros'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}