// src/pages/EditProfile.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Edit Profile</h1>
              <p className="text-slate-400">Update your gym owner account details</p>
            </div>
          </div>
        </div>

        {/* Edit Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form className="space-y-6">
            {/* Profile Photo & Gym Info */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Gym Information</h3>
              
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Profile Photo
                  </label>
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-600 hover:border-emerald-500 transition-colors cursor-pointer">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 text-center">Click to change</p>
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Gym Name *
                    </label>
                    <input
                      type="text"
                      defaultValue="Fitness Hub Gym"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      defaultValue="Rahul Sharma"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    defaultValue="rahul@fitnesshub.com"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Gym Address
                  </label>
                  <input
                    type="text"
                    defaultValue="123 Fitness Street, Narnaund, Haryana"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                  Gym Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43211"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Business Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    GST Number
                  </label>
                  <input
                    type="text"
                    defaultValue="12ABCDE1234F1Z5"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="12ABCDE1234F1Z5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Notifications & Preferences */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Notifications</h3>
              
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-300">Email notifications for payments & attendance</span>
                </label>
                
                <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-300">SMS alerts for overdue payments</span>
                </label>
                
                <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <span className="text-sm font-medium text-slate-300">Weekly performance reports</span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Link
                to="/profile"
                className="px-8 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors flex-1 text-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors flex-1 text-center"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
