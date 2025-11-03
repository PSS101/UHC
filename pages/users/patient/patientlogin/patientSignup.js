import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,TextInput,ScrollView} from 'react-native';
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
  const verify = async()=>{
    await add('number',num)
    navigation.navigate('OtpVerify')
  }
    return(
        
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Full Name</Text>
                    <View style={styles.input}>
                        <Ionicons name="person-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Age</Text>
                    <View style={styles.input}>
                        <Ionicons name="person-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View style={styles.container2}>

                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}> Gender</Text>
                    <View style={styles.inputDropdown}>
                         <RNPickerSelect
                            onValueChange={(value) => setGender(value)}
                            placeholder={{ label: "Select Gender", value: null }}
                            items={[
                                { label: "Male", value: "male" },
                                { label: "Female", value: "female" },
                                { label: "Other", value: "other" },
                            ]}
                            value={gender}
                            />
                    </View>
                </View>

                <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Bloog Group</Text>
                    <View style={styles.inputDropdown}>
                        
                        <RNPickerSelect
                             onValueChange={(value) => setBloodGroup(value)}
                            placeholder={{ label: "Select Blood Group", value: null }}
                            items={[
                                { label: "A+", value: "A+" },
                                { label: "A−", value: "A−" },
                                { label: "B+", value: "B+" },
                                { label: "B−", value: "B−" },
                                { label: "O+", value: "O+" },
                                { label: "O−", value: "O−" },
                                { label: "AB+", value: "AB+" },
                                { label: "AB−", value: "AB−" },
                            ]}
                            value={bloodGroup}
                            />
                    </View>
                </View>

                <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Allergies</Text>
                    <View style={styles.input}>
                        <Ionicons name="information-circle-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Chronic Conditions (Optional)</Text>
                    <View style={styles.input}>
                        <Ionicons name="heart-outline" size={24} color="#555" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                <View style={styles.container2}>
                    <Text style={{marginLeft:30,color:'#898888',marginRight:'auto'}}>Emergency Contact</Text>
                    <View style={styles.input}>
                        <Ionicons name="call-outline" size={24} color="#b7bcc5" />
                        <TextInput style={{width:'80%'}} placeholder='Enter your phone number'></TextInput>
                    </View>
                </View>

                 <Pressable style={styles.button}><Text style={styles.buttonText} onPress={verify} >Verify</Text></Pressable>
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
    margin:10,
    marginTop:40
    
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
    margin:5,
    marginBottom:0
  },
  inputDropdown:{
    borderRadius:15,
    borderWidth:1,
    borderColor:'#b7bcc5',
    width:'80%', 
   
    marginBottom:0
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
    marginTop:60
   

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
});