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

export const EnquireForm = () => {
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
      <Card className="bg-secondary shadow border-0 card">
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
                    <small className="text-danger">{errors.email}</small>
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
                    <small className="text-danger">{errors.subject}</small>
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
              <Button className="mt-4 btn-block" color="primary" type="submit">
                SEND
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
