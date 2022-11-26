import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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

const LoginScreen = ({ navigation }) => {
  const [user,setUser] = useState(null);
  const [pass,setpass] = useState(null);
  logIn = () => {
      user == 'admin' && pass == 'admin' && navigation.navigate('Drawer');
  }

  recoveryPassword = () => {
      navigation.navigate('RecoveryPassword');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Icon name="clock-time-five-outline" size={100} color="red"/>
        </View>
        <TextInput value={user} onChangeText={(text)=>setUser(text)} variant="outlined" label="Correo" keyboardType={'email-address'} style={{ margin: 16 }} />
        <TextInput value={pass} onChangeText={(text)=>setpass(text)} variant="outlined" label="Contrasena" secureTextEntry={true} style={{ margin: 16 }} />
        <Button style={styles.button} title={'Ingresar'} onPress={logIn}/>
        <View style={styles.containerSubTitle}>
          <Text variant={'subtitle1'} style={styles.subTitle} color={'#2980b9'} onPress={recoveryPassword}> Olvide mi contrasena</Text>
        </View>
        <View style={[styles.containerSubTitle,{margin: 0, marginHorizontal: 20}]}>
          <Text style={styles.slogan}> Si eres nuevo solicita el acceso a tu empresa</Text>
        </View>
    </View>
    </ScrollView>
  )
}

export default LoginScreen