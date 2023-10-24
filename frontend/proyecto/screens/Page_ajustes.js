import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Page_ajustes({ navigation }) {
  return (
    <View style= {styles.container}>
      <Text>ESTAS EN AJUSTES!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
    }
})
export default Page_ajustes;