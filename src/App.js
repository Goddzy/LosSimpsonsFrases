import { Button, Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import CardPersonaje from "./components/CardPersonaje";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      // console.log(dato[0]);
      setPersonaje(dato[0]);

    } catch (error) {
      console.log(error);
      //mostrar un cartel al usuario de que no se pudo cargar el dato
    }
  };

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
      <div className="text-center py-3">
        <Button onClick={consultarAPI} variant="warning">Obtener frase</Button>
      </div>
      <CardPersonaje personaje={personaje}></CardPersonaje>
    </Container>
  );
}

export default App;
