import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Tarjeta from "./Tarjeta";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  return (
    <>
      <Form
        className="p-4 my-4 rounded border"
        style={{ backgroundColor: "rgba(255, 200, 250, 0.5)" }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Peliculas</h2>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de la película"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ingrese una descripción de la película"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="genero">
          <Form.Label>Género</Form.Label>
          <Form.Control
            as="select"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          >
            <option value="">Seleccionar género...</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary mt-2" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
