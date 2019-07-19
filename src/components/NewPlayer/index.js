import { withRouter } from 'react-router-dom';
import { createPlayer } from '../../API/Player';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const NewPlayer = ({ history }) => {
  const [success, setSuccess] = useState(null);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [rating, setRating] = useState('');
  const [handedness, setHandedness] = useState('');

  let elem;

  useEffect(() => {
    let successURL = '/roster';
    if (success) {
      history.push(successURL);
    }
  });

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    switch (name) {
      case 'handedness':
        setHandedness(value);
        break;
      case 'first_name':
        setFirstName(value);
        break;
      case 'last_name':
        setLastName(value);
        break;
      case 'rating':
        setRating(value);
        break;
    }
  };

  const submitHandler = async event => {
    event.preventDefault();
    const payload = {
      first_name,
      last_name,
      rating,
      handedness
    };
    const res = await createPlayer(payload);
    setSuccess(res);
  };

  switch (success) {
    case null:
      elem = (
        <div className="card">
          <form onSubmit={submitHandler}>
            <div className="form-group">
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
              <label>Handedness</label>
              <select
                className="form-control form-control-sm"
                name="handedness"
                selected="left"
                onChange={handleInputChange}
              >
                <option />
                <option>left</option>
                <option>right</option>
              </select>
              <label>Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                placeholder="rating"
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

export default withRouter(NewPlayer);
