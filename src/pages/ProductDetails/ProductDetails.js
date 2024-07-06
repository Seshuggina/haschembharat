import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "./../../components/product/product";
import {EnquireForm} from "../../components/EnquireForm/EnquireForm";
import { ProductDetail } from "./../../components/productDetail/productDetail";
import products from "./../../assets/data/products.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "./ProductDetails.scss";

export const ProductDetails = (product) => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  let { id } = useParams();

  const newProducts = products.filter(
    (product) => product.productStatus?.toLowerCase() === "new"
  );

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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Container className="pt-lg-7">
          <h1 className="text-white">Product Details</h1>
          <h3>ID: {id}</h3>
        </Container>
      </section>
      <section className="section section-lg pt-lg-0 mt--200 product-details">
        <Container>
          <Row className="justify-content-center">
            <ProductDetail
              product={products[id]}
              thumbnailColor={thumbnailsColors[id % 5]}
              key={id}
            ></ProductDetail>
          </Row>
        </Container>
      </section>

      <section className="section section-lg pt-lg-0 product-details">
        <Container>
          <h4>Related Products</h4>
          <Row className="justify-content-center">
            <Col>
              <div className="grid-items-equal-height">
                {newProducts.map((topProduct, index) => (
                  <Product
                    product={topProduct}
                    thumbnailColor={thumbnailsColors[index % 5]}
                    key={index}
                  ></Product>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <EnquireForm></EnquireForm>

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
