import React, { useState } from 'react';
import { View, Text  ,StyleSheet,Image} from 'react-native';
import { TextInput,Button  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';


const Registro = () => {

  const handlePress = () => {
    console.log('Botón presionado');
  };
  const [text, setText] = React.useState("");
  const [password,setpassword]= React.useState("");

  const [selectedFACULTAD, setSelectedValueFACULTAD] = useState(null);
  const [selectedCARRERA, setSelectedValueCARRERA] = useState(null);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>   
                   <View  style={styles.container}>
                        <TextInput   style={styles.inputs}  label="Cedula"   value={text}  onChangeText={text => setText(text)} />

                        <TextInput   style={styles.inputs}  label="Nombre"   value={text}  onChangeText={text => setText(text)} />

                        <TextInput   style={styles.inputs}  label="Usuario"   value={text}  onChangeText={text => setText(text)} />

                        <TextInput  style={styles.inputs}  label="Correo"   value={password}  onChangeText={password => setpassword(password)} />  

                        <TextInput  style={styles.inputs}  label="Password"   value={password}  onChangeText={password => setpassword(password)} />  
                        <View>
                            
                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValueFACULTAD(value)}
                            items={[
                            { label: 'JavaScript', value: 'javascript' },
                            { label: 'Python', value: 'python' },
                            { label: 'Java', value: 'java' },
                            ]}
                            placeholder={{ label: 'FACULTAD', value: null }}
                            style={{
                                inputIOS: {
                                  borderWidth: 1,
                                  borderColor: 'gray',
                                  borderRadius: 4,
                                  padding: 10,
                                  width: 200,
                                  margin:10
                                  
                                },
                                inputAndroid: {
                                  borderWidth: 1,
                                  borderColor: 'gray',
                                  borderRadius: 4,
                                  padding: 10,
                                  width: 200,
                                  margin:10
                                },
                              }}
                        />

                        <RNPickerSelect
                            onValueChange={(value) => setSelectedValueCARRERA(value)}
                            items={[
                            { label: 'JavaScript', value: 'javascript' },
                            { label: 'Python', value: 'python' },
                            { label: 'Java', value: 'java' },
                            ]}
                            placeholder={{ label: 'CARRERA', value: null }}
                            style={{
                                inputIOS: {
                                  borderWidth: 1,
                                  borderColor: 'gray',
                                  borderRadius: 4,
                                  padding: 10,
                                  width: 200,
                                  margin:10
                                },
                                inputAndroid: {
                                  borderWidth: 1,
                                  borderColor: 'gray',
                                  borderRadius: 4,
                                  padding: 10,
                                  width: 200,
                                  margin:10
                                },
                              }}
                        />
                    <Button style={styles.botones} icon="login" mode="contained" onPress={() => console.log('Pressed')}>  Hacer registro</Button>

                        </View>
                        
                    </View>
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
    },
    SELECTS:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        width: 200,
    }
  
  });

export default Registro;