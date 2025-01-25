import React, { memo } from "react";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";
import ImageLoad from "../Image/ImageLoad";

export const ProductDetail = memo(({ product, thumbnailColor }) => {
  return (
    <>
      <Card className="shadow border-0 card-border w-100">
        <CardBody className="py-3">
          <Row className="justify-content-center">
            <Col xs="12" sm="5" lg="5">
              <ImageLoad
                imageName={product.productImage}
                altTxt={product.impurityName}
              />
            </Col>
            <Col xs="12" sm="7" lg="7">
              <h3 className="text-primary text-uppercase">
                {product.impurityName}
              </h3>
              <div>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Synonym:</strong> {product.synonym}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Molecular Formula:</strong> {product.molecularFormula}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Molecular Weight:</strong> {product.molecularWeight}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Cas No:</strong> {product.casNo}
                </p>
                <Badge color="primary" pill className="mr-1">
                  {product.readyStock}
                </Badge>
                <Badge color="primary" pill className="mr-1">
                  {product.category}
                </Badge>
                <Badge color="primary" pill className="mr-1">
                  {product.leadTime}
                </Badge>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
});
