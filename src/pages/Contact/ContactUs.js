import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./ContactUs.scss";

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <section className="contactus-banner"></section>
          <Container className="pt-lg-7">
            <h1 className="text-white">Contact US</h1>
            <Row className="justify-content-center"></Row>
          </Container>
        </section>
        <section className="section bg-secondary">
          <Container>
            <Row className="justify-content-center">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                  <h3 className="text-uppercase text-center">get in touch!</h3>
                  <h2 className="title text-capitalize text-center">
                    Have A Questions Drop Us Line?
                  </h2>
                </div>
                <div className="title-desc text-center">
                  <p className="lead">
                    We take great pride in everything that we do, complete
                    control over products allows us to ensure customers receive
                    best service.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
          <Container className="pt-lg-5">
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-2">
                    <div className="text-muted text-center mb-2">
                      <h2>Send a Message</h2>
                    </div>
                    {/* <div className="btn-wrapper text-center">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={
                              require("assets/img/icons/common/github.svg")
                                .default
                            }
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={
                              require("assets/img/icons/common/google.svg")
                                .default
                            }
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div> */}
                  </CardHeader>
                  <CardBody className="px-lg-4 py-lg-4">
                    <Form role="form">
                      <Row>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fa fa-person" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Your Name" type="Text" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  {/* <i className="ni ni-email-83" /> */}
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Email" type="email" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  {/* <i className="fa fa-person" /> */}
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Phone Number" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  {/* <i className="ni ni-email-83" /> */}
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Subject" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText></InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="exampleFormControlTextarea1"
                            placeholder="Write a large text here ..."
                            rows="3"
                            type="textarea"
                          />
                        </InputGroup>
                      </FormGroup>
                      {/* <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span>Remember me</span>
                        </label>
                      </div> */}
                      <div className="text-center">
                        <Button
                          className="mt-4 btn-block"
                          color="primary"
                          type="button"
                        >
                          SEND
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-2">
                    <div className="text-muted text-center mb-2">
                      <h2>Reach Us Directly</h2>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-4 py-lg-4">
                    <div className="ttm-bgcolor-white p-30 border-rad_5 margin_top15">
                      <div className="featured-icon-box icon-align-top-content margin_top0 margin_bottom25">
                        <div className="featured-content">
                          <div className="featured-title">
                            <h4 className="margin_bottom0 fs-20">
                              Let's Call or Email
                            </h4>
                          </div>
                          <div className="featured-desc">
                            <i
                              className="fa fa-mobile icon-blue fa-3x align-middle"
                              aria-hidden="true"
                            ></i>
                            <a href="tel:+917816003510"> +91 7816 00 3510</a>
                            <br />
                            <i
                              className="fa fa-envelope-o icon-blue fa-2x align-middle"
                              aria-hidden="true"
                            ></i>{" "}
                            &nbsp;
                            <a
                              className=""
                              href="mailto:contactus@haschembharat.com?subject=Subject Text"
                            >
                              <small>contactus@haschembharat.com</small>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="featured-icon-box icon-align-top-content margin_bottom25">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <i className="flaticon-address"></i>
                          </div>
                        </div>
                        <div className="featured-content pt-5">
                          <div className="featured-title">
                            <h4 className="margin_bottom0 fs-20">
                              <i
                                className="fa fa-map-marker fa-2x align-middle"
                                aria-hidden="true"
                              ></i>
                              &nbsp; We Reached Here
                            </h4>
                          </div>
                          <div className="featured-desc">
                            #Ameerpet, Hyderabad, TS - 5000032
                          </div>
                        </div>
                      </div>
                      <div className="featured-icon-box icon-align-top-content margin_bottom10">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="themifyicon ti-themify-favicon"></i>
                          </div>
                        </div>
                        <div className="featured-content pt-5">
                          <div className="featured-title">
                            <h4 className="margin_bottom0 fs-20">
                              <i
                                className="fa fa-whatsapp fa-2x align-middle"
                                aria-hidden="true"
                              ></i>
                              &nbsp;{" "}
                              <a
                                target="_blank"
                                href="https://wa.me/9885500044?text=Hi!"
                              >
                                Chat on WhatsApp
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.732281738927!2d-122.47286700000001!3d37.803324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1713025871058!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </>
    );
  }
}

export default ContactUs;
