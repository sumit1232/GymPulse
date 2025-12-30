// src/pages/Trainers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Trainerpage = () => {
  const trainers = [
    {
      id: 1,
      name: "Rohit Verma",
      specialty: "Strength Training",
      phone: "+91 98765 43210",
      email: "rohit@gym.com",
      experience: "5 Years",
      classes: 12,
      status: "Active",
      rating: 4.8
    },
    {
      id: 2,
      name: "Anjali Mehta",
      specialty: "Yoga & Pilates",
      phone: "+91 87654 32109",
      email: "anjali@gmail.com",
      experience: "3 Years",
      classes: 8,
      status: "Active",
      rating: 4.9
    },
    {
      id: 3,
      name: "Vikash Singh",
      specialty: "Cardio & HIIT",
      phone: "+91 76543 21098",
      email: "vikash@fit.com",
      experience: "4 Years",
      classes: 15,
      status: "On Leave",
      rating: 4.6
    },
    {
      id: 4,
      name: "Priyanka Rao",
      specialty: "Weight Loss",
      phone: "+91 65432 10987",
      email: "priyanka@gmail.com",
      experience: "2 Years",
      classes: 10,
      status: "Active",
      rating: 4.7
    },
    {
      id: 5,
      name: "Arjun Patel",
      specialty: "CrossFit",
      phone: "+91 54321 09876",
      email: "arjun@crossfit.com",
      experience: "6 Years",
      classes: 18,
      status: "Active",
      rating: 4.9
    }
  ];

  const getStatusColor = (status) => {
    if (status === "Active") return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
    if (status === "On Leave") return "bg-amber-500/10 text-amber-400 border border-amber-500/30";
    return "bg-slate-500/10 text-slate-400 border border-slate-500/30";
  };

  const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={`w-4 h-4 ${i <= rating ? 'text-amber-400 fill-current' : 'text-slate-500'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-slate-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Trainers</h1>
            <p className="text-slate-400">Manage your fitness trainers and schedules</p>
          </div>
          <Link
            to="/addtrainers"
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Add Trainer
          </Link>
        </div>

        {/* Search & Filter */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search trainers..."
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <select className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Active</option>
            <option>On Leave</option>
          </select>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:bg-slate-700 transition-colors group">
            {/* Trainer Profile */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-white">{trainer.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-white truncate mb-1">{trainer.name}</h3>
                <p className="text-emerald-400 font-medium mb-2">{trainer.specialty}</p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <span>{trainer.experience}</span>
                  <span>•</span>
                  <span>{trainer.classes} Classes</span>
                </div>
              </div>
            </div>

            {/* Rating & Status */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1">
                {getRatingStars(trainer.rating)}
                <span className="text-sm text-slate-400 ml-1">({trainer.rating})</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(trainer.status)}`}>
                {trainer.status}
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-slate-300 truncate">{trainer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 0v1.5a2.5 2.5 0 005 0V12z" />
                </svg>
                <span className="text-slate-300 truncate">{trainer.email}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all pt-2">
              <Link
                to={`/trainers/${trainer.id}`}
                className="p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all flex-1 text-center"
                title="View Profile"
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        ))}
      </div>
    </div>
    </>
  );
};

export default Trainerpage;
