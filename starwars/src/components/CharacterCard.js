import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const CharacterCard = props => {
    return (
        <Card>
            <CardTitle color="danger">Character Name: {props.name}</CardTitle>
            <CardSubtitle>Height: {props.height}</CardSubtitle>
            <CardSubtitle>Mass: {props.mass}</CardSubtitle>
        </Card>
    );
};

export default CharacterCard;