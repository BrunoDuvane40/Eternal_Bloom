import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IDPage from './screens/IDPage';
import JourneyStart from './screens/JourneyStart';
import ChooseTutor from './screens/ChooseTutor';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IDPage" screenOptions={{ headerMode: 'none' }}>
        <Stack.Screen name="IDPage" component={IDPage}/>
        <Stack.Screen name="JourneyStart" component={JourneyStart}/>
        <Stack.Screen name="ChooseTutor" component={ChooseTutor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}