import React, { useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
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
        margin: 20,
        fontWeight: 'bold',
    },
    button: {
        marginHorizontal: 10,
    },

});

const Logo = ({ navigation }) => {
    const [title,setTitle] = useState('Ingresar');

    goToLogin = () =>{
        navigation.navigate('Login');
    };

  return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Icon name="clock-time-five-outline" size={100} color="red"/>
            </View>
            <Text style={styles.title}>Here i am</Text>
            <Button style={styles.button} title={title} onPress={goToLogin}/>
        </View>
  )
}

export default Logo