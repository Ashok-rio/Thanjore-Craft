import React, { useState, useEffect } from "react";
import { Container, Avatar } from "@material-ui/core";
import { Row, Col, Card, CardBody } from "reactstrap";
import Header from "../Header/Header";
import { toast } from "react-toastify";
import { getUserData } from "../../service/ApiService";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./profile.css";

toast.configure();

const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
};
  
const Profile = () => {

  const [user, setUser] = useState({ admin: "" });
    // var id = true

  
  useEffect(() => {
      async function getUser() {
      try {
        let result;
        result = await getUserData();
        if (result.success) {
          setUser(result.user);
          toast.success(result.message, toastOptions);
        } else {
          toast.error(result.error, toastOptions);
          if (result.error.includes("Unauthorized")) {
            window.history.push("/admin/login");
          }
          return console.log(result.error);
        }
      } catch (e) {}
    }
    getUser();
  }, []);
    
  var name = String(user.name);

  const logout = async () => {
    await localStorage.removeItem("usertoken");
    await moveOn();
  };
  const moveOn = () => {
    window.location = "/";
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid={true} style={{ padding: "6%" }}>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Container fulid={true}>
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody
                      style={{
                        backgroundColor: "rgba(196, 196, 196, 0.5);",
                        textAlign: "center",
                        padding: "8%",
                        height: "500px",
                      }}
                    >
                      <Avatar
                        aria-label="recipe"
                        style={{
                          marginLeft: "45%",
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        {name.charAt(0).toUpperCase()}
                      </Avatar>
                      <br />
                      <h1>{user.name}</h1>
                      <br />
                      <h4>{user.email}</h4>
                      <br />
                      <h6>{user.phone}</h6>
                      <br />
                      <br />
                      <button style={{ textDecoration: "none" }} onClick={logout}>
                        Log Out&nbsp;&nbsp;&nbsp;
                        <ExitToAppIcon
                          style={{ fontSize: "3.0rem !important" }}
                        />
                      </button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
