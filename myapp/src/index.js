import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functonal from './componentss/Fucntional';
import UnionBank from './componentss/UnionBank';
import StatesinClassComponent from './componentss/StatesinClassComponent';
import StatesinFunctionalComponent from './componentss/StatesinFunctionalComponent';

ReactDOM.render

(
  <React.StrictMode>
    {/* <App />
    <Functonal /> */}
    {/* <UnionBank/> */}
    <StatesinClassComponent/>
    {/* <StatesinFunctionalComponent/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
