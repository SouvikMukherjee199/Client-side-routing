import React from 'react'

const posts = [
  { id: 1, title: 'Designing with Intent', excerpt: 'How to keep experiences cohesive across platforms with a strong design system.', cover: 'https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww', date: 'Aug 02, 2024', author: 'Ava Thompson' },
  { id: 2, title: 'Performance as a Feature', excerpt: 'Treat performance like a product feature to delight users and improve outcomes.', cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', date: 'Aug 18, 2024', author: 'Liam Johnson' },
  { id: 3, title: 'Scaling Frontend Architecture', excerpt: 'Patterns for maintainable, modular UI at scale.', cover: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop', date: 'Sep 01, 2024', author: 'Emma Carter' },
]

const Blog = () => {
  return (
    <div>
      <section className="py-16 bg-slate-50 dark:bg-slate-500">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Insights & Articles</h1>
            <p className="mt-3 text-slate-600 dark:text-black">Perspectives on design, engineering, and building remarkable products.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition">
                <div className="h-44">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-500">{p.date} • {p.author}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
                  <div className="mt-4">
                    <a href="javascript:void(0)" className="text-indigo-600 font-medium hover:underline">Read more</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Editorial standards</h2>
            <p className="mt-3 text-slate-600">We publish thoughtful, research-driven articles designed to inform and inspire. Each post goes through technical review and careful editing.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-indigo-600">•</span> Practical takeaways you can implement today</li>
              <li className="flex gap-2"><span className="text-indigo-600">•</span> Clear, concise writing without fluff</li>
              <li className="flex gap-2"><span className="text-indigo-600">•</span> Real-world examples and code where helpful</li>
            </ul>
          </div>
          <div className="md:h-[320px]">
            <img src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=1200&auto=format&fit=crop" alt="blog" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
