import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddMember = () => {
  const [member, setMember] = useState({
    memberName: '',
    memberEmail: '',
    memberPhone: '',
    memberAge: '',
    memberGender: '',
    memberPlan: '',
    membershipDuration: '',
    feesAmount: '',
    paymentStatus: '',
    joinDate: '',
    memberAddress: ''
  })

  const Handledata = (e) => {
    const { name, value } = e.target
    setMember({ ...member, [name]: value })
  }

  const saveform = async(e) => {
    e.preventDefault();
   await addMemberData()

  }

  const addMemberData = async () => {
    try {

      const result = await axios.post(
        'http://localhost:3000/member',
        member
      )

      console.log(result)

      alert('Member Added Successfully')

      setMember({
        memberName: '',
        memberEmail: '',
        memberPhone: '',
        memberAge: '',
        memberGender: '',
        memberPlan: '',
        membershipDuration: '',
        feesAmount: '',
        paymentStatus: '',
        joinDate: '',
        memberAddress: ''
      })

    } catch (error) {
      console.log(error)
    }
  }

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
          <form className="grid gap-6 md:grid-cols-2" onSubmit={saveform}>

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full Name
              </label>

              <input
                type="text"
                id='memberName'
                name='memberName'
                value={member.memberName}
                onChange={(e) => Handledata(e)}
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
                id='memberEmail'
                name='memberEmail'
                value={member.memberEmail}
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
                id='memberPhone'
                name='memberPhone'
                value={member.memberPhone}
                onChange={(e) => Handledata(e)}
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
                id='memberAge'
                name='memberAge'
                value={member.memberAge}
                onChange={(e) => Handledata(e)}
                placeholder="Enter age"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Gender
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='memberGender'
                name='memberGender'
                value={member.memberGender}
                onChange={(e) => Handledata(e)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Membership Plan */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Membership Plan
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='memberPlan'
                name='memberPlan'
                value={member.memberPlan}
                onChange={(e) => Handledata(e)}
                required
              >
                <option value="">Select Plan</option>
                <option value="Basic Plan">Basic Plan</option>
                <option value="Gold Plan">Gold Plan</option>
                <option value="Premium Plan">Premium Plan</option>
              </select>
            </div>

            {/* Membership Duration */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Membership Duration
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='membershipDuration'
                name='membershipDuration'
                value={member.membershipDuration}
                onChange={(e) => Handledata(e)}
                required
              >
                <option value="">Select Duration</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>

            {/* Fees */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Fees Amount
              </label>

              <input
                type="text"
                id='feesAmount'
                name='feesAmount'
                value={member.feesAmount}
                onChange={(e) => Handledata(e)}
                placeholder="Enter fees amount"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
              />
            </div>

            {/* Payment Status */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Payment Status
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='paymentStatus'
                name='paymentStatus'
                value={member.paymentStatus}
                onChange={(e) => Handledata(e)}
                required
              >
                <option value="">Select Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            {/* Join Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Join Date
              </label>

              <input
                type="date"
                id='joinDate'
                name='joinDate'
                value={member.joinDate}
                onChange={(e) => Handledata(e)}
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
                id='memberAddress'
                name='memberAddress'
                value={member.memberAddress}
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