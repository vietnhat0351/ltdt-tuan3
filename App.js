import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState('Male')
  return (
    <View style={styles.container}>
      <Image source={require('./assets/eyeball.png')} style={{marginTop: 50}}/>

    <View style={styles.viewInPut}>
      <Image source={require('./assets/avatar_user_2.png')}/>
      <TextInput placeholder='Please input user name' style={{marginLeft: 10}}/>
    </View>

    <View style={styles.viewInPut}>
      <Image source={require('./assets/lock_2.png')}/>
      <TextInput placeholder='Please input password' style={{marginLeft: 10}}/>
    </View>

    <Pressable style={styles.btn}>
      <Text style={{color: '#ffffff'}}>LOGIN</Text>
    </Pressable>

    <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 50}}>
      <Text style={{flex: 1, fontSize: 20}}>
        Register
      </Text>
      <Text style={{fontSize: 20}}>
        Forgot Password
      </Text>
    </View>

    <View style={{width: '100%'}}>
      <View style={{borderBottomWidth: 2, borderBottomColor: '#0E18F5'}}></View>
      <View style={{position: 'absolute', top: -13, zIndex: 1, backgroundColor: '#ffffff',marginLeft: 90, paddingLeft: 5, paddingRight: 5}}>
        <Text style={{fontSize: 17}}>
          Other Login Methods
        </Text>
      </View>
    </View>

    <View style={{marginTop: 50, flexDirection: 'row'}}>
      <Image source={require('./assets/group_8.png')}/>
      <Image source={require('./assets/group_9.png')}/>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  view1: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#00ffff'
    flexDirection: 'column',
    padding: 20,
    width: '100%',
  },
  viewInPut: {
    backgroundColor: '#F2F2F2', 
    width: '100%', 
    marginTop: 30, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    padding: 5,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#386FFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    borderRadius: 10,
  },
  btn1: {
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
  },

  txtInput: {
    width: '73%',
    height: 50,
    fontSize: 25,
    marginLeft: 10,
    // borderWidth: 1,
    // borderColor: 'ffffff',
  },
});
