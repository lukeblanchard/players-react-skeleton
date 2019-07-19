import React, { useState } from 'react';
import axios from 'axios';
import { registerUser } from '../../API/Register';

const Register = () => {
  const [success, setSuccess] = useState(null);

  use

  const submitHandler = async () => {
    const payload = {
      first_name: 'Bilbo',
      last_name: 'Baggins',
      email: '10909@gmail.com',
      password: 'myPrecious',
      confirm_password: 'myPrecious'
    };
    const res = await registerUser(payload);
    await setSuccess(res);
    console.log(success);
  };

  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" />
      <input type="button" onClick={submitHandler} />
    </div>
  );
};

export default Register;
