/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from './assets/screens/RecipeListScreen';
import RecipeDetailScreen from './assets/screens/RecipeDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#6200EE'},
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen 
            name="Recipe List" 
            component={RecipeListScreen} 
            options={{
              title:  'Recipe List',
            }}/> 
            <Stack.Screen 
            name="RecipeDetailScreen" 
            component={RecipeDetailScreen} 
            options={{
              title:  'Recipe Details',
            }}/>
         </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
