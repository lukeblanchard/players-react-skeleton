import axios from 'axios';
import { apiURL, apiRegister } from '../constants';

export const registerUser = payload => {
  console.log('test');
  const url = `${apiURL}${apiRegister}`;
  const response = axios.post(url, payload);
  return response.data;
};
