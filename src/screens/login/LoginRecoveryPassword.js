import { Text, Button, TextInput } from '@react-native-material/core';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        margin: 17,
        fontWeight: 'bold',
    },
    button: {
        marginHorizontal: 16,
    },
});

const LoginRecoveryPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const resetPassword = () => {
        console.log(email);
        navigation.navigate('ResetPassword');
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerIcon}>
            <Icon name="clock-time-five-outline" size={100} color="red"/>
        </View>
        <Text style={styles.title}>Here i am</Text>
        <TextInput value={email} onChangeText={(text)=>setEmail(text)} variant="outlined" label="Correo" keyboardType={'email-address'} style={{ margin: 16 }} />
        <Button style={styles.button} title={'Enviar codigo'} onPress={resetPassword}/>
    </View>
  )
}

export default LoginRecoveryPassword