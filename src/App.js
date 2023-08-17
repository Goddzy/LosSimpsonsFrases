import { Button, Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import CardPersonaje from "./components/CardPersonaje";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);


  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //actualizar el state del spinner
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      // console.log(dato[0]);
      setPersonaje(dato[0]);
      //actualizar el state del spinner
      setMostrarSpinner(false);
    } catch (error) {
      //mostrar un cartel al usuario de que no se pudo cargar el dato
      setMostrarSpinner(false);
    }
  };

  //operador ternario
  // (condición lógica)? (código cuando la condición sea true):(código cuando la condición sea false)

  const mostrarComponente = (mostrarSpinner===true)? (<Spinner></Spinner>): (      <CardPersonaje personaje={personaje}></CardPersonaje>)

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
      <div className="text-center">
        <Button onClick={consultarAPI} className="mb-2" variant="warning">
          Obtener frase
        </Button>
      </div>
      {mostrarComponente}
    </Container>
  );
}

export default App;
