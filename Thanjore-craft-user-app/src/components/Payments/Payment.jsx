import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CardBody,
  Card,
  Col,
  Row,
  Button,
  Input,
  Form,
} from "reactstrap";
import Header from "../Header/Header";
import "./payment.css";
import PaymentSideCard from "./PaymentSideCard";
import PaymentCard from "./PaymentCard";
import ProgressBar from '../ProgressBar/ProgressBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(5),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Payment = (props) => {
  
  const [payment, setPayment] = useState();
  const [debit, setDebit] = useState(false);

  const classes = useStyles();

  const paymentSelect = async (e) => {
    e.preventDefault();
    if (payment.value === 'debit') {
      setDebit(!debit)
    }
    else if (payment.value === 'COD') {
      window.location = '/order'
    }
    else {
      setPayment('')
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true} style={{ padding: "2%", marginTop: "35px" }}>
        <Grid container spacing={4} className={classes.root}>
          {debit === false ?
            <Grid
              item
              lg={8}
              md={12}
              sm={12}
              xs={12}
              style={{ borderRight: "1px solid black" }}
            >
              <Row>
                <Col md={12}>
                  <Card style={{ width: "100%", padding: "5%", border: "none" }}>
                    <CardBody>
                      <ProgressBar value={70} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <Card style={{ width: "60%", padding: "5%", border: "none" }}>
                    <CardBody>
                      <h2>Select Payment Method</h2>
                      <br />
                      <div style={{ padding: "8%", backgroundColor: "#f1f1f1" }}>
                        <Form onSubmit={paymentSelect}>
                          <Card
                            style={{ textAlign: "center" }}
                            className={"paymentOptionCard"}
                          >
                            <CardBody>
                              <Row>
                                <Col md={1}></Col>
                                <Col md={3}>
                                  <Input
                                    type="radio"
                                    name="payment"
                                    value={"COD"}
                                    onChange={(e) => setPayment({ value: e.target.value })}
                                  />
                                </Col>
                                <Col md={5}>
                                  <span>Cash on Delivery</span>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                          <br />
                          <Card
                            style={{ textAlign: "center" }}
                            className={"paymentOptionCard"}
                          >
                            <CardBody>
                              <Row>
                                <Col md={1}></Col>
                                <Col md={3}>
                                  <Input
                                    type="radio"
                                    name="payment"
                                    value={"debit"}
                                    onChange={(e) => setPayment({ value: e.target.value })}
                                  />
                                </Col>
                                <Col md={5}>
                                  <span>Debit / Credit Card</span>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                          <br />
                          <Button
                            className={"paymentOptionCard"}
                            style={{
                              width: "100%",
                              height: "60px",
                              backgroundColor: "#0979f9",
                              color: "white",
                            }}
                          >
                            Continue
                        </Button>
                        </Form>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Grid> :
            <PaymentCard id={props.id} />}
          <PaymentSideCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Payment;
