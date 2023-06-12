import React from "react";
import PlanTypes from "../PlanTypes/PlanTypes";
import About from "../About/About";
import { Container } from "react-bootstrap";

function Body() {
  return (
    <Container>
      <About />
      <PlanTypes />
    </Container>
  );
}

export default Body;
