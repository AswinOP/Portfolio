import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import matrixx from "../../Assets/Projects/matrixx.jpg";
import mi from "../../Assets/Projects/mi.png";
import miuicam from "../../Assets/Projects/miuicam.png";
import kernel from "../../Assets/Projects/kernel.png";
import portfolio from '../../Assets/Projects/portfolio.svg'
import pixelos from '../../Assets/Projects/pixelos.png'

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Website"
              description="This is a personal portfolio made using React.js. This is the present project you are viewing"
              ghLink="https://github.com/AswinOP/Portfolio"
              demoLink="https://aswinop.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mi}
              isBlog={false}
              title="Device Tree"
              description="Dependency of Xiaomi POCO X4 Pro 5G / Redmi Note 11 Pro 5G / Redmi Note 11 Pro+ 5G / Redmi Note 11E Pro"
              ghLink="https://github.com/AswinOP/device_xiaomi_peux.git#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kernel}
              isBlog={false}
              title="Rashoumon kernel"
              description="This is an OSS kernel for veux and peux (sm6375)"
              ghLink="https://github.com/AswinOP/kernel_xiaomi_sm6375.git#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matrixx}
              isBlog={false}
              title="Project Matrixx"
              description="Matrixx is a custom ROM, Based on crDroid Android with extra pinch of Salt."
              ghLink="https://github.com/ProjectMatrixx"
              demoLink="https://www.projectmatrixx.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixelos}
              isBlog={false}
              title="Pixel OS"
              description="An AOSP based ROM aiming to provide the best of Pixel"
              ghLink="https://github.com/PixelOS-AOSP"
              demoLink="https://pixelos.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miuicam}
              isBlog={false}
              title="MiuiCamera"
              description="MIUI Camera for AOSP ROMs."
              ghLink="https://github.com/AswinOP/vendor_xiaomi_miuicamera"
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
