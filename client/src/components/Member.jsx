import React from 'react'
import {
  Plus,
  Pencil,
  Trash2
} from 'lucide-react'

const Member = () => {

  const members = [
    {
      id: 1,
      name: 'Rahul Sharma',
      plan: 'Premium Plan',
      duration: '12 Months',
      fees: '₹4,000',
      status: 'Paid',
      phone: '+91 9876543210',
    },
    {
      id: 2,
      name: 'Priya Patil',
      plan: 'Gold Plan',
      duration: '6 Months',
      fees: '₹3,000',
      status: 'Pending',
      phone: '+91 9876543211',
    },
    {
      id: 3,
      name: 'Aman Verma',
      plan: 'Basic Plan',
      duration: '3 Months',
      fees: '₹2,000',
      status: 'Paid',
      phone: '+91 9876543212',
    },
    {
      id: 4,
      name: 'Sneha Joshi',
      plan: 'Premium Plan',
      duration: '12 Months',
      fees: '₹4,000',
      status: 'Pending',
      phone: '+91 9876543213',
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Members
            </h1>

            <p className="mt-2 text-slate-400">
              Manage all gym members and fees from here
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-lime-300">
            <Plus size={20} />
            <a href="/addmember">Add Member</a>
          </button>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">

          <table className="w-full min-w-[1000px]">

            <thead className="border-b border-white/10 bg-slate-900">
              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Member Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Membership Plan
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Duration
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Fees
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Phone
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {members.map((member) => (
                <tr
                  key={member.id}
                  className="border-b border-white/10 hover:bg-white/5"
                >

                  <td className="px-6 py-4">
                    {member.id}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {member.name}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {member.plan}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {member.duration}
                  </td>

                  <td className="px-6 py-4 font-semibold text-lime-400">
                    {member.fees}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        member.status === 'Paid'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {member.phone}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">

                      <button className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition hover:bg-blue-500/20">
                        <Pencil size={18} />
                      </button>

                      <button className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  )
}

export default Member