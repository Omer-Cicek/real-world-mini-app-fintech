import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ForgotPasswordChange = () => {
  const { id } = useParams();

  return (
    <div className="color-overlay bg-3 d-flex align-items-center justify-content-center border vh-100 ">
      <Form className=" bg-light p-5 rounded">
        <h1 className="mb-5">Change Password</h1>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className=" shadow-none"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className=" shadow-none"
          />
          <Form.Text className="text-muted">Both password must match</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordChange;
