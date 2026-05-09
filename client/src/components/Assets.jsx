import React, { useEffect, useState } from 'react'
import {
  Plus,
  Pencil,
  Trash2,
  Package
} from 'lucide-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Assets = () => {
  const [assets, setAssets] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/assets')
      console.log(result.data)
      setAssets(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteAsset = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/assets/${id}`)
      setAssets(prev => prev.filter(asset => asset.id !== id))
      alert('Asset deleted successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
        <div className="mb-8 flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-lime-400">
              Assets
            </h1>
            <p className="mt-2 text-slate-400">
              Manage all gym equipment and assets
            </p>
          </div>

          <Link
            to="/addassets"
            className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            <Plus size={20} />
            Add Asset
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm">
            <table className="w-full min-w-[900px]">
              <thead className="border-b border-white/10 bg-slate-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Asset Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-lime-400">Condition</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-lime-400">Actions</th>
                </tr>
              </thead>

              <tbody>
                {assets.length > 0 ? (
                  assets.map((asset) => (
                    <tr
                      key={asset.id}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="px-6 py-4">{asset.id}</td>

                      <td className="px-6 py-4 font-medium">
                        <div className="flex items-center gap-2">
                          <Package size={18} className="text-lime-400" />
                          {asset.assetName}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        {asset.assetsCategory}
                      </td>

                      <td className="px-6 py-4 text-slate-300">
                        {asset.assetsQuantity}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            asset.assetsCondition === 'Excellent'
                              ? 'bg-green-500/20 text-green-400'
                              : asset.assetsCondition === 'Good'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {asset.assetsCondition}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-4">
                          <button className="rounded-lg bg-blue-500/10 p-2 text-blue-400 transition hover:bg-blue-500/20">
                            <Pencil size={18} />
                          </button>

                          <button
                            onClick={() => deleteAsset(asset.id)}
                            className="rounded-lg bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500/20"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                      No assets found.{' '}
                      <Link to="/addassets" className="text-lime-400 hover:underline">
                        Add your first asset
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Assets