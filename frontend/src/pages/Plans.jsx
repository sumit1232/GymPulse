import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Plans = () => {
  const [plansinfo, setPlan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const result = await axios.get('http://localhost:3000/plans');
      console.log(result.data);
      setPlan(result.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  const filteredPlans = plansinfo.filter(plan => {
    const matchesSearch = plan.planName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.planType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Status' || 
                         (statusFilter === 'Active' && plan.isActive) ||
                         (statusFilter === 'Inactive' && !plan.isActive);

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-900 p-8">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Membership Plans</h1>
              <p className="text-slate-400">Manage pricing plans and member subscriptions</p>
            </div>
            <Link
              to="/addplans"
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Add Plan
            </Link>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search plans by name, description..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="text-sm text-slate-400 mb-6">
            Showing {filteredPlans.length} of {plansinfo.length} plans
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:bg-slate-700 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.planName}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    plan.isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                    'bg-slate-500/10 text-slate-400 border border-slate-500/30'
                  }`}>
                    {plan.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  plan.isActive ? 'bg-emerald-400' : 'bg-slate-400'
                }`}></div>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-white mb-2">₹{plan.price}</div>
                {plan.originalPrice && (
                  <div className="text-slate-500 text-sm line-through">₹{plan.originalPrice}</div>
                )}
                <div className="text-slate-400 text-sm">{plan.duration}</div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 capitalize">{feature.replace('-', ' ')}</span>
                  </div>
                ))}
                {plan.customFeature && (
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300 italic">★ {plan.customFeature}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="text-slate-400">Max Members</p>
                  <p className="font-semibold text-white">{plan.maxMembers || 'Unlimited'}</p>
                </div>
                
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <Link 
                    to={`/viewplan/${plan.id}`}
                    className="p-3 text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all"
                    title="View Details"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>
                  <Link
                    to={`/plans/${plan.id}/edit`}
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
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="max-w-6xl mx-auto text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-800 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No plans found</h3>
            <p className="text-slate-400 mb-4">Try adjusting your search or filter</p>
            <Link
              to="/addplans"
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Create First Plan
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Plans;
