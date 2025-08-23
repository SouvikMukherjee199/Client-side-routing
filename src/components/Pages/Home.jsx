import React from 'react'
import Hero from '../Hero'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <div className=" bg-white ">
        <div className="max-w-screen-xl mx-auto dark:bg-slate-400 py-10  px-4">
          <div className="text-center max-w-2xl dark:text-white mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 ">Everything you need to get started</h2>
            <p className="mt-3 text-slate-600 dark:text-black">A thoughtfully curated set of features to help you build momentum from day one. Powerful, elegant, and delightful to use.</p>
          </div>

          <div className="grid  md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg dark:bg-white border  border-slate-200  hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center dark:border-indigo-700 dark:border-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 " viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Elegant by default</h3>
              <p className="text-slate-600 text-sm">Well-crafted UI blocks and sensible defaults ensure an experience that looks professional out of the box.</p>
            </div>
            <div className="p-6 rounded-lg dark:bg-white border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center dark:border-green-500 dark:border-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a1 1 0 0 1-1-1v-6H7a1 1 0 0 1-.832-1.555l5-7A1 1 0 0 1 12 6v6h4a1 1 0 0 1 .832 1.555l-5 7A1 1 0 0 1 12 22Z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Performance first</h3>
              <p className="text-slate-600 text-sm">Optimized assets and thoughtful patterns ensure snappy load times and a smooth user experience.</p>
            </div>
            <div className="p-6 rounded-lg dark:bg-white border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center dark:border-violet-700 dark:border-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 7l11 5 9-4.091V17h2V7z"/><path d="M11 12.84 3 9v8l8 4 8-4V9l-8 3.84Z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Built to scale</h3>
              <p className="text-slate-600 text-sm">From small projects to large applications, the architecture supports a clean path to grow.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by teams</h2>
            <p className="mt-3 text-slate-600">Hear from people who use our product to deliver exceptional experiences.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="p-6 rounded-lg bg-white border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <img className="w-10 h-10 rounded-full object-cover" src={`https://i.pravatar.cc/100?img=${i*7}`} alt="avatar" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Alex Johnson</p>
                    <p className="text-xs text-slate-500">Product Manager</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">“The attention to detail and performance is outstanding. We shipped faster and our customers noticed the difference.”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-violet-700">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8 text-white">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Start building with confidence</h3>
              <p className="text-indigo-100">Level up your workflow with a clean structure and refined components. No bloat, just what you need.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="javascript:void(0)" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-md hover:bg-indigo-50 transition">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
