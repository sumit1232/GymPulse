// src/components/Navbar.jsx
import { useState } from "react";
import { HiMenuAlt3, HiX, HiUserCircle, HiChevronDown, HiLogout } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Always authenticated

  const navLinks = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Members", to: "/members" },
    { label: "Plans", to: "/plans" },
    { label: "Trainers", to: "/trainers" },
    { label: "Attendance", to: "/attendance" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    setIsAuthenticated(false);
    setIsOpen(false);
    setProfileOpen(false);
    // e.g., localStorage.removeItem('token'); navigate('/login');
  };

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
            <span className="text-lg font-bold">GP</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-widest">
              Gym Pulse
            </span>
            <span className="text-xs text-slate-300">
              Management Panel
            </span>
          </div>
        </Link>

        {/* Desktop links + Profile Dropdown */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="transition-colors hover:text-emerald-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all"
            >
              <HiUserCircle className="h-6 w-6" />
              <span>John Doe</span>
              <HiChevronDown 
                className={`h-4 w-4 transition-transform ${profileOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Profile Dropdown Menu */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl shadow-2xl py-1 z-50">
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-slate-900 hover:bg-slate-100 transition-colors"
                  onClick={() => setProfileOpen(false)}
                >
                  <HiUserCircle className="h-5 w-5" />
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <HiLogout className="h-5 w-5" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-100 hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-md px-3 py-2 text-slate-100 hover:bg-slate-800 hover:text-emerald-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Profile Section */}
          <div className="border-t border-slate-800 px-4 py-4 space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
              <HiUserCircle className="h-10 w-10 text-slate-400" />
              <div>
                <p className="font-semibold text-white">John Doe</p>
                <p className="text-xs text-slate-400">john@gympulse.com</p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <Link
                to="/profile"
                className="block w-full text-left px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/20 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
