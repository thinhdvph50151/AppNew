import React from 'react';
import { View, Text } from 'react-native';
import ButtonTab from './src/screen/buttonTab';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
    <ButtonTab/>
    </NavigationContainer>
  );
};

export default App; 