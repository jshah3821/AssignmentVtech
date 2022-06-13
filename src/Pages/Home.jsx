import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import jsonData from "../data.json";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [userData, setUserData] = useState(jsonData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = {
      firstName,
      lastName,
      jobRole
    };
    addRows(val);
    clearState();
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setJobRole("");
  };

  const addRows = (data) => {
    const totalUsers = userData.length;
    data.id = totalUsers + 1;
    const updatedUserData = [...userData];
    updatedUserData.push(data);
    setUserData(updatedUserData);
  };

  return (
    <div>
      <Row>
        <Col>
          <div>
            <Form className="form">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Job Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Job Role"
                  value={jobRole}
                  onChange={(e) => {
                    setJobRole(e.target.value);
                  }}
                />
              </Form.Group>
              <button
                className="btn btn-dark"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="table">
            <h1 style={{ textAlign: "center" }}>Employee Data</h1>
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th> First Name</th>
                  <th>Last Name</th>
                  <th>Job Role</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((info) => {
                  return (
                    <tr key={info.id}>
                      <td>{info.id}</td>
                      <td>{info.firstName}</td>
                      <td>{info.lastName}</td>
                      <td>{info.jobRole}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
