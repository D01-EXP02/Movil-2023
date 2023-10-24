// Navegacion.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/native'

//paginas
import Page_misproyectos from '../screens/Page_Misproyectos';
import Page_nuevoproyecto from '../screens/Page_Newproyecto';
import Page_registrar from '../screens/Page_registrar'
import Page_login from '../screens/Page_login';
import Page_inicio from '../screens/Page_inicio';
import Page_perfil from '../screens/Page_perfil';
import Page_Observaciones from '../screens/Page_observacion';



const Stack = createStackNavigator();


export default function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page_login">
        <Stack.Screen name="Login" component={Page_login} />
        <Stack.Screen name="Registro" component={Page_registrar} />
        <Stack.Screen name='Entrar' component={Page_inicio} options={{headerShown: false}}/>
        <Stack.Screen name='Mis Proyectos' component={Page_misproyectos} />
        <Stack.Screen name='Crear Proyecto' component={Page_nuevoproyecto} />
        <Stack.Screen name='Perfil' component={Page_perfil} />
        <Stack.Screen name='Bandeja Entrada' component={Page_Observaciones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


