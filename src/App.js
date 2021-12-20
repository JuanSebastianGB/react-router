import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/users' element={<UserPage></UserPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </Router>
  );
}
