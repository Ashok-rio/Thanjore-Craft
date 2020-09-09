import React from "react";
import { Col, Card, Row, CardBody, Button } from "reactstrap";
import Image from "../Layout/Image";
import "./product.css";
import API from "../../services/ApiService";

const Products = () => {
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      try {
        let result;
        result = await API.getAllProduct();
        if (result.success === true) {
          setProduct(result.products);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);
  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );

  const renderProducts = () => {
    return product.map((data, i) => {
      return (
        <React.Fragment>
          <Col md={3} style={{ padding: "2%" }}>
            <a href={`/product/${data._id}`} className={"productATag"}>
              <Card className={"productCardBox"}>
                <CardBody>
                  <Image src={data.url} className={"productImage"} />
                  <hr />
                  <h6 style={{ textAlign: "center" }}>
                    {capitalize(data.name)}
                  </h6>
                  <br />
                  <p style={{ color: "#f04e6b", textAlign: "center" }}>
                    Rs. {data.price}
                  </p>
                </CardBody>
              </Card>
            </a>
          </Col>
        </React.Fragment>
      );
    });
  };
  return (
    <React.Fragment>
      <Col>
        <Card style={{ height: "750px", padding: "6%", overflowY: "auto" }}>
          <Row>
            <Col lg={10}>
              <h3>ALL PRODUCT</h3>
            </Col>
            <Col lg={2}>
              <Button color="success" onClick={() => window.location = '/add/product'} style={{width:'100%'}}>ADD PRODUCT</Button>
            </Col>
          </Row>
          <Row>{product ? renderProducts() : <h5>***No Products***</h5>}</Row>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Products;
