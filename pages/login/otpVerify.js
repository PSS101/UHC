import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { useState,useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DiReact } from 'react-icons/di';
import { OtpInput } from 'react-native-otp-entry';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OtpVerify({navigation}){
    const [num,setNum] = useState(0)
    const [otp,setOtp] = useState(0)
    const [email,setEmail] = useState('')
    const [site,setSite] = useState('https://sisterlike-tactically-alease.ngrok-free.dev')
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
    
  const verifyOtp = async()=>{
    console.log(otp)
    console.log(num)
    
    try{
      let res = await fetch('https://sisterlike-tactically-alease.ngrok-free.dev/verify-otp', {
        
      
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "phonenumber":num,
    "email":email,
    "otp":otp,
  }),
});
let data = res.json()
let success = data["success"]
//if(success){
navigation.navigate('Patient')
//}
    }
    catch(err){
      console.log(err)
    }
    
    
     console.log("verify")
    
   
  }
     useEffect(()=>{
        const fetchdata = async()=>{
            let x = await retrieve('number')
            let y = await retrieve('email')
            console.log(x)
            setNum(x)
            setEmail(y)
        }
        fetchdata()


     },[])
    return(
        <View style={styles.container}>
            <Text>Enter OTP</Text>
            <Text>We've sent a 6-digit code to {num}</Text>
            <Text>or {email}</Text>
            <OtpInput
            numberOfDigits={6}
            focusColor="#2b6cb0"
            focusStickBlinkingDuration={500}
            onTextChange={(x) => setOtp(x)}
            theme={{
            containerStyle: { marginVertical: 20 },
            pinCodeContainerStyle: {
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#d0d5dd',
                width: 45,
                height: 60,
            },
            pinCodeTextStyle: { fontSize: 20 },
            margin:10
        }} />
           <Pressable><Text style={styles.link1}>Resend OTP in </Text></Pressable>
        <Pressable style={styles.button}><Text style={styles.buttonText} onPress={verifyOtp}>Verify & Continue</Text></Pressable>
     
        </View>
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    height:'80%'
  },
  container2: {
    flex: 2,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    height:'80%',
    width:'100%',
    marginTop:100,
   
  },
  container3: {
    flex: 2,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
   marginBottom:0,
    width:'100%'
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
    marginTop:100
   

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
  link1:{
    color:'#2b6cb7',
    margin:5
  },
});