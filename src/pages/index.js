import React from "react";
// nodejs library that concatenates classes
import { Product } from "./../components/product/product";
import { Testimonials } from "./../components/testimonials/testimonials";
import topProducts from "../assets/data/topProducts";

// reactstrap components
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
// Core Components
import HeaderNavbar from "components/Navbars/Header.js";


const items = [
  {
    caption: "Slider 1 Caption 1",
    header: "Slider 1 Header 1",
    className:"slide1"
  },
  {
    caption: "Slider 2 Caption 2",
    header: "Slider 2 Header 2",
    className:"slide2"
  },
  {
    caption: "Slider 3 Caption 3",
    header: "Slider 3 Header 3",
    className:"slide3"
  },
  {
    caption: "Slider 4 Caption 4",
    header: "Slider 4 Header 4",
    className:"slide4"
  },
  {
    caption: "Slider 5 Caption 5",
    header: "Slider 5 Header 5",
    className:"slide5"
  }
];
const Home = () => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  return (
    <>
      <HeaderNavbar />
      <main>
        <section className="section section-shaped pb-0 pt-88 home-carousel">
          <UncontrolledCarousel items={items} enableTouch={true} interval={50000}/>
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
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              ABC ABC
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
                    <h4 className="display-3 text-white mb-0">Customers About HASCHEMBHARAT</h4>
                    <p className="lead text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever.
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
      </main>
    </>
  );
};

export default Home;
