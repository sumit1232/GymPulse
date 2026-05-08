import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  Dumbbell,
  Users,
  Boxes,
  MessageSquareMore
} from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

  const menus = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard size={20} />
    },
    {
      name: 'Trainer',
      path: '/trainer',
      icon: <Dumbbell size={20} />
    },
    {
      name: 'Member',
      path: '/member',
      icon: <Users size={20} />
    },
    {
      name: 'Assets',
      path: '/assets',
      icon: <Boxes size={20} />
    },
    {
      name: 'Enquiry',
      path: '/enquiry',
      icon: <MessageSquareMore size={20} />
    }
  ]

  return (
    <>
      <div className="flex min-h-screen bg-slate-950 text-white">

        {/* Sidebar */}
        <div className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950">

          {/* Logo */}
          <div className="border-b border-white/10 p-6">
            <h1 className="text-3xl font-bold text-lime-400">
              Gym Admin
            </h1>
          </div>

          {/* Menu */}
          <div className="flex-1 space-y-2 p-4">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                  location.pathname === menu.path
                    ? 'bg-lime-400 font-semibold text-slate-950'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {menu.icon}
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 p-4 text-center text-sm text-slate-400">
            Gym Management System
          </div>

        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </>
  )
}

export default Sidebar