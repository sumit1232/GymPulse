// src/pages/ViewMember.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ViewMember = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
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
              <h1 className="text-3xl font-bold text-white mb-1">Rahul Sharma</h1>
              <p className="text-slate-400">Member #001 • Premium Plan</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
              {/* Profile Header */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                <div className="flex-shrink-0 lg:order-2">
                  <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 border-4 border-white/20">
                    <span className="text-2xl font-bold text-white">RS</span>
                  </div>
                </div>
                
                <div className="flex-1 lg:order-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full border border-emerald-500/30">
                      Active
                    </span>
                    <span className="px-4 py-2 bg-purple-500/10 text-purple-400 text-sm font-semibold rounded-full border border-purple-500/30">
                      Premium
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                      Joined: 2025-01-15
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Next Payment: 2026-01-15</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Attendance: 92%</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/members/1/edit"
                      className="px-6 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                    >
                      Edit Member
                    </Link>
                    <button className="px-6 py-2 border border-slate-600 text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors">
                      Renew Membership
                    </button>
                    <button className="px-6 py-2 bg-amber-600 text-white text-sm font-medium rounded-xl hover:bg-amber-700 transition-colors">
                      View Payments
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Contact</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-white font-medium">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 0v1.5a2.5 2.5 0 005 0V12z" />
                      </svg>
                      <span className="text-white font-medium">rahul@gym.com</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Emergency Contact</h4>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white font-medium">+91 98765 43211 (Mother)</span>
                  </div>
                </div>
              </div>

              {/* Membership Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Current Plan</h4>
                  <div className="p-4 bg-slate-700/50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">Premium Monthly</span>
                      <span className="text-emerald-400 font-bold">₹1,999</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Valid until 2026-01-15</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Payment History</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-emerald-400">
                      <span>Dec 2025</span>
                      <span>₹1,999 ✓</span>
                    </div>
                    <div className="flex justify-between text-xs text-emerald-400">
                      <span>Nov 2025</span>
                      <span>₹1,999 ✓</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Oct 2025</span>
                      <span>₹1,999 ✓</span>
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
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Today</span>
                  <span className="text-emerald-400">Present</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Yesterday</span>
                  <span className="text-emerald-400">Present</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Mon</span>
                  <span className="text-emerald-400">Present</span>
                </div>
              </div>
              <Link to="/attendance" className="mt-4 block text-emerald-400 text-xs font-medium hover:underline">
                View Full History →
              </Link>
            </div>

            {/* Assigned Trainer */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Trainer</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-xs font-bold text-white">RV</span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Rohit Verma</div>
                  <div className="text-xs text-slate-500">Strength Training</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <Link to="/members/1/attendance" className="block p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl text-sm transition-all">
                  Record Attendance
                </Link>
                <Link to="/members/1/payments" className="block p-3 text-amber-400 hover:bg-amber-500/10 rounded-xl text-sm transition-all">
                  Add Payment
                </Link>
                <button className="w-full p-3 text-red-400 hover:bg-red-500/10 rounded-xl text-sm transition-all">
                  Suspend Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMember;
