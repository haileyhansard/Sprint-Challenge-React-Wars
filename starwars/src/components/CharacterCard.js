import React from "react";
import { Card, CardSubtitle, Badge, Col } from 'reactstrap';

const CharacterCard = props => {
    return (
        <Col xs ="12" s="6" md="4" xl="3">
        <Card>
            <Badge color="info">Character Name: {props.name}</Badge>
            <CardSubtitle>Height: {props.height}</CardSubtitle>
            <CardSubtitle>Mass: {props.mass}</CardSubtitle>
        </Card>
        </Col>
    );
};

export default CharacterCard;