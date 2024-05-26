import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';


const Atv5 = () => {
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState('');
  const [logged, setLogged] = useState(false)

  const handleSendName = () => {
    setName(nameField);
    setNameField('');
  }

  const handleClear = () => {
    setName('');
  }

  const handleLogin = ()=>{
    setLogged(true)
  }
  const handleLogout=()=>{
    setLogged(false)
    setName("")
  }
  return (
    <View style={styles.container}>
    {name == '' &&!logged&&
    <View style={styles.layout1}>
        <Text style={styles.texto1}>Qual o seu nome?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setNameField(texto)}/>

        <Button
        title="Enviar"
        color='#FFA051'
        onPress={handleSendName}
        />
    </View>
      }


{name != '' && !logged&&
      <View style={styles.layout2}>
        <Text style={styles.texto2}>Olá {name}</Text>
        <Text style={styles.texto1}>Tudo bem?</Text>
        <Button
        title={`Não sou ${name}`}
        color='#FFA051'
        onPress={handleClear}
        />
         <Button
        title={`Sim, continuar como ${name}`}
        color='#FFA051'
        onPress={handleLogin}
        />
      </View>
      }

      {logged&&
      <React.Fragment>
        
        <View style={styles.personIcon}>

            <Ionicons name='person' size={50}></Ionicons>
            <Text>{name}</Text>
        </View>
      <View style={styles.layout2}>
     
      <Button
      title={`Logout`}
      color='#FFA051'
      onPress={handleLogout}
      />
      
    </View>
    </React.Fragment>
    }


    </View>
  );
};
export default Atv5;