import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { apiURL, apiRegister } from '../constants';
import axios from 'axios';

export const registerUser = async (payload) => {
  const url = `${apiURL}${apiRegister}`;
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
