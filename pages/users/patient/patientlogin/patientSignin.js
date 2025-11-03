import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function PatientSignIn({navigation}){
    return(
       <View>
        <View style={styles.container}>
          
          <Pressable style={styles.button}><Text style={styles.buttonText} onPress={() =>navigation.navigate('Patient')}>Continue</Text></Pressable>
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