import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import LoginScreen  from './LoginScreen';
import Home from './Home'
import Registros from "./Registros";
import Gestores from "./Gestores";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gestores">
        <Stack.Screen 
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Registros"
        component={Registros}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Gestores"
        component={Gestores}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}      