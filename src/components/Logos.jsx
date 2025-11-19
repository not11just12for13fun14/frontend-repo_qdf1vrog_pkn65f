function Logos() {
  const logos = ['Fjord','Kairo','Nimbus','Vertex','Helio','Pulse']
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-6 py-8">
          <p className="text-center text-slate-400 text-sm">Trusted by modern teams</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {logos.map((l, i) => (
              <div key={i} className="flex items-center justify-center text-slate-300/80 text-sm tracking-wider border border-white/5 rounded-lg py-6 bg-slate-800/40">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logos
