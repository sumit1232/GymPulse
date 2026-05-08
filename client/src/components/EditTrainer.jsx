import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const EditTrainer = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">

                <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">

                    {/* Header */}
                    <div className="mb-8 flex items-center justify-between">

                        <div>
                            <h1 className="text-4xl font-bold text-lime-400">
                                Edit Trainer
                            </h1>

                            <p className="mt-2 text-slate-400">
                                Update trainer information below
                            </p>
                        </div>

                        {/* Back Button */}
                        <Link
                            to="/trainer"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                        >
                            <ArrowLeft size={20} />
                            Back
                        </Link>

                    </div>

                    {/* Form */}
                    <form className="grid gap-6 md:grid-cols-2">

                        {/* Full Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Full Name
                            </label>

                            <input
                                type="text"
                                defaultValue="Rahul Sharma"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Email
                            </label>

                            <input
                                type="email"
                                defaultValue="rahul@gmail.com"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Phone Number
                            </label>

                            <input
                                type="text"
                                defaultValue="+91 9876543210"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            />
                        </div>

                        {/* Experience */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Experience
                            </label>

                            <input
                                type="text"
                                defaultValue="5 Years"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            />
                        </div>

                        {/* Specialty */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Specialty
                            </label>

                            <select
                                defaultValue="Fitness Coach"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            >
                                <option>Fitness Coach</option>
                                <option>Yoga Trainer</option>
                                <option>Cardio Expert</option>
                                <option>Zumba Trainer</option>
                                <option>Personal Trainer</option>
                            </select>
                        </div>

                        {/* Salary */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Salary
                            </label>

                            <input
                                type="text"
                                defaultValue="₹45,000"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            />
                        </div>

                        {/* Address */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Address
                            </label>

                            <textarea
                                rows="4"
                                defaultValue="Pune, Maharashtra, India"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 md:col-span-2">

                            <button
                                type="submit"
                                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
                            >
                                Update Trainer
                            </button>

                            <button
                                type="button"
                                className="rounded-xl border border-white/10 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                            >      <Link to="/trainer">
                                    Cancel
                                </Link>
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default EditTrainer