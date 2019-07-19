import React from 'react';
import axios from 'axios';
import { registerUser } from '../../API/Register';

const Register = () => {
  const submitHandler = async () => {
    const payload = {
      first_name: 'Testing',
      last_name: 'Tester',
      email: '123@gmail.com',
      password: 'myPass',
      confirm_password: 'myPass'
    };
    const apiURL = 'https://players-api.developer.alchemy.codes/api/user';
    const response = await axios.post(url, payload);
    //registerUser({});
    console.log(response);
  };

  return (
    <div>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input type="text" />
        <input type="button" onClick={submitHandler}/>
    </div>
  );
};

export default Register;
