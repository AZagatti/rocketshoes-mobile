import React from 'react';

import {
  Container,
  Product,
  ProductInfo,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Product>
        <ProductImage
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
        />
        <ProductInfo>
          <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
          <ProductPrice>R$ 179,90</ProductPrice>
        </ProductInfo>
      </Product>
    </Container>
  );
}
