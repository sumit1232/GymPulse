// src/pages/AddAttendance.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AddAttendance = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/attendance"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Manual Attendance</h1>
              <p className="text-slate-400">Record attendance for individual members</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form className="space-y-6">
            {/* Member Selection */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Select Member</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Search & Select Member *
                  </label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Search by name, phone or email..."
                    />
                  </div>
                </div>

                {/* Selected Member Preview */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">RS</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-white truncate">Rahul Sharma</h4>
                      <p className="text-slate-400 text-sm truncate">+91 98765 43210</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30">
                      Premium Member
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Tracking */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Time Tracking</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Check In Time *
                  </label>
                  <input
                    type="time"
                    required
                    defaultValue="06:30"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Check Out Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    defaultValue="2025-12-30"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Trainer & Notes */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Additional Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Assigned Trainer
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all">
                    <option>Select trainer</option>
                    <option>Rohit Verma (Strength)</option>
                    <option>Anjali Mehta (Yoga)</option>
                    <option>Arjun Patel (CrossFit)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Status *
                  </label>
                  <select 
                    required
                    defaultValue="Present"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option>Present</option>
                    <option>Active</option>
                    <option>Absent</option>
                    <option>Late</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-vertical"
                  placeholder="Any special notes or observations..."
                />
              </div>
            </div>

            {/* Quick Actions & Submit */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
              <div className="flex gap-3 text-sm text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <span>Save for later</span>
                </label>
              </div>

              <div className="flex gap-4 ml-auto">
                <Link
                  to="/attendance"
                  className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Save Attendance
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAttendance;
