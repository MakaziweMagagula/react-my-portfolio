import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Techstack from "./TechStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./ToolStack";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import { saveAs } from "file-saver";



function About() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1-zFUYDh-CLtgb3IbhQkAOzCbsk14nRKQ/view?usp=sharing",
      "test.pdf"
    );
  };
  return (
    <Container fluid className="about-section">
    <Particle />
    <Container>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Know Who <strong className="purple">I am</strong>
          </h1>
          <Aboutcard />
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
      </Row>
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />              

    </Container>
  </Container>
  );
}

export default About;
