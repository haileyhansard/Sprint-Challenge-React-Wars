import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
function App() {
  const [list, setList] = useState({});
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(response => {
      console.log("response", response.data);
      console.log(list);
      setList(response.data)
      
      })
      .catch(error => {
      console.log("Wrong something is!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters from Star Wars</h1>
      <Character list={list}/>
    </div>
  );
}

export default App;
