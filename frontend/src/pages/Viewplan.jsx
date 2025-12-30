import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Viewplan = () => {
  const { id } = useParams();
  const [viewplan, setviewPlan] = useState({});

  useEffect(() => {
    if (id) {
      fetchAPI();
    }
  }, [id]);

  const fetchAPI = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/plans/${id}`);
      console.log('API fetch Success:', result.data);
      setviewPlan(result.data);
    } catch (error) {
      console.error('Error fetching plan:', error);
    }
  };

  const deletePlan = async (id) => {
    if (window.confirm('Are you sure you want to delete this plan?')) {
      try {
        await axios.delete(`http://localhost:3000/plans/${id}`);
        alert('Plan deleted successfully!');
        window.location.href = '/plans';
      } catch (error) {
        console.error('Delete error:', error);
        alert('Failed to delete plan');
      }
    }
  };

  if (!viewplan.id) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading plan...</div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-900 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/plans" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">{viewplan.planName}</h1>
                <p className="text-slate-400">Plan ID: {viewplan.id} • {viewplan.planType} • {viewplan.duration}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-4 border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className={`px-4 py-2 text-sm font-semibold rounded-full border text-xs ${
                        viewplan.isActive 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                          : 'bg-red-500/10 text-red-400 border-red-500/30'
                      }`}>
                        {viewplan.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <span className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
                        {viewplan.planType}
                      </span>
                      <span className="px-3 py-1 bg-slate-700 text-slate-400 text-xs font-semibold rounded-full border border-slate-600">
                        Created: {new Date().toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 mb-6 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Max Members: {viewplan.maxMembers || 'Unlimited'}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link to={`/plans/${viewplan.id}/edit`} className="px-6 py-2 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-colors">
                        Edit Plan
                      </Link>
                      <Link to={`/plans/${viewplan.id}/subscribers`} className="px-6 py-2 bg-amber-600 text-white text-sm font-medium rounded-xl hover:bg-amber-700 transition-colors">
                        View Subscribers
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Pricing</h4>
                    <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-2xl border border-emerald-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold text-xl">Current Price</span>
                        <span className="text-emerald-400 font-bold text-3xl">₹{viewplan.price}</span>
                      </div>
                      {viewplan.originalPrice && (
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <span>Original</span>
                          <span className="line-through">₹{viewplan.originalPrice}</span>
                        </div>
                      )}
                      <div className="text-xs text-slate-400 mt-2">{viewplan.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Active Subscribers</h4>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-xl">
                    <span className="text-sm text-slate-300">Premium Users</span>
                    <span className="text-emerald-400 font-semibold">12</span>
                  </div>
                </div>
                <Link to={`/plans/${viewplan.id}/subscribers`} className="block text-emerald-400 text-xs font-medium hover:underline">
                  View All Subscribers →
                </Link>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">Quick Actions</h4>
                <div className="space-y-2">
                  <Link to={`/plans/${viewplan.id}/duplicate`} className="block p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl text-sm font-medium transition-all">
                    Duplicate Plan
                  </Link>
                  <Link to={`/plans/${viewplan.id}/promote`} className="block p-3 text-amber-400 hover:bg-amber-500/10 rounded-xl text-sm font-medium transition-all">
                    Promote Plan
                  </Link>
                  <button 
                    onClick={() => deletePlan(viewplan.id)}
                    className="w-full p-3 text-red-400 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-all"
                  >
                    Delete Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewplan;
