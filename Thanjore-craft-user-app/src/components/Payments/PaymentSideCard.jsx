import React  from "react";
import { Grid } from "@material-ui/core";
import {
    CardBody,
    Card,
    Col,
    Row,
} from "reactstrap";
  
const PaymentSideCard = (props) => {
    return (
        <React.Fragment>
            <Grid item lg={4} md={12} sm={12} xs={12} style={{ padding: "2%" }}>
            <Row>
              <Col md={12}>
                <Card style={{ width: "90%", height: "350px" ,backgroundColor:'#f5f5f5',color:'black'}} className={"paymentOptionCard"}>
                  <CardBody>
                    <div>
                      <p style={{ marginLeft: "15px" }}>PRICE DETAILS</p>
                      <hr />
                      <div style={{ padding: "3%" }}>
                        <Row>
                          <Col md={6}>Personalised Gift Set</Col>
                          <Col md={6} style={{ textAlign: "right" }}>
                            Rs.500
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col md={6}>Delivery Charges</Col>
                          <Col md={6} style={{ textAlign: "right" }}>
                            Rs.50
                          </Col>
                        </Row>
                      </div>
                      <div style={{ padding: "3%" ,marginTop: "70px" }}>
                      <hr />
                        <Row style={{padding:'2%'}}>
                          <Col md={6}>Total Charges</Col>
                          <Col
                            md={6}
                            style={{ textAlign: "right", color: "blue" }}
                          >
                            Rs.875
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Grid>
        </React.Fragment>
    )
}

export default PaymentSideCard;