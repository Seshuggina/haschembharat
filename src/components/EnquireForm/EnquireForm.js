import React from "react";
import { useParams } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Form,
} from "reactstrap";

export const EnquireForm = () => {
  let { id } = useParams();
  return (
    <>
      <section className="enquiry-form">
        <Container>
          <div className="justify-content-center">
            <h2>Enquiry Form</h2>
          </div>
          <Form>
          <Label for="exampleyourname">Your Name</Label>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input id="firstname" name="Name" placeholder="First Name" type="name" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input id="lastname" name="Name" placeholder="Last Name" type="name" />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplephonenumber">Phone Number</Label>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleName">Your E-mail Address</Label>
                  <Input
                    id="exampleEmail"
                    name="Name"
                    placeholder="ex:myname@example.com"
                    type="name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input id="exampleCity" name="city" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input id="exampleState" name="state" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input id="exampleZip" name="zip" />
                </FormGroup>
              </Col>
            </Row>
            <Button type="button" className="my-4 btn btn-primary" color="primary">Sign in</Button>
          </Form>
        </Container>
      </section>

    </>
  );
};
