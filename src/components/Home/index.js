import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.module.scss';

const Home = () => (
  <div>
    <header className="jumbotron jumbotron-fluid">
      <div className="container-fluid text-center">
        <h1 className="display-3">Manage Your Players</h1>
        <p className="lead pb-4">Take your gaming to the next level</p>
        <p>
          <a href="/login" className="btn btn-primary btn-lg" role="button">
            Login
          </a>
          <a href="/register" className="btn btn-primary btn-lg" role="button">
            Register
          </a>
        </p>
      </div>
    </header>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md">
          <p>
            <b>Our Mission</b> Amandil bragollach en' templa aa' menealle nauva
            calen ar' malta vanya sulie. Tel'Domeduathea Engwarerea mae govannen
            tolea' fuin. Ear'quessir Desiel Narie tincya en' russe tuulo'
            moriloomir. Creoso, mellonamin amin anta est kaim Melloneamin
            thangarim yassen templa. Nadorhuanrim quel marth manke naa nae lle
            llie lye tuulo' Melamin.
          </p>
        </div>
        <div className="col-md">
          <p>
            <b>Life is a Game</b> Amandil bragollach en' templa aa' menealle
            nauva calen ar' malta vanya sulie. Tel'Domeduathea Engwarerea mae
            govannen tolea' fuin. Ear'quessir Desiel Narie tincya en' russe
            tuulo' moriloomir. Creoso, mellonamin amin anta est kaim Melloneamin
            thangarim yassen templa. Nadorhuanrim quel marth manke naa nae lle
            llie lye tuulo' Melamin.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
