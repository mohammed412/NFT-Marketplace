import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import Home from './screens/Home';
import About from './screens/About';
import Demo from './screens/Demo';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  const Stack =  createStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#eee'
    },
    
  }

  let screenStyle = {
    headerStyle: {
      backgroundColor: "#444"
    }
  }

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Demo' component={Demo} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


