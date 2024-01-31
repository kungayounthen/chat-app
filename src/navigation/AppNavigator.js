import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Splash'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Main from '../screens/Main'

const AppNavigator = () => {
    const Stack=createStackNavigator();
  return (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
   <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
   <Stack.Screen name='Signup' component={Signup}/>
   <Stack.Screen name='Login' component={Login}/>
   <Stack.Screen name='Main' component={Main}/>
   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator