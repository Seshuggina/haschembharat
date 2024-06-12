import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonials.scss";
// reactstrap components

export const Testimonials = () => {
  const customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ["Previous", "Next"],
    autoplay: true,
    autoplayTimeout: 5000000,
    autoplayHoverPause: true,
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
    margin: "10px",
  };
  return (
    <>
      <OwlCarousel
        options="customOptions"
        className="owl-theme"
        margin={10}
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
          1199: {
            items: 4,
          },
          1400: {
            items: 5,
          },
        }}
      >
        <div className="card border-0 border-bottom border-primary  ">
          <div className="card-body p-3 p-xxl-5">
            <figure>
              <img
                className="img-fluid rounded rounded-circle mb-4 border border-5"
                loading="lazy"
                src="https://intheknow.insead.edu/sites/intheknow/files/2019-03/jayanth_mantri_testimonial.jpeg"
                alt=""
              />
              <figcaption>
                <blockquote className="bsb-blockquote-icon mb-2">
                  Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                  euismod massa, at aliquet erat turpis quis diam. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">Mark Smith</h4>
                <h6 className="text-primary mb-0">Marketing Specialist</h6>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary  ">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img
                className="img-fluid rounded rounded-circle mb-4 border border-5"
                loading="lazy"
                src="https://i.pinimg.com/736x/7d/7c/4a/7d7c4aa7089687935320b48473b119f1.jpg"
                alt=""
              />
              <figcaption>
                <blockquote className="bsb-blockquote-icon mb-2">
                  Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                  euismod massa, at aliquet erat turpis quis diam. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">Mark Smith</h4>
                <h6 className="text-primary mb-0">Marketing Specialist</h6>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary  ">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img
                className="img-fluid rounded rounded-circle mb-4 border border-5"
                loading="lazy"
                src="https://i.pinimg.com/736x/49/86/4a/49864a1b8507154ba92f3f6d095b0e92.jpg"
                alt=""
              />
              <figcaption>
                <blockquote className="bsb-blockquote-icon mb-2">
                  Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                  euismod massa, at aliquet erat turpis quis diam. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">Mark Smith</h4>
                <h6 className="text-primary mb-0">Marketing Specialist</h6>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary  ">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img
                className="img-fluid rounded rounded-circle mb-4 border border-5"
                loading="lazy"
                src="https://i.pinimg.com/564x/d5/94/be/d594be9babc962d23ead66961ff9c77b.jpg"
                alt=""
              />
              <figcaption>
                <blockquote className="bsb-blockquote-icon mb-2">
                  Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                  euismod massa, at aliquet erat turpis quis diam. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">Mark Smith</h4>
                <h6 className="text-primary mb-0">Marketing Specialist</h6>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img
                className="img-fluid rounded rounded-circle mb-4 border border-5"
                loading="lazy"
                src="https://i.pinimg.com/564x/7a/7c/38/7a7c3893ce3bbe730bde60dacc2a072b.jpg"
                alt=""
              />
              <figcaption>
                <blockquote className="bsb-blockquote-icon mb-2">
                  Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                  euismod massa, at aliquet erat turpis quis diam. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">Mark Smith</h4>
                <h6 className="text-primary mb-0">Marketing Specialist</h6>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="card border-0 border-bottom border-primary  ">
          <div className="card-body p-4 p-xxl-5">
            <figure>
              <img
                className="img-fluid rounded rounded-circle mb-4 border border-5"
                loading="lazy"
                src="https://intheknow.insead.edu/sites/intheknow/files/2019-03/jayanth_mantri_testimonial.jpeg"
                alt=""
              />
              <figcaption>
                <blockquote className="bsb-blockquote-icon mb-2">
                  Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                  euismod massa, at aliquet erat turpis quis diam. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">Mark Smith</h4>
                <h6 className="text-primary mb-0">Marketing Specialist</h6>
              </figcaption>
            </figure>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};
