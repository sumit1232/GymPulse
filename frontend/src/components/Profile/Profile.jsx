// src/pages/Profile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Profile = () => {
    return (
    <>
    <Navbar />
        <div className="min-h-screen bg-slate-900 p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Link
                            to="/dashboard"
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-1">My Profile</h1>
                            <p className="text-slate-400">Manage your gym owner account details</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Profile Card */}
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                        <div className="text-center mb-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl mx-auto mb-4 flex items-center justify-center border-4 border-white/20">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-1">Rahul Sharma</h2>
                            <p className="text-emerald-400 font-medium">Gym Owner - Fitness Hub</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400">Account Status</span>
                                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30">
                                    Active
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400">Member Since</span>
                                <span className="text-sm font-medium text-white">2025-01-15</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400">Gym Members</span>
                                <span className="text-2xl font-bold text-emerald-400">247</span>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Link
                                to="/editprofile"
                                className="flex-1 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center"
                            >
                                Edit Profile
                            </Link>
                            <Link
                                to="/changepassword"
                                className="flex-1 px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors flex items-center justify-center"
                            >
                                Change Password
                            </Link>
                        </div>

                    </div>

                    {/* Account Details Form */}
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-white mb-6">Account Details</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Gym Name *
                                    </label>
                                    <input
                                        type="text"
                                        value="Fitness Hub Gym"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Owner Name *
                                    </label>
                                    <input
                                        type="text"
                                        value="Rahul Sharma"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        value="rahul@fitnesshub.com"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        value="+91 98765 43210"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Gym Address
                                    </label>
                                    <input
                                        type="text"
                                        value="123 Fitness Street, Narnaund, Haryana"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Gym Phone
                                    </label>
                                    <input
                                        type="tel"
                                        value="+91 98765 43211"
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    GST Number (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="12ABCDE1234F1Z5"
                                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                />
                            </div>

                            <div className="flex items-center gap-3 pt-4">
                                <input
                                    type="checkbox"
                                    checked
                                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                                />
                                <label className="text-sm font-medium text-slate-300">
                                    Receive email notifications for payments and attendance
                                </label>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors flex-1"
                                >
                                    Update Profile
                                </button>
                                <button
                                    type="button"
                                    className="px-8 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors flex-1"
                                >
                                    Deactivate Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
