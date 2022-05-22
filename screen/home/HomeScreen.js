import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import Book from '../books/books'
import Catogory from '../books/Catogory';


export default function HomeScreen({navigation}) {

  return (
    // <ImageBackground source={require('./Background.jpg')} resizeMode="cover" style={TapBaeStyle.main}>
    <ImageBackground resizeMode="cover" style={TapBaeStyle.main}>
      <ScrollView style={TapBaeStyle.Scrolen}>

        <Image source={require('../books/Banner.jpg')} style={styles.banner} />

        {Catogory.map(Catogory=>{
          return(
            <View style={styles.cardBackground} key={Book.id}>
            <Text style={styles.categoryTopics}>{Catogory.category}</Text>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <View style={styles.cardSet}>

                  {Book.map(Book=>{
                    if(Book.category == Catogory.category){
                      return(
                        <TouchableOpacity style = {styles.card} key={Book.id} 
                          onPress={()=> 
                            navigation.navigate(
                              'Discription',{
                                id: Book.id,
                                name: Book.name,
                                auther: Book.auther,
                                category: Book.category,
                                img: Book.img
                              }
                            )
                          }>
        
                          <Image source={Book.img} style={styles.cardImage} />
                          <Text style={styles.cardBookTitle}>{Book.name}</Text>
                        </TouchableOpacity>
                      )
                    }
                  })}
                </View>
              </ScrollView>

            </View>
          )
        })}

      </ScrollView>

      <View style={TapBaeStyle.TapBar}>
        <TouchableOpacity style={TapBaeStyle.tapCpmpornent}>
          <Image style={TapBaeStyle.tapIcon} source={require('../tap-Icon/home.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={TapBaeStyle.tapCpmpornent} onPress={() => navigation.navigate('Search')}>
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
  banner:{
    width: '95%',
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  cardBackground:{
    // backgroundColor: 'rgba(255,255,255, 0.9)',
    marginVertical: 5,
    borderRadius: 10,
    paddingBottom: 10
  },
  categoryTopics:{
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: 10,
    paddingVertical: 5,
    // color: '#F900BF'
    color: '#000'
  },
  
  cardSet:{
    flexDirection: 'row',
    width: 'auto'
  },
  card:{
    width: 117,
    height: 'auto',
    margin: 10,
    marginTop: 3,
    marginHorizontal: 7,
    // borderColor: '#000',
    // borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4
  },
  cardImage:{
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#000',
  },
  cardBookTitle:{
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    fontWeight: '400',
    color: '#000',
    padding: 3,
    textAlign: 'center',
    alignSelf: 'center',
  }
})