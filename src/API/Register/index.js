import axios from 'axios';
import 'core-js/stable';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { apiURL, apiRegister } from '../constants';

const registerUser = async (payload) => {
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
    return error.response.data.success;
  }
};

export { registerUser as default };
