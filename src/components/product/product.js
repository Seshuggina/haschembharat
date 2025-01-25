import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody } from "reactstrap";
import "./product.scss";
import ImageLoad from "../Image/ImageLoad";

export const Product = memo(({ product, thumbnailColor }) => {
  useEffect(() => {
    // AOS.init();
  }, []);

  return (
    <Card className="card-lift--hover shadow border-0 card-border product-thumbnail">
      <CardBody className="py-3">
        <ImageLoad
          imageName={product.productImage}
          altTxt={product.impurityName}
        />
        <h6 className="text-primary text-uppercase">{product.impurityName}</h6>
        <p className="description mt-3">{product.parentAPI}</p>
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
        <Link
          type="button"
          className="mt-4 btn btn-primary"
          color="primary"
          as={Link}
          outline
          to={`/productDetails/${product.Sno}`}
        >
          Explore
        </Link>
      </CardBody>
    </Card>
  );
});
