import { Redirect } from 'react-router-dom';
import { registerUser } from '../../API/Register';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Register = () => {
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  let elem;

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirm_password':
        setConfirmPassword(value);
        break;
    }
  };

  const submitHandler = async event => {
    event.preventDefault();
    const payload = {
      first_name,
      last_name,
      email,
      password,
      confirm_password
    };
    const res = await registerUser(payload);
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
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="first name"
                onChange={handleInputChange}
              />
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="last name"
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
              <label>Confirm password</label>
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="confirm password"
                onChange={handleInputChange}
              />
              <div className="col-md text-center">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Register"
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
      elem = <p>Error with Registration!</p>;
  }
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md">{elem}</div>
      </div>
    </div>
  );
};

export default Register;
