import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity, ImageBackground,Image} from 'react-native';
import logo from '../assets/upc.png';


function Page_login({navigation}) {
  const fondo = {uri: "https://png.pngtree.com/background/20220714/original/pngtree-green-small-clear-concise-and-refreshing-picture-image_1612224.jpg"};
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const limpiarCampos = () => {
   
    setUsername('');
    setPassword('');
   
    setErrorUsername('');
    setErrorPassword('');
  };

  const validarcampos=() =>{
    let Errores = false;

    if (Username.trim() === '') {
      Errores = true;
    } else {
      setErrorUsername('');
    }

    if (Password.trim() === '') {
      Errores = true;
    } else {
      setErrorPassword('');
    }

    if (!Errores) {
      navigation.navigate('Entrar');
      limpiarCampos();
    }else{
      setErrorUsername('Aun hay campos Vacios');
    }

  }
  
  return (
    <View style={styles.container}>

       <ImageBackground source={fondo} resizeMode='cover' style = {styles.fondoimagen}>
       <Image
         source={logo}
         style = {styles.logo}
      />
      <Text style = {styles.titulo}>Universidad Popular del Cesar</Text>
      <Text style = {styles.subtitulo}>Control de Proyectos</Text>
      {errorUsername ? <Text style={styles.errortext}>{errorUsername}</Text> : null}

       <TextInput style = {styles.ingdatos}
        placeholder="Username"
        value={Username}
        onChangeText={(text) => setUsername(text)}
       />
       
       <TextInput style = {styles.ingdatos}
        placeholder="Password"
        value={Password}
        secureTextEntry= {true}
        onChangeText={(text) => setPassword(text)}
        
       />
       <Text>Olvidaste tu contraseña?</Text>
       
       <TouchableOpacity style={styles.button} onPress={() => { validarcampos()}}>
        <Text style={styles.text}>Ingresar</Text>
     </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')} >
        <Text style={styles.text}>Registrate</Text>
       </TouchableOpacity>
   
       </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}
export default  Page_login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fondoimagen:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
     height: 150,
     width: 170
  },
  titulo:{
     fontSize: 30,
     textAlign: 'center',
     color: 'black',
     fontWeight: 'bold',

  },
  subtitulo:{
      fontSize: 25,
      color: '#49a300',
      marginTop: 15
  },
  ingdatos:{
     borderWidth: 1,
     borderColor: 'gray',
     width: '80%',
     height: 50,
     padding: 5,
     marginTop: 25,
     borderRadius: 30,
     backgroundColor: '#c7c7c7',
     paddingStart: 20,
  },
  button:{
    marginTop: 20,
    width: '80%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 20
 },
 text:{
     fontSize: 25,
     fontWeight: 'bold',
     textAlign: 'center',
     color: 'white',
     marginTop: 5,
 },
 errortext:{
  color: 'red'
 }
});
