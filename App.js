import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IDPage from './screens/IDPage';
import JourneyStart from './screens/JourneyStart';
import ChooseTutor from './screens/ChooseTutor';

import CurricularUnit from './screens/CurricularUnit';
import ReviewSlide1 from './screens/ReviewSlide1';
import ReviewSlide2 from './screens/ReviewSlide2';
import ReviewSlide3 from './screens/ReviewSlide3';
import ReviewSlide4 from './screens/ReviewSlide4';
import LastTestReview from './screens/LastTestReview';
import GlobalFeedback from './screens/GlobalFeedback';
import RecommendedTeachers from './screens/RecommendedTeachers';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IDPage" screenOptions={{ headerMode: 'none' }}>
        <Stack.Screen name="IDPage" component={IDPage}/>
        <Stack.Screen name="JourneyStart" component={JourneyStart}/>
        <Stack.Screen name="ChooseTutor" component={ChooseTutor} />
        <Stack.Screen name="CurricularUnit" component={CurricularUnit}/>
        <Stack.Screen name="ReviewSlide1" component={ReviewSlide1}/>
        <Stack.Screen name="ReviewSlide2" component={ReviewSlide2}/>
        <Stack.Screen name="ReviewSlide3" component={ReviewSlide3}/>
        <Stack.Screen name="ReviewSlide4" component={ReviewSlide4}/>
        <Stack.Screen name="LastTestReview" component={LastTestReview}/>
        <Stack.Screen name="GlobalFeedback" component={GlobalFeedback}/>
        <Stack.Screen name="RecommendedTeachers" component={RecommendedTeachers}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}