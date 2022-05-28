import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import loginSuccess from '../redux/actions/LoginActions';
import SweetAlertsFunction from '../services/helpers/SweetAlerts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formData = new FormData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  formData.append('email', email);
  formData.append('password', password);
  formData.append('LoginType', '50dcd869-eeb3-ec11-ac1f-000c29330757');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios('https://dev-smoothie-api.fintechyazilim.com/api/User/Login', {
      method: 'post',

      data: formData,
    })
      .then((data) => {
        const decodedToken = decodeToken(data.data.Result.AccessToken);
        dispatch(loginSuccess({ decodedToken, loggedIn: true }));
        console.log(data);
        data.data.IsSuccess === true && navigate('/main');
        SweetAlertsFunction(
          data.data.IsSuccess,
          data.data.Result.Message || 'Successfully logged in!'
        );
      })

      .catch((err) => {
        console.log(err);
        SweetAlertsFunction(err.response.status, err.message);
      });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="color-overlay bg-1 d-flex align-items-center justify-content-center border vh-100 ">
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            className=" shadow-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Form.Group className="d-flex justify-content-between">
            <Link to="/forgot-password">Forgot password?</Link>
          </Form.Group>
          {/* <h6>99Salman99*</h6> */}
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 w-100 mx-auto">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
