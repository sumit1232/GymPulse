// src/pages/AddMember.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Addmember = () => {
  const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dob: '',
  plan: '',
  joinDate: '',
  nextPayment: '',
  emergencyContact: '',
  profilePhoto: null
});

const handleformdata = (e) => {
console.log(e.target.value);
const {name,value} = e.target;
setFormData({...formData,[name]:value});
}

const saveForm = async(e) => {
alert('form submited..')
e.preventDefault();
await axios.post('http://localhost:3000/members',formData)
console.log(formData);

}

  return (
    <>
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/members"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Add Member</h1>
              <p className="text-slate-400">Create a new member profile</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form className="space-y-6" onSubmit={saveForm}>
            {/* Profile Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Profile Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleformdata}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Enter Your FirstName"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleformdata}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Profile Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-600 hover:border-emerald-500 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-slate-400">
                    Click to upload or drag and drop
                    <div className="text-xs mt-1">JPG, PNG up to 5MB</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name='phone'
                    id='phone'
                    value={formData.phone}
                    onChange={handleformdata}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleformdata}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="rahul@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id='dob'
                    name='dob'
                    value={formData.dob}
                    onChange={handleformdata}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Membership Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Membership Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Plan *
                  </label>
                  <select 
                  id='plan'
                  name='plan'
                  value={formData.plan}
                  onChange={handleformdata}
                  required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option>Select plan</option>
                    <option>Basic - ₹999/month</option>
                    <option>Premium - ₹1,999/month</option>
                    <option>Annual Premium - ₹18,999/year</option>
                    <option>Trial - Free/7 days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Join Date *
                  </label>
                  <input
                    type="date"
                    id='joinDate'
                    name='joinDate'
                    value={formData.joinDate}
                    onChange={handleformdata}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Next Payment Date
                  </label>
                  <input
                    type="date"
                    id='nextPayment'
                    name='nextPayment'
                    value={formData.nextPayment}
                    onChange={handleformdata}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    id='emergencyContact'
                    name='emergencyContact'
                    value={formData.emergencyContact}
                    onChange={handleformdata}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="+91 98765 43211"
                  />
                </div>
              </div>
            </div>

            {/* Status & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
              <div className="flex gap-4 ml-auto">
                <Link
                  to="/members"
                  className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Save Member
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Addmember;
