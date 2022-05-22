import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation()
  // Functions

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  // Check emai and password empty and validation
  const pressLogin = ()=> {
    if(password.length == 0 && email.length == 0){
      Alert.alert(
        "Warning..",
        "Plese Enter Email and Passowrd",
      );
    }
    else if(email.length == 0){
      Alert.alert(
        "Warning..",
        "Plese Enter Email",
      );
    }
    else if(password.length == 0){
      Alert.alert(
        "Warning..",
        "Plese Enter Password",
      );
    }

    else if(password == "ushan123" && email == "ushan@ousl.lk"){
      console.log('Loging success');
      navigation.navigate('HomeScreen');
    }
    else{
      Alert.alert(
        "Warning..",
        "Email or password is wrong. Try again...!",
      );
    }
    
  };

  const goSignUp = () =>{
    navigation.navigate('SignUp');
  };


  return (

    <ImageBackground style={styles.main} blurRadius={4} source={require('./icon/Background.jpg')} resizeMode="cover">
      <View style={styles.loginDiv}>

        <Text style={styles.tital} >Log In</Text>

        <View>
          <Text style={styles.Label}>Email</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            type="email"
            onChangeText={(emailVal) => setEmail(emailVal)}
          /> 

          <Text style={styles.Label}>Password</Text>
          <TextInput
            style={[styles.TextInput, styles.TextInputLast]}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(passwordVal) => setPassword(passwordVal)}
            /> 
            <Text style={styles.forgotPass}>Forgot Password?</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={pressLogin}
        >
          <Text style={styles.btnColor}>LOG IN</Text>
        </TouchableOpacity>

        <View style={styles.signUpLink}>
          <Text style={{color: 'gray', fontSize: 12}}>Don't have Account? </Text>
          <Text style={{color: 'green', fontSize: 12}} onPress={goSignUp} >Create New Account</Text>
        </View>

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center'
  },
  loginDiv:{
    width: 320,
    height: 'auto',
    backgroundColor: 'rgba(255,255,255, 1)',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    borderRadius: 8,
  },
  tital:{
    fontFamily: 'sans-serif-light',
    fontSize: 30,
    top: -30,
    paddingTop: 30,
    fontWeight: 'bold',
  },
  Label:{
    fontSize: 17,
    paddingBottom: 7,
    fontWeight: 'bold'

  },
  TextInput:{
    height: 50,
    width: 250,
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: 'red',
    padding: 10,
    marginBottom: 30,
  },
  TextInputLast:{
    marginBottom: 0
  },
  forgotPass:{
    textAlign: 'right',
    color : 'rgb(125,139,243)',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 20
  },
  btn:{
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FF0079FF",
    width: 250,
    alignItems: 'center',
  },
  btnColor:{
    color: '#fff',
    fontWeight: '400',
    fontSize: 16
  },
  signUpLink:{
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30
  },
  
})