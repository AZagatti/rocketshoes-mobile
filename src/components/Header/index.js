import React from 'react';
import { useSelector } from 'react-redux';
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

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <SafeContainer>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <BasketIcon />
          <ItemCount>{cartSize}</ItemCount>
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

export default Header;
