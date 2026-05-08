import React from 'react'

const Landingpage = () => {
  return (
<>
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-lime-400">
            FitZone
          </h1>

          <nav className="flex items-center gap-3">
            <button className="rounded-lg border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950">
              Login
            </button>
            <button className="rounded-lg bg-lime-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-lime-300">
             <a href='/register'> Register</a>
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-sm text-lime-300">
            Transform Your Body
          </p>

          <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Build Strength, Boost Energy, Live Better
          </h2>

          <p className="mb-8 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Join FitZone and start your fitness journey with expert trainers,
            modern equipment, and programs designed for every level.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300">
              Get Started
            </button>
            <button className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-950">
              View Plans
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-lime-400/20 blur-3xl"></div>
          <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              alt="Gym workout"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </main>
    </div>
</>
  )
}

export default Landingpage