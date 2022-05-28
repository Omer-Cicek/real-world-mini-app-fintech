import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Main from '../pages/Main';
import CustomerAccList from '../pages/CustomerAccList';
import ForgotPasswordChange from '../pages/ForgotPasswordChange';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/ForgotPasswordChange"
          element={<ForgotPasswordChange />}
        />
        <Route path="/main" element={<PrivateRouter />}>
          <Route path="" element={<Main />} />
        </Route>
        <Route path="/customer-accounts-list" element={<PrivateRouter />}>
          <Route path="" element={<CustomerAccList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
