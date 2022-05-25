import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);
  formData.append('LoginType', '6057fa54-eeb3-ec11-ac1f-000c29330757');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios('https://dev-smoothie-api.fintechyazilim.com/api/User/Login', {
      method: 'post',

      data: formData,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="color-overlay bg d-flex align-items-center justify-content-center border vh-100 ">
      <Form className=" bg-light p-5 rounded" onSubmit={handleSubmit}>
        <h1 className="mb-5">Login Page</h1>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className=" shadow-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <h1> </h1>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className=" shadow-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Link to="/forgot-password">Forgot password?</Link>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
