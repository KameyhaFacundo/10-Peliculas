import React from "react";
import { Card } from "react-bootstrap";

const Tarjeta = ({ nombre, descripcion, genero }) => {
  return (
    <Card className="my-4 mx-auto" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>Género: {genero}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;
