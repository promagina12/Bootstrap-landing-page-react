import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.scss";
import CardImages from "../../components/CardImages/CardImages";

export default function MainCard(props) {
  return (
    <Card>
      <CardImages src={props.image} label={props.label} />
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
