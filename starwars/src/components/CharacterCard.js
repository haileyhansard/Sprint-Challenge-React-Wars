import React from "react";

const CharacterCard = props => {
    return (
        <div>
            <h2>Character Name: {props.name}</h2>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    );
};

export default CharacterCard;