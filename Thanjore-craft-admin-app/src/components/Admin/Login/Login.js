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
import "../css/login.css";
import API from '../../../services/ApiService';
// import Header from "../../Header/Header";
import useForm from "../../../hooks/useForm";
import { toast } from "react-toastify";

toast.configure();

const toastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar : true
}

const Login = () => {
  const [values, handleChanger] = useForm();
  const [message, setmessage] = useState({});

  const loginSubmit = async (e) => {
    e.preventDefault();
    if (values.email !== "" && values.email !== undefined) {
      if (values.password !== "" && values.password !== undefined) {
        let result;
        result = await API.login(values);
          console.log(values);
        if (result.success === true) {
          toast.success(result.message, toastOptions);
          localStorage.setItem('usertoken', result.token)
          if (localStorage)  window.location = '/'
          return result;
         }
        else {
          toast.error(result.error, toastOptions);
        }
      } else {
        setmessage({ message: "password", error: "please input password" });
      }
    } else {
      setmessage({ message: "email", error: "Invalid Email" });
    }
  };
  return (
    <React.Fragment>
      {/* <Header link={"/register"} buttonName={"Register"} /> */}
      <div className={"loginDiv"}>
        <Card className={"loginCard"}>
          <CardBody>
            <Form onSubmit={loginSubmit}>
              <Row>
                <Col lg={12} className={"headerLoginText"}>
                  <h1>Admin Login</h1>
                  <br />
                  <p>
                    or&nbsp;&nbsp;
                    <span
                      onClick={() => {
                        window.location.pathname = "/register";
                      }}
                      className={"loginLinkInReg"}
                    >
                      sign up to account
                    </span>
                  </p>
                  <hr className={"loginHr"} />
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
                    className={'loginInputpanel'}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
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
                    className={'loginInputpanel'}
                    type="password"
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
                  <Button className={"loginBtn"}>Login</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;