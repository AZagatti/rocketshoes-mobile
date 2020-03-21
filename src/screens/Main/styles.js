import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { darken } from 'polished';
import colors from '../../styles/colors';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: baseline;
`;

export const Product = styled.View`
  flex: ${Platform.OS === 'ios' ? 0.65 : 0.75};
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: ${width * 0.8}px;
  margin: ${height * 0.015}px;
  padding: ${height * 0.015}px;
`;

export const ProductImage = styled.Image`
  width: ${Platform.OS === 'ios' ? width * 0.75 : width * 0.6}px;
  height: ${height * 0.3}px;
`;

export const ProductInfo = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

export const ProductName = styled.Text`
  font-size: ${width * 0.055}px;
  color: #999;
`;

export const ProductPrice = styled.Text`
  margin-top: ${width * 0.025}px;
  font-size: ${width * 0.065}px;
  color: ${colors.dark};
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  margin-top: ${width * 0.045}px;
  border-radius: 4px;
  width: 100%;
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
`;

export const CartCount = styled.View`
  flex-direction: row;
  padding: ${height * 0.01}px;
  width: ${width * 0.2}px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${darken(0.03, colors.primary)};
`;

export const CartIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  color: '#FFF',
  size: height * 0.025,
})``;

export const CartCountText = styled.Text`
  color: #fff;
  margin-left: ${width * 0.01}px;

  font-size: ${width * 0.045}px;
  font-weight: bold;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-size: ${width * 0.045}px;
  font-weight: bold;
`;
