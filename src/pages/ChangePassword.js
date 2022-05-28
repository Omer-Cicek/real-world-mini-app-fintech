import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SweetAlertsFunction from '../services/helpers/SweetAlerts';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();
  const formData = new FormData();

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();

    formData.append('Email', email);
    formData.append('CurrentPassword', currentPassword);
    formData.append('Password', newPassword);

    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/User/ChangePassword',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        console.log(data);
        SweetAlertsFunction(
          data.data.IsSuccess,
          data.data.Result.Message || 'Successfully logged in!'
        );
        data.data.IsSuccess && navigate('/main');
      })

      .catch((err) => {
        console.log(err);
        SweetAlertsFunction(err.response.status, err.message);
      });
    setEmail('');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="color-overlay bg-1 d-flex align-items-center justify-content-center border vh-100 ">
      <Form
        className=" bg-light p-5 rounded"
        onSubmit={handleSubmitChangePassword}
      >
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Current Password"
            className=" shadow-none"
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword || ''}
          />
          <p>99Salman99*</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            className=" shadow-none"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword || ''}
          />
        </Form.Group>
        <Form.Group className="d-flex">
          <Button variant="primary" type="submit" className="mt-3 w-75 mx-auto">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ChangePassword;
