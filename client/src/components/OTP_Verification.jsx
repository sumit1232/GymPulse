import React from 'react'

const OTP_Verification = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
        <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-lime-400">
              Verify OTP
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Enter the 4-digit code sent to your email
            </p>
          </div>

          <form className="space-y-6">

            <div className="flex items-center justify-center gap-4">
              
              <input
                type="text"
                maxLength="1"
                className="h-16 w-16 rounded-xl border border-white/10 bg-slate-900 text-center text-2xl font-bold text-white outline-none focus:border-lime-400"
              />

              <input
                type="text"
                maxLength="1"
                className="h-16 w-16 rounded-xl border border-white/10 bg-slate-900 text-center text-2xl font-bold text-white outline-none focus:border-lime-400"
              />

              <input
                type="text"
                maxLength="1"
                className="h-16 w-16 rounded-xl border border-white/10 bg-slate-900 text-center text-2xl font-bold text-white outline-none focus:border-lime-400"
              />

              <input
                type="text"
                maxLength="1"
                className="h-16 w-16 rounded-xl border border-white/10 bg-slate-900 text-center text-2xl font-bold text-white outline-none focus:border-lime-400"
              />

            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-lime-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-lime-300"
            >
              Verify OTP
            </button>

          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Didn&apos;t receive the code?{" "}
            <button className="font-medium text-lime-400 hover:text-lime-300">
              Resend OTP
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default OTP_Verification