
import { Image,Pressable, StyleSheet, Text, View } from 'react-native';
export default function StartPage({navigation}){
    return(
<View style={styles.container}>
    <View style={styles.container2}>
      <Image style={styles.image}
        source={'C:\Users\PSS\UHC\pages\assets\logo.png'}
      />
      <Text style={{margin:10}}>Smart, Secure.</Text>
      <Text >Connected Healthcare</Text>
   </View >
   <View style={styles.container3}>
      <Pressable style={styles.button}><Text style={styles.buttonText} onPress={() =>navigation.navigate('Otp')}>Continue</Text></Pressable>
       <Text>Secure access-end-to-end encrypted</Text>
    </View>
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
    marginBottom:40
   

  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
  image:{
    height:80,
    width:'80%'
  }
});