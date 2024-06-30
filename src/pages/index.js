import React from "react";
// nodejs library that concatenates classes
import { Product } from "./../components/product/product";
import CustomCarousel from "./../components/Carousel/Carousel";
import { Partners } from "./../components/Partners/Partners";
import products from "../assets/data/products.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// Core Components
import HeaderNavbar from "components/Navbars/Header.js";

const Home = () => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  // const [newProducts, setNewProducts] = useState([]);
  const newProducts = products.filter(
    (product) => product.productStatus?.toLowerCase() === "new"
  );
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
              {newProducts.map((topProduct, index) => (
                <Product
                  product={topProduct}
                  thumbnailColor={thumbnailsColors[index % 5]}
                  key={index}
                ></Product>
              ))}
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
