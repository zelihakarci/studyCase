import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Detail} from '../features';
import {BottomTab} from './bottom-tab';
import {RootStackParamList} from './types';

export const MainNavigator: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#FFF'},
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
