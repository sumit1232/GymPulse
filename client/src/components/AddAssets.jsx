import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const AddAssets = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">

                <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">

                    {/* Header */}
                    <div className="mb-8 flex items-center justify-between">

                        <div>
                            <h1 className="text-4xl font-bold text-lime-400">
                                Add Asset
                            </h1>

                            <p className="mt-2 text-slate-400">
                                Add new gym equipment and assets
                            </p>
                        </div>

                        {/* Back Button */}
                        <Link
                            to="/assets"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                        >
                            <ArrowLeft size={20} />
                            Back
                        </Link>

                    </div>

                    {/* Form */}
                    <form className="grid gap-6 md:grid-cols-2">

                        {/* Asset Name */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Asset Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter asset name"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Category
                            </label>

                            <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                                <option>Cardio Equipment</option>
                                <option>Strength Equipment</option>
                                <option>Accessories</option>
                                <option>Machines</option>
                            </select>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Quantity
                            </label>

                            <input
                                type="number"
                                placeholder="Enter quantity"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                            />
                        </div>

                        {/* Purchase Date */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Purchase Date
                            </label>

                            <input
                                type="date"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400"
                            />
                        </div>

                        {/* Condition */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Condition
                            </label>

                            <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-lime-400">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Maintenance</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Price
                            </label>

                            <input
                                type="text"
                                placeholder="Enter asset price"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                            />
                        </div>

                        {/* Vendor */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Vendor Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter vendor name"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                            />
                        </div>

                        {/* Warranty */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Warranty
                            </label>

                            <input
                                type="text"
                                placeholder="Example: 2 Years"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-slate-200">
                                Description
                            </label>

                            <textarea
                                rows="4"
                                placeholder="Enter asset description"
                                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-lime-400"
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 md:col-span-2">

                            <button
                                type="submit"
                                className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
                            >
                                Add Asset
                            </button>

                            <button
                                type="button"
                                className="rounded-xl border border-white/10 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                <Link to="/assets">
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

export default AddAssets