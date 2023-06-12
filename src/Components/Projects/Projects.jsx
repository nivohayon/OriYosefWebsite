import { Card, Col, Container, Row } from "react-bootstrap";
import { projects, projectsTexts } from "../../PortfolioData";
import "./Projects.css";

function Projects() {
  return (
    <Container className="Projects" id={projectsTexts.title}>
      <h1 id="title">{projectsTexts.title}</h1>
      <Row>
        {projects.length &&
          projects.map((project, index) => (
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
                        index === projects.length - 1 ? "last" : ""
                      }`}
                    >
                      {project.name}
                    </p>
                    <p className="cardDescription">{project.description}</p>
                    {index === projects.length - 1 && (
                      <span className="premiumText">
                        {projectsTexts.premium}
                      </span>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Projects;
