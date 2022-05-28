import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const SweetAlertsFunction = (loggedIn, loginMessage) => {
  MySwal.fire({
    position: 'top-end',
    icon: loggedIn === true ? 'success' : 'error',
    title: loginMessage,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const SweetAlertsLogin = () => {
  MySwal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'You need to be logged in first!',
    showConfirmButton: false,
    timer: 1000,
  });
};

export default SweetAlertsFunction;
