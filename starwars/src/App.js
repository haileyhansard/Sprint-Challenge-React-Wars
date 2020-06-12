import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import { Button } from 'reactstrap';

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
function App() {
  return (
    <div>
      <h1>Welcome to the Rebel Army!</h1>
      <Button color="danger">Join Us!</Button>
      <Button color="primary">Donate to the Cause!</Button>
      <h2>Yes it's true, Darth Vader is now on OUR SIDE!!!</h2>
      <Character />
    </div>
  )
}

export default App;
