import React from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';

const Crearproyecto = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Crear PROYECTOS!</Text>

      {/* Ejemplo de un botón */}
      <Button mode="contained" onPress={() => console.log('Botón presionado')}>
        Presionar
      </Button>

      {/* Ejemplo de un campo de entrada de texto */}
      <TextInput label="Nombre" value={''} onChangeText={(text) => console.log(text)} />

      {/* Ejemplo de una tarjeta */}
      <Card>
        <Card.Title title="Título de la tarjeta" subtitle="Subtítulo de la tarjeta" />
        <Card.Content>
          <Text>Contenido de la tarjeta</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Acción 1</Button>
          <Button>Acción 2</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Crearproyecto;
