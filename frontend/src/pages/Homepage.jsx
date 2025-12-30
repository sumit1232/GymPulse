// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Add react-router-dom if not already installed: npm i react-router-dom

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 via-red-400 to-amber-400 opacity-20"></div>
        
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-8 lg:pr-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Gym Pulse - Your Fitness Hub
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Manage Your <span className="bg-gradient-to-r from-pink-400 via-red-400 to-amber-400 bg-clip-text text-transparent">Gym</span> 
                <br />Like a Pro
              </h1>
              
              <p className="text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Track memberships, schedules, payments, and workouts. Built for gym owners who want complete control.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  to="/login"
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-pink-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  to="/register"
                  className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Create Free Account
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-slate-400">Active Gyms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-slate-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99%</div>
                  <div className="text-sm text-slate-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="../src/assets/gym.png"               
                   alt="Gym Management Dashboard"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl drop-shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Preview */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-white mb-20">Everything You Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Member Management</h3>
              <p className="text-slate-400">Track attendance, memberships, and payments effortlessly.</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Class Scheduling</h3>
              <p className="text-slate-400">Manage trainers, classes, and bookings in one place.</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-slate-400">Real-time insights with beautiful charts and reports.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
