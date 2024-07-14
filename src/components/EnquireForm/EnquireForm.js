import React from "react";
import { useParams } from "react-router-dom";

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
  Label,
} from "reactstrap";

export const EnquireForm = () => {
  let { id } = useParams();
  return (
    <>
      <section className="enquiry-form">
        <Container className="mb-5">
          <Row className="justify-content-center">
            <Col lg="12">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-2">
                  <div className="text-muted text-center mb-2">
                    <h2>Enquiry</h2>
                  </div>
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
                            <Input placeholder="First Name" type="Text" />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-person" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Last Name" type="Text" />
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
                            <Input placeholder="Phone Number" type="tel" />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                {/* <i className="fa fa-person" /> */}
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
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
                            <Input placeholder="City" type="text" />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                {/* <i className="ni ni-email-83" /> */}
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="State" type="text" />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col lg="2">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                {/* <i className="ni ni-email-83" /> */}
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Zip" type="text" />
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
                          placeholder="Write Your Message Here."
                          rows="3"
                          type="textarea"
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-center">
                      <Button
                        className="mt-4 btn-block"
                        color="primary"
                        type="button"
                      >
                        Submit
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
