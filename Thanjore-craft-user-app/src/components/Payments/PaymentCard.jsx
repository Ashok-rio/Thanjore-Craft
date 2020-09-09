import React from "react";
import { Grid, Button } from "@material-ui/core";
import { CardBody, Card, Col, Row, Form } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import useForm from "../../hooks/useForm";
import API from '../../service/ApiService';
import { toast } from "react-toastify";

toast.configure();

const toastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
};

const PaymentCard = (props) => {


  const [values, handleChanger] = useForm();

  const paymentAccount = async () => {
    try {
      
      let result;
      await console.log(values);
      result = await API.payment(values);
      if (result.success === true) {
        toast.success(result.message, toastOptions);
        window.location = '/order';
      }
    }catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <Grid
        item
        lg={8}
        md={12}
        sm={12}
        xs={12}
        style={{ borderRight: "1px solid black", padding: "2%" }}
      >
        <Row>
          <Col md={12}>
            <Card style={{ padding: "5%" }}>
              <CardBody>
                <Form>
                  <Row>
                    <Col md={12} style={{ padding: "2%" }}>  
                      <input
                        type="text"
                        name="cardname"
                        className={"cardInputFiled"}
                        placeholder="Card Holder Name"
                        value={values.cardname || ""}
                        onChange={handleChanger}
                      />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={12} style={{ padding: "2%" }}>
                      <input
                        type="password"
                        name="cardnumber"
                        className={"cardInputFiled"}
                        placeholder="Card Number"
                        value={values.cardnumber || ""}
                        onChange={handleChanger}
                      />
                      <input
                        disabled={true}
                        style={{display:'none'}}
                        type="password"
                        name="cardnumber"
                        className={"cardInputFiled"}
                        placeholder="Card Number"
                        value={values.id = props.id}
                        onChange={handleChanger}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} style={{ padding: "2%" }}>
                      <input
                        type="text"
                        name="expiry"
                        className={"cardInputFiled"}
                        placeholder="expiry"
                        value={values.expiry || ""}
                        onChange={handleChanger}
                      />
                    </Col>
                    <Col md={6} style={{ padding: "2%" }}>
                      <input
                        type="password"
                        name="cvv"
                        className={"cardInputFiled"}
                        placeholder="CVV"
                        value={values.cvv || ""}
                        onChange={handleChanger}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Button
                        onClick={paymentAccount}
                        style={{
                          width: "100%",
                          height: "60px",
                          backgroundColor: "#0979f9",
                          color: "white",
                        }}
                      >
                        Pay Now
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentCard;
