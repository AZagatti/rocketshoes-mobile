import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darken } from 'polished';

import colors from '../../styles/colors';
import logo from '../../assets/images/logo.png';

const { height, width } = Dimensions.get('window');

export const SafeContainer = styled.SafeAreaView`
  background: ${darken(0.04, colors.dark)};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: ${width * 0.5}px;
  height: ${Platform.OS === 'ios' ? height * 0.03 : height * 0.04}px;
`;

export const BasketContainer = styled.TouchableOpacity`
  flex: 1;
  width: ${height * 0.03}px;
  height: ${Platform.OS === 'ios' ? height * 0.03 : height * 0.04}px;
  align-items: flex-end;
  justify-content: center;
`;

export const BasketIcon = styled(Icon).attrs({
  name: 'shopping-basket',
  color: '#FFF',
  size: Platform.OS === 'ios' ? height * 0.03 : height * 0.04,
})``;

export const ItemCount = styled.Text`
  position: absolute;
  top: ${-(height * 0.01)}px;
  right: ${-(height * 0.01)}px;
  background-color: ${colors.primary};
  color: #fff;
  text-align: center;
  min-width: 18px;
  min-height: 18px;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
