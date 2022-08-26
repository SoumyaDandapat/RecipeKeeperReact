import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RecipeListScreen from './assets/screens/RecipeListScreen';
import RecipeDetailScreen from './assets/screens/RecipeDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#6200EE'},
            headerTintColor: 'white'
          }}
        >
          <Drawer.Screen 
            name="Recipe List" 
            component={RecipeListScreen} 
            options={{
              title:  'Recipe List',
            }}/> 
            <Drawer.Screen 
            name="RecipeDetailScreen" 
            component={RecipeDetailScreen} 
            />
         </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
