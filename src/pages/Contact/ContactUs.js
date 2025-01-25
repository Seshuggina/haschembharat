import React, { useState } from "react";
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
  Alert,
} from "reactstrap";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const trimFormData = () => {
    // Trim all fields in the formData
    return {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };
  };

  const validateForm = (trimmedData) => {
    const newErrors = {};

    // Name validation
    if (!trimmedData.name) {
      newErrors.name = "Name is required.";
    } else if (trimmedData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // Email validation
    if (!trimmedData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
        trimmedData.email
      )
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    // Subject validation
    if (!trimmedData.subject) {
      newErrors.subject = "Subject is required.";
    } else if (trimmedData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    // Message validation
    if (!trimmedData.message) {
      newErrors.message = "Message is required.";
    } else if (trimmedData.message.length < 15) {
      newErrors.message = "Message must be at least 15 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const trimmedData = trimFormData(); // Trim the input values
    if (validateForm(trimmedData)) {
      emailjs
        .send(
          "service_uknh1qg",
          "template_hp51jrs",
          trimmedData,
          "5lTz9Hy5ZT1a9GGw4"
        )
        .then(
          () => {
            setSuccessMessage("Your message has been sent successfully!"); // Show success message
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            }); // Clear form
            setErrors({}); // Clear errors
            setTimeout(() => {
              setSuccessMessage(""); // Clear success message after 5 seconds
            }, 5000);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    }
  };

  return (
    <>
      <section className="section section-shaped section-sm">
        <section className="shape page-banner contactus-banner"></section>
        <Container className="pt-lg-7 pt-sm-7 pt-xs-7">
          <h1 className="text-white">Contact</h1>
        </Container>
      </section>
      <section className="section bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-2">
                  <div className="text-muted text-center mb-2">
                    <h2>Reach Us Immediately</h2>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-4 py-lg-4">
                  <Row className="justify-content-center">
                    <Col lg="6">
                      <div className="d-flex">
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                          <i class="fa fa-address-card" aria-hidden="true"></i>
                        </div>
                        <div className="px-4">
                          <h4 className="display-3">Address</h4>
                          <p className="lead mt-0">
                            Plot No. 27, Flat No. 402, Ramesh Towers, Ramesh
                            Towers, Nizampet, Hyderabad, Telangana - 500090
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex flex-row align-items-center">
                          <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                            <i className="fa fa-envelope" aria-hidden="true" />
                          </div>
                          <div className="ml-3" style={{ marginTop: "-15px" }}>
                            <a href="mailto:contactus@haschembharat.com">
                              contactus@haschembharat.com
                            </a>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </div>
                          <div className="d-flex flex-column pl-3">
                            <a href="tel:+917032925939">+91 7032925939</a>
                            <a className="mt-2" href="tel:+918121333007">
                              +91 8121333007
                            </a>
                          </div>
                        </div>
                        <a
                          target=""
                          href="https://api.whatsapp.com/send?phone=8121333007"
                        >
                          <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i>
                          </div>
                          <Button className="ml-3" color="success">
                            Click to connect
                          </Button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-2">
                  <div className="text-muted text-center mb-2">
                    <h2>Send a Message</h2>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-4 py-lg-4">
                  {/* Success message display */}
                  {successMessage && (
                    <Alert color="success" className="text-center">
                      {successMessage}
                    </Alert>
                  )}
                  <Form role="form" onSubmit={sendEmail}>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-person" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Your Name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          {errors.name && (
                            <small className="text-danger">{errors.name}</small>
                          )}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText />
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          {errors.email && (
                            <small className="text-danger">
                              {errors.email}
                            </small>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText />
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone Number"
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText />
                            </InputGroupAddon>
                            <Input
                              placeholder="Subject"
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </InputGroup>
                          {errors.subject && (
                            <small className="text-danger">
                              {errors.subject}
                            </small>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText />
                        </InputGroupAddon>
                        <Input
                          placeholder="Write a large text here ..."
                          rows="7"
                          type="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </FormGroup>
                    <div className="text-center">
                      <Button
                        className="mt-4 btn-block"
                        color="primary"
                        type="submit"
                      >
                        SEND
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
