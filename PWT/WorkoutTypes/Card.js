import React from "react";

import {Card } from "react-bootstrap";
import "./Card.css";
function Cards(props) {
  return (
    <>
      <Card className="CardStyles" >
        <Card.Img  className="CardImg" variant="top" src={props.image} />
        <div className="Cardtext">{props.text}</div>
      </Card>
    </>
  );
}
export default Cards;
