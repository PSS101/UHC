import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { json } from 'body-parser';

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
    await add('number',num)
    console.log(await retrieve('number'))
    fetchSite()
    let payload=''
    if(num.contains('@') ){
      payload=JSON.stringify({
    "email":num
  })
    }
    else{
      payload=JSON.stringify({
    "phonenumber":num
  })
    }
    fetch(site+'/send-otp', {
      
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: payload,
});
    navigation.navigate('OtpVerify')
  }
    return(
       <View>
        <View style={styles.container}>

          <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Contact no or phone no</Text>
                    <View style={styles.input}>
                        <Ionicons name="call-outline" size={24} color="#b7bcc5" />
                        <TextInput style={{width:'80%'}} value={num} onChangeText={(x)=>setNum(x)} placeholder='Enter your phone number'></TextInput>
                    </View>
          </View>
          
          <Pressable style={styles.button}><Text style={styles.buttonText} onPress={otpGenerate}>Continue</Text></Pressable>
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
   container2: {
    flex:1,
    flex:'display',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    
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
    
    marginTop:400
   

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
});