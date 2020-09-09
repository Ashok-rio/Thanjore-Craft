import React, { useState } from "react";
import {
  Button,
  Label,
  FormGroup,
  Form,
  Container,
  Input,
  Row,
  Col,
} from "reactstrap";
import { createAddress } from "./../../service/ApiService";
import Header from "./../Header/Header";

export default function Address(props) {
  const [address, setAddress] = useState({
    name: "",
    phone: "0",
    address: "",
    town: "",
    city: "",
    state: "",
    type: "",
  });
  const [message, setMessage] = useState("");


  const registerSubmit = async (e) => {
    e.preventDefault();
    console.log(address)
    let [addresses, phone, name, town] = [
      address.address,
      address.phone,
      address.name,
      address.town,
    ];
    console.log(phone)
    if (name !== "" && name !== undefined && name.length > 3) {
      if (phone.length === 10 && phone !== "0") {
        if (addresses !== "" && address !== undefined) {
          if (town !== "" && town.length !== undefined) {
            let result;
            result = await createAddress(address);
            if (result.success) {
              window.location.pathname = "/address";
            } else {
              setMessage(result.error);
            }
          } else {
            setMessage("please enter the valid password");
          }
        } else {
          setMessage("please enter the valid address");
        }
      } else {
        setMessage("please enter the valid phone");
      }
    } else {
      setMessage("please enter the valid name");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true}>
        <Form onSubmit={registerSubmit}>
          <Row style={{ padding: "150px 30px 30px 30px" }}>
            <Col lg={6}>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="name"
                    id="exampleEmail"
                    placeholder="Full Name"
                    onChange={(e) => {
                        setAddress({
                          ...address,
                          name: e.target.value,
                        });
                    }}
                    style={{
                      margin: "8px 0",
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "2px solid black",
                      width: "90%",
                      padding: "12px 20px",
                    }}
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="phone"
                    id="exampleEmail"
                    placeholder="Mobile.No"
                    onChange={(e) => {
                        setAddress({
                          ...address,
                          phone: e.target.value,
                        });
                    }}
                    style={{
                      margin: "8px 0",
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "2px solid black",
                      width: "90%",
                      padding: "12px 20px",
                    }}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row style={{ padding: "25px 30px 25px 30px" }}>
            <Col lg={12}>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="Address"
                    id="exampleEmail"
                    placeholder="Address(House.No,Buildin,Street,Area)"
                    onChange={(e) => {
                        setAddress({
                          ...address,
                          address: e.target.value,
                        });
                    }}
                    style={{
                      margin: "8px 0",
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "2px solid black",
                      width: "95%",
                      padding: "12px 20px",
                    }}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row style={{ padding: "25px 30px 25px 30px" }}>
            <Col lg={6}>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="town"
                    id="exampleEmail"
                    placeholder="Locality / Town"
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        town: e.target.value,
                      });
                    }}
                    style={{
                      margin: "8px 0",
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "2px solid black",
                      width: "90%",
                      padding: "12px 20px",
                    }}
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="city"
                    id="exampleEmail"
                    placeholder="city / District"
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        city: e.target.value,
                      });
                    }}
                    style={{
                      margin: "8px 0",
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "2px solid black",
                      width: "90%",
                      padding: "12px 20px",
                    }}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row style={{ padding: "25px 30px 25px 30px" }}>
            <Col lg={6}>
              <FormGroup row>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="email"
                    id="exampleEmail"
                    placeholder="State"
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        state: e.target.value,
                      });
                    }}
                    style={{
                      margin: "8px 0",
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "2px solid black",
                      width: "90%",
                      padding: "12px 20px",
                    }}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <FormGroup tag="fieldset" style={{ padding: "20px" }}>
                <legend style={{ position: "relative", left: "-310px" }}>
                  Select Address Type:
                </legend>
                <Row>
                  <Col lg={4}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="type"
                          value="home"
                          onChange={(e) => {
                            setAddress({
                              ...address,
                              type: e.target.value,
                            });
                          }}
                        />
                        Home
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="type"
                          value="home"
                          onChange={(e) => {
                            setAddress({
                              ...address,
                              type: e.target.value,
                            });
                          }}
                        />
                        Office/Commercial
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          {message && (
            <Row>
              <Col lg={12}>{message}</Col>
            </Row>
          )}
          <Row>
            <Col lg={6}>
              <Button
                style={{
                  color: "white",
                  width: "80%",
                  height: "100px",
                  backgroundColor: "#f3852a",
                  position: "relative",
                  left: "100px",
                  top: "20px",
                }}
              >
                Cancel
              </Button>
            </Col>
            <Col lg={6}>
              <Button
                type="submit"
                style={{
                  color: "white",
                  width: "80%",
                  height: "100px",
                  backgroundColor: "#0979f9",
                  position: "relative",
                  left: "20px",
                  top: "20px",
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
}
