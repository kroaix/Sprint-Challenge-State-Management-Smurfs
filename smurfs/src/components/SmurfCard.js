import React from "react";
import { Card } from 'semantic-ui-react';

const SmurfCard = ({smurf}) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{`Name: ${smurf.name}`}</Card.Header>
          <Card.Description>{`Age: ${smurf.age}`}</Card.Description>
          <Card.Description>{`Height: ${smurf.height}`}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default SmurfCard;
