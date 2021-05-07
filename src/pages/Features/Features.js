import React from 'react'
import { Row, Container, Col } from "react-bootstrap";
import "./Features.scss"


import image1 from "../../images/umbrella.png";
import image2 from "../../images/coffee.png";
import image3 from "../../images/rewards.png";
import image4 from "../../images/box.png";
import image5 from "../../images/inbox.png";
import image6 from "../../images/settings.png";

import MainCard from "../../components/Card/Card"

export default function Features() {
    return (
      <section className="features">
        <div className="container" id="featured-3">
          <h2 className="pb2">Lorem ipsum dolor sit</h2>
          <p className="pbc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
          </p>
          <Container>
            <Row>
              <Col className="col-12 col-sm-12 col-md-4">
                <MainCard image={image1} label="Peace of Mind" />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <MainCard image={image2} label="Coffee Breaks" />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <MainCard image={image3} label="Rewards" />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <MainCard image={image4} label="Delivery" />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <MainCard image={image5} label="Inbox" />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <MainCard image={image6} label="Settings" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
}
