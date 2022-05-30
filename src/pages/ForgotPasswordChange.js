import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SweetAlertsFunction from '../services/helpers/SweetAlerts';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordChange = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const formData = new FormData();
  const paramURL = searchParams.get('param');

  const LoginPasswordChangeValidationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 chars minimum')
      .matches(/\d+/, 'Password must have a number')
      .matches(/[a-z]+/, 'Password must have a lowercase')
      .matches(/[A-Z]+/, 'Password must have a uppercase')
      .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
    confirmPassword: Yup.string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 chars minimum')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const handleSubmit = (values, { resetForm }) => {
    formData.append('ForgotPasswordRequestId', paramURL);
    formData.append('Email', values.email);
    formData.append('Password', values.password);

    axios(
      `https://dev-smoothie-api.fintechyazilim.com/api/User/ForgotPasswordChange`,
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        console.log(data);
        SweetAlertsFunction(data.data.IsSuccess, data.data.Result.Message);
        data.data.IsSuccess && navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        SweetAlertsFunction(err.response.status, err.message);
      });
    resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className="color-overlay bg-3 d-flex align-items-center justify-content-center border vh-100 ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginPasswordChangeValidationSchema}
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
              <p>fintechtestuser@yandex.com</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
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
              <p>99Salman99*</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className={
                  touched.confirmPassword && errors.confirmPassword
                    ? 'border-danger'
                    : null
                }
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="text-danger">{errors.confirmPassword}</p>
              ) : null}
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordChange;
