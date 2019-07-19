import { Redirect } from 'react-router-dom';
import { registerUser } from '../../API/Register';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { checkInput } from '../../utils';

const Register = () => {
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  let elem;

  const handleInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
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

  const submitHandler = async (event) => {
    event.preventDefault();
    const payload = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };
    if (!checkInput(payload)) {
      setErrorMsg('Please fill in all input fields');
    } else if (password != confirm_password) {
      setErrorMsg('Passwords do not match!');
    } else {
      const res = await registerUser(payload);
      setSuccess(res);
    }
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
                id="email"
                className="form-control"
                name="email"
                placeholder="email"
                onChange={handleInputChange}
              />
              <label>First Name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                name="first_name"
                placeholder="first name"
                onChange={handleInputChange}
              />
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                name="last_name"
                placeholder="last name"
                onChange={handleInputChange}
              />
              <label>Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={handleInputChange}
              />
              <label>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                name="confirm_password"
                placeholder="confirm password"
                onChange={handleInputChange}
              />
              <div className="col-md text-center">
                <input
                  id="register"
                  className="btn btn-secondary"
                  type="submit"
                  value="Register"
                />
                <p className="errorMessage">{errorMsg}</p>
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
