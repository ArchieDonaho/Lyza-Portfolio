import React from 'react';
import ReactDOM from 'react-dom'; // remove '/client' if using version older than 18.0.0
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// used with version 18.0.0+
// const root = ReactDOM.render(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
