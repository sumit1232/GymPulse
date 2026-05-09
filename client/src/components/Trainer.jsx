import React, { useEffect } from 'react'
import {
  Plus,
  Pencil,
  Trash2
} from 'lucide-react'
import axios from 'axios'

const Trainer = () => {

  const trainers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      specialty: 'Fitness Coach',
      experience: '5 Years',
      phone: '+91 9876543210',
    },
    {
      id: 2,
      name: 'Priya Patil',
      specialty: 'Yoga Trainer',
      experience: '3 Years',
      phone: '+91 9876543211',
    },
    {
      id: 3,
      name: 'Aman Verma',
      specialty: 'Cardio Expert',
      experience: '4 Years',
      phone: '+91 9876543212',
    },
    {
      id: 4,
      name: 'Sneha Joshi',
      specialty: 'Zumba Trainer',
      experience: '2 Years',
      phone: '+91 9876543213',
    },
  ]

  const fetchData = async() =>{
    const result = await axios.get('http://localhost:3000/comments')
    console.log(result.data);
  }

  useEffect(()=>{
    fetchData(),[]})

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Trainers
            </h1>

            <p className="mt-2 text-slate-400">
              Manage all gym trainers from here
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-lime-300">
            <Plus size={20} />
           <a href='/addtrainer'>Add Trainer</a>
          </button>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">

          <table className="w-full min-w-[800px]">

            <thead className="border-b border-white/10 bg-slate-900">
              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Trainer Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Specialty
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Experience
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">
                  Phone
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {trainers.map((trainer) => (
                <tr
                  key={trainer.id}
                  className="border-b border-white/10 hover:bg-white/5"
                >

                  <td className="px-6 py-4">
                    {trainer.id}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {trainer.name}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {trainer.specialty}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {trainer.experience}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {trainer.phone}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">

                      <button className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition hover:bg-blue-500/20">
                        <Pencil size={18} />
                      </button>

                      <button className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  )
}

export default Trainer