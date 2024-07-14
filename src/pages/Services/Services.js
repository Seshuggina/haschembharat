import React, { useState, useEffect } from "react";
import products from "./../../assets/data/products.json";

// Reactstrap Components
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
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Services.scss";

import impurities from "./../../assets/img/services/impurities.jpg";
import croservices from "./../../assets/img/services/cro-services.jpg";
import customsynthesys from "./../../assets/img/services/custom-synthesys-new.jpg";
import sourcing from "./../../assets/img/services/sourcing.jpg";

export const Services = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];

  return (
    <>
      <section className="section section-shaped section-sm">
        <section className="shape page-banner services-banner"></section>
        <Container className="pt-lg-7">
          <h1 className="text-white">Services</h1>
          <Row className="justify-content-center"></Row>
        </Container>
      </section>
      <section className="section bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row id="APIImpurities" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-3 p-xxl-5">
                    <h4>API Impurities/Reference Standards</h4>
                    <img
                      className="img-fluid wrap-text"
                      loading="lazy"
                      src={impurities}
                      alt=""
                    />
                    <p>
                      Our quality impurity reference materials - including intermediates, by-products and degradation products - enable accuracy in both your qualitative and quantitative analysis, with the aim of helping you to create ever better, safer medicines.
                    </p>
                    <h5>Our key product portfolio includes:</h5>
                    <ul>
                      <li>API Standards</li>
                      <li>Impurity Standards</li>
                      <li>Metabolites</li>
                      <li>Nitrosamines</li>
                    </ul>
                    <p>We work hard to ensure our customers have a reliable and sustainable source of high-quality products. Every compound supplied by HASCHEM will be fully tested for quality using validated methods prior to delivering to our customers.</p>
                    <p>At Haschem we believe in building long-term relationships-together, we can build solutions to address your specific challenges and requirements.</p>
                  </div>
                </div>
              </Row>

              <Row id="CustomSynthesis" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Custom Synthesis</h4>
                    <img
                      className="img-fluid wrap-text-left"
                      loading="lazy"
                      src={customsynthesys}
                      alt=""
                    />
                    <p>Hashem specializes in the production of high-quality products tailored for innovative research endeavors. Our objective is to furnish researchers within the global scientific community with indispensable tools and comprehensive support. Our product range including a diverse array of application areas, covering pharmaceutical and medicinal research and development, forensic science, and environmental analysis.</p>
                    <p>Drawing upon our extensive expertise in synthetic organic chemistry, we excel in crafting optimal synthetic pathways for both novel and established compounds. Our commitment lies in delivering bespoke chemical solutions precisely tailored to your research requirements, regardless of their complexity or specificity.</p>
                    <p>We are committed to ensuring that our customers have access to a dependable and sustainable supply of high-quality products. Each compound provided by HASCHEM undergoes rigorous quality testing using validated methods before reaching our customers.</p>
                    <p>At Haschem we believe in building long-term relationships-together, we can build solutions to address your specific challenges and requirements.</p>
                    <p>Please don't hesitate to contact us if you have any questions or concerns. We're here to help!</p>
                  </div>
                </div>
              </Row>

              <Row id="CROCDMOservices" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>CRO/CDMO services</h4>
                    <img
                      className="img-fluid wrap-text"
                      loading="lazy"
                      src={croservices}
                      alt=""
                    />
                    <p>
                      At HASCHEM, our CDMO (Contract Development and Manufacturing Organization) services are dedicated to delivering tailored chemical synthesis solutions for active pharmaceutical ingredients, from initial concept to commercial production.
                    </p>
                    <h5>Our extensive range of services includes:</h5>
                    <ul>
                      <li>Expertise in synthesizing non-GMP drug substances for early-stage process development.</li>
                      <li>Proficiency in scouting new routes and optimizing processes, effectively reducing the cycle time of API research.</li>
                      <li>Capabilities in isolating, characterizing, synthesizing, and controlling impurities during process chemistry research and development.</li>
                      <li>Full structural characterization and elucidation.</li>
                      <li>Synthesis spanning from decagrams to kilograms to support phase III clinical studies.</li>
                    </ul>
                    <p>
                      We are committed to ensuring that our customers have access to a dependable and sustainable supply of high-quality products. Each compound provided by HASCHEM undergoes rigorous quality testing using validated methods before reaching our customers.
                    </p>
                    <p>
                      At HASCHEM, we prioritize building lasting relationships. By collaborating closely with our clients, we strive to develop tailored solutions that address their specific challenges and requirements effectively. 
                    </p>
                    <p>
                      Please don't hesitate to contact us if you have any questions or concerns. We're here to help!
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="ChemicalSourcing" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Chemical Sourcing</h4>
                    <img
                      className="img-fluid wrap-text-left"
                      loading="lazy"
                      src={sourcing}
                      alt=""
                    />
                    <p>
                      "The HASCHEM sourcing team has diligently cultivated relationships over several years with numerous partner organizations renowned for their specialized skills and technical prowess across India and China. Consequently, we boast unparalleled access to a wide range of premium-quality products.
                    </p>
                    <p>  
                      We source top-quality active pharmaceutical ingredients (APIs) from trusted partners in India and China. Plus, we offer a wide selection of fine chemicals like carbohydrates, nucleotides, prostaglandins, and fermentation products.
                    </p>
                    <p>
                      Moreover, our portfolio extends to raw materials procurement and chemical synthesis services, facilitated through collaborations with established providers. This enables us to consistently deliver exceptional value and quality to our esteemed customers
                    </p>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
