import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setisLoggedIn }) => {
  const [credential, SetCredential] = useState({
    email: "",
    password: ""
  });

  let Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetCredential((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credential.email === "" || credential.password === "") {
      alert("Please Enter Email and Password");
    } else {
      Navigate("/");
      SetCredential({ email: "", password: "" });
      setisLoggedIn(true);
    }
  };

  return (
    <div className="loginForm my-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={credential.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={credential.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="light" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
