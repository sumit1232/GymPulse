import React from 'react'
import {
  Users,
  Dumbbell,
  Wallet,
  TrendingUp,
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
      title: 'Active Trainers',
      value: '32',
      icon: <Dumbbell size={28} />,
    },
    {
      title: 'Monthly Revenue',
      value: '₹2,45,000',
      icon: <Wallet size={28} />,
    },
    {
      title: 'New Enquiries',
      value: '86',
      icon: <TrendingUp size={28} />,
    },
  ]

  const recentMembers = [
    {
      name: 'Rahul Sharma',
      plan: 'Premium Plan',
      joinDate: '05 May 2026',
    },
    {
      name: 'Priya Patil',
      plan: 'Basic Plan',
      joinDate: '04 May 2026',
    },
    {
      name: 'Aman Verma',
      plan: 'Gold Plan',
      joinDate: '03 May 2026',
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Welcome back to Gym Management Admin Panel
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

          {/* Recent Members */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-lime-400">
                Recent Members
              </h2>

              <button className="text-sm text-lime-400 hover:text-lime-300">
                View All
              </button>
            </div>

            <div className="space-y-4">

              {recentMembers.map((member, index) => (
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

                  <div className="text-sm text-slate-400">
                    {member.joinDate}
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
                <Dumbbell size={22} className="text-lime-400" />
                Add Trainer
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 transition hover:bg-white/10">
                <CalendarDays size={22} className="text-lime-400" />
                Manage Schedule
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-4 transition hover:bg-white/10">
                <Wallet size={22} className="text-lime-400" />
                View Payments
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard