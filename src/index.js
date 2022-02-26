import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route} from "react-router";
// import {Home} from './components/Home';
// import {Posts} from './components/Posts';
// import {Root} from './components/Root';


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
    {/* <Router>
      <Route path={"/"} component={Root}>
      <Route path={"/posts"} components={Posts}/>
        <Route path={"/home"} components={Home}/>
     </Route>
     <Route path={"/home"} components={Home}/>
    </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);




