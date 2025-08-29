import React from 'react'

const Footer = ({ theme = 'light' }) => {
  return (
    <footer className="w-full bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      <div className="max-w-screen-xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand and mission */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4z" />
                </svg>
              </span>
              <span className="text-slate-900 dark:text-white text-lg font-semibold">Acme Corp</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 max-w-xs">
              We design and build reliable software for ambitious teams. From product strategy to launch, we help turn ideas into outcomes.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-slate-900 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.397-4.109 11.625-11.625 11.625-2.311 0-4.46-.675-6.267-1.84.322.037.63.05.965.05a8.2 8.2 0 0 0 5.083-1.75 4.102 4.102 0 0 1-3.83-2.846c.25.038.5.063.763.063.364 0 .727-.05 1.066-.138a4.094 4.094 0 0 1-3.284-4.02v-.05c.54.3 1.166.49 1.829.515a4.086 4.086 0 0 1-1.827-3.41c0-.764.2-1.468.553-2.082a11.63 11.63 0 0 0 8.44 4.282 4.615 4.615 0 0 1-.1-.939 4.09 4.09 0 0 1 7.08-2.797 8.08 8.08 0 0 0 2.596-.99 4.108 4.108 0 0 1-1.797 2.259 8.2 8.2 0 0 0 2.357-.64 8.813 8.813 0 0 1-2.048 2.116z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.135 1.447-2.135 2.943v5.663H9.353V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.267 2.372 4.267 5.457v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.553V9h3.566v11.452z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.012c0 4.424 2.865 8.172 6.839 9.49.5.092.682-.217.682-.483 0-.237-.01-1.024-.015-1.858-2.782.605-3.37-1.194-3.37-1.194-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.071 1.532 1.04 1.532 1.04.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.104-.253-.446-1.273.098-2.653 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.91-1.296 2.749-1.026 2.749-1.026.546 1.38.204 2.4.1 2.653.642.7 1.03 1.595 1.03 2.688 0 3.848-2.337 4.695-4.565 4.943.358.31.677.923.677 1.86 0 1.343-.012 2.425-.012 2.756 0 .269.18.58.688.481A10.013 10.013 0 0 0 22 12.012C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h6 className="text-sm ml-7 font-semibold tracking-wide text-slate-900 dark:text-white">Product</h6>
            <ul className="mt-4 space-y-3  text-sm">
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Overview</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Features</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Releases</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-sm ml-7 lg:ml-4 font-semibold tracking-wide text-slate-900 dark:text-white">Company</h6>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">About</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Careers</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Press</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-sm ml-7 font-semibold tracking-wide text-slate-900 dark:text-white">Resources</h6>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Documentation</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Guides</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Community</a></li>
              <li><a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <span className="text-slate-400 dark:text-slate-700">|</span>
            <a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <span className="text-slate-400 dark:text-slate-700">|</span>
            <a href="javascript:void(0)" className="hover:text-slate-900 dark:hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
