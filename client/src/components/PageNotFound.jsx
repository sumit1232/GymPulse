import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Home } from 'lucide-react'

const PageNotFound = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        
        <div className="max-w-lg rounded-2xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-sm">
          
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-lime-400/10 p-5">
              <AlertTriangle size={60} className="text-lime-400" />
            </div>
          </div>

          <h1 className="text-7xl font-extrabold text-lime-400">
            404
          </h1>

          <h2 className="mt-4 text-3xl font-bold">
            Page Not Found
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
          >
            <Home size={20} />
            Back to Home
          </Link>

        </div>
      </div>
    </>
  )
}

export default PageNotFound