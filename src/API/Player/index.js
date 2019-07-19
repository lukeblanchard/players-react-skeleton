import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { apiURL, apiPlayer } from '../constants';

export const createPlayer = async (payload) => {
  const url = `${apiURL}${apiPlayer}`;
  try {
    const response = await axios.post(url, payload, {
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

export const deletePlayer = async (id) => {
  const url = `${apiURL}${apiPlayer}/${id}`;
  try {
    const response = await axios.delete(url, {
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
