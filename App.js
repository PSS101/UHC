
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './pages/login/Startpage';
import OtpPage from './pages/login/otpPage';
import OtpVerify from './pages/login/otpVerify';
import UsersPage from './pages/login/usersPage';
import Patient from './pages/users/patient/patient';
import Doctor from './pages/users/doctor/doctor';
import Admin from './pages/users/admin/admin';
import PatientSignIn from './pages/users/patient/patientSignin';
import PatientSignUp from './pages/users/patient/patientSignup';
import DoctorSignIn from './pages/users/doctor/doctorSignin';
import DoctorSignUp from './pages/users/doctor/doctorSignup';;
import AdminLogin from './pages/users/admin/adminLogin';
const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
     
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Otp" component={OtpPage} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
         <Stack.Screen name="users" component={UsersPage} />
         <Stack.Screen name="Patient" component={Patient} />
         <Stack.Screen name="Doctor" component={Doctor} />
         <Stack.Screen name="Admin" component={Admin} />
         <Stack.Screen name="PatientSignIn" component={PatientSignIn} />
         <Stack.Screen name="PatientSignUp" component={PatientSignUp} />
         <Stack.Screen name="DoctorSignIn" component={DoctorSignIn} />
         <Stack.Screen name="DoctorSignUp" component={DoctorSignUp} />
         <Stack.Screen name="AdminLogin" component={AdminLogin} />
        </Stack.Navigator>

    </NavigationContainer>
    
  )
}


