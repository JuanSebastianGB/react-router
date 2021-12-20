import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/usuarios' element={<Navigate to='/users' />} />
        <Route path='/usuarios2' element={<Navigate replace to='/users' />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/Dashboard/*' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
