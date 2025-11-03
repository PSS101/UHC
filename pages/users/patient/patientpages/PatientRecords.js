import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

export default function PatientRecords({navigation}){
    const [name,setName] = useState('')
    const [id,setId] = useState('')
    const [dob,setDob] = useState('')
      const [gender,setGender] = useState('')
      const [blood,setBlood] = useState('')
      const [prescription,setPrescription] = useState('')
      useEffect(()=>{
                const getData= async()=>{
                    let site = "https://sisterlike-tactically-alease.ngrok-free.dev"
                    await add('site',site)
                    let num = await retrieve('number')
                    let email = await retrieve('email')
                    console.log(site)
                     let res = await fetch(site+'/patient-info', {
                          
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
                    setBlood(data['blood'])
                    setGender(data['gender'])
                    setDob(data['dob'])
                    setId(data['id'])
                    setName(data['name'])
                    setPrescription(data['prescription'])
                }
                getData()
        
        
             },[])
    return(
       <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{fontWeight:'bold',fontSize:18,margin:5}}>Basic Information</Text>
          <View>
            <Text>name</Text>
            <Text>{name}</Text>
          </View>
          <View>
            <Text>ID</Text>
            <Text>{id}</Text>
          </View>
          <View>
            <Text>DOB</Text>
            <Text>{dob}</Text>
          </View>
          <View>
            <Text>Gender</Text>
            <Text>{gender}</Text>
          </View>
          <View>
            <Text>blood Group</Text>
            <Text>{blood}</Text>
          </View>  
        </View>

        <View>
          {prescription.map((p)=>(
                        <View>
                          <Text styles={styles.meds}>{p.Doctor}</Text>
                          <Text styles={styles.meds}>{p.time}</Text>
                          <View>
                            {p.meds.map((pm)=>(
                              <Text>{pm.name} {pm.dose}</Text>
                            ))}
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
    justifyContent: 'flex-start',
    padding:10,
    height:'100%',
    margin:20
  },
  card:{
    flex:'display',
    flexDirection:'column',
    width:'90%',
    height:'40%',
    padding:10,
    margin:10,
    backgroundColor:'#ffffff',
    borderRadius:10,
  }
});