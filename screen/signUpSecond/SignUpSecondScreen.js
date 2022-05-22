import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'



export default function SignUpSecond({navigation}) {
  return (

    <ImageBackground style={styles.main} blurRadius={4} source={require('./image/background.jpg')} resizeMode="cover">
      <View style={styles.loginDiv}>

        <Text style={styles.tital} >Sign Up</Text>

        <View>
          <Text style={styles.Label}>Gender</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Gender"
          /> 
          
          <Text style={styles.Label}>Address</Text>
            <TextInput
              style={[styles.TextInput, styles.otpInput]}
              placeholder="Enter Address"
          />

            <Text style={styles.Label}>Password</Text>
            <TextInput
            style={styles.TextInput}
            secureTextEntry={true}
            placeholder="Enter Password"
            /> 
            
            <Text style={styles.Label}>Re-Password</Text>
            <TextInput
            style={[styles.TextInput, styles.TextInputLast]}
            secureTextEntry={true}
            placeholder="Enter Password Again"
            />    
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={()=> navigation.navigate("Login")}
        >
          <Text style={styles.btnColor}>Sign Up</Text>
        </TouchableOpacity>
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
    top: -20,
    paddingTop: 20,
    fontWeight: '700',
  },
  Label:{
    fontSize: 17,
    paddingBottom: 7,
    fontWeight: 'bold'
  },
  otpBtn:{
    width: 55,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  TextInput:{
    height: 50,
    width: 250,
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: '#FF5D5D',
    padding: 10,
    marginBottom: 20,
  },
  TextInputLast:{
    marginBottom: 0
  },
  btn:{
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    margin: 30,
    marginTop: 30,
    backgroundColor: "#FF0079FF",
    width: 250,
    alignItems: 'center',
    
  },
  btnColor:{
    color: '#fff',
    fontWeight: '400',
    fontSize: 16
  },
  otpPassing:{
    marginTop: 20
  }
})