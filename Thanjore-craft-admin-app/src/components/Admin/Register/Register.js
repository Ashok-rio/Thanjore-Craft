import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  Label,
  Input,
} from "reactstrap";
import "../css/register.css";
import API from '../../../services/ApiService';
import useForm from "../../../hooks/useForm";
import { toast } from "react-toastify";

toast.configure();

const toastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
};

const Register = () => {
  const [values, handleChanger] = useForm();
  const [message, setmessage] = useState({});

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (
      values.name !== "" &&
      values.name !== undefined &&
      values.name !== null
    ) {
      if (values.email !== "" && values.email !== undefined) {
        if (values.phone !== "" && values.phone !== undefined) {
          if (values.password !== "" && values.password !== undefined) {
            let result;
            result = await API.signUp(values)
            if (result.success === true) {
              toast.success(result.message, toastOptions);
              window.location = '/login'
            }
            else {
              toast.error(result.error, toastOptions);
            }
          } else {
            setmessage({
              message: "password",
              error: "password have to register!",
            });
          }
        } else {
          setmessage({ message: "phone", error: "please input valid phone!" });
        }
      } else {
        setmessage({ message: "email", error: "please input valid email!" });
      }
    } else {
      setmessage({ message: "name", error: "please input valid name!" });
    }
  };

  return (
    <React.Fragment>
      {/* <Header link={'/login'} buttonName={'Login'} /> */}
      <div className={"registerDiv"}>
        <Card className={"registerCard"}>
          <CardBody>
            <Form onSubmit={registerSubmit}>
              <Row>
                <Col lg={12} className={"headerRegisterText"}>
                  <h1>Admin Register</h1>
                  <br />
                  <p>
                    or&nbsp;&nbsp;
                    <span
                      href={"/login"}
                      onClick={() => {
                        window.location = "/login";
                      }}
                      className={"loginLinkInReg"}
                    >
                      login to account
                    </span>
                  </p>
                  <hr className={"regHr"} />
                </Col>
              </Row>
              <span style={{ textAlign: "center", color: "#745aaf" }}>
                {message.message === "registerError" ? message.error : null}
              </span>
              <br />
              <Row>
                <Col lg={12}>
                  <Label>Name</Label>
                  <span className="ErrorMessagePanel">
                    {message.message === "name" ? `:  ${message.error}` : null}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <Input
                    className={"regInputpanel "}
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={values.name || ""}
                    onChange={handleChanger}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={12}>
                  <Label>Phone</Label>
                  <span className="ErrorMessagePanel">
                    {message.message === "phone" ? `:  ${message.error}` : null}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <Input
                    type="text"
                    className={"regInputpanel "}
                    name="phone"
                    placeholder="Enter phone number"
                    value={values.phone || ""}
                    onChange={handleChanger}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={12}>
                  <Label>Email</Label>
                  <span className="ErrorMessagePanel">
                    {message.message === "email" ? `:  ${message.error}` : null}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <Input
                    type="email"
                    className={"regInputpanel "}
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter email address"
                    value={values.email || ""}
                    onChange={handleChanger}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg={12}>
                  <Label>Password</Label>
                  <span className="ErrorMessagePanel">
                    {message.message === "password"
                      ? `:  ${message.error}`
                      : null}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                <Input
                    style={{display:'none'}}
                    disabled={true}
                    type="text"
                    name="admin"
                    placeholder="Enter your name"
                    value={values.admin = true}
                    onChange={handleChanger}
                  />
                  <Input
                    type="password"
                    className={"regInputpanel "}
                    name="password"
                    placeholder="Enter password"
                    value={values.password || ""}
                    onChange={handleChanger}
                  />
                </Col>
              </Row>
              <br />
              <Row style={{ marginTop: "30px" }}>
                <Col lg={8}>
                  <Button className={"regBtn"}>Register</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Register;
