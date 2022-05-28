import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { loggedIn } = useSelector((state) => state.LoginReducer);
  console.log(loggedIn);
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
