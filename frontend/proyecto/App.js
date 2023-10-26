import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity, ImageBackground,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navegacion from './stacks/Navigation';

import { TextInput, Button, Provider as PaperProvider } from 'react-native-paper';


const theme = {
  myOwnProperty: true,
    colors: {
      "primary": 'rgb(23, 110, 0)',
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(133, 253, 99)",
      "onPrimaryContainer": "rgb(3, 33, 0)",
      "secondary": "rgb(27, 109, 0)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(133, 253, 95)",
      "onSecondaryContainer": "rgb(4, 33, 0)",
      "tertiary": "rgb(55, 106, 32)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(183, 243, 151)",
      "onTertiaryContainer": "rgb(6, 33, 0)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(253, 253, 246)",
      "onBackground": "rgb(26, 28, 24)",
      "surface": "rgb(253, 253, 246)",
      "onSurface": "rgb(26, 28, 24)",
      "surfaceVariant": "rgb(223, 228, 215)",
      "onSurfaceVariant": "rgb(67, 72, 63)",
      "outline": "rgb(115, 121, 110)",
      "outlineVariant": "rgb(195, 200, 188)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(47, 49, 45)",
      "inverseOnSurface": "rgb(241, 241, 234)",
      "inversePrimary": "rgb(105, 224, 73)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(242, 246, 234)",
        "level2": "rgb(235, 242, 226)",
        "level3": "rgb(228, 237, 219)",
        "level4": "rgb(225, 236, 217)",
        "level5": "rgb(221, 233, 212)"
      },
      "surfaceDisabled": "rgba(26, 28, 24, 0.12)",
      "onSurfaceDisabled": "rgba(26, 28, 24, 0.38)",
      "backdrop": "rgba(45, 50, 41, 0.4)"
    }
  }

export default function App() {
 return (
  <PaperProvider theme={theme}>
      <Navegacion/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});
