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
