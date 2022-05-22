import { StyleSheet, Text, View, Button, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development';
import { useRoute } from '@react-navigation/native';

export default function Discription({navigation}) {
  const route = useRoute();
  return (
    

    <ImageBackground resizeMode="cover" style={TapBaeStyle.main}>
      <ScrollView style={TapBaeStyle.Scrolen}>

        <View>
          <Text>user</Text>
        </View>

      </ScrollView>

      <View style={TapBaeStyle.TapBar}>
        <View style={TapBaeStyle.tapCpmpornent}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/home.png')} />
        </View>

        <View style={TapBaeStyle.tapCpmpornent}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/books.png')} />
        </View>
        
        <View style={TapBaeStyle.tapCpmpornent}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/user.png')} />
        </View>
      </View>

    </ImageBackground>
  )
}

const TapBaeStyle = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#fff'
  },
  TapBar:{
    flexDirection: 'row',
    backgroundColor:'#fff',
    justifyContent: 'space-around',
    margin: 5,
    borderRadius: 10,
    elevation: 2
  },
  tapCpmpornent:{
    padding: 15,
    
  },
  tapIcon:{
    width:28,
    height: 28,
  }
})

const styles = StyleSheet.create({
  
})