import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AddTrainer = () => {
  const [data, setData] = useState({
    trainername: '',
    traineremail: '',
    trainerphone: '',
    trainerexperience: '',
    trainerSpecialty: '',
    trainersalary: '',
    trainerAddress: ''
  })

  const Handledata = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const saveform = (e) => {
     addTrainerData()
    e.preventDefault();
  }

  const addTrainerData = async() => {
     try {

      const result = await axios.post(
        'http://localhost:3000/trainer',
        data
      )

      console.log(result.data)

      alert('Trainer Added Successfully')

      setData({
        trainername: '',
        traineremail: '',
        trainerphone: '',
        trainerexperience: '',
        trainerSpecialty: '',
        trainersalary: '',
        trainerAddress: ''
      })

    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
      <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">

        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-bold text-lime-400">
                Add Trainer
              </h1>

              <p className="mt-2 text-slate-400">
                Fill in the trainer details below
              </p>
            </div>

            {/* Back Button */}
            <Link
              to="/trainer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={20} />
              Back
            </Link>

          </div>

          {/* Form */}
          <form className="grid gap-6 md:grid-cols-2" onSubmit={saveform}>

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter trainer name"
                id='trainername'
                name='trainername'
                value={data.trainername}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                onChange={(e) => Handledata(e)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>

              <input
                type="email"
                id='traineremail'
                name='traineremail'
                value={data.traineremail}
                placeholder="Enter email address"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                onChange={(e) => Handledata(e)}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                id='trainerphone'
                name='trainerphone'
                value={data.trainerphone}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                onChange={(e) => Handledata(e)}
              />
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Experience
              </label>

              <input
                type="text"
                id='trainerexperience'
                name='trainerexperience'
                value={data.trainerexperience}
                placeholder="Example: 5 Years"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                onChange={(e) => Handledata(e)}
              />
            </div>

            {/* Specialty */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Specialty
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                id='trainerSpecialty'
                name='trainerSpecialty'
                value={data.trainerSpecialty}
                onChange={(e) => Handledata(e)}
              >
                <option>Fitness Coach</option>
                <option>Yoga Trainer</option>
                <option>Cardio Expert</option>
                <option>Zumba Trainer</option>
                <option>Personal Trainer</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Salary
              </label>

              <input
                type="text"
                id='trainersalary'
                name='trainersalary'
                value={data.trainersalary}
                placeholder="Enter monthly salary"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                onChange={(e) => Handledata(e)}
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Address
              </label>

              <textarea
                rows="4"
                placeholder="Enter trainer address"
                id='trainerAddress'
                name='trainerAddress'
                value={data.trainerAddress}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                onChange={(e) => Handledata(e)}
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 md:col-span-2">

              <button
                type="submit"
                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
              >
                Add Trainer
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Link to="/trainer">
                  Cancel
                </Link>
              </button>

            </div>

          </form>

        </div>

      </div>
    </>
  )
}

export default AddTrainer