import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableWithoutFeedback, Keyboard,ScrollView   } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TextInput, Button, PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde React Navigation
import Page_registrar from './Page_registrar';

const Page_registro = () => <Page_registrar />;


const Page_login = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Page_logins />
    </GestureHandlerRootView>
  </SafeAreaProvider>
);

const Page_logins = () => {
  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
    <View style={styles.container}>
      <Image source={require('../assets/Capa.png')} style={styles.imagen} />
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>Bienvenido</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000',textAlign:'center' }}>SISTEMA DE GESTION DE PROYECTOS DE GRADO</Text>

      <TextInput label="Usuario" value={text} onChangeText={text => setText(text)} style={styles.input} />
      <TextInput label="Contraseña" value={password} onChangeText={password => setPassword(password)} style={styles.input} />

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text >Aun no tienes cuenta?, regístrate pulsando aquí</Text>
      </TouchableOpacity>

      <Button icon="login" mode="contained" style={styles.boton} onPress={()=>navigation.navigate("Entrar")}>Entrar</Button>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Page_login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },
  input: {
    marginVertical: 10,
    width: 300,
    backgroundColor: '#ffffff',
  },
  boton: {
    marginVertical: 20,
    width: 300,
  },
  linkText: {
    color: 'blue', // Puedes cambiar el color según tu preferencia
    textDecorationLine: 'underline',
  },
});

const modal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  );
};