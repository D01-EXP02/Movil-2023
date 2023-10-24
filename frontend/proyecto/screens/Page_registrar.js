import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity,Image,ImageBackground} from 'react-native';
import logo from '../assets/upclogo.png'


export default function Registrar(){
    const fondo = {uri: "https://png.pngtree.com/background/20220714/original/pngtree-green-small-clear-concise-and-refreshing-picture-image_1612224.jpg"};
    const [selected, setSelected] = React.useState("");
    const [facultad, setFacultad] = React.useState("AC");
    const [carrera, setCarrera] = React.useState("");

    const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorCedula, setErrorCedula] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [erroruser, setErroruser] = useState('');
  const [errorpassword, setErrorpassword] = useState('');
  const [erroremail, setErroremail] = useState('');
  const limpiarCampos = () => {
   
    setCedula('');
    setNombre('');
    setApellido('');
    setEmail('');
    setUser('');
    setPassword('');

    setErrorCedula('');
    setErrorNombre('');
    setErrorApellido('');
    setErrorpassword('');
    setErroremail('');
    setErroruser('');
  };

    const validarcampos=() =>{
      let Errores = false;

      if (cedula.trim() === '') {
        Errores = true;
      } else {
        setErrorCedula('');
      }
  
      if (nombre.trim() === '') {
        Errores = true;
      } else {
        setErrorNombre('');
      }
  
      if (apellido.trim() === '') {
        Errores = true;
      } else {
        setErrorApellido('');
      }
      if (user.trim() === '') {
        Errores = true;
      } else {
        setErroruser('');
      }
      if (password.trim() === '') {
        Errores = true;
      } else {
        setErrorpassword('');
      }
      if (email.trim() === '') {
        Errores = true;
      } else {
        setErroremail('');
      }
  
      if (!Errores) {
        alert('Registro exitoso');
        limpiarCampos();
      }else{
        setErroremail('Aun hay campos Vacios');
      }

    }

    const dataId = [
      {key:'1', value:'Cedula de ciudadania'},
      {key:'2', value:'Registro civil'},
      {key:'3', value:'Cedula extrajera'},
      {key:'4', value:'DNI'}
    ]

    const dataFacultad = [
      {key:'AC', value:'Ciencias Administrativas y contables'},
      {key:'BA', value:'Bellas Artes'},
      {key:'DE', value:'Derecho, ciencias politicas y Sociales'},
      {key:'CB', value:'Ciencias Basicas'},
      {key:'IT', value:'Ingenierias y Tecnologias'},
      {key:'CS', value:'Ciencias de la Salud'},
      {key:'ED', value:'Educacion'}
    ]

    const dataCarrera = {
      'AC':[
        {key:'1', value:'Administracion de Empresas'},
        {key:'2', value:'Turismo y Hoteleria'},
        {key:'3', value:'Comercio Internacional'},
        {key:'4', value:'Contaduria Publica'},
        {key:'5', value:'Economia'},
      ],
      'BA':[
        {key:'6', value:'Licenciatura en Artes'},
        {key:'7', value:'Musica'},
      ],
      'DE':[
        {key:'8', value:'Derecho'},
        {key:'9', value:'Sociologia'},
        {key:'10', value:'Psicologia'},
      ],
      'CB':[
        {key:'11', value:'Microbiologia'},
      ],
      'IT':[
        {key:'12', value:'Agroindustrial'},
        {key:'13', value:'Ambiental y Sanitaria'},
        {key:'14', value:'Ingenieria en Sistemas'},
        {key:'15', value:'Ingenieria Electronica'},
      ],
      'CS':[
        {key:'16', value:'Enfermeria'},
        {key:'17', value:'Instrumentacion Quirurgica'},
      ],
      'ED':[
        {key:'18', value:'Ciencias Naturales y Educacion Ambiental'},
        {key:'19', value:'Literatura y Lengua Castellana'},
        {key:'20', value:'Educacion fisica, Recreacion Y Deportes'},
        {key:'21', value:'Español e Ingles'},
        {key:'22', value:'Licenciatura en Matematicas'},
      ],

    }
    return(
        <View style={styles.container}>
          <ImageBackground source={fondo} resizeMode='cover' style = {styles.fondoimagen}>
          <Image
         source={logo}
         style = {styles.logo}
          />
          
           
          
           <Text style = {styles.titulo}>REGISTRATE ACÁ!</Text>

           <SelectList 
            data={dataFacultad} 
            setSelected={setFacultad} 
            boxStyles={{marginHorizontal: 50 , marginTop: 5, backgroundColor: 'white'}}
            placeholder='Facultad...'
            />  

            <SelectList 
            data={dataCarrera[facultad]} 
            setSelected={setCarrera} 
            boxStyles={{marginHorizontal: 50, marginTop: 5, backgroundColor: 'white'}}
            placeholder='Programa Academico..'
            defaultOption={dataCarrera[facultad][0]}
            />

        <SelectList 
        data={dataId} 
        setSelected={setSelected} 
        boxStyles={{marginHorizontal: 50,marginTop: 10, backgroundColor: 'white'}}
        placeholder='Tipo de Documento...'
        defaultOption={{key:'1', value:'Cedula de ciudadania'}}
        />
        <TextInput 
         style = {styles.textoentrada}
           placeholder='Cedula'
           keyboardType='phone-pad'
           value={cedula}
           onChangeText={(text) => setCedula(text)}
         />
          {errorCedula ? <Text style={styles.errortext}>{errorCedula}</Text> : null}
         <View style = {styles.containerinput}>
              <TextInput 
              style = {styles.textoinput}
                placeholder='Nombres'
                value={nombre}
                onChangeText={(text) => setNombre(text)}
              />
              {errorNombre ? <Text style={styles.errortext}>{errorNombre}</Text> : null}
              <TextInput 
              style = {styles.textoinput}
                placeholder='Apellidos'
                value={apellido}
                onChangeText={(text) => setApellido(text)}
              />
              {errorApellido ? <Text style={styles.errortext}>{errorApellido}</Text> : null}

         </View>
         <View style= {styles.containerinput}>
                <TextInput 
                style = {styles.textoinput}
                  placeholder='Usuario'
                  value={user}
                  onChangeText={(text) => setUser(text)}
                />
                {erroruser ? <Text style={styles.errortext}>{erroruser}</Text> : null}
                <TextInput 
                style = {styles.textoinput}
                  placeholder='Contraseña'
                  keyboardType='visible-password'
                  secureTextEntry= {true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                {errorpassword ? <Text style={styles.errortext}>{errorpassword}</Text> : null}

         </View>
         <TextInput 
         style = {styles.textoentrada}
           placeholder='Correo Electronico'
           keyboardType='email-address'
           value={email}
           onChangeText={(text) => setEmail(text)}
         />
         {erroremail ? <Text style={styles.errortext}>{erroremail}</Text> : null}

         <TouchableOpacity
            style = {styles.button}
            onPress={() => {validarcampos()}}
         >
           <Text style={styles.text}>Registrar</Text>
         </TouchableOpacity>
           </ImageBackground>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    containerinput:{
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    fondoimagen:{
      flex: 1,
      alignItems: 'center'
      
      },
    titulo:{
    fontSize: 30,
     textAlign: 'center',
     color: '#49a300',
     fontWeight: 'bold',
     marginTop: 15
    },
    textoinput:{
      borderWidth: 1,
      borderColor: 'gray',
      width: '40%',
      height: 40,
      marginTop: 15,
      paddingHorizontal: 10,
      marginHorizontal: 5,
      borderRadius: 30,
      backgroundColor: '#c7c7c7',
      paddingStart: 20,
    },
    textoentrada:{
      borderWidth: 1,
      borderColor: 'gray',
      width: '70%',
      height: 40,
      marginTop: 15,
      borderRadius: 30,
      backgroundColor: '#c7c7c7',
      paddingStart: 20,
    },
    logo:{
      width:150,
      height:50,
    },
    button:{
      marginTop: 20,
    width: '50%',
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
      color: 'red',
    },
})    
