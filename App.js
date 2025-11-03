
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StartPage from './pages/login/Startpage';
import OtpPage from './pages/login/otpPage';
import OtpVerify from './pages/login/otpVerify';

import UsersPage from './pages/login/usersPage';
import PatientPage from './pages/users/patient/patientlogin/patient';
import Doctor from './pages/users/doctor/doctor';
import Admin from './pages/users/admin/admin';
import PatientSignIn from './pages/users/patient/patientlogin/patientSignin';
import PatientSignUp from './pages/users/patient/patientlogin/patientSignup';
import DoctorSignIn from './pages/users/doctor/doctorSignin';
import DoctorSignUp from './pages/users/doctor/doctorSignup';;
import AdminLogin from './pages/users/admin/adminLogin';
import Appts from './pages/users/patient/patientpages/Appts';
import Insigths from './pages/users/patient/patientpages/Insigths';
import Network from './pages/users/patient/patientpages/Network';
import PatientRecords from './pages/users/patient/patientpages/PatientRecords';
import PatientHome from './pages/users/patient/patientpages/PatientHome';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PatientTabs(){
  return(
    <Tab.Navigator initialRouteName="Home" 
             screenOptions={({route})=>({ headerShown: false, 
              
                tabBarIcon:()=>{
                  let iconName=''
                  if(route.name=='Home'){
                    iconName = 'home'
                  }
                  if(route.name=='Records'){
                    iconName = 'file-document-outline'
                  }
                  if(route.name =='Appts'){
                    iconName = 'calendar-outline'
                  }  
                  if(route.name =='Network'){
                    iconName = 'account-network-outline'
                  } 
                  if(route.name =='Insigths'){
                    iconName = "chart-bar"
                  }          
                return < MaterialCommunityIcons name = {iconName} size={20} color={'#ffffff'}/>
                },
                
                tabBarStyle: {
                backgroundColor: '#202125',
                },
                
              })}>

                <Tab.Screen name="Home" component={PatientHome} screenOptions={{}}/>
                <Tab.Screen name="Records" component={PatientRecords} screenOptions={{}}/>
                <Tab.Screen name="Appts" component={Appts} />
                <Tab.Screen name="Network" component={Network} />
                <Tab.Screen name="Insigths" component={Insigths} />
             </Tab.Navigator>
  )
}

export default function App() {
  return (
    
    <NavigationContainer>
     
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Otp" component={OtpPage} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
         <Stack.Screen name="users" component={UsersPage} />
         <Stack.Screen name="PatientPage" component={PatientPage} />
         <Stack.Screen name="Doctor" component={Doctor} />
         <Stack.Screen name="Admin" component={Admin} />
         <Stack.Screen name="PatientSignIn" component={PatientSignIn} />
         <Stack.Screen name="PatientSignUp" component={PatientSignUp} />
         <Stack.Screen name="DoctorSignIn" component={DoctorSignIn} />
         <Stack.Screen name="DoctorSignUp" component={DoctorSignUp} />
         <Stack.Screen name="AdminLogin" component={AdminLogin} />
         <Stack.Screen name="Patient" component={PatientTabs} />
        </Stack.Navigator>

    </NavigationContainer>
    
  )
}


