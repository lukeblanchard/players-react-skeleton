/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { createPlayer } from '../../API/Player';
// eslint-disable-next-line no-unused-vars
import styles from './styles.module.scss';
import { checkInput } from '../../utils';

const NewPlayer = ({ history }) => {
  const [success, setSuccess] = useState(null);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [rating, setRating] = useState('');
  const [handedness, setHandedness] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  let elem;

  useEffect(() => {
    const successURL = '/roster';
    if (success) {
      history.push(successURL);
    }
  });

  const handleInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    switch (name) {
      case 'handedness':
        setHandedness(value.toLowerCase());
        break;
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      default:
        setRating(value);
        break;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const payload = {
      first_name,
      last_name,
      rating,
      handedness,
    };
    checkInput(payload);
    if (!checkInput(payload)) {
      setErrorMsg('Please fill in all input fields');
    } else {
      const res = await createPlayer(payload);
      setSuccess(res);
    }
  };

  switch (success) {
    case null:
      elem = (
        <div className="card">
          <form onSubmit={submitHandler}>
            <div className="form-group">
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
              <label>Handedness</label>
              <select
                className="form-control form-control-sm"
                id="handedness"
                name="handedness"
                selected="left"
                onChange={handleInputChange}
              >
                <option />
                <option>Left</option>
                <option>Right</option>
              </select>
              <label>Rating</label>
              <input
                type="text"
                className="form-control"
                id="rating"
                name="rating"
                placeholder="rating"
                onChange={handleInputChange}
              />
              <div className="col-md text-center">
                <input
                  id="create"
                  className="btn btn-secondary"
                  type="submit"
                  value="Create"
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

NewPlayer.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(NewPlayer);
