import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native-gesture-handler';

function Page_nuevoproyecto({ navigation }) {
  const [Titulo, setTitulo] = useState('');
  const [Docente, setDocente] = useState('');
  const [Colaborador, setColaborador] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [errorTitulo, setErrorTitulo] = useState('');
  const [errorDocente, setErrorDocente] = useState('');
  const [errorColaborador, setErrorColaborador] = useState('');
  const [errorDescripcion, setErrorDescripcion] = useState('');

  const limpiarCampos = () => {
   
    setTitulo('');
    setDocente('');
    setColaborador('');
    setDescripcion('');
   
    setErrorTitulo('');
    setErrorDocente('');
    setErrorColaborador('');
    setErrorDescripcion('');
  };

  const validarcampos=() =>{
    let Errores = false;

    if (Titulo.trim() === '') {
      Errores = true;
    } else {
      setErrorTitulo('');
    }

    if (Docente.trim() === '') {
      Errores = true;
    } else {
      setErrorDocente('');
    }

    if (Colaborador.trim() === '') {
      Errores = true;
    } else {
      setErrorColaborador('');
    }

    if (Descripcion.trim() === '') {
      Errores = true;
    } else {
      setErrorDescripcion('');
    }

    if (!Errores) {
      alert('PROYECTO REGISTRADO')
      limpiarCampos();
    }else{
      setErrorTitulo('Aun hay campos Vacios');
    }

  }

  return (
    <View style= {styles.container}>
      <Text style ={styles.Titulo}>CREAR PROYECTO</Text>
      
      {errorTitulo ? <Text style={{color:'red'}}>{errorTitulo}</Text> : null}
      <Text style = {styles.textos}>Titulo Proyecto</Text>
      <TextInput
      style = {styles.ingdatos}
      placeholder='Titulo'
      value={Titulo}
        onChangeText={(text) => setTitulo(text)}
      
      />
      <Text style = {styles.textos}>Docente Cargo (Cedula)</Text>
      <TextInput
      style = {styles.ingdatos}
      keyboardType='phone-pad'
      placeholder='Docente Cargo'
      value={Docente}
        onChangeText={(text) => setDocente(text)}
      
      />

<Text style = {styles.textos}>Colaboradores (Cedula)</Text>
      <TextInput
      style = {styles.ingdatos}
      placeholder='Colaboradores'
      keyboardType='phone-pad'
      value={Colaborador}
        onChangeText={(text) => setColaborador(text)}
      
      />

<Text style = {styles.textos}>Cargar Archivo (PDF/DOCS)</Text>
    <AntDesign name='upload' style = {{fontSize: 30, padding: 5, borderColor: 'gray', borderWidth: 1, width: '50%',marginLeft: 10 }}/>
<Text style = {styles.textos}>Descripcion del proyecto </Text>
      <TextInput
      style = {styles.multitext}
      placeholder='Descripcion'
      multiline = {true}
      numberOfLines={4}
      value={Descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity style={styles.button} onPress={() => { validarcampos()}}>
        <Text style={styles.textbutton}>Ingresar</Text>
     </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,

    },
    Titulo:{
      fontSize: 30,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      color: '#49a300',
      marginTop: 20

    },
    ingdatos:{
       borderWidth: 1,
       borderColor: 'gray',
       width: '80%',
       height: 50,
       padding: 5,
       marginTop: 10,
       borderRadius: 30,
       backgroundColor: '#c7c7c7',
       paddingStart: 20,
    },
    textos:{
      margin: 10,
      fontWeight: 'bold'
    },
    multitext:{
      backgroundColor: '#c7c7c7',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      paddingStart: 10,
      fontSize: 16,
      minHeight: 100,
    },
    button:{
      alignContent: 'center',
      marginTop: 20,
    width: '60%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 20
    },
    textbutton:{
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      marginTop: 5,
    }
})
export default Page_nuevoproyecto;