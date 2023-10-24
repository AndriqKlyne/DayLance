import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import UserProfile from './Screens/UserProfile';
import Messaging from './Screens/Messaging';
import MapAccess from './Screens/MapAccess';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="MapAccess" component={MapAccess} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    
                {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
