// src/pages/ChangePassword.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-lg mx-auto">
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
              <h1 className="text-3xl font-bold text-white mb-1">Change Password</h1>
              <p className="text-slate-400">Update your account password securely</p>
            </div>
          </div>
        </div>

        {/* Change Password Form */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                New Password *
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  minLength="8"
                  className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L19.5 19.5M15.737 9.878a3 3 0 114.243-4.243" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm New Password *
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L19.5 19.5M15.737 9.878a3 3 0 114.243-4.243" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-slate-300">At least 8 characters</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-slate-300">One uppercase letter</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm text-slate-300">One number</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <span className="text-sm text-slate-300">One special character</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-8">
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
                Update Password
              </button>
            </div>
          </form>
        </div>

        {/* Security Tips */}
        <div className="mt-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-white mb-4">🔒 Security Tips</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>• Use a combination of letters, numbers, and symbols</li>
            <li>• Avoid using personal information or common words</li>
            <li>• Don't reuse passwords from other websites</li>
            <li>• Consider using a password manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
