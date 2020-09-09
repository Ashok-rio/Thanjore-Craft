import React, { useState } from "react";
import { login } from "../../../service/ApiService";
import {
  Form,
  Button,
  Modal,
  ModalBody,
  FormGroup,
  Input,
  Col,
} from "reactstrap";
import useForm from "../../../hooks/useForm";
import { toast } from "react-toastify";

toast.configure();

const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar : true
  }

const Login = (props) => {
  const [open,setOpen] = useState(props.value);
  const [values, handleChanger] = useForm();
  const [message, setMessage] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    let [email, password] = [values.email, values.password];
    if (password.length === 8) {
      if (email !== "" && email !== undefined) {
        let result;
          console.log(values);
          result = await login(values);
        if (result.success === true) {
            console.log("success", result)
            toast.success(result.message, toastOptions);
            localStorage.setItem('usertoken', result.token);
            if(localStorage) window.location = '/'
            return result;
        } else {
          setMessage(result.error);
          toast.error(result.error, toastOptions);
        }
      } else {
        setMessage("please enter the valid password");
      }
    } else {
      setMessage("please enter valid email");
    }
  };

  const toggle = () => setOpen(!open);
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <div
          style={{
            width: "100%",
            height: "10%",
            fontSize: "30px",
            padding: "40px 70px 0px 70px",
          }}
        >
          Login
          <span style={{ float: "right" }} onClick={toggle}>
            X
          </span>
        </div>
        <ModalBody>
          <Form
            style={{ padding: "50px 0px 50px 60px" }}
            onSubmit={loginSubmit}
          >
            <FormGroup row>
              <Col sm={12}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  value={values.email || ""}
                  onChange={handleChanger}
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
            {message ? <div style={{marginLeft:'50px',color:'red'}}>{message}</div> : null}
            <Button
              type="submit"
              style={{
                width: "80%",
                padding: "20px",
                margin: "20px 0px",
                backgroundColor: "#4fa845",
              }}
            >
              Login
            </Button>
          </Form>
          <div style={{textAlign:'center'}}>
            Don't have a account means?&nbsp;&nbsp;<span style={{color:'green',cursor:'pointer'}} onClick={props.click}>Register</span>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Login;
