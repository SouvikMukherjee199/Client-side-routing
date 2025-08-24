import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Team', to: '/Team' },
    { label: 'Feature', to: '/Feature' },
    { label: 'Blog', to: '/Blog' },
  ]

  const linkBase = 'inline-flex items-center px-3 py-2 text-sm font-medium transition-colors'
  const linkInactive = 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
  const linkActive = 'text-indigo-600 dark:text-indigo-400'

  const renderLinks = (onClick) => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => [linkBase, isActive ? linkActive : linkInactive].join(' ')}
          onClick={onClick}
          end={item.to === '/'}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  )

  const {themeMode, lightTheme, darkTheme} = useTheme();

   const onToggleTheme = () => {
  if (themeMode === 'light') {
    darkTheme();
  } else {
    lightTheme();
  }
};

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white font-semibold">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4z" />
                </svg>
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">Acme Corp</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
            {renderLinks()}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
            <button
              type="button"
              title={themeMode}
              aria-pressed={themeMode === 'light'}
              onClick={onToggleTheme}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800"
              
            >
              <span className="sr-only">Toggle theme</span>
              {themeMode === 'light' ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <NavLink
              to="/Login"
              className={({ isActive }) => [
                'px-3 py-2 text-sm font-medium rounded-md',
                isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              ].join(' ')}
            >
              Login
            </NavLink>
            <NavLink
              to="/SignUp"
              className={({ isActive }) => [
                'px-4 py-2 text-sm font-semibold rounded-md border',
                isActive ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700'
              ].join(' ')}
            >
              Sign up
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-4 py-3 flex flex-col gap-1">
            {renderLinks(() => setMobileOpen(false))}
            <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />

            {/* Theme toggle inside mobile menu */}
            <button
              type="button"
              title={themeMode}
              aria-pressed={themeMode === 'light'}
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {themeMode === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
              <span className="text-sm text-indigo-600 font-bold">{themeMode === 'dark' ? 'Light theme' : 'Dark theme'}</span>
            </button>

            <NavLink
              to="/Login"
              className={({ isActive }) => [linkBase, isActive ? linkActive : linkInactive].join(' ')}
              onClick={() => setMobileOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/SignUp"
              className={({ isActive }) => [
                'mt-1 inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-md border',
                isActive ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700'
              ].join(' ')}
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
