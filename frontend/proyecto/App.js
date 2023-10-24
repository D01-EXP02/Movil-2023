import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, ImageBackground,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navegacion from './stacks/Navigation';



export default function App() {
 return (
  <Navegacion />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
