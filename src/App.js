import logo from './logo.svg'; 
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import ExerciseOneComponent from './components/exerciseOne/ExerciseOneComponent';
import ExerciseTwoComponent from './components/exerciseTwo/ExerciseTwoComponent';
import LandingComponent from './components/Landing/LandingComponent';


import './App.css';
import NavBarComponent from './components/NavBar/NavBarComponent';

function App() {
  return (
    <div>
      <Route path="" component={NavBarComponent}></Route>
    <Switch>
      <Route path="/one" component={ExerciseOneComponent}></Route>
      <Route path="/two" component={ExerciseTwoComponent}></Route>
    </Switch>
    </div>
  );
}

export default App;
