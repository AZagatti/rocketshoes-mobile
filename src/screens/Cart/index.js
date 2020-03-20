import React from 'react';

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

export default function Cart() {
  return (
    <Container>
      <CartContainer>
        <ProductContainer>
          <Product>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductInfo>
              <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
              <ProductPrice>R$179,90</ProductPrice>
            </ProductInfo>
            <DeleteIcon />
          </Product>
          <ProductOptions>
            <Amount>
              <SubIcon />
              <ProductAmount>3</ProductAmount>
              <AddIcon />
            </Amount>
            <ProductTotalPrice>R$539,70</ProductTotalPrice>
          </ProductOptions>
        </ProductContainer>
        <TotalText>TOTAL</TotalText>
        <TotalPrice>R$ 1619,10</TotalPrice>

        <FinishButton>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </CartContainer>
    </Container>
  );
}
