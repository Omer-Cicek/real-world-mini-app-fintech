import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const alertsLoginPage = (loggedIn, loginMessage) => {
  MySwal.fire({
    position: 'top-end',
    icon: loggedIn == true ? 'success' : 'error',
    title: loginMessage,
    showConfirmButton: false,
    timer: 1000,
  });
};

export default alertsLoginPage;
