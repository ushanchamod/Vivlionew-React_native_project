import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Component
import HomeScreen from './screen/home/HomeScreen';
import LoginScreen from './screen/login/Login';
import SignUpScreen from './screen/signUp/SignUpScreen'
import SignUp_Second from './screen/signUpSecond/SignUpSecondScreen'
import Discription from './screen/Another/Discription'
import Search from './screen/Another/Search'

// Create Stack from createNativeStackNavigator
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
            options={{ title: 'Dashboard'}}
            
          />
          <Stack.Screen name="Login" title="Login" component={LoginScreen}/>
          <Stack.Screen name="HomeScreen" options={{ title: 'Dashboard'}} component={HomeScreen} />
          <Stack.Screen name="SignUp" options={{ title: 'Sign Up'}} component={SignUpScreen} />
          <Stack.Screen name="SignUp_Second" options={{ title: 'Sign Up'}} component={SignUp_Second} />
          <Stack.Screen name="Discription" title="Discription" component={Discription} />
          <Stack.Screen name="Search" title="Search" component={Search} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
