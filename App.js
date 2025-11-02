
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './pages/login/Startpage';
import OtpPage from './pages/login/otpPage';
import OtpVerify from './pages/login/otpVerify';
import UsersPage from './pages/login/usersPage';
const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
     
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Otp" component={OtpPage} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
         <Stack.Screen name="users" component={UsersPage} />
        </Stack.Navigator>

    </NavigationContainer>
    
  )
}


