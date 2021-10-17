import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="text-danger">hello react</div>
      <Container>
        <Row>
          <Col>
            column 1
          </Col>
          <Col>
            column 1
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
