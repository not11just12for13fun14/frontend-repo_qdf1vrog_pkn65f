function HowItWorks() {
  const steps = [
    {
      title: 'Connect tools',
      desc: 'Add integrations like Slack, HubSpot, Stripe, Airtable and your own APIs.',
    },
    {
      title: 'Design flows',
      desc: 'Drag blocks onto the canvas to outline steps, conditions and data mapping.',
    },
    {
      title: 'Run & iterate',
      desc: 'Trigger runs manually or on schedule. Monitor, tweak and scale with confidence.',
    },
  ]

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3 text-slate-300">
                <span className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white font-medium">{i+1}</span>
                <h3 className="text-white font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 aspect-video rounded-lg border border-white/10 bg-[url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
