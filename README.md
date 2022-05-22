# Vivlio Mobile Application

## React Navigation Installation and setup (react-native-navigation)

```
npm install @react-navigation/native @react-navigation/native-stack
```

#### If you have an Expo managed project, install the dependencies with expo:
```
expo install react-native-screens react-native-safe-area-context
```

#### If you have a bare React Native project, install the dependencies with npm:
```
npm install react-native-screens react-native-safe-area-context
```

#### For iOS with bare React Native project, make sure you have Cocoapods installed. Then install the pods to complete the installation:
```
cd ios
pod install
cd ..
```

## Bottom Tabs Navigator Intall

### To use this navigator, ensure that you have @react-navigation/native and its dependencies (follow this guide), then install @react-navigation/bottom-tabs:

```
npm install @react-navigation/bottom-tabs
```

### API Definition

````
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
````

## Install Check Box
```
expo install expo-checkbox
```