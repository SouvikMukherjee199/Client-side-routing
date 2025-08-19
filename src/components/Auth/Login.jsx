import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className="min-h-[calc(100vh-64px-260px)] bg-slate-50 flex items-center">
      <div className="max-w-screen-sm mx-auto w-full px-4 py-16">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-600">Sign in to your account to continue.</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                <a href="javascript:void(0)" className="text-xs text-indigo-600 hover:underline">Forgot password?</a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 text-sm px-3 py-2"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                Remember me
              </label>
            </div>

            <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-medium px-4 py-2.5 hover:bg-indigo-700">
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/SignUp" className="text-indigo-600 font-medium hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Login
