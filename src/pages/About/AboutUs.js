import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "./AboutUs.scss";
import { OurServices } from "components/OurServices/OurServices";
import {WhyWorkWithUs} from "components/WhyWorkWithUs/WhyWorkWithUs";

import impurities from "./../../assets/img/services/impurities.jpg";
import vision from "./../../assets/img/aboutus/vision.jpg";
import mission from "./../../assets/img/aboutus/mission.jpg";

export const AboutUs = () => {
  return (
    <>
      <section className="section section-shaped section-sm">
        <section className="shape page-banner aboutus-banner"></section>
        <Container className="pt-lg-7">
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
                      <strong>HASCHEM Bharat </strong>Labs operates out of
                      Vancouver, Canada, and is helmed by distinguished
                      professionals dedicated to delivering premium reference
                      standards, research chemicals, and unparalleled services
                      to the scientific community.
                    </p>

                    <p>
                      The leadership team at <strong>HASCHEM Bharat </strong>{" "}
                      Labs includes seasoned scientists and business leaders who
                      collectively bring over 20 years of experience to the
                      table. Since its founding,{" "}
                      <strong>HASCHEM Bharat </strong> Labs has seen remarkable
                      growth and a surge in brand recognition.
                    </p>

                    <p>
                      The organization is strategically poised to sustain its
                      successful trajectory, aiming to expand its reach in
                      global markets.
                    </p>
                    <h5>Our key product portfolio includes:</h5>
                    <ul>
                      <li>API Standards</li>
                      <li>Impurity Standards</li>
                      <li>Metabolites</li>
                      <li>Nitrosamines</li>
                    </ul>
                    <p>
                      We work hard to ensure our customers have a reliable and
                      sustainable source of high-quality products. Every
                      compound supplied by HASCHEM will be fully tested for
                      quality using validated methods prior to delivering to our
                      customers.
                    </p>
                    <p>
                      At Haschem we believe in building long-term
                      relationships-together, we can build solutions to address
                      your specific challenges and requirements.
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

              <Row className="row-grid">
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
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
