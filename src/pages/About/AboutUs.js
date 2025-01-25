import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "./AboutUs.scss";
import { OurServices } from "components/OurServices/OurServices";
import { WhyWorkWithUs } from "components/WhyWorkWithUs/WhyWorkWithUs";

import impurities from "./../../assets/img/services/impurities.jpg";
import vision from "./../../assets/img/aboutus/vision.jpg";
import mission from "./../../assets/img/aboutus/mission.jpg";

export const AboutUs = () => {
  return (
    <>
      <section className="section section-shaped section-sm">
        <section className="shape page-banner aboutus-banner"></section>
        <Container className="pt-lg-7 pt-sm-7 pt-xs-7">
          <h1 className="text-white">About US</h1>
          <Row className="justify-content-center"></Row>
        </Container>
      </section>
      <section className="section bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-3 p-xxl-5">
                    <h4>HASCHEM Bharat</h4>
                    <img
                      className="img-fluid wrap-text"
                      loading="lazy"
                      src={impurities}
                      alt="About US"
                    />
                    <p>
                      At <strong>HASCHEM</strong>, we specialize in delivering
                      highest quality API impurities and reference standards,
                      ensuring unparalleled accuracy in both qualitative and
                      quantitative analyses. Our extensive catalog of
                      high-quality impurity reference materials includes
                      intermediates, by-products, and degradation products, all
                      designed to support the development of safer and more
                      effective pharmaceuticals.
                    </p>
                    <h5>Our comprehensive product portfolio includes:</h5>
                    <ul>
                      <li>API Standards</li>
                      <li>Impurity Standards</li>
                      <li>Metabolites</li>
                      <li>Nitrosamines</li>
                      <li>Building Blocks</li>
                      <li>Custom Synthesis</li>
                    </ul>
                    <p>
                      At <strong>HASCHEM</strong>, we value long-term partnerships, working
                      closely with our clients to address their unique
                      challenges and requirements. Together, we develop
                      customized solutions to drive your success.
                    </p>
                  </div>
                </div>
              </Row>

              <Row className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-3 p-xxl-5">
                    <h4>Why Work With Us</h4>
                    <WhyWorkWithUs></WhyWorkWithUs>
                  </div>
                </div>
              </Row>

              {/* <Row className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Vision</h4>
                    <img
                      className="img-fluid wrap-text-left"
                      loading="lazy"
                      src={vision}
                      alt="Vision"
                    />
                    <p>
                      To be the global leader in providing cutting-edge research
                      solutions and exceptional services that advance scientific
                      discovery and innovation.
                    </p>
                  </div>
                </div>
              </Row>
              <Row className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-3 p-xxl-5">
                    <h4>Mission</h4>
                    <img
                      className="img-fluid wrap-text"
                      loading="lazy"
                      src={mission}
                      alt="Mission"
                    />

                    <ul>
                      <li>
                        <strong>Quality and Excellence:</strong> Deliver the
                        highest quality reference standards and research
                        chemicals to meet the diverse needs of the scientific
                        community.
                      </li>
                      <li>
                        <strong>Customer-Centric Approach:</strong> Offer
                        unparalleled services tailored to the specific
                        requirements of our clients, ensuring their success and
                        satisfaction.
                      </li>
                      <li>
                        <strong>Innovation:</strong> Continuously innovate and
                        enhance our product offerings to stay at the forefront
                        of scientific research and development.
                      </li>
                      <li>
                        <strong>Global Expansion:</strong> Strategically expand
                        our presence in international markets, fostering growth
                        and collaboration across the global scientific
                        community.
                      </li>
                      <li>
                        <strong> Sustainability:</strong> Commit to sustainable
                        practices and responsible sourcing to contribute
                        positively to the environment and society.
                      </li>
                    </ul>
                  </div>
                </div>
              </Row>
              <Row className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-3 p-xxl-5">
                    <h4>Our Services</h4>
                    <OurServices></OurServices>
                  </div>
                </div>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
