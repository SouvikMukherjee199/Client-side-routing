import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600">404</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <NavLink to="/Home" className="px-5 py-2.5 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Go to Home</NavLink>
            <a href="javascript:void(0)" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-white">Contact support</a>
          </div>
          <div className="mt-10">
            <img className="w-full max-w-md mx-auto rounded-lg shadow" src="https://images.unsplash.com/photo-1487956382123-02cdb0f58dd0?q=80&w=1200&auto=format&fit=crop" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
