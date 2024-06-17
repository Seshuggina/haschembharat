import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Partners.scss";
// reactstrap components

import  curia  from "./../../assets/img/partners/curia.svg";
import drReddy from "./../../assets/img/partners/DrR.jpg";
import  granules  from "./../../assets/img/partners/Granules_logo.png";
import leepharma from "./../../assets/img/partners/l4.png";
import natcopharma from "./../../assets/img/partners/nato.png";

export const Partners = () => {
  const customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ["Previous", "Next"],
    autoplay: true,
    autoplayTimeout: 500,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      740: {
        items: 1,
      },
      940: {
        items: 2,
      },
      1199: {
        items: 3,
      },
    },
    nav: true,
    loop: true,
  };
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
        <a href="#" target="_blank">
          <img
            className="img-fluid"
            loading="lazy"
            src={curia}
            alt=""
          />
        </a>

        <a href="#" target="_blank">
          <img
            className="img-fluid"
            loading="lazy"
            src={drReddy}
            alt=""
          />
        </a>

        <a href="#" target="_blank">
          <img
            className="img-fluid"
            loading="lazy"
            src={granules}
            alt=""
          />
        </a>

        <a href="#" target="_blank">
          <img
            className="img-fluid"
            loading="lazy"
            src={leepharma}
            alt=""
          />
        </a>

        <a href="#" target="_blank">
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
