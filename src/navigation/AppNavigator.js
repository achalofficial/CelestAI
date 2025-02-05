import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';
import MapScreen from '../screens/MapScreen'; // Import MapScreen

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#6200EE' }, // Customize header globally
          headerTintColor: '#fff', // White color for header text
          headerTitleStyle: { fontWeight: 'bold' }, // Bold title globally
        }}
      >
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerShown: true,
          }}
        />

        {/* Image Screen */}
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{
            title: 'Image Analysis Screen',
            headerShown: true,
          }}
        />

        {/* Map Screen */}
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: 'Select Location on Map',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
