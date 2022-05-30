import { Nav, Container, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SweetAlertsLogin } from '../services/helpers/SweetAlerts';
import { GrLogout } from 'react-icons/gr';
import loginSuccess from '../redux/actions/LoginActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.LoginReducer);
  console.log(loggedIn);
  const handleLogout = () => {
    dispatch(loginSuccess({}));
  };

  return (
    <Navbar bg="light" expand="md">
      <Container className="d-flex">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://fintechyazilim.com/assets/img/business-2/logo.svg"
              className="d-inline-block"
              alt="fintech-logo"
              width="110"
              height="60"
              onClick={() =>
                !loggedIn && SweetAlertsLogin('You need to logged in first!')
              }
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ms-auto">
            {!loggedIn && (
              <Link to="/login" className="nav-livk mx-3 ">
                Login
              </Link>
            )}
            <Link
              to="/ChangePassword"
              className="nav-livk  mx-3"
              onClick={() =>
                !loggedIn && SweetAlertsLogin('You need to logged in first!')
              }
            >
              Change password
            </Link>
            {loggedIn && (
              <Link to="/">
                <Button
                  variant="danger"
                  className="mx-3 "
                  style={{ width: '150px' }}
                  onClick={handleLogout}
                >
                  <GrLogout /> Logout
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
