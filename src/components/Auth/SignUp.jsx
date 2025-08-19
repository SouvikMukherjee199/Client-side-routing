import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <main className="min-h-[calc(100vh-64px-260px)] bg-slate-50 flex items-center">
      <div className="max-w-screen-sm mx-auto w-full px-4 py-16">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-slate-900">Create your account</h1>
          <p className="mt-1 text-sm text-slate-600">Join us and start building today.</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 text-sm px-3 py-2"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 text-sm px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 text-sm px-3 py-2"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-slate-700">Confirm password</label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                required
                className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 text-sm px-3 py-2"
                placeholder="••••••••"
              />
            </div>

            <div className="text-xs text-slate-500">
              By creating an account, you agree to our <a href="javascript:void(0)" className="text-indigo-600 hover:underline">Terms</a> and <a href="javascript:void(0)" className="text-indigo-600 hover:underline">Privacy Policy</a>.
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-medium px-4 py-2.5 hover:bg-indigo-700">
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/Login" className="text-indigo-600 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignUp
