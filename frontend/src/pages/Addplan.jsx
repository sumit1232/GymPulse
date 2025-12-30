// src/pages/AddPlan.jsx
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddPlan = () => {
    const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    planName: "",
    planType: "",
    description: "",
    price: "",
    originalPrice: "",
    duration: "",
    maxMembers: "",
    features: [],        // ADD
    customFeature: "",   // ADD
    isActive: false
  });

  const formdataHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value })
  }

  const saveForm = async (e) => {
    alert('save form');
    e.preventDefault();
    await axios.post('http://localhost:3000/plans', formdata);
    console.log(formdata);
     navigate('/plans');
  }

  const featuresHandler = (featureName, isChecked) => {
  setFormdata(prev => ({
    ...prev,
    features: isChecked 
      ? [...prev.features, featureName]
      : prev.features.filter(f => f !== featureName)
  }));
};


  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link
              to="/plans"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Add Plan</h1>
              <p className="text-slate-400">Create a new membership plan</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form className="space-y-6" onSubmit={saveForm}>
            {/* Basic Info Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Plan Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Plan Name *
                  </label>
                  <input
                    type="text"
                    id='planName'
                    name='planName'
                    value={formdata.planName}
                    onChange={formdataHandler}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Premium Monthly"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Plan Type *
                  </label>
                  <select
                    id='planType'
                    name='planType'
                    value={formdata.planType}
                    onChange={formdataHandler}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option>Select type</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Annual</option>
                    <option>Trial</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  value={formdata.description}
                  onChange={formdataHandler}
                  rows="3"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-vertical"
                  placeholder="Describe what this plan includes..."
                />
              </div>
            </div>

            {/* Pricing Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Pricing</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    id='price'
                    name='price'
                    value={formdata.price}
                    onChange={formdataHandler}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="1999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Original Price (₹)
                  </label>
                  <input
                    type="number"
                    id='originalPrice'
                    name='originalPrice'
                    value={formdata.originalPrice}
                    onChange={formdataHandler}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="2500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Duration *
                  </label>
                  <select
                    id='duration'
                    name='duration'
                    value={formdata.duration}
                    onChange={formdataHandler}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>12 Months</option>
                    <option>7 Days (Trial)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Max Members
                  </label>
                  <input
                    type="number"
                    id='maxMembers'
                    name='maxMembers'
                    value={formdata.maxMembers}
                    onChange={formdataHandler}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Unlimited"
                  />
                </div>
              </div>
            </div>

            {/*  Features Section */}
            <div className="border-b border-slate-700 pb-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Features</h3>

              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl group hover:bg-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    id="gym-access"
                    checked={formdata.features.includes('gym-access')}
                    onChange={(e) => featuresHandler('gym-access', e.target.checked)}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <label htmlFor="gym-access" className="text-sm text-slate-300 cursor-pointer select-none group-hover:text-white">
                    Full Gym Access (24/7)
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl group hover:bg-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    id="locker"
                    checked={formdata.features.includes('locker')}
                    onChange={(e) => featuresHandler('locker', e.target.checked)}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <label htmlFor="locker" className="text-sm text-slate-300 cursor-pointer select-none group-hover:text-white">
                    Locker Access
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl group hover:bg-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    id="classes"
                    checked={formdata.features.includes('classes')}
                    onChange={(e) => featuresHandler('classes', e.target.checked)}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <label htmlFor="classes" className="text-sm text-slate-300 cursor-pointer select-none group-hover:text-white">
                    Group Classes (Yoga, Zumba, etc.)
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl group hover:bg-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    id="trainer"
                    checked={formdata.features.includes('trainer')}
                    onChange={(e) => featuresHandler('trainer', e.target.checked)}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <label htmlFor="trainer" className="text-sm text-slate-300 cursor-pointer select-none group-hover:text-white">
                    Personal Training Sessions
                  </label>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl group hover:bg-slate-600 transition-colors">
                  <input
                    type="checkbox"
                    id="sauna"
                    checked={formdata.features.includes('sauna')}
                    onChange={(e) => featuresHandler('sauna', e.target.checked)}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500 border-slate-600 rounded"
                  />
                  <label htmlFor="sauna" className="text-sm text-slate-300 cursor-pointer select-none group-hover:text-white">
                    Sauna & Steam Room
                  </label>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">Custom Features</label>
                <input
                  type="text"
                  id='customFeature'
                  name='customFeature'
                  value={formdata.customFeature}
                  onChange={formdataHandler}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Add custom feature (e.g., Free Guest Pass)"
                />
              </div>
            </div>


            {/* Status & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
              <div className="flex gap-4 ml-auto">
                <Link
                  to="/plans"
                  className="px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:border-slate-500 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Save Plan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlan;
