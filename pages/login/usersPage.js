import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons ,FontAwesome5} from '@expo/vector-icons';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function UsersPage({navigation}){
    return(
        <SafeAreaView >
        <View styles={styles.container}>
            <Text
            style={{margin:20,fontWeight:'bold',fontSize:25}}>Select your role</Text>
            <Text style={{margin:10,color:'#898888'}}>Choose how you want to use UnifiedCare</Text>

            <Pressable onPress={()=>navigation.navigate('Patient')}>
            <View style={styles.card}> 
                <Ionicons name="person-outline" size={30} color="#1976D2" backgroundColor={'#e4edf5'} borderRadius={10} padding={15}/>
                <View style={{marginLeft:10,flexShrink: 1}}>
                    <Text style={{margin:5,fontWeight:'bold',fontSize:15}}>Patient</Text>
                    <Text style={{color:'#898888'}}>Access your health records and book appointments</Text>
                </View>
            </View>
            </Pressable>
            
            <Pressable  onPress={()=>navigation.navigate('Doctor')}>
             <View style={styles.card}>
                <FontAwesome5 name="stethoscope" size={26} color="#5E35B1" backgroundColor={'#e9e8fc'} borderRadius={10} padding={15}/>
                <View style={{marginLeft:10,flexShrink: 1,}}>
                    <Text style={{margin:5,fontWeight:'bold',fontSize:15}}>Doctor</Text>
                    <Text style={{color:'#898888'}}>Manage patients and access medical records</Text>
                </View>
            </View>
            </Pressable>
            
            <Pressable onPress={()=>navigation.navigate('Admin')}>
             <View style={styles.card}>
                 <Ionicons name="settings-outline" size={26} color="#616161" backgroundColor={'#ecedef'} borderRadius={10} padding={15} />
                <View style={{marginLeft:10,flexShrink: 1}}>
                    <Text style={{margin:5,fontWeight:'bold',fontSize:15}}>Admin</Text>
                    <Text style={{color:'#898888'}}>System administration and management</Text>
                </View>
            </View>
            </Pressable>
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