/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

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
                        <a href="/about-us">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/products">
                          Products
                        </a>
                      </li>
                      <li>
                        <a href="/services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/contact-us">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                  <div className="widget widget_cta clearfix">
                    <h3 className="widget-title">Quick Contacts</h3>
                    <p>If you have any questions or need help</p>
                    <div className="d-flex">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs margin_right15 margin_bottom15 ">
                        <i className="flaticon flaticon-call"></i>
                      </div>
                      <h4>
                        <a href="tel:+917816003510">+91 7816 00 3510</a>
                        </h4>
                    </div>
                    <p>#Ameerpet, Hyderabad, TS - 5000032</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <a
                        className="ttm-btn btn-inline ttm-btn-size-sm ttm-icon-btn-right ttm-btn-color-skincolor margin_right40 margin_bottom5"
                        href="#"
                      >
                        Get direction <i className="fa fa-chevron-right"></i>
                      </a>
                      <div className="social-icons d-inline-flex margin_top10 margin_bottom10">
                        <Col className="text-lg-center btn-wrapper">
                          <Button
                            className="btn-icon-only rounded-circle"
                            color="twitter"
                            href="https://twitter.com/creativetim"
                            id="followUsTwitter"
                            target="_blank"
                          >
                            <span className="btn-inner--icon">
                              <i className="fa fa-twitter" />
                            </span>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="followUsTwitter"
                          >
                            Follow us
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="facebook"
                            href="https://www.facebook.com/creativetim"
                            id="likeUsFacebook"
                            target="_blank"
                          >
                            <span className="btn-inner--icon">
                              <i className="fa fa-facebook-square" />
                            </span>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="likeUsFacebook"
                          >
                            Like us
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="dribbble"
                            href="https://dribbble.com/creativetim"
                            id="followUsInsta"
                            target="_blank"
                          >
                            <span className="btn-inner--icon">
                              <i className="fa fa-instagram" />
                            </span>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="followUsInsta"
                          >
                            Follow us
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
