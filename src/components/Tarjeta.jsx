import React from "react";
import { Card } from "react-bootstrap";
import { useEffect } from "react";

const Tarjeta = ({ nombre, descripcion, genero }) => {
  return (
    <>
      <Card className="my-4 mx-auto rounded border" style={{ width: "18rem" }}>
        <Card.Body>
          <p>Nombre: {nombre}</p>
          <p>Descripcion: {descripcion}</p>
          <p>Género: {genero}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Tarjeta;
