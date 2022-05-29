import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { useDispatch } from 'react-redux';
import loginSuccess from '../redux/actions/LoginActions';
import SweetAlertsFunction from '../services/helpers/SweetAlerts';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formData = new FormData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInValidationSchema = Yup.object({
    // username: Yup.string()
    //   .required('Display name is required')
    //   .min(2, 'Too short')
    //   .max(15, 'Must be 15 char or less'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 chars minimum')
      .matches(/\d+/, 'Password must have a number')
      .matches(/[a-z]+/, 'Password must have a lowercase')
      .matches(/[A-Z]+/, 'Password must have a uppercase')
      .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
    // password2: Yup.string()
    //   .required('No password provided')
    //   .min(8, 'Password is too short - should be 8 chars minimum')
    //   .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const handleSubmit = (values, { resetForm }) => {
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('LoginType', '50dcd869-eeb3-ec11-ac1f-000c29330757');

    axios('https://dev-smoothie-api.fintechyazilim.com/api/User/Login', {
      method: 'post',
      data: formData,
    })
      .then((data) => {
        const decodedToken = decodeToken(data.data.Result.AccessToken);
        data.data.IsSuccess === true &&
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
    resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className="color-overlay bg-1 d-flex align-items-center justify-content-center border vh-100 ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signInValidationSchema}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
        }) => (
          <Form className=" bg-light p-5 rounded " onSubmit={handleSubmit}>
            <h1 className="mb-5">Login Page</h1>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                className=" shadow-none"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              <p className="text-danger">{(touched.email, errors.email)}</p>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter password"
                className=" shadow-none"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              <p className="text-danger">
                {(touched.password, errors.password)}
              </p>
              <h6>99Salman99*</h6>
              <Form.Group className="d-flex justify-content-between">
                <Link to="/forgot-password">Forgot password?</Link>
              </Form.Group>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-3 w-100 mx-auto"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
