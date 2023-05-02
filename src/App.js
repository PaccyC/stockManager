


import {BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user}=useAuthContext();
  return (
    <div className="App">
      
    <Router>
      
    <Routes>
          <Route path='/' element={user ?<Home/> :<Navigate to='/login'/>}/>
          <Route path='/login' element={!user ?< Login/>: <Navigate to='/'/>}/>
          <Route path='/signup' element={!user ? <Signup/>: <Navigate to='/'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
