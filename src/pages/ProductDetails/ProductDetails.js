import React from "react";
import { Product } from "./../../components/product/product";
import topProducts from "../../assets/data/topProducts";

// reactstrap components
import { Container, Row, Col, Badge, Button, Card, CardBody } from "reactstrap";
import "./ProductDetails.scss";

export const ProductDetails = (product) => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape products-banner">
          <div className="wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Container className="pt-lg-7">
          <h1>Product Details</h1>
        </Container>
      </section>
      <section className="section section-lg pt-lg-0 mt--200 product-details">
        <Container>
          <Row className="justify-content-center">
            <Card className="shadow border-0 card-border w-100">
              <CardBody className="py-3">
                <Row className="justify-content-center">
                  <Col xs="12" sm="5" lg="5">
                    <img
                      src={`https://haschembharat.com/utilities/uploads/3d/1(3d).png`}
                    />
                  </Col>
                  <Col xs="12" sm="7" lg="7">
                    <h3 className="text-primary text-uppercase">
                      2,2,6-Trimethyl cyclohexanone
                    </h3>
                    <div>
                      <p>
                        <i className="ni ni-vector"></i>&nbsp;
                        <strong>Molecular Formula:</strong> C9H16O
                      </p>
                      <p>
                        <i className="ni ni-vector"></i>&nbsp;
                        <strong>CAS Number:</strong> 2408-37-9
                      </p>
                      <p>
                        <i className="ni ni-vector"></i>&nbsp;
                        <strong>Smile Code:</strong> CC1CCCC(C1=O)(C)C
                      </p>
                      <p>
                        <i className="ni ni-vector"></i>&nbsp;
                        <strong>Chemical Safty: </strong> Flameable,Irritant
                      </p>
                      <p>
                        <i className="ni ni-vector"></i>&nbsp;
                        <strong>Synonyms :</strong> 2,2,6-TRIMETHYLCYCLOHEXANONE
                        2,2,6-Trimethylcyclohexan-1-one Cyclohexanone,
                        2,2,6-trimethyl- 2,6,6-Trimethylcyclohexanone
                      </p>
                      <Badge color="primary" pill className="mr-1">
                        zxczxc
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        zxczxczxc
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        zxczxczxczxc
                      </Badge>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </section>

      <section className="section section-lg pt-lg-0 product-details">
        <Container>
          <h4>Related Products</h4>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid align-items-center">
                {topProducts.map((topProduct, index) => (
                  <Product
                    product={topProduct}
                    thumbnailColor={thumbnailsColors[index % 5]}
                    key={index}
                  ></Product>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-lg pt-lg-0 product-details">
        <Container>
          <h4>Contact</h4>
          <Row className="justify-content-center">
            <Col>
              Do You Need Any Help? <br /> +91 7816 00 3510 <br />
              contactus@haschembharat.com
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
