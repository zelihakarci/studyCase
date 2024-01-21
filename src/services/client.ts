import axios from 'axios';
import {Alert} from 'react-native';

let client = axios.create({
  baseURL: 'https://api.extrazone.com/',
  headers: {'X-Country-Id': 'TR', 'X-Language-Id': 'TR'},
});

client.interceptors.response.use(
  res => {
    //API SUCCESS
    return res;
  },
  err => {
    //API ERROR
    if (err?.response?.data?.message) {
      Alert.alert('Error', err?.response?.data?.message);
    }
    return Promise.reject(err);
  },
);

export {client};
