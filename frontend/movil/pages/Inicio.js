import * as React from 'react';
import { View, Text  ,StyleSheet,Image} from 'react-native';
import { TextInput,Button  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const Inicio = () => {
  const [text, setText] = React.useState("");
  const [password,setpassword]= React.useState("");
  const navigation = useNavigation();

  const handleRegisterLinkPress = () => {
    navigation.navigate('registro');
  };

  const handleRegisterLinkPress2 = () => {
    navigation.navigate('menu');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>   
                   <Text style={styles.titulo}>SISTEMA DE GESTION DE PROYECTOS DE GRADO </Text>
                   <Image style={styles.image}   source={require('../assets/logo.png')}   />
            </View>


            <View  style={styles.container}>
            <TextInput   style={styles.inputs}  label="Usuario"   value={text}  onChangeText={text => setText(text)} />

            <TextInput  style={styles.inputs}  label="Password"   value={password}  onChangeText={password => setpassword(password)} />  
              <Text style={styles.linkregistro} onPress={handleRegisterLinkPress}    >Aun no tienes cuenta?, creala aqui    </Text>

              <Button style={styles.botones} icon="login" mode="contained" onPress={handleRegisterLinkPress2}>  Entrar</Button>
            </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign:'center'
  },
  titulo :{
    fontSize:20
  },
  linkregistro:{
    
  },
  image: {
    width: 300,
    height: 300,
  },
  inputs:{
    width:300,
    margin:20
  },

  botones:{
    marginTop:10
  }

});

export default Inicio;


