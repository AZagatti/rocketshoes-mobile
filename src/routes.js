import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';
import Cart from './screens/Cart';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function src() {
  return (
    <Navigator
      headerMode="screen"
      screenOptions={{
        header: props => <Header {...props} />,
      }}
    >
      <Screen name="Main" component={Main} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
