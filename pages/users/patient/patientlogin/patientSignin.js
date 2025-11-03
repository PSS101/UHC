import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
export default function PatientSignIn({navigation}){
  const [num,setNum] = useState(0)
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
  const fetchSite = async()=>{
    if(site.length==0){
    let x = await retrieve('site')
    //console.log(x)
    setSite(x)
    }
    //console.log(site)
  }

   const otpGenerate = async()=>{
    
    fetchSite()
    let payload=''
    if(num.includes('@') ){
      await add('email',num)
    console.log(await retrieve('email'))
      payload=JSON.stringify({
    "email":num
  })
    }
    else{
      await add('number',num)
    console.log(await retrieve('number'))
      payload=JSON.stringify({
    "phonenumber":num
  })
    }
navigation.navigate('OtpVerify')
    await fetch(site+'/send-otp', {
      
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: payload,
});
    
  }
    return(
       
        <View style={styles.container}>
          
          <View style={styles.container2}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:40}}>SignIn</Text>
                    <Text style={{marginLeft:'auto',color:'#000000ff',marginRight:'auto'}}>Contact no or phone no</Text>
                    <View style={styles.input}>
                        <Ionicons name="call-outline" size={24} color="#b7bcc5" />
                        <TextInput style={{width:'80%'}} value={num} onChangeText={(x)=>setNum(x)} placeholder='Enter your phone number'></TextInput>
                    </View>
          </View>
          
          <Pressable style={styles.button}><Text style={styles.buttonText} onPress={otpGenerate}>Continue</Text></Pressable>
        </View>
       
    )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    padding:10,
    height:'100%',
    margin:10,
    marginTop:2,
  },
   container2: {
    flex:1,
   
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    padding:5,
    width:'100%',
 
  },
  card:{
    flex:'display',
    flexDirection:'row',
    width:'90%',
    height:90,
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
    
    marginBottom:100
   

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
  input:{
    flex:'display',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    borderWidth:1,
    borderColor:'#b7bcc5',
    width:'80%',
    height:40,
    margin:20
  },
});