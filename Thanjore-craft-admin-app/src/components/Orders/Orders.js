import React from "react";
import { Col, Card, Row, CardBody } from "reactstrap";
import Image from "../Layout/Image";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./orders.css";
import API from "../../services/ApiService";

const Orders = () => {
  const [order, setOrder] = React.useState();

  console.log("Order", order);

  React.useEffect(() => {
    async function fetchData() {
      try {
        var result = await API.getOrderAll();
        if (result.success === true) {
          setOrder(result.order);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const renderOrders = () => {
    return order.map((data, i) => {
      return data.products.map((x, j) => {
        return (
          <React.Fragment>
            <Card
              style={{ padding: "2%", marginTop: "30px" }}
              className={"orderCardBox"}
              key={i}
            >
              <Row key={j}>
                <Col lg={5}>
                  <h6>Order No: {data.OrderId}</h6>
                </Col>
                <Col lg={4}>
                  <h6>Qty : {x.qty}</h6>
                </Col>
                <Col lg={3}>
                  <h4>Rs : {data.total}</h4>
                </Col>
              </Row>
              <hr />
              <CardBody>
                <Row>
                  <Col lg={4} style={{ textAlign: "center" }}>
                    <Image src={x.product.url} className={"ordersImage"} />
                    <hr />
                    <h5>{x.product.name}</h5>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <Col lg={12} style={{ textAlign: "center" }}>
                        <h4>Order status</h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} style={{ padding: "10%" }}>
                        <ProgressBar value={data.payment === true ? 70 : 60} />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Card style={{ border: "none", fontWeight: "600" }}>
                      <CardBody>
                        <Row>
                          <Col lg={6}>Customer :</Col>
                          <Col lg={6}>{data.address.name}</Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={6}>Phone :</Col>
                          <Col lg={6}>{data.user.phone} </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={6}>Address :</Col>
                          <Col lg={6}>
                            {`${data.address.address},
                              ${data.address.town},
                              ${data.address.city},
                              ${data.address.state}`}
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={6}>Payment :</Col>
                          <Col
                            lg={6}
                            style={
                              data.payment === false
                                ? { color: "orange" }
                                : { color: "green" }
                            }
                          >
                            {data.payment === false
                              ? "Cash on delivery"
                              : "Paid"}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </React.Fragment>
        );
      });
    });
  };

  return (
    <React.Fragment>
      <Col>
        <Card style={{ height: "750px", padding: "4%", overflowY: "auto" }}>
          <h3>ORDERS</h3>
          {order ? renderOrders() : <h5>***No Orders***</h5>}
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Orders;
