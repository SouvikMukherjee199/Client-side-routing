import React from 'react'

const features = [
  {
    title: 'Secure by default',
    desc: 'Enterprise-grade security with SSO, RBAC, audit trails, and encryption in transit and at rest.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Performance first',
    desc: 'Optimized rendering and data fetching for fast interactions at any scale and on any device.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M3 12h3l3 8 4-16 3 8h5" />
      </svg>
    ),
  },
  {
    title: 'Built to scale',
    desc: 'Horizontal scaling patterns, multi-region support, and resilient architecture out of the box.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      </svg>
    ),
  },
  {
    title: 'Developer experience',
    desc: 'Type-safe APIs, first-class tooling, and sensible defaults to ship quickly and confidently.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: 'Observability',
    desc: 'Trace, log, and monitor with built-in dashboards and pluggable providers like Datadog and OpenTelemetry.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
        <path d="M3 3v18h18" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
  },
  {
    title: 'Global compliance',
    desc: 'SOC 2, ISO 27001, GDPR, and HIPAA readiness to operate confidently across regions.',
    icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
        </svg>
    ),
  },
]

const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '120ms', label: 'P95 response time' },
  { value: '200+', label: 'Enterprise teams' },
  { value: '50+', label: 'Regions supported' },
]

const Feature = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">Platform</span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need to build, scale, and operate with confidence</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">A modern foundation that blends performance, security, and developer experience so your team can focus on shipping value—not infrastructure.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white text-sm font-semibold px-4 py-2 hover:bg-indigo-700">Get started</a>
              <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-md border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 hover:bg-slate-50">View docs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
                <div className="mt-4">
                  <a href="javascript:void(0)" className="text-sm font-medium text-indigo-600 hover:underline">Learn more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-slate-200 bg-white p-6 text-center">
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="mt-1 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Operational excellence baked in</h2>
            <p className="mt-3 text-slate-600">We combine reliable infrastructure with clear guardrails so your team can move quickly without compromising quality. From preview environments to one-click rollbacks—stability and speed can coexist.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Ephemeral environments for every PR</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Zero-downtime deploys with automatic health checks</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Fine-grained access controls and approvals</li>
            </ul>
            <div className="mt-6">
              <a href="javascript:void(0)" className="text-indigo-600 font-medium hover:underline">Explore how it works</a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" alt="Product screenshot" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-screen-xl mx-auto px-4 py-14 md:py-16">
          <div className="flex flex-col items-start md:items-center md:text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to build something exceptional?</h3>
            <p className="mt-3 text-slate-300 max-w-2xl">Start with our free plan and upgrade as you grow. No credit card required.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:bg-slate-100">Start free</a>
              <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-md border border-slate-700 text-white text-sm font-semibold px-4 py-2 hover:bg-slate-800">Contact sales</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature
