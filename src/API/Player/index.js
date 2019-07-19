import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { apiURL, apiPlayer } from '../constants';
import axios from 'axios';

export const createPlayer = async payload => {
  const url = `${apiURL}${apiPlayer}`;
  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
