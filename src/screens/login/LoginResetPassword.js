import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from '@react-native-material/core';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexGrow: 1,
    },
    containerIcon: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      margin: 20,
      fontWeight: 'bold',
    },
    button: {
        marginHorizontal: 16,
    },
    containerSubTitle:{
      margin: 20,
    },
    subTitle: {
      textAlign: 'center'
    },
    slogan: {
      textAlign: 'justify'
    }
  });


const LoginResetPassword = () => {
    const [contrasena, setContrasena] = useState('');
    const [repeatContrasena, setRepeatContrasena] = useState('');

    contrasenaIsValid = ()=> {
        if(contrasena == repeatContrasena){
            console.log('contrasena ok');

        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Icon name="clock-time-five-outline" size={100} color="red"/>
        </View>
        <TextInput value={contrasena} onChangeText={(text)=>setContrasena(text)} variant="outlined" label="Contrasena" secureTextEntry={true} style={{ margin: 16 }} />
        <TextInput value={repeatContrasena} onChangeText={(text)=>setRepeatContrasena(text)}  variant="outlined" label="Repite contrasena" secureTextEntry={true} style={{ margin: 16 }} />
        <Button style={styles.button} title={'Ingresar'} onPress={contrasenaIsValid}/>
        <View style={[styles.containerSubTitle,{margin: 20}]}>
          <Text style={styles.slogan}> Tienes 5 min desde que enviaste la solicitud de cambio </Text>
        </View>
    </View>
  )
}

export default LoginResetPassword