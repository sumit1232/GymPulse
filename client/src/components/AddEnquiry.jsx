import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddEnquiry = () => {
  const [enquiry, setenquiry] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    enquiryType: '',
    status: '',
    followUpDate: '',
    enquiryMessage: ''
  })

  const Handledata = (e) => {
    const { name, value } = e.target
    setenquiry({ ...enquiry, [name]: value })
  }

  const saveform = async (e) => {
    e.preventDefault();
    await addenquiry()

  }

  const addenquiry = async () => {
    try {

      const result = await axios.post(
        'http://localhost:3000/enquiry',
        enquiry
      )

      console.log(result)

      alert('Enquiry Added Successfully')

      setenquiry({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        enquiryType: '',
        status: '',
        followUpDate: '',
        enquiryMessage: ''
      })

    } catch (error) {
      console.log(error)
    }
  }

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
          <form className="grid gap-6 md:grid-cols-2" onSubmit={saveform}>

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full Name
              </label>

              <input
                type="text"
                id='fullName'
                name='fullName'
                value={enquiry.fullName}
                onChange={(e) => Handledata(e)}
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
                id='emailAddress'
                name='emailAddress'
                value={enquiry.emailAddress}
                onChange={(e) => Handledata(e)}
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
                id='phoneNumber'
                name='phoneNumber'
                value={enquiry.phoneNumber}
                onChange={(e) => Handledata(e)}
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Enquiry Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Enquiry Type
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='enquiryType'
                name='enquiryType'
                value={enquiry.enquiryType}
                onChange={(e) => Handledata(e)}
              >
                <option value="">Select Enquiry Type</option>
                <option value="Membership">Membership</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Yoga Classes">Yoga Classes</option>
                <option value="Gym Timing">Gym Timing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Status
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='status'
                name='status'
                value={enquiry.status}
                onChange={(e) => Handledata(e)}
              >
                <option value="">Select Status</option>
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            {/* Follow Up Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Follow Up Date
              </label>

              <input
                type="date"
                id='followUpDate'
                name='followUpDate'
                value={enquiry.followUpDate}
                onChange={(e) => Handledata(e)}
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
                id='enquiryMessage'
                name='enquiryMessage'
                value={enquiry.enquiryMessage}
                onChange={(e) => Handledata(e)}
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