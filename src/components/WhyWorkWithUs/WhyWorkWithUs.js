import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import achievement from "./../../assets/img/aboutus/icons/achievement.png";
import awareness from "./../../assets/img/aboutus/icons/awareness.png";
import customerService from "./../../assets/img/aboutus/icons/customer-service.png";
// reactstrap components

export const WhyWorkWithUs = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        margin={10}
        responsive={{
          100: {
            items: 1,
          },
          500: {
            items: 1,
          },
          991: {
            items: 2,
          },
          1199: {
            items: 2,
          },
          1400: {
            items: 3,
          },
        }}
      >
        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-3 p-xxl-5">
            <h4 className="text-center">EXPERTISE AND EXPERIENCE</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={achievement}
                alt="Expertise and Experience"
              />
            </figure>
            <p>
              Our team of highly skilled and experienced organic chemists
              provides extensive synthesis services for small/complex molecules,
              catering to scales from milligrams to hundreds of grams.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">HIGH QUALITY PRODUCTS</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={awareness}
                alt="High-Quality Products"
              />
            </figure>
            <p>
              Committed to excellence, we rigorously test every compound using
              validated methods to ensure quality and reliability before
              delivery.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">CUSTOMER CENTRIC APPROACH</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={customerService}
                alt="Exceptional Customer Service"
              />
            </figure>
            <p>
              Our customer-centric approach involves prioritizing the unique
              needs of clients by delivering high- quality, reliable standards,
              ensuring timely support, and fostering collaborative relationships
              to enhance customer satisfaction and trust.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};
