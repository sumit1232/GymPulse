// src/pages/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 10a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0zm8.071 1.414a4 4 0 11-5.656 0 4 4 0 015.656 0zM12 18a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Create Your Gym Account
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Join Gym Pulse and start managing your gym operations today
          </p>
        </div>

        {/* Register Form */}
        <form className="mt-8 space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="gymName" className="block text-sm font-medium text-slate-300 mb-2">
                Gym Name *
              </label>
              <input
                id="gymName"
                name="gymName"
                type="text"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="Fitness Hub Gym"
              />
            </div>

            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-slate-300 mb-2">
                Owner Name *
              </label>
              <input
                id="ownerName"
                name="ownerName"
                type="text"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="gym@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength="8"
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="At least 8 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-5 w-5 text-emerald-500 focus:ring-emerald-500 border-white/30 rounded backdrop-blur-sm"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-slate-300">
                I agree to Gym Pulse{' '}
                <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-semibold rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-slate-900/50 text-slate-400">Already have an account?</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/login"
            className="w-full flex justify-center items-center px-6 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 text-lg max-w-sm mx-auto"
          >
            Sign In to Your Account
          </Link>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default Register;
