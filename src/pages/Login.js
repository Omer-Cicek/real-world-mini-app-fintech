import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Login = () => {
  const formData = new FormData();

  const email = 'fintechtestuser@yandex.com';
  const password = '99Salman99*';
  const LoginType = '6057fa54-eeb3-ec11-ac1f-000c29330757';

  formData.append('email', 'fintechtestuser@yandex.com');
  formData.append('password', '99Salman99*');
  formData.append('LoginType', '6057fa54-eeb3-ec11-ac1f-000c29330757');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios('https://dev-smoothie-api.fintechyazilim.com/api/User/Login', {
      method: 'post',
      // header: { 'content-type': 'application/json' },

      data: formData,
    })
      // .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="color-overlay bg d-flex align-items-center justify-content-center border vh-100 ">
      <Form className=" bg-light p-5 rounded" onSubmit={handleSubmit}>
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
