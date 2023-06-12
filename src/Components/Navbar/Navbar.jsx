import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { header } from "../../AppData.js";
import "../Navbar/Navbar.css";

function Navbar() {
  const { homepage, title } = header;

  return (
    <Container id="Navbar">
      <Row>
        <Col>
          <h3>
            <a title="Ori Yosef" id="Logo" href={homepage}>
              {title}
            </a>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
