import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '../../styles/colors';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
`;

export const Product = styled.View`
  border-radius: 8px;
  align-items: center;
  background-color: #fff;
  height: ${height * 0.5}px;
  width: ${width * 0.8}px;
  margin: ${height * 0.03}px;
  padding: ${height * 0.03}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width * 0.7}px;
  height: ${height * 0.4}px;
`;

export const ProductInfo = styled.View``;

export const ProductName = styled.Text`
  font-size: 14px;
  color: #ccc;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: ${colors.dark};
  font-weight: bold;
`;
