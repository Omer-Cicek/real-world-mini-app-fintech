import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div className="color-overlay bg d-flex align-items-center justify-content-center border vh-100 ">
      <Form className=" bg-light p-5 rounded">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className=" shadow-none"
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
            className=" shadow-none"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
