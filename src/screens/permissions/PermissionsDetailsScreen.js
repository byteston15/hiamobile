import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button, TextInput } from '@react-native-material/core';
import DateTimePicker from '../../components/DateTimePicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const PermissionsDetailsScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const [initDate, setInitDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [openInitDate, setOpenInitDate] = useState(false);
    const [openEndDate, setOpenEndDate] = useState(false);
  const data = [
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
  ]

  const listaDePermisos = [
    {
      id: 1,
      fecha: '20/6/2022',
      estado: 'Vacaciones',
      tipo: 'Vacación'
    },
    {
      id: 2,
      fecha: '20/6/2022',
      estado: 'Vacaciones',
      tipo: 'Vacación'
    }
  ]

  useEffect(()=>console.log(endDate))


  createPermission = () => {
    console.log('save');
  }

  deletePermission = () =>{

    //delete and navigate
    //navigation.navigate('ListPermissions', {listaDePermisos});
  }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.containerIcon}>
          <Icon name="clock-time-five-outline" size={100} color="red"/>
          <Text>{'Permiso' + id}</Text>
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
          <Button style={styles.button} title={'Fecha de inicio'} onPress={()=>setOpenInitDate(!openInitDate)}/>
          <Text>Inicio: {initDate.getDate()+"/"+(initDate.getMonth()+1)+"/"+initDate.getFullYear()}</Text>
          <Button style={styles.button} title={'Fecha de término'} onPress={()=>setOpenEndDate(!openEndDate)}/>
          <Text>Término: {endDate.getDate()+"/"+(endDate.getMonth()+1)+"/"+endDate.getFullYear()}</Text>
          <DateTimePicker 
            date={initDate} 
            setDate={(date)=>setInitDate(date)} 
            open={openInitDate}
            setOpen={()=>setOpenInitDate(false)}
            />
          <DateTimePicker 
            date={endDate} 
            setDate={(date)=>setEndDate(date)} 
            open={openEndDate}
            setOpen={()=>setOpenEndDate(false)}
            />
          <TextInput
            multiline={true} 
            variant="outlined" 
            label="Comentarios" 
            style={styles.textArea} 
            maxLength={200}
          />
          <Button style={styles.button} title={'Guardar cambios'} onPress={createPermission}/>
          <Button style={styles.button} title={'Eliminar permiso'} onPress={deletePermission}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default PermissionsDetailsScreen