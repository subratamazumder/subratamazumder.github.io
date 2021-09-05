import React from "react";
import { CardDeck, Card, Navbar } from "react-bootstrap";
import EDABlogCardImage from "../EDAConcept.svg";
import Covid19BlogCardImage from "../covid19.png";
import MTLSBlogCardImage from "../api-mtls.svg";
function Blogs() {
  return (
    <div id="blogs" className="text-center">
      <Navbar bg="light" expand="lg">
        <h3>Blogs</h3>
      </Navbar>
      
      <CardDeck>
      <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={MTLSBlogCardImage} />
          <Card.Body>
            <Card.Title>Serverless API with mTLS</Card.Title>
            <Card.Link href="https://www.linkedin.com/pulse/expose-your-serverless-api-more-confidently-b2b-mtls-subrata-mazumder/">
            Expose your Serverless API more confidently for B2B with mTLS
            </Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published on July 2021</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={EDABlogCardImage} />
          <Card.Body>
            <Card.Title>Event Driven Architecture</Card.Title>
            <Card.Link href="https://medium.com/@subrata.besu/an-outlook-of-a-serverless-event-driven-architecture-s-eda-using-aws-67ea8afaae0c">
              An outlook of a Serverless Event Driven Architecture (S-EDA) using
              AWS
            </Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published on March 2020</small>
          </Card.Footer>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Covid19BlogCardImage} />
          <Card.Body>
            <Card.Title>Serverless Application</Card.Title>
            <Card.Link href="https://www.linkedin.com/pulse/how-can-you-build-your-own-global-covid19-dashboard-way-mazumder/">
              How can you build your own Global COVID19 dashboard in a
              Serverless way!
            </Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published on March 2020</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Blogs;
