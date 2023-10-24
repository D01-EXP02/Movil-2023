// PantallaB.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import logo from '../assets/upclogo.png';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


function Page_inicio({ navigation }) {

  return (

    <ScrollView>
       <View style= {styles.container}>
      <Image
         source={logo}
         style = {styles.logo}
      />
     
     <Card elevation={5} style = {styles.Card} onPress={() => {navigation.navigate('Mis Proyectos')}}>
        <Card.Cover
        source={require('../assets/portafolio.png')}
        style = {styles.img}
        />
           <Text style= {styles.textos}>MIS PROYECTOS</Text>
       </Card>

       <Card elevation={5} style = {styles.Card} onPress={() => {navigation.navigate('Crear Proyecto')}}>
        <Card.Cover
        source={require('../assets/google-docs.png')}
        style = {styles.img}
        />
           <Text style= {styles.textos}>CREAR PROYECTO</Text>
       </Card>

       <Card elevation={5} style = {styles.Card} onPress={() => {navigation.navigate('Perfil')}}>
        <Card.Cover
        source={require('../assets/curriculum.png')}
        style = {styles.img}
        />
           <Text style= {styles.textos}>MI PERFIL</Text>
       </Card>

       <Card elevation={5} style = {styles.Card} onPress={() => {navigation.navigate('Bandeja Entrada')}}>
        <Card.Cover
        source={require('../assets/comentario.png')}
        style = {styles.img}
        />
           <Text style= {styles.textos}>BANDEJA DE ENTRADA</Text>
       </Card>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
       
    },
    logo:{
      width:150,
      height:50,
      marginTop: 60,
    },
    Card:{
      backgroundColor: '#4f8c50',
      marginTop: 20,
      width: 270

    },
    textos:{
       textAlign: 'center',
       fontSize: 20,
       

    },
    img:{
       height:280,
       padding: 18,


    }
})
export default Page_inicio;
