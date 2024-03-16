import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Aswin</span> from <span className="purple">Puducherry, India</span>.<br />
            I have completed a Bachelor of Technology (B.Tech) in Mechanical Engineering.<br />
            Additionally, I am a active developer for the devices POCO X4 Pro 5G / Redmi Note 11E Pro / Redmi Note 11 Pro 5G / Redmi Note 11 Pro+ 5G .<br />
            <br />
            Apart from coding, there are other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fiction and Non-fiction Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "YOLO!"{" "}
          </p>
          <footer className="blockquote-footer">AswinOP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
