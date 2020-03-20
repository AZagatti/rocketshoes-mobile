import React from 'react';
import { connect } from 'react-redux';
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

function Header({ navigation, cartSize }) {
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
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
