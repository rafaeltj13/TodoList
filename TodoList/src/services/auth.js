import { AsyncStorage } from 'react-native';

export const getToken = () =>
    AsyncStorage.getItem('signin') ? localStorage.getItem('signin').token : '';

export default getToken;