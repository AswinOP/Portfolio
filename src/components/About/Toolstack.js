import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiUbuntu } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiArchlinux,
  SiGit,
  SiAdobepremierepro,
  SiWindows,
  SiAdobeaftereffects,
  SiFigma,
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
    </Row>
  );
}

export default Toolstack;
