import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonials.scss";
// reactstrap components

export const Testimonials = () => {
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
            items: 3,
          },
          1400: {
            items: 4,
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
                  Pharma Company Name has been an invaluable partner in ensuring
                  our patients receive the highest quality care. Their products
                  are consistently reliable, and their service is second to
                  none.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Dr. Jane Smith
                </h4>
                <h6 className="text-primary mb-0">
                  Chief Medical Officer at HealthFirst Hospital
                </h6>
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
                  The collaboration with Pharma Company Name has accelerated our
                  research and development process. Their support has been
                  crucial in bringing our latest therapy to market
                </blockquote>
                <h4 className="heading-title text-warning mb-1">John Doe</h4>
                <h6 className="text-primary mb-0">
                  CEO of BioTech Innovations
                </h6>
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
                  Pharma Company Name has been a cornerstone in our research
                  initiatives. Their high-quality materials and exceptional
                  customer support have greatly facilitated our groundbreaking
                  work in biomedical research
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Dr. Richard Lee
                </h4>
                <h6 className="text-primary mb-0">
                  Head of Research at Global Health Institute:
                </h6>
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
                  Pharma Company Name's dedication to quality and compliance has
                  made them our preferred supplier. Their professional approach
                  and attention to detail ensure that we always receive
                  top-notch products that meet our stringent standards
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Sarah Thompson
                </h4>
                <h6 className="text-primary mb-0">
                  Procurement Manager at National Hospital Network
                </h6>
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
                  Our partnership with Pharma Company Name has been pivotal in
                  delivering essential medicines to remote areas. Their
                  logistical expertise and commitment to global health have
                  helped us make a significant impact on underserved
                  communities.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Michael O'Brien
                </h4>
                <h6 className="text-primary mb-0">
                  Executive Director at HealthAid International:
                </h6>
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
                  As a small business owner, I value the personalized service
                  and competitive pricing that Pharma Company Name provides.
                  They go above and beyond to support our needs, making it
                  easier for us to offer a wide range of products to our
                  customers.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Laura Garcia
                </h4>
                <h6 className="text-primary mb-0">
                  Pharmacy Owner at Wellness Drugstore
                </h6>
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
                  Pharma Company Name has been instrumental in our product
                  development cycle. Their extensive catalog and reliable supply
                  chain have enabled us to focus on innovation and bring new
                  solutions to the market faster. customers.
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Dr. David Brown
                </h4>
                <h6 className="text-primary mb-0">
                  Chief Scientist at Innovative Pharma Solutions
                </h6>
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
                  The strategic partnership with Pharma Company Name has
                  enhanced our operational efficiency. Their proactive approach
                  and industry insights have helped us navigate complex
                  regulatory landscapes and expand our market presence
                </blockquote>
                <h4 className="heading-title text-warning mb-1">
                  Lisa Martin
                </h4>
                <h6 className="text-primary mb-0">
                CEO of CarePlus Pharmaceuticals
                </h6>
              </figcaption>
            </figure>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};
