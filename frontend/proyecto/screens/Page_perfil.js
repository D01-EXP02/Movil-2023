import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Card, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
function Page_perfil({ navigation }) {
  return (
    <View style= {styles.container}>
      <Text style = {styles.Titulo}>TU PERFIL</Text>
      
      <Card elevation={5} style = {styles.card}>
      <FontAwesome name='user-circle-o' style = {{fontSize: 80, marginTop: 15, textAlign: 'center'}}/>
      <Text style={styles.texto}> CEDULA:  12345678</Text>
       <Text style={styles.texto}> NOMBRES:  DAVID ESTEBAN </Text>
       <Text style={styles.texto}> APELLIDOS: GOMEZ ESPITIA</Text>
       <Text style={styles.texto}> USUARIO:  Destebangomez</Text>
       <Text style={styles.texto}> EMAIL:  destebangomez@unicesar.edu.co</Text>
       <Text style={styles.texto}> FACULTAD:  Ingenierias y Tecnologias</Text>
       <Text style={styles.texto}> PROGRAMA:  Ingenieria en Sistemas</Text>
      </Card>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
    },
    Titulo:{
      fontSize: 30,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      color: '#49a300',
      marginTop: 20

    },
    card:{
       width:350,
       height:400,
       marginTop: 10,
       borderRadius: 10,
       alignItems:'center',
       backgroundColor: 'white'
    },
    texto:{
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 15,
      backgroundColor: 'orange',
      borderRadius: 20
    }
})
export default Page_perfil;