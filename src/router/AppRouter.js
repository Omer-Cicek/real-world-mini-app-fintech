import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
