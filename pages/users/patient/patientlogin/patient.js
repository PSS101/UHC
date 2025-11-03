import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function PatientPage({navigation}){
    return(
        <SafeAreaView >
        <View styles={styles.container}>
            <Text
            style={{margin:20,fontWeight:'bold',fontSize:25}}>Welcome Patient</Text>
            <Text style={{margin:10,color:'#898888'}}>Are you new to UnifiedCare or an existing user?</Text>

            <Pressable onPress={()=>navigation.navigate('PatientSignUp')}>
            <View style={styles.card}> 
                <AntDesign name="user-add" size={30} color="#4f46e5" backgroundColor={'#e9e8fc'} borderRadius={10} padding={15}/>
                <View style={{marginLeft:10,flexShrink: 1}}>
                    <Text style={{margin:5,fontWeight:'bold',fontSize:15}}>New Patient</Text>
                    <Text style={{color:'#898888'}}>Create your profile to get started</Text>
                </View>
            </View>
            </Pressable>
            
            <Pressable  onPress={()=>navigation.navigate('PatientSignIn')}>
             <View style={styles.card}>
                <AntDesign  name="login" size={26} color="#10b981" backgroundColor={'#e1f6ef'} borderRadius={10} padding={15}/>
                <View style={{marginLeft:10,flexShrink: 1,}}>
                    <Text style={{margin:5,fontWeight:'bold',fontSize:15}}>Existing Patient</Text>
                    <Text style={{color:'#898888'}}>Continue to your dashboard</Text>
                </View>
            </View>
            </Pressable>
            <Text style={{margin:10,color:'#898888'}}>First time using UnifiedCare? Select "New Doctor" to create your professional profile.</Text>
           
        </View>
        </SafeAreaView>
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
  }
});