import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Partners.scss";
// reactstrap components

import  curia  from "./../../assets/img/partners/curia.png";
import drReddy from "./../../assets/img/partners/drreddy.png";
import  granules  from "./../../assets/img/partners/Granules_logo.png";
import leepharma from "./../../assets/img/partners/l4.png";
import natcopharma from "./../../assets/img/partners/nato.png";

export const Partners = () => {
  return (
    <>
      <OwlCarousel
        margin={50}
        loop={true}
        autoplay={true}
        autoplayTimeout={2500}
        autoplayHoverPause={true}
        mouseDrag={true}
        touchDrag={true}
        freeDrag={true}
        responsive={{
          100: {
            items: 1,
          },
          500: {
            items: 2,
          },
          991: {
            items: 3,
          },
          1400: {
            items: 4,
          },
        }}
        className="owl-theme our-partners"
      >
        <a href="https://curiaglobal.com/" target="_blank" rel="noreferrer">
          <img
            className="img-fluid"
            loading="lazy"
            src={curia}
            alt=""
          />
        </a>

        <a href="https://www.drreddys.com/" target="_blank" rel="noreferrer">
          <img
            className="img-fluid"
            loading="lazy"
            src={drReddy}
            alt=""
          />
        </a>

        <a href="https://granulesindia.com/" target="_blank" rel="noreferrer">
          <img
            className="img-fluid"
            loading="lazy"
            src={granules}
            alt=""
          />
        </a>

        <a href="https://www.leepharma.com/" target="_blank" rel="noreferrer">
          <img
            className="img-fluid"
            loading="lazy"
            src={leepharma}
            alt=""
          />
        </a>

        <a href="https://www.natcopharma.co.in/" target="_blank" rel="noreferrer">
          <img
            className="img-fluid"
            loading="lazy"
            src={natcopharma}
            alt=""
          />
        </a>
      </OwlCarousel>
    </>
  );
};
