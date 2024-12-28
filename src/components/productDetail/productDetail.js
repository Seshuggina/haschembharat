import React, { memo } from "react";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

export const ProductDetail = memo(({ product, thumbnailColor }) => {
  return (
    <>
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
                {product.impurityName}
              </h3>
              <div>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Synonym:</strong> {product.synonym}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Molecular Formula:</strong>{" "}
                  {product.molecularFormula}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Molecular Weight:</strong>{" "}
                  {product.molecularWeight}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>Catlog Number:</strong>{" "}
                  {product.catlogNumber}
                </p>
                <p>
                  <i className="ni ni-vector"></i>&nbsp;
                  <strong>cas No:</strong> {product.casNo}
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
