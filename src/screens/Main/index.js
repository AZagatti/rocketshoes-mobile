import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

import {
  Container,
  Wrapper,
  Product,
  ProductInfo,
  ProductImage,
  ProductName,
  ProductPrice,
  AddButton,
  CartCount,
  CartCountText,
  CartIcon,
  AddButtonText,
  List,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;

      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        setProducts(data);
      } catch (err) {
        showMessage({
          message: 'Não foi possível carregar os produtos',
          type: 'danger',
        });
      }
    }

    loadProducts();
  }, []);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  return (
    <Container>
      {products.length ? (
        <List
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Wrapper>
              <Product>
                <ProductImage
                  source={{
                    uri: item.image,
                  }}
                />
                <ProductInfo>
                  <ProductName>{item.title}</ProductName>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
                </ProductInfo>
                <AddButton onPress={() => handleAddProduct(item.id)}>
                  <CartCount>
                    <CartIcon />
                    <CartCountText>{amount[item.id] || 0}</CartCountText>
                  </CartCount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </Product>
            </Wrapper>
          )}
        />
      ) : (
        <AddButtonText>Nenhum produto encontrado</AddButtonText>
      )}
    </Container>
  );
}

export default Main;
