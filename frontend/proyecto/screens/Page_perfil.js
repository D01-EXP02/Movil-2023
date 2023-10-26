import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, Modal, Portal, Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Page_perfil = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="account" style={{ width: 50, height: 50 }} />

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>Perfil</Text>
          <Card style={styles.card}>
            <Card.Title title="ROL" subtitle="Docente" left={LeftContent} />
            <Card.Content>
              <Text variant="titleMedium">Nombre: juan</Text>
              <Text variant="titleMedium">Apellido: jhonson</Text>
              <Text variant="titleMedium">Telefono: 3106326313</Text>
              <Text variant="titleMedium">Correo: jhonson@gmial.com</Text>
              <Text variant="titleMedium">Usuario: jhonson</Text>
              <Text variant="titleMedium">Contraseña: **********</Text>
              <Text variant="titleMedium">Facultad: Ingenieria</Text>
              <Text variant="titleMedium">Programa: Ingenieria de sistemas</Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" >Editar información</Button>
            </Card.Actions>
          </Card>
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
    width: 300,
    height: 350
  },
});

export default Page_perfil;
