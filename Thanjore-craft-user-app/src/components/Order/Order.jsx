import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Grid } from "@material-ui/core";
import { CardBody, Card, Col, Row, Button } from "reactstrap";
import ProductImage from "../Product/ProductImage";
import { getOrderAll } from "../../service/ApiService";
import "./order.css";

const Order = (props) => {
  
  const [order, setOrder] = useState();

  console.log("Order", order);

  useEffect(() => {
    async function fetchData() {
      try {
        var result = await getOrderAll();
        if (result.success === true) {
          setOrder(result.order);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const renderOrder = () => {
    return order.map((data, i) => {
      return data.products.map((x, j) => {
        return (
          <React.Fragment>
            <div
              style={{
                padding: "3%",
                backgroundColor: "#dddddd",
                marginBottom: "40px",
              }}
            >
              <Row>
                <Col md={12} style={{ padding: "1%" }}>
                  <Row>
                    <Col md={3} style={{ padding: "1%" }}>
                      <ProductImage
                        src={x.product.url}
                        className={"orderImage"}
                      />
                    </Col>
                    <Col md={3} style={{ padding: "1%" }}>
                      A set of two beautiful looking personalized plantersand
                    </Col>
                    <Col md={3} style={{ padding: "1%" }}>
                      Quantity {x.qty}
                    </Col>
                    <Col md={3} style={{ padding: "1%" }}>
                      <Row>
                        <Col
                          style={{
                            textAlign: "right",
                            color: "blue",
                            fontSize: "25px",
                          }}
                        >
                          Rs. {data.total}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col md={3}></Col>
                <Col md={3}></Col>
                <Col md={3}></Col>
                <Col md={3}>
                  <Button
                    style={{ width: "100%" }}
                    onClick={() => (window.location = `/order/${data._id}`)}
                  >
                    View details
                  </Button>
                </Col>
              </Row>
            </div>
          </React.Fragment>
        );
      });
    });
  };
  return (
    <React.Fragment>
      <Header />
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        style={{ padding: "1%", marginTop: "100px", marginLeft: "60px" }}
      >
        <Row>
          <Col md={12}>
            <Card
              style={{
                width: "90%",
                backgroundColor: "#f5f5f5",
                color: "black",
              }}
              className={"paymentOptionCard"}
            >
              <CardBody>
                <div style={{ padding: "2%" }}>
                  <p style={{ marginLeft: "15px" }}>ORDER DETAILS</p>
                  <hr />
                  {order ? renderOrder() : <p>***No orders***</p>}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default Order;
