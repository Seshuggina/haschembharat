import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "./../../components/product/product";
import { EnquireForm } from "../../components/EnquireForm/EnquireForm";
import { ProductDetail } from "./../../components/productDetail/productDetail";
import products from "./../../assets/data/products.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "./ProductDetails.scss";

export const ProductDetails = (product) => {
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];
  let { id } = useParams();
  const selectedProduct = products?.find(
    (product) => product.Sno?.toString() === id
  );

  const relatedProducts = products
    .filter(
      (product) =>
        product.Sno !== selectedProduct.Sno && // Exclude the current product
        product.category.some((category) =>
          selectedProduct.category.includes(category)
        )
    )
    .slice(0, 4); // Limit to the first 4 products

  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape products-details-banner"></div>
        <Container className="pt-lg-7 pt-sm-7">
          <h1 className="text-white">Product Details</h1>
        </Container>
      </section>
      <section className="pt-5 pt-lg-0 mt--100 product-details">
        <Container>
          <Row className="justify-content-center">
            <ProductDetail
              product={selectedProduct}
              thumbnailColor={thumbnailsColors[selectedProduct.Sno % 5]}
              key={id}
            ></ProductDetail>
          </Row>
        </Container>
      </section>
      {/* Enquire Form */}
      <section className="pt-5 product-details">
        <Container>
          <div>
            <EnquireForm></EnquireForm>
          </div>
        </Container>
      </section>

      <section className="pt-5 product-details">
        <Container>
          <h4 className="mb-4">Related Products:</h4>
          <Row className="justify-content-center">
            <Col>
              <div className="grid-items-equal-height">
                {relatedProducts.map((topProduct, index) => (
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

      <section className="product-details">
        <Container>
          <div className="bg-secondary shadow border-0 card px-lg-4 py-lg-4">
            <h4>Reach Us Immediately:</h4>
            <Row className="justify-content-center">
              <Col>
                <a href="tel:+917032925939">+91 7032925939</a> <br/>{" "}
                <a className="mt-2" href="tel:+918121333007">
                  +91 8121333007
                </a><br/>{" "}
                <a  className="mt-2" href="mailto:contactus@haschembharat.com">
                  contactus@haschembharat.com
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
