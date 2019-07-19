import { Redirect } from 'react-router-dom';
import { loginUser } from '../../API/Login';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Login = () => {
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let elem;

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'email':
        setEmail(value.toLowerCase());
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const submitHandler = async event => {
    event.preventDefault();
    const payload = {
      email,
      password
    };
    const res = await loginUser(payload);
    setSuccess(res);
  };

  switch (success) {
    case null:
      elem = (
        <div className="card">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email"
                onChange={handleInputChange}
              />
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={handleInputChange}
              />
              <div className="col-md text-center">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </form>
        </div>
      );
      break;
    case true:
      elem = <Redirect to="/roster" />;
      break;
    default:
      elem = <p>Error with Login!</p>;
  }
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md">{elem}</div>
      </div>
    </div>
  );
};

export default Login;
