import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'

export default function SignUpScreen({navigation}) {
  return (
    <ImageBackground style={styles.main} blurRadius={4} source={require('./image/background.jpg')} resizeMode="cover">
      <View style={styles.loginDiv}>

        <Text style={styles.tital} >Sign Up</Text>

        <View>
          <Text style={styles.Label}>First Name</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter First Name"
          /> 

          <Text style={styles.Label}>Last Name</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Last Name"
          /> 
          
          <Text style={styles.Label}>Email</Text>
          <View style={styles.otpSendbtn}>
            <TextInput
              style={[styles.TextInput, styles.otpInput]}
              placeholder="Enter Email"
            />
            <TouchableOpacity
               style={styles.otpBtn}
            >
              <Text style={styles.btnColor}>Send</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.Label, styles.otpPassing]}>OTP</Text>
          <TextInput
            style={[styles.TextInput, styles.TextInputLast]}
            placeholder="Enter OTP"
            /> 
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={()=> navigation.navigate("SignUp_Second")}
        >
          <Text style={styles.btnColor}>Next</Text>
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
    top: -30,
    paddingTop: 30,
    fontWeight: 'bold',
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
  otpSendbtn:{
    flexDirection: 'row',
    maxHeight: 48,
    width: 195
  },
  otpInput:{
    width: 190
  },
  TextInputLast:{
    marginBottom: 0
  },
  btn:{
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    margin: 20,
    marginTop: 30,
    backgroundColor: "#FF0079FF",
    width: 100,
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