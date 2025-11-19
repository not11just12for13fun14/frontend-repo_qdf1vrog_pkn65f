const sectors = [
  'Aannemers', 'Verbouwing', 'Reinigingsbedrijf', 'Verhuisbedrijven', 'Vloeren & Tapijt', 'Dakwerken', 'HVAC', 'Loodgieters', 'Elektriciens', 'Klusjesman', 'Schilders', 'Terrassen', 'Gevelbekleding', 'Zwembadaanleg', 'Tuinbedrijf', 'Hardscaping', 'Ramen & Deuren', 'Bestrating'
]

export default function ContractorIndustries() {
  return (
    <section id="industries" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">Voor al deze vakgebieden en meer...</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {sectors.map((name) => (
            <div key={name} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-slate-200 text-sm hover:bg-white/10 transition">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
