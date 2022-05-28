import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
// import ChangePassword from '../pages/ChangePassword';
import Main from '../pages/Main';
import CustomerAccList from '../pages/CustomerAccList';
import ForgotPasswordChange from '../pages/ForgotPasswordChange';

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
        <Route path="/main" element={<Main />} />
        <Route path="/customer-accounts-list" element={<CustomerAccList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
