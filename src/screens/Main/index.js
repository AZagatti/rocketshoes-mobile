import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class Main extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  async componentDidMount() {
    try {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products: data });
    } catch (err) {
      showMessage({
        message: 'Não foi possível carregar os produtos',
        type: 'danger',
      });
    }
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
                  <AddButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
