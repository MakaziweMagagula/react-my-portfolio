import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../assets/Makaziwe Blessing Magagula_Resume (New).pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          Request My CV
        </h1>
        <Row >
           
           <Resumecontent/>
         
        </Row>
        
      </Container>
    </Container>
  );
}

export default Resume;