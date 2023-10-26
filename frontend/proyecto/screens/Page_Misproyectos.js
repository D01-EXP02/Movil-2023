import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, Modal, Portal, Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Page_misproyectos = () => {

  return (
    <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View  style={styles.container}>
        <Card style={styles.card}>

        <Card.Content>
          <Text variant="titleLarge">Ningun proyecto</Text>
        </Card.Content>
        <Icon name="close"  size={100} style={styles.icono} />
        <Text variant="titleMedium">Crea un proyecto propio</Text>

        <Card.Actions>
          
        </Card.Actions>
      </Card>

    </View>
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default Page_misproyectos;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    marginVertical: 10,
    width: 300,
    height: 300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icono: {
    textAlign: 'center',
    marginVertical: 10,
  },
  
});
