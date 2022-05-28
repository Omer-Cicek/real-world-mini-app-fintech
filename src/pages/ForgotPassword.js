import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginSuccess from '../redux/actions/LoginActions';
import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const formData = new FormData();
  const dispatch = useDispatch();

  formData.append('email', email);

  const handleForgotEmail = async (e) => {
    e.preventDefault();
    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/User/ForgotPassword',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        console.log(data);
        dispatch(loginSuccess(email));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="color-overlay bg-2 d-flex align-items-center justify-content-center border vh-100 ">
      <Form className=" bg-light p-5 rounded" onSubmit={handleForgotEmail}>
        <h1 className="mb-5">Forgot Password?</h1>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className=" shadow-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Check your email to see forgot password link
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
