import React, { useEffect, useState } from 'react'
import {
  Plus,
  Pencil,
  Trash2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Trainer = () => {
  const [trainers, setTrainers] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/trainer')
      setTrainers(result.data)
      setTrainers(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Trainers
            </h1>
            <p className="mt-2 text-slate-400">
              Manage all gym trainers from here
            </p>
          </div>

          <Link
            to="/addtrainer"
            className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            <Plus size={20} />
            Add Trainer
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
          <table className="w-full min-w-[800px]">
            <thead className="border-b border-white/10 bg-slate-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Trainer Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Specialty</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Experience</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Phone</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">Actions</th>
              </tr>
            </thead>

            <tbody>
              {trainers.length > 0 ? (
                trainers.map((trainer) => (
                  <tr
                    key={trainer.id}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="px-6 py-4">{trainer.id}</td>
                    <td className="px-6 py-4 font-medium">{trainer.trainername || trainer.name}</td>
                    <td className="px-6 py-4 text-slate-300">{trainer.trainerSpecialty || trainer.specialty}</td>
                    <td className="px-6 py-4 text-slate-300">{trainer.trainerexperience || trainer.experience}</td>
                    <td className="px-6 py-4 text-slate-300">{trainer.trainerphone || trainer.phone}</td>
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
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-6 text-center text-slate-400">
                    No trainers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Trainer