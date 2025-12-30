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
import Addtrainer from './components/Trainer/Addtrainer';
import Trainerpage from './components/Trainer/Trainerpage';
import Attendence from './components/Attendence';
import AddAttendance from './components/AddAttendance';
import Profile from './components/Profile/Profile';
import Editprofile from './components/Profile/Editprofile';
import Changepassword from './components/Password/Changepassword';
import Viewmember from './components/Member/Viewmember';
import Footer from './components/Footer';

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
      <Route path='/trainers' element={<Trainerpage/>} />
      <Route path='/addtrainers' element={<Addtrainer/>} />
      <Route path='/attendance' element={<Attendence/>} />
      <Route path='/addattendance' element={<AddAttendance/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/editprofile' element={<Editprofile/>} />
      <Route path='/changepassword' element={<Changepassword/>} />
      <Route path='/viewmember' element={<Viewmember/>} />
      <Route path='/footer' element={<Footer/>} />


      
    </Routes>
   </Router>
   </>
  )
}

export default App
