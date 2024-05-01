import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import ProfilePage from './pages/ProfilePage';
import SchedulePage from './pages/SchedulePage';
import InformationPage from './pages/InformationPage';
//icons
import profileIcon from './assets/profile.png'; 
import calendarIcon from './assets/schedule.png';
import informationIcon from './assets/information.png';
import logoIcon from './assets/learnscool_logo.png';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          }} 
        />
        <Tab.Screen 
          name="Schedule" 
          component={SchedulePage} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={calendarIcon} 
                style={{ width: size, height: size, tintColor: color }}
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
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}