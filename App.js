import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RecipeListScreen from './assets/screens/RecipeListScreen';
import RecipeDetailScreen from './assets/screens/RecipeDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './assets/screens/AboutScreen';
import ProfileScreen from './assets/screens/ProfileScreen';
import FavouriteScreen from './assets/screens/FavouriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#6200EE' },
      headerTintColor: 'white'
    }}>
    <Drawer.Screen
      name="Recipe List"
      component={RecipeListScreen}
      options={{
        title: 'Recipe List',
        drawerIcon:({color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }} />
      <Drawer.Screen
      name="About"
      component={AboutScreen}/>
      <Drawer.Screen
      name="Profile"
      component={ProfileScreen} />
      <Drawer.Screen
      name="Favourite"
      component={FavouriteScreen}/>
  </Drawer.Navigator>
}


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#6200EE' },
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen
            name="Drawer Navigator"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="RecipeDetailScreen"
            component={RecipeDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
