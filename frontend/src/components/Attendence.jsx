// src/pages/Attendance.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Attendance = () => {
  const attendanceData = [
    { id: 1, member: "Rahul Sharma", timeIn: "06:30 AM", timeOut: "08:15 AM", trainer: "Rohit Verma", status: "Present" },
    { id: 2, member: "Priya Singh", timeIn: "05:45 AM", timeOut: "07:30 AM", trainer: "Anjali Mehta", status: "Present" },
    { id: 3, member: "Vikram Kumar", timeIn: "07:00 AM", timeOut: "-", trainer: "Arjun Patel", status: "Active" },
    { id: 4, member: "Neha Gupta", timeIn: "06:15 AM", timeOut: "07:45 AM", trainer: "Priyanka Rao", status: "Present" },
    { id: 5, member: "Amit Patel", timeIn: "-", timeOut: "-", trainer: "-", status: "Absent" },
  ];

  const getStatusColor = (status) => {
    if (status === "Present") return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
    if (status === "Active") return "bg-blue-500/10 text-blue-400 border border-blue-500/30";
    return "bg-red-500/10 text-red-400 border border-red-500/30";
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Today's Attendance</h1>
            <p className="text-slate-400">Track member check-ins and attendance</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors">
              Mark All Present
            </button>
            <Link
              to="/addattendance"
              className="px-6 py-3 bg-slate-700 text-white font-medium rounded-xl hover:bg-slate-600 transition-colors"
            >
              Manual Entry
            </Link>
          </div>
        </div>

        {/* Date Filter & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search members..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <input
                type="date"
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-emerald-400">156</div>
              <div className="text-sm text-slate-400">Present</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-400">23</div>
              <div className="text-sm text-slate-400">Active</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-400">12</div>
              <div className="text-sm text-slate-400">Absent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-700/50 text-slate-300">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Member</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Time In</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Time Out</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Trainer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-8 py-4 text-right text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {attendanceData.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center">
                          <span className="text-sm font-bold text-white">RS</span>
                        </div>
                        <span className="font-medium text-white">{record.member}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300 font-medium">{record.timeIn}</td>
                    <td className="px-6 py-4 text-slate-300 font-medium">{record.timeOut}</td>
                    <td className="px-6 py-4">
                      <span className="text-emerald-400 font-medium">{record.trainer || '-'}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-right space-x-2">
                      <button className="p-2 text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all" title="Check Out">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                      <button className="p-2 text-amber-400 hover:bg-amber-500/10 rounded-xl transition-all" title="Edit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors">
            Export Today's Report
          </button>
          <button className="px-6 py-3 bg-slate-700 text-white font-medium rounded-xl hover:bg-slate-600 transition-colors">
            View Monthly Report
          </button>
          <button className="px-6 py-3 bg-slate-700 text-white font-medium rounded-xl hover:bg-slate-600 transition-colors">
            Print Attendance Sheet
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Attendance;
