import { Button, Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import CardPersonaje from "./components/CardPersonaje";

function App() {
  return (
    <Container className="py-5">
      <div className="text-center">
        <img
          className="w-100"
          height={300}
          src="https://trello.com/1/cards/6477b8546c9b62d74f338f39/attachments/6477b8546c9b62d74f338f90/previews/6477b8546c9b62d74f338f97/download/image.png"
          alt="The Simpsons"
        ></img>
      </div>
      <div className="text-center pt-3">
      <Button variant="warning">Obtener frase</Button>
      </div>
      <CardPersonaje></CardPersonaje>
    </Container>
  );
}

export default App;
