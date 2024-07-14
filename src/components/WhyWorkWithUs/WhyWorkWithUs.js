import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import achievement from "./../../assets/img/aboutus/icons/achievement.png";
import awareness from "./../../assets/img/aboutus/icons/awareness.png";
import customerService from "./../../assets/img/aboutus/icons/customer-service.png";
import dependable from "./../../assets/img/aboutus/icons/dependable.png";
import innovation from "./../../assets/img/aboutus/icons/innovation.png";
import practices from "./../../assets/img/aboutus/icons/practices.png";
import reach from "./../../assets/img/aboutus/icons/reach.png";
import reputation from "./../../assets/img/aboutus/icons/reputation.png";
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
            <h4 className="text-center">Expertise and Experience</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={achievement}
                alt="Expertise and Experience"
              />
            </figure>
            <p>
              Our team of seasoned professionals brings over 120 years of
              combined experience in the scientific and business fields. This
              extensive knowledge ensures that we understand the unique needs
              and challenges of our clients and can provide the best possible
              solutions.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">High-Quality Products</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={awareness}
                alt="High-Quality Products"
              />
            </figure>
            <p>
              We are committed to delivering only the highest quality reference
              standards and research chemicals. Our rigorous quality control
              processes ensure that our products consistently meet or exceed
              industry standards.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">Exceptional Customer Service</h4>
            <figure>
             
              <img
                className="img-fluid"
                loading="lazy"
                src={customerService}
                alt="Exceptional Customer Service"
              />
            </figure>
            <p>
              We prioritize our clients' success and satisfaction. Our customer
              service team is dedicated to providing personalized support and
              prompt responses, ensuring a seamless and positive experience.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">Innovation and Growth</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={innovation}
                alt="Innovation and Growth"
              />
            </figure>
            <p>
              We continuously invest in research and development to stay at the
              cutting edge of scientific innovation. Our commitment to growth
              and expansion means we are always looking for new ways to serve
              our clients better and to enter new markets.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">Global Reach</h4>
            <figure>
             
              <img
                className="img-fluid"
                loading="lazy"
                src={reach}
                alt="Global Reach"
              />
            </figure>
            <p>
              With a strategic focus on global expansion, we are well-positioned
              to serve clients worldwide. Our international presence allows us
              to collaborate with a diverse range of scientific communities and
              provide solutions tailored to regional needs.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">Sustainable Practices</h4>
            <figure>
             
              <img
                className="img-fluid"
                loading="lazy"
                src={practices}
                alt="Sustainable Practices"
              />
            </figure>
            <p>
              We are committed to sustainability and responsible sourcing. By
              choosing to work with us, you are partnering with a company that
              values environmental stewardship and ethical business practices.
            </p>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary whyworkwithus">
          <div className="card-body p-4 p-xxl-5">
            <h4 className="text-center">Trust and Reliability</h4>
            <figure>
              <img
                className="img-fluid"
                loading="lazy"
                src={dependable}
                alt="Trust and Reliability"
              />
            </figure>
            <p>
              Our reputation for reliability and trustworthiness is built on
              years of delivering consistent quality and exceptional service.
              You can depend on us to be a steadfast partner in your scientific
              endeavors.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};
