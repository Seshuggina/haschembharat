import React from "react";
// nodejs library that concatenates classes
import { Product } from "./../components/product/product";
import { Testimonials } from "./../components/testimonials/testimonials";
import  CustomCarousel  from "./../components/Carousel/Carousel";
import { Partners } from "./../components/Partners/Partners";
import topProducts from "../assets/data/topProducts";
import { OurServices } from "./../components/OurServices/OurServices"

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// Core Components
import HeaderNavbar from "components/Navbars/Header.js";


const Home = () => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  return (
    <>
      <HeaderNavbar />
      <main>
        <section className="section section-shaped pb-0 pt-88 home-carousel">
          <CustomCarousel></CustomCarousel>
        </section>
        {/* Section 2 Popular products */}
        <section
          id="popularProduts"
          className="section pb-0 bg-gradient-success"
        >
          <Container>
            <Row className="row-grid align-items-center">
              <Col>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3 text-white">Top Products</h4>
                    <p className="text-white lead">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              {topProducts.map((topProduct, index) => (
                <Product
                  product={topProduct}
                  thumbnailColor={thumbnailsColors[index % 5]}
                  key={index}
                ></Product>
              ))}
            </Row>
          </Container>
        </section>

        <section id="popularProduts" className="section pb-0">
          <Container>
            <Row className="row-grid align-items-center">
              <Col>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-3">
                    <h4 className="display-3 mb-0">Our Services</h4>
                    <p className="lead">
                      At HASCHEMBHARAT, we offer a comprehensive range of
                      services designed to meet the diverse needs of our clients
                      in the healthcare and pharmaceutical sectors. Our
                      commitment to quality, innovation, and customer
                      satisfaction drives us to deliver exceptional service
                      across all aspects of our operations. Here's an overview
                      of the key services we provide:
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
             <OurServices></OurServices>
            </Row>
          </Container>
        </section>

        <section id="popularProduts" className="section pb-0 bg-success">
          <Container>
            <Row className="row-grid align-items-center">
              <Col>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-3">
                    <h4 className="display-3 text-white mb-0">
                      Customers About HASCHEMBHARAT
                    </h4>
                    <p className="lead text-white">
                      Our clients' success stories are a testament to our
                      dedication and expertise. Here's what some of them have to
                      say about working with us:
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              <Testimonials></Testimonials>
            </Row>
          </Container>
        </section>
        {/* Our Partners */}
        <section id="popularProduts" className="section pb-0">
          <Container>
            <Row className="row-grid align-items-center">
              <Col>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-3">
                    <h4 className="display-3 mb-0">Our Partners</h4>
                    <p className="lead">
                      At <strong>HASCHEMBHARAT</strong>, we believe in the power
                      of collaboration and partnership to drive innovation and
                      excellence in the healthcare and pharmaceutical
                      industries. Our strategic alliances with esteemed partners
                      help us deliver cutting-edge solutions and maintain our
                      leadership in the market.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              <Partners></Partners>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
