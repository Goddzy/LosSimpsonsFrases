import React from "react";
import { Card, Row, Col } from "react-bootstrap";
const CardPersonaje = ({personaje}) => {
  return (
    <Card className="mt-5 rounded-4 w-100">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="left"
            className="w-100"
            height={700}
            src="https://trello.com/1/cards/6477b8546c9b62d74f338f39/attachments/6477b8546c9b62d74f338f99/previews/6477b8546c9b62d74f338f9e/download/image.png"
            alt="Personaje Simpsons"
          />
        </Col>
        <Col md={8}>
          <Card.Body className="w-100 pt-5">
            <Card.Title className="pb-3">
              <h2>Homer Simpson</h2>
            </Card.Title>
            <Card.Text>
              Facts are meaningless. You could use facts to prove anything
              that's even remotely true.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardPersonaje;
