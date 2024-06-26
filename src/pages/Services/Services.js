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
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Services.scss";

export const Services = () => {
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
          <h1 className="text-white">Services</h1>
          <Row className="justify-content-center"></Row>
        </Container>
      </section>
      <section className="section bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row id="PharmaceuticalDistribution" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-3 p-xxl-5">
                    <h4>Pharmaceutical Distribution</h4>
                    <p>
                      We specialize in the efficient and reliable distribution
                      of a wide array of pharmaceutical products. Our extensive
                      network ensures that medications reach healthcare
                      providers, hospitals, and pharmacies promptly and
                      securely. Our advanced logistics systems and strategic
                      partnerships enable us to manage the supply chain
                      effectively, minimizing delays and ensuring product
                      integrity.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="CustomManufacturing" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Custom Manufacturing</h4>
                    <p>
                      Our custom manufacturing services cater to the specific
                      needs of our clients, offering tailored solutions for
                      unique pharmaceutical formulations. We work closely with
                      clients to develop and produce high-quality medications
                      that meet exact specifications, adhering to stringent
                      quality control standards throughout the manufacturing
                      process.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="RegulatorySupportandCompliance" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Regulatory Support and Compliance</h4>
                    <p>
                      Navigating the complex regulatory landscape is crucial in
                      the pharmaceutical industry. Our team of experts provides
                      comprehensive regulatory support and compliance services,
                      ensuring that our clients' products meet all necessary
                      legal and safety requirements. We assist with
                      documentation, submissions, and ongoing compliance to help
                      our clients avoid regulatory pitfalls.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="ClinicalTrialSupplies" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Clinical Trial Supplies</h4>
                    <p>
                      We support pharmaceutical and biotechnology companies with
                      their clinical trials by supplying the necessary
                      medications and materials. Our services include the
                      sourcing, packaging, labeling, and distribution of
                      clinical trial supplies, ensuring that trials run smoothly
                      and efficiently. We prioritize accuracy and timeliness to
                      support the successful execution of clinical studies.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="CustomManufacturing" className="row-grid">
                <div className="card border-0 border-bottom border-primary">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Custom Manufacturing</h4>
                    <p>
                      Our custom manufacturing services cater to the specific
                      needs of our clients, offering tailored solutions for
                      unique pharmaceutical formulations. We work closely with
                      clients to develop and produce high-quality medications
                      that meet exact specifications, adhering to stringent
                      quality control standards throughout the manufacturing
                      process.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="ConsultingServices" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Consulting Services</h4>
                    <p>
                      Our consulting services are designed to help clients
                      optimize their operations and achieve their strategic
                      goals. We offer expert advice on a range of topics,
                      including market entry strategies, product development,
                      regulatory affairs, and supply chain management. Our
                      experienced consultants work closely with clients to
                      develop customized solutions that drive success.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="ResearchAndDevelopment" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Research and Development Support</h4>
                    <p>
                      Innovation is at the heart of our business. We provide
                      extensive support for research and development (R&D)
                      initiatives, offering access to cutting-edge technologies,
                      high-quality materials, and expert guidance. Our R&D
                      support services help clients bring new therapies and
                      products to market faster and more efficiently.
                    </p>
                  </div>
                </div>
              </Row>

              <Row id="PharmacyServices" className="row-grid">
                <div className="card border-0 border-bottom border-primary  ">
                  <div className="card-body p-4 p-xxl-5">
                    <h4>Pharmacy Services</h4>
                    <p>
                      Our pharmacy services cater to both retail and
                      institutional pharmacies, providing a wide range of
                      medications, supplies, and support. We help pharmacies
                      manage their inventory, streamline operations, and deliver
                      exceptional care to their customers. Our commitment to
                      quality and service excellence ensures that pharmacies can
                      rely on us for all their needs.
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
