// Write your Character component here
import React from 'react';

const Character = (props) => {
    const {list} = props;
    return (
        <div>
        <div>Get to know the Rebel Army!</div>
        <h2>Character Name</h2>
        <h3>{list?.name}</h3>
        <p>{list?.created}</p>
        </div>
    )
}

export default Character;