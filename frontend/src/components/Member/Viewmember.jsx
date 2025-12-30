// src/pages/Viewviewmember.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams  } from 'react-router-dom';

const ViewMember = () => {
  const { id } = useParams();
  const [viewmember,setviewMember] = useState([])

  useEffect(() => {
      if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/members/${id}`);
      console.log('API fetch Success');
      console.log(result.data);
      setviewMember(result.data)
    } catch (error) {
      console.log(error);
    }
  }

    const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await axios.delete(`http://localhost:3000/members/${id}`);
        alert('Member deleted successfully!');
        // Redirect to members list
        window.location.href = '/members';
      } catch (error) {
        console.error('Delete error:', error);
        alert('Failed to delete member');
      }
    }
  };


  return (
    <>
   <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/members"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Back to members list"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                {viewmember.firstName} {viewmember.lastName}
              </h1>
              <p className="text-slate-400">Member {viewmember.id} • {viewmember.plan}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
              {/* Profile Header */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-4 border-slate-700 lg:order-1 flex-shrink-0">
                  {viewmember.profilePhoto ? (
                    <img 
                      src={viewmember.profilePhoto} 
                      alt={`${viewmember.firstName} ${viewmember.lastName}`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                  // null
                  <img 
                      src='https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                      className="w-full h-full object-cover"
                    />
                  
                  )}
                </div>
                
                <div className="flex-1 lg:order-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-4 py-2 text-sm font-semibold rounded-full border text-xs ${
                      viewmember.isActive 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                        : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}>
                      {viewmember.isActive ? 'Active' : 'Inactive'}
                    </span>
                    <span className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
                      Basic
                    </span>
                    <span className="px-3 py-1 bg-slate-700 text-slate-400 text-xs font-semibold rounded-full border border-slate-600">
                      Joined: {new Date(viewmember.joinDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 mb-6 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Next Payment: {new Date(viewmember.nextPayment).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Age: {new Date().getFullYear() - new Date(viewmember.dob).getFullYear()} yrs</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/members/${viewmember.id}/edit`}
                      className="px-6 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      Edit Member
                    </Link>
                    <button className="px-6 py-2 border border-slate-600 text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors focus-visible:ring-2 focus-visible:ring-slate-500">
                      Renew Membership
                    </button>
                    <Link
                      to={`/members/${viewmember.id}/payments`}
                      className="px-6 py-2 bg-amber-600 text-white text-sm font-medium rounded-xl hover:bg-amber-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      View Payments
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                      <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-white font-medium break-all">{viewmember.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                      <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 0v1.5a2.5 2.5 0 005 0V12z" />
                      </svg>
                      <span className="text-white font-medium break-all">{viewmember.email}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Emergency Contact</h4>
                  <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                    <svg className="w-5 h-5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white font-medium">{viewmember.emergencyContact}</span>
                  </div>
                </div>
              </div>

              {/* Membership Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Current Plan</h4>
                  <div className="p-6 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-2xl border border-slate-600">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold text-lg">Basic Monthly</span>
                      <span className="text-emerald-400 font-bold text-2xl">₹999</span>
                    </div>
                    <div className="text-xs text-slate-400">Valid until {new Date(viewmember.nextPayment).toLocaleDateString()}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Payment History</h4>
                  <div className="space-y-2 p-4 bg-slate-700/50 rounded-xl">
                    <div className="flex justify-between text-sm text-emerald-400 font-medium">
                      <span>Dec 2025</span>
                      <span>₹999 ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="space-y-6">
            {/* Recent Attendance */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Recent Attendance</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs">
                  <span>Today</span>
                  <span className="text-emerald-400 font-medium">Present</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Yesterday</span>
                  <span className="text-emerald-400 font-medium">Present</span>
                </div>
              </div>
              <Link to={`/members/${viewmember.id}/attendance`} className="block text-emerald-400 text-xs font-medium hover:underline">
                View Full History →
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <Link 
                  to={`/members/${viewmember.id}/attendance`} 
                  className="block p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  Record Attendance
                </Link>
                <Link 
                  to={`/members/${viewmember.id}/payments`} 
                  className="block p-3 text-amber-400 hover:bg-amber-500/10 rounded-xl text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Add Payment
                </Link>
                <button className="w-full p-3 text-red-400 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-red-500" onClick={() => deleteUser(viewmember.id)} >
                  Suspend Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewMember;
