import React, { useState, useEffect } from "react";
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
import { getAddress,editAddress } from "./../../service/ApiService";
import Header from "./../Header/Header";

function EditAddress(props) {
    const { match } = props;
    let { id } = match.params;

    const [editAddresses,setEditAddresses] = useState([]);
    const [message,setMessage] = useState('');
  useEffect(() => {
    async function fetchData() {
      try{
        const result = await getAddress(id);
        if(result){
            setEditAddresses(result);
        }
    }
    catch(e){}
    }
    fetchData();
    },[id])

const editSubmit = async(e) => {
    e.preventDefault();
    console.log(editAddress)
    let [addresses, phone, name, town] = [
      editAddresses.address,
      editAddresses.phone,
      editAddresses.name,
      editAddresses.town,
    ];
    console.log(phone)
    if (name !== "" && name !== undefined && name.length > 3) {
      if (phone.length === 10 && phone !== "0") {
        if (addresses !== "" && addresses !== undefined) {
          if (town !== "" && town.length !== undefined) {
            let result;
            result = await editAddress(editAddresses);
            console.log(result)
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
}

    return (
        <React.Fragment>
        <Header />
        <Container fluid={true}>
          <Form onSubmit={editSubmit}>
            <Row style={{ padding: "150px 30px 30px 30px" }}>
              <Col lg={6}>
                <FormGroup row>
                  <Col sm={12}>
                    <Input
                      type="text"
                      name="name"
                      id="exampleEmail"
                      value = {editAddresses.name}
                      placeholder="Full Name"
                      onChange={(e) => {
                          setEditAddresses({
                            ...editAddresses,
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
                      value = {editAddresses.phone}
                      placeholder="Mobile.No"
                      onChange={(e) => {
                        setEditAddresses({
                            ...editAddresses,
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
                      value = {editAddresses.address}
                      placeholder="Address(House.No,Buildin,Street,Area)"
                      onChange={(e) => {
                        setEditAddresses({
                            ...editAddresses,
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
                      value = {editAddresses.town}
                      onChange={(e) => {
                        setEditAddresses({
                          ...editAddresses,
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
                      value = {editAddresses.city}
                      placeholder="city / District"
                      onChange={(e) => {
                        setEditAddresses({
                          ...editAddresses,
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
                      name="state"
                      id="exampleEmail"
                      value = {editAddresses.state}
                      placeholder="State"
                      onChange={(e) => {
                        setEditAddresses({
                          ...editAddresses,
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
                            checked={editAddresses.type === "home"?"checked":null}
                            onChange={(e) => {
                                setEditAddresses({
                                ...editAddresses,
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
                            value="office"
                            checked={editAddresses.type === "office"?"checked":null}
                            onChange={(e) => {
                                setEditAddresses({
                                ...editAddresses,
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
    )
}

export default EditAddress
