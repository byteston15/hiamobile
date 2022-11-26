import { Button } from '@react-native-material/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    message: {
        fontSize: 24,
    },
    button: {
        marginVertical: 20,
    }
});

const RegistrationDetails = () => {
  return (
        <View style={styles.container}>
        <View style={styles.containerIcon}>
            <Icon name="clock-time-five-outline" size={100} color="red"/>
            <Text style={styles.title}>Registro exitoso !</Text>
            <Text style={styles.message}>Hora : 00:00</Text>
            <Text style={styles.message}>Tipo : Salida</Text>
            <Button style={styles.button} title={'Volver al inicio'} onPress={markRegistry}/>
        </View>
    </View>
  )
}

export default RegistrationDetails