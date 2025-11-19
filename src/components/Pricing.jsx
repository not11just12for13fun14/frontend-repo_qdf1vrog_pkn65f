function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free, upgrade as you grow. No hidden fees.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            name:'Starter', price:'Free', features:['3 flows','500 runs/month','Email support']
          },{
            name:'Growth', price:'$49', features:['Unlimited flows','50k runs/month','Priority support']
          },{
            name:'Scale', price:'$199', features:['Unlimited flows','500k runs/month','SLA & SSO']
          }].map((p, i) => (
            <div key={i} className={`rounded-2xl border ${i===1 ? 'border-blue-400/40 bg-blue-400/10' : 'border-white/10 bg-slate-900/40'} p-6`}>
              <h3 className="text-white font-medium text-lg">{p.name}</h3>
              <div className="mt-2 text-3xl text-white font-semibold">{p.price}<span className="text-sm text-slate-300 font-normal">/mo</span></div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium ${i===1 ? 'bg-white text-slate-900' : 'border border-white/15 text-white hover:bg-white/5'}`}>Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
