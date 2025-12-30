// src/pages/Members.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios'

const Memberpage = () => {
  const [members, setMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await axios.get('http://localhost:3000/members')
    console.log(result.data)
    setMembers(result.data)
  }

  // Filter members based on search and status
  const filteredMembers = members.filter(member => {
    // Search by name, phone, or email
    const matchesSearch = member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.phone.includes(searchTerm) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Filter by status/plan
    const matchesStatus = statusFilter === 'All Status' || 
                         member.plan.includes(statusFilter) ||
                         (statusFilter === 'Trial' && member.plan === 'Trial')

    return matchesSearch && matchesStatus
  })

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-slate-900 p-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Members</h1>
              <p className="text-slate-400">Manage your gym members</p>
            </div>
            <Link
              to="/addmember"
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Add Member
            </Link>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name, phone, email..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full lg:w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Status</option>
              <option>Premium</option>
              <option>Basic</option>
              <option>Trial</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="text-sm text-slate-400 mb-6">
            Showing {filteredMembers.length} of {members.length} members
          </div>
        </div>
        
        {/* Members List - Cards */}
        <div className="max-w-6xl mx-auto grid gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div key={member.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:bg-slate-700 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Member Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {member.profilePhoto ? (
                        <img 
                          src={member.profilePhoto} 
                          alt={`${member.firstName} ${member.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-slate-400 to-slate-500 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">
                            {member.firstName.charAt(0)}{member.lastName?.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {member.firstName} {member.lastName}
                      </h3>
                      <p className="text-slate-400 mb-2">{member.phone}</p>
                      {member.email && (
                        <p className="text-slate-500 text-sm">{member.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Status & Details */}
                  <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center justify-between lg:justify-end flex-1 lg:flex-initial">
                    <div className="text-right lg:text-left">
                      <p className="text-slate-400 text-sm">Joined</p>
                      <p className="font-medium text-white">{new Date(member.joinDate).toLocaleDateString()}</p>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      member.plan.includes('Premium') ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' :
                      member.plan.includes('Basic') ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                      'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {member.plan}
                    </div>

                    <div className={`font-semibold text-sm px-3 py-1 rounded-lg ${
                      new Date(member.nextPayment) < new Date() 
                        ? 'bg-red-500/10 text-red-400 border border-red-500/30' 
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {new Date(member.nextPayment).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={`/viewmember/${member.id}`}
                      className="p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all"
                      title="View Details"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                    <Link
                      to={`/editmember/${member.id}`}
                      className="p-3 text-amber-400 hover:bg-amber-500/10 rounded-xl transition-all"
                      title="Edit"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 col-span-full">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-800 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No members found</h3>
              <p className="text-slate-400 mb-4">Try adjusting your search or filter</p>
              <Link
                to="/addmember"
                className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
              >
                Add First Member
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Memberpage
