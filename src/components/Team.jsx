import React from 'react'

const members = [
  { name: 'Emma Carter', role: 'CEO & Founder', avatar: 'https://i.pravatar.cc/120?img=32', bio: 'Vision-driven leader with 12+ years in building high-performing teams and scalable products.' },
  { name: 'Noah Williams', role: 'CTO', avatar: 'https://i.pravatar.cc/120?img=14', bio: 'Architects robust systems and drives engineering excellence across the organization.' },
  { name: 'Ava Thompson', role: 'Head of Design', avatar: 'https://i.pravatar.cc/120?img=47', bio: 'Crafts elegant interfaces and leads design strategy with a customer-first mindset.' },
  { name: 'Liam Johnson', role: 'Lead Engineer', avatar: 'https://i.pravatar.cc/120?img=5', bio: 'Full-stack specialist focused on performance, reliability, and developer experience.' },
  { name: 'Sophia Martinez', role: 'Product Manager', avatar: 'https://i.pravatar.cc/120?img=8', bio: 'Translates insights into delightful product experiences that customers love.' },
  { name: 'Ethan Brown', role: 'QA Lead', avatar: 'https://i.pravatar.cc/120?img=1', bio: 'Ensures product quality through automation, rigor, and meticulous attention to detail.' },
]

const Team = () => {
  return (
    <div>
      <section className="py-16 bg-slate-50 dark:bg-slate-500 ">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 ">Meet Our Team</h1>
            <p className="mt-3 text-slate-600 dark:text-black">We are a multidisciplinary group of thinkers, builders, and designers who care deeply about craft and impact.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <div key={m.name} className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <img src={m.avatar} alt={m.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                    <p className="text-sm text-emerald-700 font-medium">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{m.bio}</p>
                <div className="mt-4 flex gap-3">
                  <a href="javascript:void(0)" className="text-slate-500 hover:text-slate-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.47 8.47 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.35 2.9c0 .33.04.66.11.97A12.05 12.05 0 0 1 3.15 4.6a4.25 4.25 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.16 4.21 4.21 0 0 1-1.91.07 4.24 4.24 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.53a12 12 0 0 0 6.52 1.92c7.83 0 12.11-6.49 12.11-12.11 0-.18-.01-.36-.02-.54A8.64 8.64 0 0 0 22.46 6Z"/></svg>
                  </a>
                  <a href="javascript:void(0)" className="text-slate-500 hover:text-slate-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 3h-5A4.5 4.5 0 0 0 5 7.5v9A4.5 4.5 0 0 0 9.5 21h5a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 14.5 3ZM12 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-8.5H9V7h6Z"/></svg>
                  </a>
                  <a href="javascript:void(0)" className="text-slate-500 hover:text-slate-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 5.924a5.672 5.672 0 0 1-1.63.447 2.842 2.842 0 0 0 1.247-1.568 5.68 5.68 0 0 1-1.803.689 2.837 2.837 0 0 0-4.832 2.587A8.06 8.06 0 0 1 3.15 5.1a2.838 2.838 0 0 0 .878 3.786 2.818 2.818 0 0 1-1.283-.354v.035a2.837 2.837 0 0 0 2.276 2.78 2.84 2.84 0 0 1-1.279.049 2.838 2.838 0 0 0 2.651 1.97A5.683 5.683 0 0 1 2 15.553a8.02 8.02 0 0 0 4.355 1.276c5.226 0 8.084-4.329 8.084-8.084 0-.123-.003-.246-.008-.368a5.776 5.776 0 0 0 1.778-1.452Z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">We value craft, clarity, and care</h2>
            <p className="mt-3 text-slate-600">Our culture is built around curiosity and ownership. We encourage experimentation and champion thoughtful execution.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-emerald-600">•</span> Customer-first design philosophy</li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span> Engineering excellence and reliability</li>
              <li className="flex gap-2"><span className="text-emerald-600">•</span> Inclusive, collaborative environment</li>
            </ul>
          </div>
          <div className="md:h-[320px]">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" alt="team" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
