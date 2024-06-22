import React, { memo, useEffect } from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Product = memo(({ product, thumbnailColor }) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Col lg="3 mb-4" data-aos="fade-up">
        <Card className="card-lift--hover shadow border-0 card-border">
          <CardBody className="py-3">
            <div
              className={
                "icon icon-shape rounded-circle mb-4 icon-shape-" +
                thumbnailColor
              }
            >
              <img
                className="img-fluid"
                loading="lazy"
                src={`./../../assets/img/products/${product.productImage}`}
                alt=""
              />
              <i className="ni ni-check-bold" />
            </div>
            <h6 className="text-primary text-uppercase">{product.parentAPI}</h6>
            <p className="description mt-3">{product.impurityName}</p>
            <div>
              <Badge color={thumbnailColor} pill className="mr-1">
                {product.casNo}
              </Badge>
              <Badge color={thumbnailColor} pill className="mr-1">
                {product.leadTime}
              </Badge>
              <Badge color={thumbnailColor} pill className="mr-1">
                {product.readyStock}
              </Badge>
            </div>
            <Button
              className="mt-4"
              color={thumbnailColor}
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Explore
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
});
