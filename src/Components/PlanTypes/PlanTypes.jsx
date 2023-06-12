import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { planTypes, planTypesTexts } from "../../PortfolioData";
import "./PlanTypes.css";

function PlanTypes() {
  return (
    <Container className="PlanTypes" id={planTypesTexts.title}>
      <h1 id="title">{planTypesTexts.title}</h1>
      <Row>
        {planTypes.length &&
          planTypes.map((project, index) => (
            <Col
              style={{
                marginTop: "1.5em",
                display: "flex",
                justifyContent: "center",
              }}
              key={index}
            >
              <Card
                className={`card-index-${index}`}
                style={{
                  width: "36em",
                  height: "36em",
                  textAlign: "center",
                  boxShadow: "0 0 2vh #999999",
                  borderStyle: "none",
                  borderRadius: "5%",
                }}
              >
                <Card.Body style={{ borderRadius: "5%" }}>
                  <div className="cardBody">
                    <p
                      className={`cardTitle ${
                        index === planTypes.length - 1 ? "last" : ""
                      }`}
                    >
                      {project.name}
                    </p>
                    <p className="cardDescription">{project.description}</p>
                    {index === planTypes.length - 1 && (
                      <span className="premiumText">
                        {planTypesTexts.premium}
                      </span>
                    )}
                    <Button className="buyNowButton" variant="light">
                      {planTypesTexts.buyNowText}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default PlanTypes;
