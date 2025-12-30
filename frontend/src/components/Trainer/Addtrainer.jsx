// src/pages/AddTrainer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddTrainer = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/trainers"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Add Trainer</h1>
              <p className="text-slate-400">Create a new trainer profile</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form className="space-y-6">
            {/* Profile Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Profile Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Rohit"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Verma"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Profile Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-600 border-2 hover:border-emerald-500 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-slate-400">
                    Click to upload or drag and drop
                    <div className="text-xs mt-1">JPG, PNG up to 5MB</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="rohit@gym.com"
                  />
                </div>
              </div>
            </div>

            {/* Professional Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Professional Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Specialty *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option>Select specialty</option>
                    <option>Strength Training</option>
                    <option>Yoga & Pilates</option>
                    <option>Cardio & HIIT</option>
                    <option>Weight Loss</option>
                    <option>CrossFit</option>
                    <option>Bodybuilding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Experience
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all">
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                    <option>4 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Certifications
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Ex: NASM, ACE, ISSA (comma separated)"
                />
              </div>
            </div>

            {/* Status & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
              <label className="flex items-center gap-3 text-sm font-medium text-slate-300">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                />
                <span>Mark as Active</span>
              </label>

              <div className="flex gap-4 ml-auto">
                <Link
                  to="/trainers"
                  className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Save Trainer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrainer;
