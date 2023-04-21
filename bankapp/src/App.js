import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Authenticate from './components/Authenticate';
import Dashboard from './components/Dashboard';
import Statement from './components/Statement';
import NewDashboard from './components/NewDashboard';
import NewStatement from './components/NewStatement';
import Logout from './components/Logout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/auth-controller' element={<Authenticate />} />
        <Route path='/dashboard' element={<NewDashboard />} />
        <Route path='/statement' element={<NewStatement />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
