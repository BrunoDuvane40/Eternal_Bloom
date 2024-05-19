import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IDPage from './screens/IDPage';
import JourneyStart from './screens/JourneyStart';
import ReportPage from './screens/ReportPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IDPage" screenOptions={{ headerMode: 'none' }}>
        <Stack.Screen name="IDPage" component={IDPage}/>
        <Stack.Screen name="JourneyStart" component={JourneyStart}/>
        <Stack.Screen name="ReportPage" component={ReportPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}