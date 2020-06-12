// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import {Container} from 'reactstrap';

export default function Character(){
const [list, setList] = useState([]);

useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(response => {
      console.log("response", response.data);
      setList(response.data.results)
      })

      .catch(error => {
      console.log("Yoda says, Wrong something is!", error);
      });
}, []);

return (
    <Container>
    <div>
        {list.map(person => {
            return (<div>
                
                <CharacterCard 
                name={person.name}
                height={person.height}
                mass={person.mass}
                />
                </div>
            );
        })}
    </div>
    </Container>
);

}



