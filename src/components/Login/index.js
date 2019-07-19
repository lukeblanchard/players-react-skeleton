/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import loginUser from '../../API/Login';
import { checkInput } from '../../utils';

const Login = () => {
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  let elem;

  const handleInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    if (name === 'email') {
      setEmail(value.toLowerCase());
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    if (!checkInput(payload)) {
      setErrorMsg('Please fill in all fields');
    } else {
      const res = await loginUser(payload);
      setSuccess(res);
    }
  };

  switch (success) {
    case null:
      elem = (
        <div className="card">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="email"
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={handleInputChange}
              />
              <div className="col-md text-center">
                <input
                  className="btn btn-secondary"
                  id="login"
                  type="submit"
                  value="Login"
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
