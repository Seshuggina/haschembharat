import React, { useState, useEffect } from "react";
import products from "./../../assets/data/products.json";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./AboutUs.scss";


export const AboutUs = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];

  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <section className="contactus-banner"></section>
        <Container className="pt-lg-7">
          <h1 className="text-white">About US</h1>
          <Row className="justify-content-center"></Row>
        </Container>
        <section className="About-us">
        <Container className="pt-lg-5">
          <h3 className="text-white">Focus Lab is an established brand agency helping B2B companies resonate with their customers and stand out as industry leaders.</h3>
        </Container>
      </section>
      </section>
      <section className="About-image">
      <div className="container">
            <div className="image-wrapper">
                <img src="https://focuslab.agency/images/about-01.png" alt="Image 1" className="image" />
                <img src="https://focuslab.agency/images/about-02.png" alt="Image 2" className="image" />
            </div>
        </div>
      </section>
      <section className="Aboutus-text">
        <Container className="image-wrapper">
          <div className="col-4">WHAT WE DO</div>
          <div className="col-8">We work with companies that mean the world to their people but need our help to mean something to the world.
          <Container className="image-wrapper">
          <div className="col-6">For more than a decade, our team of brand designers, strategists, and writers has helped organizations unlock their fullest potential with bold, original brand identities.</div>
          <div className="col-6">Through our singular expertise, strategic problem-solving, and respect for craft, we build distinguished brands with the power to transform people and industries.</div>
          </Container>
          <div className="arrow-right">
      Learn About our process
    </div>
          </div>
        </Container>
      </section>
      <section className="shape shape-style-1 bg-gradient-default">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
