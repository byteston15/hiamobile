import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import Logo from '../screens/login/Logo';
import LoginRecoveryPassword from '../screens/login/LoginRecoveryPassword';
import LoginResetPassword from '../screens/login/LoginResetPassword';
import DrawerNavigation from './DrawerNavigation';
import RegistrationDetails from '../screens/home/RegistrationDetails';

const Stack = createNativeStackNavigator();

const options = {headerShown: false}

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Logo" component={Logo} options={options}/>
          <Stack.Screen name="Login" component={LoginScreen} options={options}/>
          <Stack.Screen name="RecoveryPassword" component={LoginRecoveryPassword} options={options}/>
          <Stack.Screen name="ResetPassword" component={LoginResetPassword} options={options}/>
          <Stack.Screen name="Drawer" component={DrawerNavigation} options={options}/>
          <Stack.Screen name="RegistrationDetails" component={RegistrationDetails} 
            options={{headerTitle: 'Here I am',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold'}}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation