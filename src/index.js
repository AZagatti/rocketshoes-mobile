import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { darken } from 'polished';

import colors from './styles/colors';
import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={darken(0.04, colors.dark)}
        />
        <Routes />
        <FlashMessage />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
