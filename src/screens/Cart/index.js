import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  CartContainer,
  ProductContainer,
  Product,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  DeleteIcon,
  ProductOptions,
  Amount,
  SubIcon,
  ProductAmount,
  AddIcon,
  ProductTotalPrice,
  TotalText,
  TotalPrice,
  FinishButton,
  FinishButtonText,
} from './styles';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartContainer>
        {cart.length ? (
          cart.map(product => (
            <ProductContainer key={String(product.id)}>
              <Product>
                <ProductImage
                  source={{
                    uri: product.image,
                  }}
                />
                <ProductInfo>
                  <ProductName>{product.title}</ProductName>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductInfo>
                <DeleteIcon onPress={() => removeFromCart(product.id)} />
              </Product>
              <ProductOptions>
                <Amount>
                  <SubIcon onPress={() => decrement(product)} />
                  <ProductAmount value={String(product.amount)} />
                  <AddIcon onPress={() => increment(product)} />
                </Amount>
                <ProductTotalPrice>{product.subtotal}</ProductTotalPrice>
              </ProductOptions>
            </ProductContainer>
          ))
        ) : (
          <TotalPrice>Carrinho vazio</TotalPrice>
        )}

        <TotalText>TOTAL</TotalText>
        <TotalPrice>{total}</TotalPrice>

        <FinishButton>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </CartContainer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
