import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddMember = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">

        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-bold text-lime-400">
                Add Member
              </h1>

              <p className="mt-2 text-slate-400">
                Fill member details and membership information
              </p>
            </div>

            {/* Back Button */}
            <Link
              to="/member"
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
                placeholder="Enter full name"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Age */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Age
              </label>

              <input
                type="number"
                placeholder="Enter age"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Gender
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Membership Plan */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Membership Plan
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                <option>Basic Plan</option>
                <option>Gold Plan</option>
                <option>Premium Plan</option>
              </select>
            </div>

            {/* Membership Duration */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Membership Duration
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>12 Months</option>
              </select>
            </div>

            {/* Fees */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Fees Amount
              </label>

              <input
                type="text"
                placeholder="Enter fees amount"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Payment Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Payment Status
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                <option>Paid</option>
                <option>Pending</option>
              </select>
            </div>

            {/* Join Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Join Date
              </label>

              <input
                type="date"
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
                placeholder="Enter address"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 md:col-span-2">

              <button
                type="submit"
                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Add Member
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                 <Link to="/member">
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

export default AddMember