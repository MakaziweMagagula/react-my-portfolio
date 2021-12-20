import React from "react";
import { Container, Col } from "react-bootstrap";
import Particle from "../Particle";
import constructionImg from "../../assets/construction.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Col
          md={12}
          style={{paddingLeft:"50px"}}
          className="about-img"
        >
          <img src={constructionImg} alt="about" className="img-fluid" />
        </Col>
      </Container>
    </Container>
  );
}

export default Projects;