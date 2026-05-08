import React from 'react'
import {
  Eye,
  Trash2,
  MessageSquareMore,
  Phone,
  Mail
} from 'lucide-react'

const Enquiry = () => {

  const enquiries = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      phone: '+91 9876543210',
      message: 'I want to know about Premium Membership.',
      status: 'New',
    },
    {
      id: 2,
      name: 'Priya Patil',
      email: 'priya@gmail.com',
      phone: '+91 9876543211',
      message: 'Do you provide personal training?',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Aman Verma',
      email: 'aman@gmail.com',
      phone: '+91 9876543212',
      message: 'What are the gym timings?',
      status: 'Resolved',
    },
    {
      id: 4,
      name: 'Sneha Joshi',
      email: 'sneha@gmail.com',
      phone: '+91 9876543213',
      message: 'Need information about yoga classes.',
      status: 'New',
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Enquiries
            </h1>

            <p className="mt-2 text-slate-400">
              Manage all customer enquiries from here
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950">
            <MessageSquareMore size={20} />
            Total Enquiries: 4
          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">

          <table className="w-full min-w-[1100px]">

            <thead className="border-b border-white/10 bg-slate-900">
              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Phone
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Message
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="border-b border-white/10 hover:bg-white/5"
                >

                  <td className="px-6 py-4">
                    {enquiry.id}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {enquiry.name}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-lime-400" />
                      {enquiry.email}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-lime-400" />
                      {enquiry.phone}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-300 max-w-xs">
                    {enquiry.message}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        enquiry.status === 'Resolved'
                          ? 'bg-green-500/20 text-green-400'
                          : enquiry.status === 'Pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      {enquiry.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">

                      <button className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition hover:bg-blue-500/20">
                        <Eye size={18} />
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

export default Enquiry