import axios from 'axios';
import 'core-js/stable';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { apiURL, apiRoster } from '../constants';

const getRoster = async () => {
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

export { getRoster as default };
