import React, { Component } from 'react';

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

import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
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
                <AddButton>
                  <CartCount>
                    <CartIcon />
                    <CartCountText>0</CartCountText>
                  </CartCount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </Product>
            </Wrapper>
          )}
        />
      </Container>
    );
  }
}
