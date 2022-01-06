import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'




//Alernt options and design
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  type: types.SUCCESS,
  offset: '50px',
  transition: transitions.SCALE,
  enter: 'animated',
  enterDone: 'animated shake',
  exit: 'animated',
  exitActive: 'animated bounceInDown'

}

ReactDOM.render(
  
  <React.StrictMode>
   <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




