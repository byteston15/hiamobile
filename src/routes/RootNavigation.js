import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import Logo from '../screens/login/Logo';
import LoginRecoveryPassword from '../screens/login/LoginRecoveryPassword';
import LoginResetPassword from '../screens/login/LoginResetPassword';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Logo" component={Logo} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="RecoveryPassword" component={LoginRecoveryPassword} options={{headerShown: false}}/>
            <Stack.Screen name="ResetPassword" component={LoginResetPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation