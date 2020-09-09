import React from "react";
import { Col, Card, Row, CardBody, Form, Input, Button } from "reactstrap";
import useForm from "../../hooks/useForm";
import API from "../../services/ApiService";
import { toast } from "react-toastify";

toast.configure();

const toastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
};

const Addproduct = () => {
  const [values, handleChanger] = useForm();

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      let result;
      result = await API.createProduct(values);
      if (result.success === true) {
        toast.success(result.message, toastOptions);
        window.location = '/'
      } else {
        toast.error(result.error, toastOptions);
      }
    } catch (e) {}
    console.log(values);
  };
  return (
    <React.Fragment>
      <Col>
        <Card style={{ height: "750px", padding: "6%", overflowY: "auto" }}>
          <h3>ADD PRODUCT</h3>
          <Card style={{ padding: "8%", border: "none" }}>
            <CardBody>
              <Form onSubmit={addProduct}>
                <Row>
                  <Col lg={6}>
                    <Input
                      className={"loginInputpanel"}
                      type="name"
                      name="name"
                      id="exampleEmail"
                      placeholder="Enter product name"
                      value={values.name || ""}
                      onChange={handleChanger}
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      className={"loginInputpanel"}
                      type="name"
                      name="size"
                      id="exampleEmail"
                      placeholder="Size"
                      value={values.size || ""}
                      onChange={handleChanger}
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: "50px" }}>
                  <Col lg={12}>
                    <Input
                      className={"loginInputpanel"}
                      type="text"
                      name="url"
                      id="exampleEmail"
                      placeholder="Enter Image URL"
                      value={values.url || ""}
                      onChange={handleChanger}
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: "50px" }}>
                  <Col lg={4}>
                    <Input
                      className={"loginInputpanel"}
                      type="number"
                      name="quantity"
                      id="exampleEmail"
                      placeholder="Enter Qty"
                      value={values.quantity || ""}
                      onChange={handleChanger}
                    />
                  </Col>
                  <Col lg={4}>
                    <Input
                      className={"loginInputpanel"}
                      type="number"
                      name="price"
                      id="exampleEmail"
                      placeholder="Enter price"
                      value={values.price || ""}
                      onChange={handleChanger}
                    />
                  </Col>
                  <Col lg={4}>
                    <Input
                      className={"loginInputpanel"}
                      type="name"
                      name="color"
                      id="exampleEmail"
                      placeholder="Enter color"
                      value={values.color || ""}
                      onChange={handleChanger}
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: "80px" }}>
                  <Col lg={3}></Col>
                  <Col lg={6}>
                    <Button color="success" style={{ width: "100%" }}>
                      ADD
                    </Button>
                  </Col>
                  <Col lg={3}></Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Addproduct;
