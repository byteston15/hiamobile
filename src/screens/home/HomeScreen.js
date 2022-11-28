import { Button, Snackbar } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SelectList } from 'react-native-dropdown-select-list';
import BiometricAuthenticator from 'react-native-biometric-id';

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
    button: {
        marginVertical: 20,
    },
    boxSelect: {
       width: 300,
    },
    dropdown: {
    },
    dropdownItem: {
    },
    inputSelect: {
        width: '80%'
    },
    snackBar: {

    },
    messageSnackBar: {
        position: "absolute", 
        start: 16, 
        end: 16, 
        bottom: 16,
        backgroundColor: '#f6b93b',
        color: '#ffffff',
    }
});

const HomeScreen = ({ navigation }) => {
    const messageSnackBar = "Recuerda activar tu ubicaciøn!";
    const [selected, setSelected] = useState("");
    const [publicKey, setPublicKey] = useState("");

    markRegistry = async() =>{    
        const optionalConfigObject = {
            unifiedErrors: false, // use unified error messages (default false)
            passcodeFallback: false,// if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
            }
        
        BiometricAuthenticator.authenticate('to demo this react-native component', optionalConfigObject)
        .then(success => {
            if(success){
                //si pone su huella
                navigation.navigate('RegistrationDetails');
                //console.log('registrado')
            }else{
                //sino
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    const data = [
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

  return (
    <View style={styles.container}>
        <View style={styles.containerIcon}>
            <Icon name="clock-time-five-outline" size={100} color="red"/>
            <Text style={styles.title}>Tipo de registro</Text>
            <SelectList 
                boxStyles={styles.boxSelect}
                dropdownStyles={styles.dropdown}
                dropdownItemStyles={styles.dropdownItem}
                inputStyles={styles.inputSelect}
                setSelected={(val) => setSelected(val)} 
                data={data} 
                placeholder={'xd'}
                save="value"/>
            <Button style={styles.button} title={'Marcar registro'} onPress={markRegistry}/>
        </View>
        <Snackbar
            message={messageSnackBar}
            style={styles.messageSnackBar}/>
    </View>
  )
}

export default HomeScreen