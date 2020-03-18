import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const { Navigator, Screen } = createStackNavigator();

export default function src() {
  return (
    <Navigator>
      <Screen name="Main" component={Main} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
