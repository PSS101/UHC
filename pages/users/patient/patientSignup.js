import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DiReact } from 'react-icons/di';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Ionicons ,FontAwesome5} from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";
export default function PatientSignUp({navigation}){
    const [gender, setGender] = useState(null);
  const [bloodGroup, setBloodGroup] = useState(null);
    return(
        <SafeAreaView>
            <View>
                <View>
                    <View style={styles.input}>
                        <Ionicons name="person-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.input}>
                        <Ionicons name="person-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.input}>
                         <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                            />
                    </View>
                </View>

                <View>
                    <View style={styles.input}>
                        <Ionicons name="call-outline" size={24} color="#b7bcc5" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.input}>
                        <Ionicons name="information-circle-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.input}>
                        <Ionicons name="heart-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.input}>
                        <Ionicons name="call-outline" size={24} color="#b7bcc5" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
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