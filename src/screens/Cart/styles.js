import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

const { width, height } = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.dark};
`;

export const CartContainer = styled.View`
  border-radius: 5px;
  align-items: center;
  background-color: #fff;
  margin: ${height * 0.015}px;
  padding: ${height * 0.025}px;
`;

export const ProductContainer = styled.View`
  width: ${Platform.OS === 'android' && '100%'};
`;

export const Product = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: ${height * 0.1}px;
  width: ${Platform.OS === 'ios' ? width * 0.25 : width * 0.2}px;
`;

export const ProductInfo = styled.View`
  margin-left: ${width * 0.02}px;
  margin-right: ${width * 0.02}px;
  justify-content: center;
  width: ${width * 0.5}px;
`;

export const ProductName = styled.Text`
  font-size: ${width * 0.04}px;
`;

export const ProductPrice = styled.Text`
  margin-top: ${height * 0.01}px;
  font-size: ${width * 0.05}px;
  font-weight: bold;
`;

export const DeleteIcon = styled(Icon).attrs({
  name: 'delete-forever',
  color: colors.primary,
  size: Platform.OS === 'ios' ? height * 0.03 : height * 0.04,
})``;

export const ProductOptions = styled.View`
  border-radius: 4px;
  margin-top: ${height * 0.01}px;
  padding: ${height * 0.008}px;
  background-color: #eee;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubIcon = styled(Icon).attrs({
  name: 'remove-circle-outline',
  color: colors.primary,
  size: Platform.OS === 'ios' ? height * 0.03 : height * 0.04,
})``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  padding: ${Platform.OS === 'ios' ? width * 0.01 : width * 0.005}px
    ${Platform.OS === 'ios' ? width * 0.05 : width * 0.04}px;
  background-color: #fff;
  margin: 0 ${width * 0.006}px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddIcon = styled(Icon).attrs({
  name: 'add-circle-outline',
  color: colors.primary,
  size: Platform.OS === 'ios' ? height * 0.03 : height * 0.04,
})``;

export const ProductTotalPrice = styled.Text`
  font-size: ${width * 0.05}px;
  font-weight: bold;
`;

export const TotalText = styled.Text`
  margin-top: ${height * 0.04}px;
  font-size: ${width * 0.055}px;
  font-weight: bold;
  color: #999;
`;

export const TotalPrice = styled.Text`
  margin-top: ${height * 0.005}px;
  font-size: ${width * 0.08}px;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  margin-top: ${height * 0.03}px;
  background-color: ${colors.primary};
  width: 100%;
  padding: ${height * 0.015}px;
  border-radius: 4px;
  align-items: center;
`;

export const FinishButtonText = styled.Text`
  font-size: ${width * 0.042}px;
  font-weight: bold;
  color: #fff;
`;
