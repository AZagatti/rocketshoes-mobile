import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Routes />
        <FlashMessage position="top" autoHide duration={2000} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
