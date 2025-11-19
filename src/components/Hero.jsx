function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(14,165,233,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_20%,rgba(99,102,241,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Now in open beta
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Automate operations with AI-driven workflows
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Build, run and monitor business processes without code. Connect your tools, orchestrate steps, and let AI optimize outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow hover:shadow-lg transition">
                Start free
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-6 py-3 font-medium hover:bg-white/5 transition">
                Watch demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-br from-slate-600 to-slate-500" />
                ))}
              </div>
              <span>Trusted by 1,200+ teams</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.25),rgba(14,165,233,0.2),transparent)] blur-2xl opacity-70" />
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-2 shadow-xl">
              <div className="rounded-xl bg-slate-800/60 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-slate-900/60">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 px-3 py-2 text-sm shadow-lg">
              99.9% uptime
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-200 px-3 py-2 text-sm shadow-lg">
              SOC 2 Type II
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
