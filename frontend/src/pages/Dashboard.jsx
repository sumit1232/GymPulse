// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  HiUsers,
  HiTrendingUp,
  HiCalendar,
  HiCreditCard,
  HiOutlineFilter,
} from "react-icons/hi";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    members: 1247,
    revenue: 45820,
    attendance: 89,
    activePlans: 156,
  });

  // Chart Data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 15000, 28000, 22000, 36000, 45820],
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const attendanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Attendance %",
        data: [85, 92, 78, 95, 88, 97, 82],
        backgroundColor: [
          "rgba(16, 185, 129, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(74, 222, 128, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(74, 222, 128, 0.8)",
          "rgba(16, 185, 129, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const memberPlanData = {
    labels: ["Basic", "Premium", "VIP", "Pro"],
    datasets: [
      {
        data: [520, 450, 180, 97],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(251, 191, 36, 0.8)",
          "rgba(168, 85, 247, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12 px-6 md:px-8 bg-slate-50 min-h-screen">
        {/* Header with Link */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <Link 
              to="/dashboard" 
              className="group flex items-center gap-2 p-1 rounded-lg hover:bg-emerald-50 transition-all duration-200 -m-1"
            >
              <h1 className="text-3xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                Dashboard
              </h1>
              <svg 
                className="h-7 w-7 text-slate-400 group-hover:text-emerald-500 transition-all duration-200 group-hover:rotate-12"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </Link>
            <p className="text-slate-600 mt-1">Welcome back! Here's what's happening with your gym today.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg shadow-sm border">
              <HiOutlineFilter className="h-4 w-4 text-slate-400" />
              <select className="text-sm font-medium text-slate-900 outline-none bg-transparent">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="p-4 rounded-xl bg-emerald-100">
                <HiUsers className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-900">{stats.members.toLocaleString()}</p>
                <p className="text-sm text-slate-600 mt-1">Total Members</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="p-4 rounded-xl bg-indigo-100">
                <HiCreditCard className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-900">₹{stats.revenue.toLocaleString()}</p>
                <p className="text-sm text-slate-600 mt-1">Total Revenue</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="p-4 rounded-xl bg-amber-100">
                <HiCalendar className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-900">{stats.attendance}%</p>
                <p className="text-sm text-slate-600 mt-1">Today Attendance</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="p-4 rounded-xl bg-purple-100">
                <HiTrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-900">{stats.activePlans}</p>
                <p className="text-sm text-slate-600 mt-1">Active Plans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Revenue Overview</h3>
            <div className="h-80">
              <Line data={revenueData} options={chartOptions} />
            </div>
          </div>

          {/* Attendance Chart */}
          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Weekly Attendance</h3>
            <div className="h-80">
              <Bar data={attendanceData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Member Plans Doughnut */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Membership Plans</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-900">Basic</span>
                  <span className="text-lg font-bold text-emerald-600">520</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-900">Premium</span>
                  <span className="text-lg font-bold text-emerald-600">450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-900">VIP</span>
                  <span className="text-lg font-bold text-emerald-600">180</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-center justify-center">
              <Doughnut data={memberPlanData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
