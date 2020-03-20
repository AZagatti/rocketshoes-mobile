import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import {
  Container,
  SafeContainer,
  Logo,
  BasketContainer,
  BasketIcon,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  return (
    <SafeContainer>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <BasketIcon />
          <ItemCount>1</ItemCount>
        </BasketContainer>
      </Container>
    </SafeContainer>
  );
}

Header.defaultProps = {
  navigation: null,
};

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
