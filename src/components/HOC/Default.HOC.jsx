
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const DefaultHOC = () => {
  const [theme, setTheme] = useState('light')

  // Initialize from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') {
        setTheme(stored)
        return
      }
    } catch {}
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  // Persist and reflect to <html> for Tailwind dark: styles
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className='w-full'>
      <div className={theme === 'dark' ? 'bg-slate-950 text-slate-500 min-h-screen' : 'bg-white text-slate-900 min-h-screen'} >
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Outlet />
      <Footer theme={theme} />
    </div>
  
    </div>)
}

export default DefaultHOC
