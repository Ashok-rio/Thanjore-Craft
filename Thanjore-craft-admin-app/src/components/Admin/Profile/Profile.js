import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import API from "../../../services/ApiService";
import { toast } from "react-toastify";

toast.configure();

const toastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
};

const Profile = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      try {
        let result;
        result = await API.getUserData();
        if (result.success === true) {
          toast.success(result.message, toastOptions);
          setUser(result.user);
        }
      } catch (e) {}
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Col>
        <Card style={{ height: "700px", padding: "10%" }}>
          <h2>Profile</h2>
          <hr style={{ width: "40%", float: "left" }} />
          <CardBody>
            <Card style={{ border: "none", fontWeight: "600" }}>
              <CardBody>
                <Row>
                  <Col md={2}>Name</Col>
                  <Col md={1}>:</Col>
                  <Col md={9}>{user.name}</Col>
                </Row>
                <br />
                <Row>
                  <Col md={2}>Email</Col>
                  <Col md={1}>:</Col>
                  <Col md={9}>{user.email}</Col>
                </Row>
                <br />
                <Row>
                  <Col md={2}>Phone</Col>
                  <Col md={1}>:</Col>
                  <Col md={9}>{user.phone}</Col>
                </Row>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Profile;
