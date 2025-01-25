/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <div className="headroom--not-top">
            <Container>
              <Row>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget_text clearfix">
                    <div className="footer-logo">
                      <img
                        id="footer-logo-img"
                        className="img-fluid auto_size"
                        height="46"
                        width="170"
                        src="https://haschembharat.com/utilities/frontend/images/logo2.png"
                        alt="image"
                      />
                    </div>
                    <div className="textwidget widget-text">
                      <p>
                        Our Genesis In 2023, HASCHEM Bharat was born in the
                        heart of Hyderabad, a city renowned for its
                        pharmaceutical prowess.
                      </p>
                      <a
                        className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-skincolor"
                        href="/contact-us"
                      >
                        Contact Us <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                  <div className="widget widget_nav_menu clearfix">
                    <h3 className="widget-title">Quick Links</h3>
                    <ul
                      id="menu-footer-quick-links"
                      className="list-unstyled menu"
                    >
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/products">Products</a>
                      </li>
                      <li>
                        <a href="/services">Services</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                  <div className="widget widget_cta clearfix">
                    <h3 className="widget-title">Quick Contacts</h3>
                    <div className="d-flex">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs margin_right15 margin_bottom15 ">
                        <i className="flaticon flaticon-call"></i>
                      </div>
                      <h4>
                        <a href="tel:+917032925939">+91 7032925939</a> <br />
                        <a href="tel:+918121333007">+91 8121333007</a>
                      </h4>
                    </div>
                    <p>
                      Ramesh Towers, Nizampet, Hyderabad, <br />
                      Telangana - 500090
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <a
                        className="ttm-btn btn-inline ttm-btn-size-sm ttm-icon-btn-right ttm-btn-color-skincolor margin_right40 margin_bottom5"
                        href="https://maps.app.goo.gl/rpUy2TE5B3BmTnqE7" target="_blank"
                      >
                        Get direction <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="social-icons d-inline-flex margin_top10 margin_bottom10">
                        <Col className="text-lg-center btn-wrapper">
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="facebook"
                            href="#"
                            id="likeUsFacebook"
                            target="_blank"
                          >
                            <span className="btn-inner--icon">
                              <i className="fa fa-linkedin-square" />
                            </span>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="likeUsFacebook"
                          >
                            Follow Us on LinkedIn
                          </UncontrolledTooltip>
                        </Col>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
          <div className="copyright">
            <Container>
              <Row className="align-items-center justify-content-md-between text-center">
                <Col>
                  <div>
                    Copyright © {new Date().getFullYear()}{" "}
                    <a href="https://haschembharat.com/">HASCHEM BHARAT,</a>
                    &nbsp; All rights reserved
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
