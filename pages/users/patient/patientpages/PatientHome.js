import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
export default function PatientHome({navigation}){
  const [appointmentDate,setAppointmentDate] = useState(0)
  const [appointmentTime,setAppointmentTime] = useState(0)
  const [doctorName,setDoctorName] = useState('')
  const [branch,setBranch] = useState('')
    return(
      <SafeAreaView style={{height:'100%'}}>
   
        <View style={styles.container}>
          
          <View>
            <Text></Text>
            <Text>ABHA ID:</Text>
          </View>


          <View style={styles.card}>
            <Text>Summary</Text>
            <Text>Upcoming Appointments</Text>
            <Text>{appointmentDate} {appointmentTime}</Text>
            <Text>{doctorName}</Text>
            <Text>{branch}</Text>
            <Pressable style={styles.button}><Text style={styles.buttonText} onPress={() =>navigation.navigate('users')}>Book Appointment</Text></Pressable>
          <Text>Recent Diagnostics</Text>
          <Text>Active Medications</Text>
          </View>
        </View>
       

       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:10,
    height:'100%',
    width:'100%',
    marginTop:10
  },
  card:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    height:'60%',
    padding:10,
    margin:10,
    backgroundColor:'#ffffff',
    borderRadius:10,
  },
   button:{
    backgroundColor:'#2b6cb0',
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:0,
    width:'80%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:40
   

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
});