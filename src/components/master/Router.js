import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash.screen';
import Home from '../screens/Home.screen';

const Stack = createStackNavigator();

function Router() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Router;