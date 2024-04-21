import React, { useState, useEffect, memo } from "react";

// reactstrap components
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

export const Product = memo(({ product, thumbnailColor }) => {
  return (
    <>
      <Col lg="4 mb-4">
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <div
              className={
                "icon icon-shape rounded-circle mb-4 icon-shape-" +
                thumbnailColor
              }
            >
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
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
});
