import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { styles } from "./styles";

const Atv3 = ()=>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [textValido, setTextValido] = useState('');
  
    const Validar = () => {
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        // console.log(JSON.stringify({email:email, senha:senha, textValido:textValido, confirmar:confirmar}))

        if(!regexEmail.test(email)){setTextValido("Email inválido")}
        else if (senha == "" || confirmar == "") {
        setTextValido("Senha não pode ser vazia")
      }else if (senha == confirmar) {
        setTextValido("Senhas iguais")
      }else{
        setTextValido("Senhas não conferem")
      }}
  
       
      const handleSenha= (value:any)=>{
        setSenha(`${value}`)
      }
      const handleEmail= (value:any)=>{
        setEmail(value)
      }
      const handleConfirm= (value:any)=>{
        setConfirmar(`${value}`)
      }
      
      useEffect(()=>{
        Validar()
      },[senha,email, confirmar])
      
 return(
    <View style={styles.container}>
      <View style={styles.caixaInput}>
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite alguma coisa..."
          placeholderTextColor="#ccc"
          onChangeText={handleEmail}
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Digite alguma coisa..."
          placeholderTextColor="#ccc"
          onChangeText={handleSenha}
        />
 <Text>Confirmar Senha</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Digite alguma coisa..."
          placeholderTextColor="#ccc"
          onChangeText={handleConfirm}
        />
      </View>

      <View style={styles.mensagemValidacao}>
<Text>{textValido} </Text>

      </View>

    </View>

 )   
}

export default Atv3;



  