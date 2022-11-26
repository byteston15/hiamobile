import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';
import HelpScreen from '../screens/help/HelpScreen';
import ConfigurationScreen from '../screens/configuration/ConfigurationScreen';
import PermissionsScreen from '../screens/permissions/PermissionsScreen';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#a4b0be'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 8,
    color: '#2f3542',
  }
})

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={"Home"} component={HomeScreen}
        options={{
          // header: ()=><Header/>
          headerTitle: 'Here I am',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold'}
          
        }} />
      <Drawer.Screen name={"Permissions"} component={PermissionsScreen}/>
      <Drawer.Screen name={"Configuration"} component={ConfigurationScreen}/>
      <Drawer.Screen name={"Help"} component={HelpScreen}/>
    </Drawer.Navigator>
  )
}

//Por si quieres un header costumizable por cada screen :)
const Header = ({}) =>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here I am</Text>
    </View>
  )
}

export default DrawerNavigation