function Features() {
  const items = [
    {
      title: 'Visual builder',
      desc: 'Design flows with a drag-and-drop canvas. Reusable steps, branching and retries built-in.',
    },
    {
      title: 'AI agents',
      desc: 'Let AI analyze context, choose actions and write content for you automatically.',
    },
    {
      title: 'Deep integrations',
      desc: 'Connect CRM, billing, spreadsheets and more with native connectors.',
    },
    {
      title: 'Observability',
      desc: 'See every run, inputs and outputs. Roll back or replay with one click.',
    },
    {
      title: 'Governance',
      desc: 'Role-based access, audit logs and approval gates keep you in control.',
    },
    {
      title: 'Scales with you',
      desc: 'From a single playbook to thousands of automations across teams.',
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything to ship faster</h2>
          <p className="mt-3 text-slate-300">A platform that brings together planning, execution and learning.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow hover:shadow-xl transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-400/30 to-cyan-300/30 border border-white/10 mb-4" />
              <h3 className="text-white font-medium text-lg">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
