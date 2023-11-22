import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack=createNativeStackNavigator()
import Inicio from  "movil/pages/Inicio.js"
import Registro from '../pages/Registro'
import  Menu  from '../pages/Menu'


const Mainstack=() =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Inicio'
                    component={Inicio}                
                 />
                 
                 <Stack.Screen
                    name='registro'
                    component={Registro}
                />

                <Stack.Screen
                    name='menu'
                    component={Menu}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Mainstack;

