import React from "react";
import Projects from "../Projects/Projects";
import About from "../About/About";
import { Container } from "react-bootstrap";

function Body() {
  return (
    <Container>
      <About />
      <Projects />
    </Container>
  );
}

export default Body;
