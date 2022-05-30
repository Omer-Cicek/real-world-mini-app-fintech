import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import loginSuccess from '../redux/actions/LoginActions';
import { useDispatch } from 'react-redux';
import SweetAlertsFunction from '../services/helpers/SweetAlerts';
import * as Yup from 'yup';
import { Formik } from 'formik';

const ForgotPassword = () => {
  const formData = new FormData();
  const dispatch = useDispatch();

  const ForgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
  });

  const initialValues = {
    email: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    formData.append('email', values.email);
    axios(
      'https://dev-smoothie-api.fintechyazilim.com/api/User/ForgotPassword',
      {
        method: 'post',

        data: formData,
      }
    )
      .then((data) => {
        console.log(data);
        dispatch(loginSuccess(values.email));
        SweetAlertsFunction(data.data.IsSuccess, data.data.Result.Message);
      })
      .catch((err) => {
        console.log(err);
        SweetAlertsFunction(err.response.status, err.message);
      });
    resetForm();
  };

  return (
    <div className="color-overlay bg-2 d-flex align-items-center justify-content-center border vh-100 ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ForgotPasswordValidationSchema}
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
            <h1 className="mb-5">Forgot Password?</h1>
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
              <Form.Text className="text-muted">
                Check your email to see forgot password link
              </Form.Text>
              {touched.email && errors.email ? (
                <p className="text-danger">{errors.email}</p>
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

export default ForgotPassword;
