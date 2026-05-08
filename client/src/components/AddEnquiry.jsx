import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddEnquiry = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">

        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-bold text-lime-400">
                Add Enquiry
              </h1>

              <p className="mt-2 text-slate-400">
                Add new customer enquiry details
              </p>
            </div>

            {/* Back Button */}
            <Link
              to="/enquiry"
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
                placeholder="Enter customer name"
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

            {/* Enquiry Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Enquiry Type
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                <option>Membership</option>
                <option>Personal Training</option>
                <option>Yoga Classes</option>
                <option>Gym Timing</option>
                <option>Other</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Status
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                <option>New</option>
                <option>Pending</option>
                <option>Resolved</option>
              </select>
            </div>

            {/* Follow Up Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Follow Up Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Enquiry Message
              </label>

              <textarea
                rows="5"
                placeholder="Enter enquiry details"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 md:col-span-2">

              <button
                type="submit"
                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Add Enquiry
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>
    </>
  )
}

export default AddEnquiry