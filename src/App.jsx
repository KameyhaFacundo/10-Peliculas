import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <h1></h1>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <a href="https://github.com/KameyhaFacundo" className="text-secondary">
          Facundo Kameyha
        </a>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
