import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

function Cart() {
  const dispatch = useDispatch();

  const total = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
                <DeleteIcon
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                />
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

export default Cart;
