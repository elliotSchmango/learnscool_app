import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Button } from 'react-native';
import ProfilePage from './pages/ProfilePage';
import SchedulePage from './pages/SchedulePage';
import InformationPage from './pages/InformationPage';
//icons
import profileIcon from './assets/profile.png'; 
import scheduleIcon from './assets/schedule.png';
import informationIcon from './assets/information.png';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerTitleAlign: 'center',
          headerRight: () => (
            <Image 
              source={logoIcon} 
              style={{ width: 50, height: 50, marginRight: 30 }} 
            />
          ),
        }}
      >
        <Tab.Screen 
          name="Profile" 
          component={ProfilePage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={profileIcon} 
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            headerLeft: () => (
              <Image 
                source={profileIcon} 
                style={{ width: 30, height: 30, marginLeft: 30 }} 
              />
            ),
          }} 
        />
        <Tab.Screen 
          name="Schedule" 
          component={SchedulePage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={scheduleIcon} 
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            headerLeft: () => (
              <Image 
                source={scheduleIcon} 
                style={{ width: 30, height: 30, marginLeft: 30 }} 
              />
            ),
          }} 
        />
        <Tab.Screen 
          name="Information" 
          component={InformationPage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={informationIcon} 
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            headerLeft: () => (
              <Image 
                source={informationIcon} 
                style={{ width: 30, height: 30, marginLeft: 30 }} 
              />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}