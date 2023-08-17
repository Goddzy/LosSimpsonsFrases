import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
const CardPersonaje = ({ personaje }) => {
  return (
    <Container>
      <Card>
        <Row>
          <Col md={4}>
            <img className="w-100" src={personaje.image} alt={personaje.character}></img>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                <h2>{personaje.character}</h2>
              </Card.Title>
              <Card.Text>{personaje.quote}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CardPersonaje;
