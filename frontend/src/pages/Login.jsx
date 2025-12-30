// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Replace with your actual login API call
      // const response = await fetch('/api/auth/login', { method: 'POST', ... });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to dashboard on success
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-slate-400 text-lg max-w-sm mx-auto">
            Sign in to your Gym Pulse account to manage your gym
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-100 p-4 rounded-2xl text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="gymowner@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 text-lg backdrop-blur-sm"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-5 w-5 text-pink-500 focus:ring-pink-500 border-white/30 rounded backdrop-blur-sm"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-slate-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-pink-400 hover:text-pink-300 transition-colors">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-semibold rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 text-white hover:from-pink-600 hover:via-red-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-2xl hover:shadow-pink-500/25 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25 cx-12 cy-12 r-10 stroke-current stroke-width-4" />
                <path className="opacity-75 fill-current" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : null}
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-slate-900/50 text-slate-400">or continue with</span>
          </div>
        </div>

        {/* Alternative Links */}
        <div className="grid gap-4">
          <Link
            to="/register"
            className="w-full flex justify-center items-center px-6 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 text-lg"
          >
            Create New Account
          </Link>
          <Link
            to="/demo"
            className="w-full flex justify-center items-center px-6 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 text-lg"
          >
            Try Demo
          </Link>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default Login;
