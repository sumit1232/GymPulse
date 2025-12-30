// src/pages/Plans.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Plans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "₹999",
      monthly: "₹1,200",
      features: ["Gym Access", "Locker", "Basic Classes"],
      duration: "1 Month",
      members: 156,
      status: "Active"
    },
    {
      id: 2,
      name: "Premium", 
      price: "₹1,999",
      monthly: "₹2,500",
      features: ["Full Gym Access", "Locker + Sauna", "All Classes", "Personal Trainer"],
      duration: "1 Month",
      members: 89,
      status: "Active"
    },
    {
      id: 3,
      name: "Annual Premium",
      price: "₹18,999",
      monthly: "₹1,583/mo",
      features: ["Everything in Premium", "2 Free Guest Passes", "Priority Booking"],
      duration: "12 Months",
      members: 45,
      status: "Active"
    },
    {
      id: 4,
      name: "Trial",
      price: "Free",
      monthly: "₹0",
      features: ["Limited Gym Access", "No Locker"],
      duration: "7 Days",
      members: 23,
      status: "Active"
    }
  ];

  return (
    <>
    <Navbar/>
        <div className="min-h-screen bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Membership Plans</h1>
            <p className="text-slate-400">Manage pricing plans and member subscriptions</p>
          </div>
          <Link
            to="/addplans"
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Add Plan
          </Link>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search plans..."
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <select className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:bg-slate-700 transition-colors group">
            {/* Plan Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  plan.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                  'bg-slate-500/10 text-slate-400 border border-slate-500/30'
                }`}>
                  {plan.status}
                </span>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                plan.status === 'Active' ? 'bg-emerald-400' : 'bg-slate-400'
              }`}></div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
              <div className="text-slate-500 text-sm line-through">{plan.monthly}</div>
              <div className="text-slate-400 text-sm">{plan.duration}</div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats & Actions */}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="text-slate-400">Active Members</p>
                <p className="font-semibold text-white">{plan.members}</p>
              </div>
              
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                <Link
                  to={`/plans/${plan.id}`}
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

export default Plans;
