import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development';
import { useRoute } from '@react-navigation/native';

export default function Discription({navigation}) {
  const route = useRoute();
  return (
   
    <View style={TapBaeStyle.main}>
      <View style={styles.Scrolen}>

        <ScrollView style={[styles.cardMain, styles.commun]} key={route.params.id}>
          <Text style={[styles.name, styles.commun]}>{ route.params.name }</Text>
          <Image style={[styles.image, styles.commun]} source={route.params.img} />

          <Text style={{
            fontSize: 17,
            paddingTop: 15,
            textAlign: 'center'
          }}>Auther</Text>
          <Text style={[styles.auther, styles.commun]}>{ route.params.auther}</Text>

          <Text style={{
            fontSize: 17,
            paddingTop: 15,
            textAlign: 'center'
          }}>Category</Text>
          <Text style={[styles.category, styles.commun]}>{ route.params.category}</Text>

          <Text style={{
            fontSize: 17,
            paddingTop: 15,
            textAlign: 'center'}}
            >Discription</Text>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 15,
              padding: 10,
              lineHeight: 20,
              color: 'gray'
            }}
          >{route.params.discription}</Text>
        </ScrollView>

      </View>

      <View style={TapBaeStyle.TapBar}>
        <TouchableOpacity style={TapBaeStyle.tapCpmpornent}  onPress={() => navigation.navigate('HomeScreen')}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/home.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={TapBaeStyle.tapCpmpornent} onPress={() => navigation.navigate('Search')}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/books.png')} />
        </TouchableOpacity>
        
        <TouchableOpacity style={TapBaeStyle.tapCpmpornent} onPress={() => navigation.navigate('Login')}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/user.png')} />
        </TouchableOpacity>

      </View>

    </View>
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
    elevation: 2,
    borderTopColor: '#eee',
    borderTopWidth: 1
  },
  tapCpmpornent:{
    padding: 15,
    
  },
  tapIcon:{
    width:28,
    height: 28,
  },
  
})
const styles = StyleSheet.create({
  Scrolen: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cardMain:{
    top: 20,
    // alignItems: 'center',
    width: '90%',
    padding: 10,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
  },
  commun:{

  },
  name:{
    fontSize: 35,
    margin: 10,
    color: '#FF6363',
    textAlign: 'center'
  },
  image:{
    width: 150,
    height: 220,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
    // backgroundColor: '#000',
    
  },
  auther:{
    fontSize: 20,
    paddingBottom: 12,
    paddingHorizontal: 30,
    color: '#0AA1DD',
    borderColor: '#eee',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    textAlign: 'center'
  },
  category:{
    fontSize: 20,
    margin: 5,
    color: '#0AA1DD',
    textAlign: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 12,
  }
})