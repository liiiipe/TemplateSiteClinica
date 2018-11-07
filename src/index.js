import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCstCQI4sJ63GoKb1wV5gUyaNmJ0QVZdHI",
    authDomain: "clinica-81249.firebaseapp.com",
    databaseURL: "https://clinica-81249.firebaseio.com",
    projectId: "clinica-81249",
    storageBucket: "clinica-81249.appspot.com",
    messagingSenderId: "310205421896"
  };
  firebase.initializeApp(config);

  

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
