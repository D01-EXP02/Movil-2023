import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Page_Observaciones({ navigation }) {
  return (
    <View style= {styles.container}>
      <Text style = {styles.Titulo}>AQUI TUS OBSERVACIONES DE PROYECTO...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center'
    },
    Titulo:{
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      color: '#49a300',
      marginTop: 20

    }
})
export default Page_Observaciones;