import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { apiURL, apiRoster } from '../constants';
import axios from 'axios';

export const getRoster = async () => {
  const url = `${apiURL}${apiRoster}`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
