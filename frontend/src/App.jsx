import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Memberpage from './components/Member/Memberpage';
import Addmember from './components/Member/Addmember';
import Plans from './pages/Plans';
import Addplan from './pages/Addplan';

const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/members' element={<Memberpage/>} />
      <Route path='/addmember' element={<Addmember/>} />
      <Route path='/plans' element={<Plans/>} />
      <Route path='/addplans' element={<Addplan/>} />





      
    </Routes>
   </Router>
   </>
  )
}

export default App
