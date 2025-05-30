import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";
import Navbar from 'react-bootstrap/Navbar'
function About() {
  return (
    <div id="about">
      <Navbar bg="light" expand="lg">
        <h3>About</h3>
      </Navbar>
      <Jumbotron className="bg-white">
        <h4>
          <p>
            It was 1998 when for the first time I was introduced to a computer
            with a keyboard and taught to draw a triangle using Logo programming
            language. Since then my passion for programming became an instinct.
            Fast forward ➟ 8 years, I graduated ♟ from an estimated university
            as a Computer Science Engineer. In the year 2006, I started my professional
            career as a ♞ Software Developer in one of the top 5 Indian IT companies.
            In my <b>~19 years</b> of enriching work experiences, I have been given many
            wonderful opportunities to learn & grow as an IT professional.
          </p>
          <p>
            <strong>
              ✔I have 10+ years of working experince in the UK.
            </strong>
          </p>
          <p>
            I have played various roles ♝ like <b>Developer, Technical Lead, SME,
            External Reviewer, Member of Project Recovery Team, SOA Architect,
            Cloud Architect, Software Engineering Manager, DevOps Engineer</b> etc. I have worked as
            a key technical member in various multi-million dollar successful
            transformation projects related to <b>Healthcare, Banking, PSD2, Publishing,
            Logistics, Transport</b> domains.
          </p>
          <p>
            In the last 10 years, I have been associating myself with emerging
            technologies & concepts like <b>Public Cloud (Amazon Web Service), IaC, CI-CD,
            Serverless, Service Oriented Architecture, Microservice, Service Mesh, API,
            Event-Driven, Load Balancing, TDD, Shifting Left, Agile methodologies, ShapeUp appraoch</b> etc.
          </p>
          <p>
            <strong>
              ✔I am a certified AWS Solution Architect at Professional level ♛.
            </strong>
          </p>
          <p>
            I enjoy following process, designing solution, automating pipelines, building infrastucture following IaC principals.
          </p>
          <p>
            I have been a consistent follower of various technical conferences
            either in person or via live streaming or YouTube like <b>AWS
            re:Invent, AWS Summit, AWS Community Day, AWS Innovate, Devoox,
            Google I/O, Kafka Summit, Spring I/O, AWS MeetUps,</b> etc.
          </p>
          <p>
            Other than technology, I also have a huge interest in exploring the
            human body, human health & of course Newtonian physics ♡
          </p>
        </h4>
      </Jumbotron>
      <Alert variant="success" className="text-center">
        <h3>
          <i>
            <q>
              continuous learning & unlearning is <strong>THE key</strong> to a
              satisfying life experience
            </q>
          </i>
        </h3>
      </Alert>
    </div>
  );
}

export default About;
