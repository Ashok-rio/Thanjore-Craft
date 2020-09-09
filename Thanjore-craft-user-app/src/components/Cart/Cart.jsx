import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CardBody, Card, Col, Row, Button } from "reactstrap";
import Header from "../Header/Header";
import "./cart.css";
import ProductImage from "../Product/ProductImage";
import StarIcon from "@material-ui/icons/Star";
import { getCart, updateCart } from "../../service/ApiService";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
}));

const Cart = () => {

  const classes = useStyles();
  const [star] = useState(5);
  const [cart, setCart] = useState();
  const [qty, setQty] = useState();
  
  useEffect(() => {
    async function fetchData() {
      try {
        var result = await getCart();
        if (result.success === true) {
          setCart(result.carts);
        }
      } catch (e) {}
    }
    fetchData();
  }, [qty]);

  const qtyChanger = async (qtys,datas) => {
      var result = await updateCart({ quantity: qtys, id:datas });
    if (result.success === true) {
        setQty(null)
        setQty(result.message)
      }
  }

  

  const renderCart = () => {
    return cart.map((data, i) => {
      return (
        <React.Fragment>
          <Container fluid={true} style={{ padding: "2%", marginTop: "35px" }} key={i} >
            <Grid container spacing={4} className={classes.root}>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Card
                  className={"cartCardBox"}
                  style={{
                    padding: "1%",
                    textAlign: "center",
                    border: "1px solid black",
                  }}
                >
                  <CardBody>
                    <div className={"cardImageDiv"}>
                      <ProductImage src={data.product.url} className={"cardImage"} />
                    </div>
                  </CardBody>
                  <CardBody>
                    <h1>Rs.{data.product.price}</h1>
                  </CardBody>
                </Card>
              </Grid>
              <Grid
                item
                lg={4}
                md={12}
                sm={12}
                xs={12}
                style={{ borderRight: "1px solid black" }}
              >
                <Card style={{ height: "500px", border: "none" }}>
                  <CardBody>
                    <Row>
                      <Col lg={12}>
                        <span>
                          <StarIcon
                            className={
                              star >= 1
                                ? "withratingColor"
                                : "withoutRatingColor"
                            }
                          />
                        </span>
                        <span>
                          <StarIcon
                            className={
                              star >= 2
                                ? "withratingColor"
                                : "withoutRatingColor"
                            }
                          />
                        </span>
                        <span>
                          <StarIcon
                            className={
                              star >= 3
                                ? "withratingColor"
                                : "withoutRatingColor"
                            }
                          />
                        </span>
                        <span>
                          <StarIcon
                            className={
                              star >= 4
                                ? "withratingColor"
                                : "withoutRatingColor"
                            }
                          />
                        </span>
                        <span>
                          <StarIcon
                            className={
                              star >= 5
                                ? "withratingColor"
                                : "withoutRatingColor"
                            }
                          />
                        </span>
                        <span
                          style={{
                            marginLeft: "10px",
                            marginTop: "40px",
                            padding: "5%",
                            paddingTop: "7%",
                          }}
                        >
                          4.3 stars | 24 ratings | 1 review
                        </span>
                        <hr />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <h2>Rs. {data.product.price}</h2>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg={12}>
                        <p className={"cartFontText"}>
                          Gift a set of two beautiful looking personalized
                          plantersand make the environment go green and fresh.
                          Both the planters are in whitish color with option of
                          personalized name on one of them to make it look
                          special. The other planter has a beautiful New Year
                          wishes on it. ( Only Planter Set).{" "}
                        </p>
                        <br />
                        <p className={"cartFontText"}>
                          Ceramic Small Square Shape Planters
                        </p>
                        <p className={"cartFontText"}>
                          Ceramic Big Square Shape Planters
                        </p>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Card style={{ border: "none" }}>
                  <CardBody>
                    <div
                      style={{
                        padding: "5%",
                        fontWeight: "600",
                        fontSize: "x-large",
                      }}
                    >
                      Qty :{" "}
                      <span style={{ marginLeft: "25px" }}>
                        
                          <select name='quantity' onChange={(e)=>qtyChanger(e.target.value,data._id)} value={data.quantity}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          </select>
                      </span>
                    </div>
                    <hr />
                    <div style={{ padding: "5%", fontWeight: 500 }}>
                      <p style={{ fontSize: "large" }}>PRICE DETAILS</p>
                      <br />
                      <Row style={{ marginTop: "10px" }}>
                        <Col md={6}>Total</Col>
                        <Col md={4} style={{ textAlign: "right" }}>
                          Rs. {data.product.price * data.quantity}
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "10px" }}>
                        <Col md={6}>Discount</Col>
                        <Col md={4} style={{ textAlign: "right" }}>
                          -Rs. 0
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "10px" }}>
                        <Col md={6}>Tax</Col>
                        <Col md={4} style={{ textAlign: "right" }}>
                          Rs. 0
                        </Col>
                      </Row>
                      <Row style={{ marginTop: "20px" }}>
                        <Col md={6}>Delevery charge</Col>
                        <Col
                          md={4}
                          style={{
                            textDecoration: "line-through",
                            textAlign: "right",
                          }}
                        >
                          Rs. 0
                        </Col>
                      </Row>
                    </div>
                    <hr />
                    <div style={{ padding: "5%" }}>
                      <Row>
                        <Col lg={6}>
                          <h3>Total</h3>
                        </Col>
                        <Col lg={4}>
                          <p
                            style={{
                              color: "orange",
                              fontSize: "x-large",
                              textAlign: "right",
                            }}
                          >
                            Rs. {data.product.price * data.quantity}
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                      <Row>
                        <Col md={12}>
                          <Button
                            onClick={() => window.location = '/address'}
                            style={{
                              width: "100%",
                              backgroundColor: "#f14e6c",
                              color: "white",
                            }}
                          >
                            PLACE ORDER
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Header />
      { cart? renderCart(): <p>***No Cart items***</p> }
    </React.Fragment>
  );
};

export default Cart;
