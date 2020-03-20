import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes />
      <FlashMessage position="top" autoHide duration={3000} />
    </NavigationContainer>
  );
};

export default App;
