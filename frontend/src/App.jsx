import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Member from './components/Member';
import Trainer from './components/Trainer';
import Assets from './components/Assets';
import Enquiry from './components/Enquiry';

const App = () => {
  return (
    <BrowserRouter>    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/members" element={<Member />} />
            <Route path="/trainers" element={<Trainer />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/enquiry" element={<Enquiry />} />


            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
    </BrowserRouter>
  );
};

export default App;
