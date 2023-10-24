import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'

function Page_misproyectos({ navigation }) {
  return (
    <View style= {styles.container}>
      <Text style ={styles.Titulo}>Mis proyectos</Text>
     
      <Card elevation={5} style={styles.card} onPress={ () => {alert('Favor Subir un Proyecto')}}>
        <Entypo name='folder' style ={{fontSize:90, textAlign:'center', }}/>
        <Text style={styles.texto}>NO HAY PROYECTOS</Text>
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
       width:300,
       height:300,
       marginTop: 10,
       borderRadius: 10,
       justifyContent: 'center'
    },
    texto:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    }
})
export default Page_misproyectos;