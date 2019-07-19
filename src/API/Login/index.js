import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { apiURL, apiLogin } from '../constants';
import axios from 'axios';

export const loginUser = async (payload) => {
  const url = `${apiURL}${apiLogin}`;
  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('token', response.data.token);
    return response.data.success;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data.success;
  }
};
