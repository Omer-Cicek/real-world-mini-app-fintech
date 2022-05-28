import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ForgotPasswordChange = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const paramURL = searchParams.get('param');

  const formData = new FormData();

  formData.append('ForgotPasswordRequestId', paramURL);
  formData.append('Email', email);
  formData.append('Password', password);

  const handleSubmitChange = (e) => {
    e.preventDefault();

    axios(
      `https://dev-smoothie-api.fintechyazilim.com/api/User/ForgotPasswordChange`,
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="color-overlay bg-3 d-flex align-items-center justify-content-center border vh-100 ">
      <Form className=" bg-light p-5 rounded" onSubmit={handleSubmitChange}>
        <h1 className="mb-5">Change Password</h1>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className=" shadow-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ''}
          />
          <p>fintechtestuser@yandex.com</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className=" shadow-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ''}
          />
          <p>Fintech123</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            className=" shadow-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword || ''}
          />
          <Form.Text className="text-danger">
            Both password must match
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordChange;
