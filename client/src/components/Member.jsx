import React, { useEffect, useState } from 'react'
import {
  Plus,
  Pencil,
  Trash2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Member = () => {
  const [members, setMembers] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/member')
      console.log(result.data)
      setMembers(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/member/${id}`)
      setMembers(members.filter(member => member.id !== id))
      alert('Member deleted successfully')
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
              Members
            </h1>
            <p className="mt-2 text-slate-400">
              Manage all gym members and fees from here
            </p>
          </div>

          <Link
            to="/addmember"
            className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            <Plus size={20} />
            Add Member
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
            <table className="w-full min-w-[1000px]">
              <thead className="border-b border-white/10 bg-slate-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Member Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Membership Plan</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Fees</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Phone</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">Actions</th>
                </tr>
              </thead>

              <tbody>
                {members.length > 0 ? (
                  members.map((member) => (
                    <tr
                      key={member.id || member._id}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="px-6 py-4">{member.id || member._id}</td>
                      <td className="px-6 py-4 font-medium">{member.memberName}</td>
                      <td className="px-6 py-4 text-slate-300">{member.memberPlan}</td>
                      <td className="px-6 py-4 text-slate-300">{member.membershipDuration}</td>
                      <td className="px-6 py-4 font-semibold text-lime-400">₹{member.feesAmount}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            member.paymentStatus === 'Paid'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {member.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{member.memberPhone}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-4">
                          <button className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition hover:bg-blue-500/20">
                            <Pencil size={18} />
                          </button>
                          <button 
                            onClick={() => deleteMember(member.id || member._id)}
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
                      No members found. <Link to="/addmember" className="text-lime-400 hover:underline">Add your first member</Link>
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

export default Member