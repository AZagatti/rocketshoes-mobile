import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .connect();

  tron.clear();

  // eslint-disable-next-line no-console
  console.tron = tron;
}
