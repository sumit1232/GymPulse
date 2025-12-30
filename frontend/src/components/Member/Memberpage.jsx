// src/pages/Members.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Memberpage = () => {
  const members = [
    { id: 1, name: "Rahul Sharma", phone: "+91 98765 43210", email: "rahul@gym.com", joinDate: "2025-01-15", status: "Active", membership: "Premium", nextPayment: "2026-01-15" },
    { id: 2, name: "Priya Singh", phone: "+91 87654 32109", email: "priya@gmail.com", joinDate: "2025-02-01", status: "Active", membership: "Basic", nextPayment: "2025-12-01" },
    { id: 3, name: "Amit Patel", phone: "+91 76543 21098", email: "amit@yahoo.com", joinDate: "2025-03-10", status: "Inactive", membership: "Premium", nextPayment: "Overdue" },
    { id: 4, name: "Neha Gupta", phone: "+91 65432 10987", email: "neha@outlook.com", joinDate: "2025-11-20", status: "Active", membership: "Basic", nextPayment: "2026-01-20" },
    { id: 5, name: "Vikram Kumar", phone: "+91 54321 09876", email: "vikram@proton.me", joinDate: "2025-12-05", status: "Trial", membership: "Trial", nextPayment: "2025-12-20" },
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Members</h1>
            <p className="text-slate-400">Manage your gym members</p>
          </div>
          <Link
            to="/addmember"
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Add Member
          </Link>
        </div>

        {/* Search */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <select className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Trial</option>
          </select>
        </div>
      </div>

      {/* Members List - Cards */}
      <div className="max-w-6xl mx-auto grid gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:bg-slate-700 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Member Info */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-white">RS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-slate-400 mb-2">{member.phone}</p>
                  <p className="text-slate-500 text-sm">{member.email}</p>
                </div>
              </div>

              {/* Status & Details */}
              <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center justify-between lg:justify-end flex-1 lg:flex-initial">
                <div className="text-right lg:text-left">
                  <p className="text-slate-400 text-sm">Joined</p>
                  <p className="font-medium text-white">{member.joinDate}</p>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  member.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                  member.status === 'Inactive' ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
                  'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}>
                  {member.status}
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  member.membership === 'Premium' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' :
                  member.membership === 'Basic' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                  'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}>
                  {member.membership}
                </div>

                <div className={`font-semibold text-sm px-3 py-1 rounded-lg ${
                  member.nextPayment === 'Overdue' ? 'bg-red-500/10 text-red-400 border border-red-500/30' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {member.nextPayment}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  to={`/members/${member.id}`}
                  className="p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all"
                  title="View Details"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
                <button className="p-3 text-amber-400 hover:bg-amber-500/10 rounded-xl transition-all" title="Edit">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Memberpage;
