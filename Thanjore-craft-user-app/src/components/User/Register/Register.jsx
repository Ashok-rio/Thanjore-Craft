import React, { useState } from "react";
import { signUp } from "../../../service/ApiService";
import useForm from "../../../hooks/useForm";
import {
  Form,
  Button,
  Modal,
  ModalBody,
  FormGroup,
  Input,
  Col,
} from "reactstrap";

const Register = (props) => {
  const [open, setOpen] = useState(props.value);
  const [values, handleChanger] = useForm();
  const [message, setMessage] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();
    let [email, phone, name, password] = [
      values.email,
      values.phone,
      values.name,
      values.password,
    ];
    if (name !== "" && name !== undefined && name.length > 3) {
      if (phone.length === 10) {
        if (email.includes("@")) {
          if (password.length === 8) {
            try {
              let result;
              result = await signUp(values);
              if (result.success) {
                return props.click;
              } else {
                setMessage(result.error);
              }
            } catch (e) {
              throw e;
            }
          } else {
            setMessage("please enter the valid password");
          }
        } else {
          setMessage("please enter the valid email");
        }
      } else {
        setMessage("please enter the valid phone");
      }
    } else {
      setMessage("please enter the valid name");
    }
  };

  const toggle = () => setOpen(!open);
  return (
    <Modal isOpen={open}>
      <div
        style={{
          width: "100%",
          height: "10%",
          fontSize: "30px",
          padding: "40px 70px 0px 70px",
        }}
      >
        Register
        <span style={{ float: "right" }} onClick={toggle}>
          X
        </span>
      </div>
      <ModalBody>
        <Form
          style={{ padding: "50px 0px 50px 60px" }}
          onSubmit={registerSubmit}
        >
          <FormGroup row>
            <Col sm={12}>
              <Input
                type="text"
                name="name"
                id="exampleEmail"
                placeholder="Full Name"
                onChange={handleChanger}
                value={values.name || ""}
                style={{
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "none",
                  borderBottom: "2px solid black",
                  width: "80%",
                  padding: "12px 20px",
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                type="text"
                name="phone"
                id="exampleEmail"
                placeholder="Phone Number"
                onChange={handleChanger}
                value={values.phone || ""}
                style={{
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "none",
                  borderBottom: "2px solid black",
                  width: "80%",
                  padding: "12px 20px",
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                onChange={handleChanger}
                value={values.email || ""}
                style={{
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "none",
                  borderBottom: "2px solid black",
                  width: "80%",
                  padding: "12px 20px",
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                onChange={handleChanger}
                value={values.password || ""}
                style={{
                  margin: "8px 0",
                  boxSizing: "border-box",
                  border: "none",
                  borderBottom: "2px solid black",
                  width: "80%",
                  padding: "12px 20px",
                }}
              />
            </Col>
          </FormGroup>
          {message ? (
            <div style={{ marginLeft: "50px", color: "red" }}>{message}</div>
          ) : null}
          <Button
            type="submit"
            style={{
              width: "80%",
              padding: "20px",
              margin: "20px 0px",
              backgroundColor: "#4fa845",
            }}
          >
            Register
          </Button>
        </Form>
        <div style={{ textAlign: "center" }}>
          Already Have A Account?&nbsp;&nbsp;
          <span
            onClick={props.click}
            style={{ color: "green", cursor: "pointer" }}
          >
            Login
          </span>
        </div>
      </ModalBody>
    </Modal>
  );
};
export default Register;
