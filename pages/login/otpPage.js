import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
export default function OtpPage({navigation}){
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
    await add('number',num)
    console.log(await retrieve('number'))
    fetchSite()
    fetch(site+'/send-otp', {
      
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "phonenumber":num
  }),
});
    navigation.navigate('OtpVerify')
  }
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome Back</Text>
             <Text style={{color:'#b7bcc5',margin:10 }}>Sign in to access your health records</Text>
             <Text style={{color:'#b7bcc5'}}>Phone Number</Text>
             
             <View style={styles.input}>
              <Ionicons name="call-outline" size={24} color="#b7bcc5" />
              <TextInput style={{width:'80%'}} value={num} onChangeText={setNum} placeholder='Enter your phone number'></TextInput>
             </View>
             
             <View style={styles.container3}>
              <Pressable ><Text style={styles.link1}>Use ABHA Number</Text></Pressable>
              
               <Pressable><Text style={styles.link1}>Sign in as Doctor</Text></Pressable>
             </View>
             
             <Pressable style={styles.link}><Text style={styles.link2}>Don't have your details yet? → Enter Patient Info</Text></Pressable>
             
             <View style={styles.container4}>
                <Ionicons name="shield-outline" marginLeft={15} size={20} color="#2b6cb0" />
                <Text style={{color:'#2b6cb0',fontSize:12,marginLeft:10}}>Your data is encrypted and secure. We follow ABDM security standards.</Text>
             </View>

             <View style={styles.container2}>
              <Pressable style={styles.button}><Text style={styles.buttonText} onPress={otpGenerate}>Continue</Text></Pressable>
            </View>      
                  
        </View>
    )
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     flex:'display',
    flexDirection:'column',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    height:'80%',
    marginTop:'auto'
  },
  container2: {
    flex: 2,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    width:'100%',
    marginTop:'auto'
  },
   container3:{
    flex:'display',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    height:40,
    padding:5
  },
  container4:{
    flex:'display',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    height:50,
    backgroundColor:'#eff6ff',
    padding:10
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
  button:{
    backgroundColor:'#2b6cb0',
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:0,
    width:'80%',
    height:40,
    alignItems: 'center',
    justifyContent: 'center'

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
  link1:{
    color:'#2b6cb7',
    margin:5
  },
  link2:{
    color:'#6a65eb',
    fontSize:12,
  },
  link:{
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },
  heading:{
    fontSize:25,
    fontWeight:'bold'
  }
});