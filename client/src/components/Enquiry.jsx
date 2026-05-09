import React, { useEffect, useState } from 'react'
import {
  Eye,
  Trash2,
  MessageSquareMore,
  Phone,
  Mail
} from 'lucide-react'
import axios from 'axios'

const Enquiry = () => {
  const [enquiries, setEnquiries] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/enquiry')
      console.log(result.data)
      setEnquiries(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteEnquiry = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/enquiry/${id}`)
      setEnquiries(prev => prev.filter(enquiry => enquiry.id !== id))
      alert('Enquiry deleted successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
        <div className="mb-8 flex items-center justify-between max-w-7xl mx-auto">
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
            Total Enquiries: {enquiries.length}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
            <table className="w-full min-w-[1100px]">
              <thead className="border-b border-white/10 bg-slate-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Enquiry Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Message</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">Actions</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.length > 0 ? (
                  enquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="px-6 py-4">
                        {enquiry.id}
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {enquiry.fullName}
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-lime-400" />
                          {enquiry.emailAddress}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-lime-400" />
                          {enquiry.phoneNumber}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        {enquiry.enquiryType}
                      </td>

                      <td className="px-6 py-4 text-slate-300 max-w-xs">
                        {enquiry.enquiryMessage}
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

                          <button
                            onClick={() => deleteEnquiry(enquiry.id)}
                            className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-slate-400">
                      No enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enquiry