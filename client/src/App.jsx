import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Landingpage from './components/Landingpage';
import Dashboard from './components/Dashboard';
import Member from './components/Member';
import Trainer from './components/Trainer';
import Assets from './components/Assets';
import Enquiry from './components/Enquiry';
import OTP_Verification from './components/OTP_Verification';
import PageNotFound from './components/PageNotFound';
import Sidebar from './components/Sidebar';
import AddTrainer from './components/AddTrainer';
import EditTrainer from './components/EditTrainer';
import AddMember from './components/AddMember';
import EditMember from './components/EditMember';
import AddAssets from './components/AddAssets';
import EditAssets from './components/EditAssets';
import AddEnquiry from './components/AddEnquiry';
import EditEnquiry from './components/EditEnquiry';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otpverify" element={<OTP_Verification />} />


            <Route element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
            //Trainer
              <Route path="/trainer" element={<Trainer />} />
              <Route path="/addtrainer" element={<AddTrainer />} />
              <Route path="/editTrainer" element={<EditTrainer />} />

            //Members
              <Route path="/member" element={<Member />} />
              <Route path="/addmember" element={<AddMember />} />
              <Route path="/editMember" element={<EditMember />} />

            // Assets
              <Route path="/assets" element={<Assets />} />
              <Route path="/addassets" element={<AddAssets />} />
              <Route path="/editassets" element={<EditAssets />} />

            //Enquiry
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/addenquiry" element={<AddEnquiry />} />
              <Route path="/editenquiry" element={<EditEnquiry />} />


              
            </Route>


            <Route path="*" element={<PageNotFound />} />


          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App