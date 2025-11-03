import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput, ViewComponent} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
export default function Appts({navigation}){
  const [appointment, setAppointment] = useState([]);
    const add = async (key, item) => {
    try {
      await AsyncStorage.setItem(key, item);
    } catch (err) {
      console.log(err);
    }
  };
  const retrieve = async (key) => {
    try {
      let val = await AsyncStorage.getItem(key);
      return (val)
    } catch (err) {
      console.log(err);
    }
  };
    useEffect(()=>{
          const getData= async()=>{
              let site = "https://sisterlike-tactically-alease.ngrok-free.dev"
              await add('site',site)
              let num = await retrieve('number')
              let email = await retrieve('email')
              console.log(site)
               let res = await fetch(site+'/patient-appointments', {
                    
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  "email":email,
                  "phonenumber":num,
                }),
              });
              let data = res.json()
              setAppointment(data['appointment'])

              
          }
          getData()
  
  
       },[])
    return(
       <View>
        <View>
          {appointment?.map((a,index)=>(
            <View key={index} style={styles.card}>
              <Text>{a.doctor}</Text>
              <Text>{a.speciality}</Text>
              <View>
                <Ionicons name="calendar-outline" size={24} color="gray" />
                <Text>{a.date}</Text>
              </View>
              <View>
                <Ionicons name="time-outline" size={24} color="gray" />
                <Text>{a.time}</Text>
              </View>
              <View>
                <Ionicons name="location-outline" size={24} color="gray" />
                <Text>{a.location}</Text>
              </View>
              <View>
                <Pressable style={styles.button2}><Text style={styles.buttonText2} >ReSchedule</Text></Pressable>
                <Pressable style={styles.button}><Text style={styles.buttonText} >View details</Text></Pressable>
              </View>
            </View>
          ))}
        </View>
       </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    height:'100%',
    margin:10
  },
  card:{
    flex:'display',
    flexDirection:'row',
    width:'90%',
    height:100,
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
    width:'40%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  },
  button2:{
    backgroundColor:'#f0f6fc',
    color:'#f0f6fc',
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:0,
    width:'40%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
  buttonText:{
    color:'#538cc6',
    fontSize: 16,
  },
});