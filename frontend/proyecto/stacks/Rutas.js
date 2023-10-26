import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page_login from 'screens/Page_login.js';
import Page_registro from './Page_registro';
import Page_inicio from './Page_inicio';
import Page_perfil from './Page_perfil';
import Page_misproyectos from './Page_Misproyectos';
import Page_nuevoproyecto from './Page_Newproyecto';
import Page_Observacion from './Page_observacion';


const Stack = createStackNavigator();

const rutas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page_login">
        <Stack.Screen name="Page_login" component={Page_login} />
        <Stack.Screen name="Page_registro" component={Page_registro} />
        <Stack.Screen name="Page_inicio" component={Page_inicio} />
        <Stack.Screen name="Page_perfil" component={Page_perfil} />
        <Stack.Screen name="Page_misproyectos" component={Page_misproyectos} />
        <Stack.Screen name="Page_nuevoproyecto" component={Page_nuevoproyecto} />
        <Stack.Screen name="Page_Observacion" component={Page_Observacion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default rutas;
