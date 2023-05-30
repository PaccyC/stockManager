import { useState } from 'react';
import {BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './components/Dashboard'
import Stock from './components/Stock';
import Settings from './components/Settings';
import Logout from './components/Logout';
import { useAuthContext } from './hooks/useAuthContext';
import { CssBaseline,ThemeProvider } from "@mui/material";
import {ColorModeContext,useMode} from './theme'
function App() {
  const [mode,setMode]=useState("light")
  const {user}=useAuthContext();
  
  return (
    
<div className="">
      
      <Router>
   
      <Routes>
            <Route path='/' element={!user ?<Navigate to='/login'/>: <Dashboard/>}/>
            <Route path='/login' element={!user ?< Login/>: <Navigate to='/'/>}/>
            <Route path='/signup' element={!user ? <Signup/>: <Navigate to='/'/>}/>
            <Route path='/stock' element={!user ?<Navigate to='/login'/> : <Stock/>}/>
            <Route path='/settings' element={!user ?<Navigate to='/login'/> : <Settings mode={mode} setMode={setMode}/>}/>
            <Route path='/logout' element={!user ?<Navigate to='/login'/> : <Logout/>}/>
          </Routes>

        </Router>
      </div>
   
    
  );
}

export default App;