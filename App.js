import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/home/HomeScreen';
import LoginScreen from './screen/login/Login';
import SignUpScreen from './screen/signUp/SignUpScreen'
import SignUp_Second from './screen/signUpSecond/SignUpSecondScreen'
import Discription from './screen/Another/Discription'
import Search from './screen/Another/Search'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: '#fff'
            }
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home'}}
            
          />
          <Stack.Screen name="Login" title="Login" component={LoginScreen}/>
          <Stack.Screen name="HomeScreen" title="Home" component={HomeScreen} />
          <Stack.Screen name="SignUp" title="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUp_Second" title="SignUp" component={SignUp_Second} />
          <Stack.Screen name="Discription" title="Discription" component={Discription} />
          <Stack.Screen name="Search" title="Search" component={Search} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
