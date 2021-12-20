import React from "react";
import ReactTooltip from 'react-tooltip';
import { Col, Row } from "react-bootstrap";
import {
  SiCsharp,
  SiJava,
  SiJavascript,
  SiPython,
  SiMicrosoftsqlserver,
  SiGit,
  SiReact
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
       <Col xs={4} md={2} className="tech-icons">
       <p data-tip="C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework"> <SiCsharp /> </p>
       <ReactTooltip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      
    </Row>
  );
}

export default Techstack;