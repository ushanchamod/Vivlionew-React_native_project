import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react/cjs/react.development';


export default function Discription({navigation}) {

  const[item, setSearch] = useState('');
  
  return (
    
    <ImageBackground resizeMode="cover" style={TapBaeStyle.main}>
      <ScrollView style={styles.Scrolen}>
        <View>
          <TextInput
              style={styles.TextInput}
              placeholder="Search"
              onChangeText={(emailVal) => setSearch(emailVal)}
          /> 
          {Book.map(Book=>{
            if(Book.name.toLowerCase().match(item.toLowerCase())){
              return(
                <View style={styles.mainBackground} key={Book.id}>
                  <TouchableOpacity style = {styles.card} 
                   onPress={()=> 
                     navigation.navigate(
                       'Discription',{
                         id: Book.id,
                         name: Book.name,
                         auther: Book.auther,
                         category: Book.category,
                         img: Book.img,
                         discription : Book.discription
                       }
                     )
                   }>
        
                  <Image source={Book.img} style={styles.cardImage} />
                  <Text style={styles.cardBookTitle}>{Book.name}</Text>
                </TouchableOpacity>
                </View>
              )
            }
            
                  })}
        </View>
      </ScrollView>

      <View style={TapBaeStyle.TapBar}>
        <TouchableOpacity style={TapBaeStyle.tapCpmpornent}  onPress={() => navigation.navigate('HomeScreen')}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/home.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={TapBaeStyle.tapCpmpornent}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/books.png')} />
        </TouchableOpacity>
        
        <TouchableOpacity style={TapBaeStyle.tapCpmpornent} onPress={() => navigation.navigate('Login')}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/user.png')} />
        </TouchableOpacity>
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
  mainBackground:{
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',    
  },
  card:{
    width: 117,
    height: 70,
    margin: 10,
    marginTop: 3,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 1.5,
    flex: 1,
    flexDirection: 'row',
  },
  cardImage:{
    width: 120,
    height: 60,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    marginStart: 5
  },
  cardBookTitle:{
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    fontWeight: '300',
    color: '#000',
    padding: 3,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20
  },
  TextInput:{
    padding: 10,
    textAlign: 'center',
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#eee',
    backgroundColor: '#fff',
    fontWeight: 'bold'
    
  }
 
})