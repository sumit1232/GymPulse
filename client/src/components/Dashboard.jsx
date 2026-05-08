import React from 'react'
import {
  Users,
  Wallet,
  IndianRupee,
  AlertTriangle,
  UserPlus,
  CalendarDays
} from 'lucide-react'

const Dashboard = () => {

  const stats = [
    {
      title: 'Total Members',
      value: '1,248',
      icon: <Users size={28} />,
    },
    {
      title: 'Fees Collected',
      value: '₹2,45,000',
      icon: <Wallet size={28} />,
    },
    {
      title: 'Pending Fees',
      value: '₹48,000',
      icon: <IndianRupee size={28} />,
    },
    {
      title: 'Due Members',
      value: '26',
      icon: <AlertTriangle size={28} />,
    },
  ]

  const feeMembers = [
    {
      name: 'Rahul Sharma',
      plan: 'Premium Plan',
      amount: '₹4,000',
      status: 'Paid',
    },
    {
      name: 'Priya Patil',
      plan: 'Gold Plan',
      amount: '₹3,000',
      status: 'Pending',
    },
    {
      name: 'Aman Verma',
      plan: 'Basic Plan',
      amount: '₹2,000',
      status: 'Paid',
    },
    {
      name: 'Sneha Joshi',
      plan: 'Premium Plan',
      amount: '₹4,000',
      status: 'Pending',
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Member Fees Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Manage member fee payments and records
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-lime-300">
            <UserPlus size={20} />
            Add Member
          </button>

        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-lime-400/10 p-4 text-lime-400">
                  {item.icon}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Fees Table */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-lime-400">
                Recent Fee Payments
              </h2>

              <button className="text-sm text-lime-400 hover:text-lime-300">
                View All
              </button>

            </div>

            <div className="space-y-4">

              {feeMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 p-4"
                >

                  <div>
                    <h3 className="font-semibold">
                      {member.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {member.plan}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-lime-400">
                      {member.amount}
                    </p>
                  </div>

                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        member.status === 'Paid'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm">

            <h2 className="mb-6 text-2xl font-bold text-lime-400">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 transition hover:bg-white/10">
                <Users size={22} className="text-lime-400" />
                Add New Member
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 transition hover:bg-white/10">
                <Wallet size={22} className="text-lime-400" />
                Collect Fees
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 transition hover:bg-white/10">
                <CalendarDays size={22} className="text-lime-400" />
                Renew Membership
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 transition hover:bg-white/10">
                <AlertTriangle size={22} className="text-lime-400" />
                Pending Payments
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard