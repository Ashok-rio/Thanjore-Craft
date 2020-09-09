import React from "react";
import { Col, Card, Row, CardBody, Button } from "reactstrap";
import Image from "../Layout/Image";
import { useParams } from "react-router-dom";
import API from "../../services/ApiService";

import "./product.css";

const ProductOne = () => {
  let { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [proId] = React.useState({ id: id });

  console.log(product);

  React.useEffect(() => {
    async function fetchData() {
      try {
        var result = await API.getProductOne(proId.id);
        if (result.success === true) setProduct(result.product);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  },[proId.id])

  console.log(id);
  
  return (
    <React.Fragment>
      <Col>
        <Card style={{ height: "750px", padding: "6%", overflowY: "auto" }}>
          <Card style={{ padding: "4%" }}>
            <CardBody>
              <Row>
                <Col lg={6}>
                  <Image
                    src={product.url}
                    className={"productImageOne"}
                  />
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={12} style={{ textAlign: "center" }}>
                      <h1>{product.name}</h1>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%" }} />
                  <br />
                  <Row>
                    <Col lg={3}></Col>
                    <Col lg={3}>
                      <h5>Qty : {product.quantity}</h5>
                    </Col>
                    <Col lg={4}>
                      <h5>Size : {product.size}</h5>
                    </Col>
                    <Col lg={2}></Col>
                  </Row>
                  <br />
                  <Row>
                    <Col lg={12} style={{ textAlign: "center", padding: "3%" }}>
                      <h1>Rs. {product.price}</h1>
                    </Col>
                  </Row>
                  <hr style={{ width: "80%" }} />
                  <br />
                  <Row>
                    <Col lg={12}>
                      <p>
                        Gift a set of two beautiful looking personalized
                        planters and make the environment go green and fresh.
                        Both the planters are in whitish color with option of
                        personalized name on one of them to make it look
                        special. The other planter has a beautiful New Year
                        wishes on it. ( Only Planter Set)
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={6}></Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={6}><Button color='danger' style={{width:'100%'}}>Delete</Button></Col>
                    <Col lg={6}><Button color='success' style={{width:'100%'}}>Edit</Button></Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default ProductOne;
