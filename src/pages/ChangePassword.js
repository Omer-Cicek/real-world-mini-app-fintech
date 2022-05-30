import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SweetAlertsFunction from '../services/helpers/SweetAlerts';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ChangePassword = () => {
  const formData = new FormData();
  const navigate = useNavigate();

  const ChangePasswordValidationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 chars minimum')
      .matches(/\d+/, 'Password must have a number')
      .matches(/[a-z]+/, 'Password must have a lowercase')
      .matches(/[A-Z]+/, 'Password must have a uppercase')
      .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
    newPassword: Yup.string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 chars minimum')
      .matches(/\d+/, 'Password must have a number')
      .matches(/[a-z]+/, 'Password must have a lowercase')
      .matches(/[A-Z]+/, 'Password must have a uppercase')
      .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
  });

  const handleSubmit = (values, { resetForm }) => {
    formData.append('Email', values.email);
    formData.append('CurrentPassword', values.password);
    formData.append('Password', values.newPassword);

    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/User/ChangePassword',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        SweetAlertsFunction(
          data.data.IsSuccess,
          data.data.Result.Message || 'Successfully logged in!'
        );
        data.data.IsSuccess && navigate('/');
      })

      .catch((err) => {
        SweetAlertsFunction(err.response.status, err.message);
      });
    resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
    newPassword: '',
  };

  return (
    <div className="color-overlay bg-1 d-flex align-items-center justify-content-center border vh-100 ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ChangePasswordValidationSchema}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
        }) => (
          <Form className=" bg-light p-5 rounded" onSubmit={handleSubmit}>
            <h1 className="mb-5">Change Password</h1>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                className={
                  touched.email && errors.email ? 'border-danger' : null
                }
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <p className="text-danger">{errors.email}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Current Password"
                className={
                  touched.password && errors.password ? 'border-danger' : null
                }
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {touched.password && errors.password ? (
                <p className="text-danger">{errors.password}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                name="newPassword"
                type="password"
                placeholder="New Password"
                className={
                  touched.newPassword && errors.newPassword
                    ? 'border-danger'
                    : null
                }
                onChange={handleChange}
                value={values.newPassword}
                onBlur={handleBlur}
              />
              {touched.newPassword && errors.newPassword ? (
                <p className="text-danger">{errors.newPassword}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="d-flex">
              <Button
                variant="primary"
                type="submit"
                className="mt-3 w-75 mx-auto"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
