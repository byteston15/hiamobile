import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button, TextInput } from '@react-native-material/core';
import DateTimePicker from '../../components/DateTimePicker';

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
  textArea: { 
    margin: 16, 
    width: 300,
    borderColor: 'black',
  },
  button: {
    marginVertical: 20,
  },

});

const PermissionsScreen = () => {
  const data = [
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
  ]


  getPermissions = () =>{

  }


  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name="clock-time-five-outline" size={100} color="red"/>
        <Text style={styles.title}>Solicitar permiso</Text>
        <View style={{margin: 12}}>
        <SelectList 
                boxStyles={styles.boxSelect}
                dropdownStyles={styles.dropdown}
                dropdownItemStyles={styles.dropdownItem}
                inputStyles={styles.inputSelect}
                setSelected={(val) => setSelected(val)} 
                data={data} 
                placeholder={'Tipo'}
                save="value"/>
        </View>
        <DateTimePicker/>
        <TextInput
          multiline={true} 
          variant="outlined" 
          label="Comentarios" 
          style={styles.textArea} 
          maxLength={200}
        />
        <Button style={styles.button} title={'Solicitar permiso'} onPress={getPermissions}/>
      </View>
    </View>
  )
}

export default PermissionsScreen