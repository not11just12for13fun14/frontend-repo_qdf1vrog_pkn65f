export default function ContractorAudit() {
  return (
    <section id="audit" className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Gratis Marketing Audit Rapport</h2>
            <p className="mt-3 text-slate-300">
              Zie waar je online aanwezigheid staat. Volledig gratis, geen verplichtingen.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-2"><span className="text-emerald-400">•</span> Website performance & vindbaarheid</li>
              <li className="flex gap-2"><span className="text-emerald-400">•</span> Conversiepunten: bellen, WhatsApp, offerte</li>
              <li className="flex gap-2"><span className="text-emerald-400">•</span> Reviews & reputatiebeheer</li>
            </ul>
          </div>
          <div>
            <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300">Voornaam *</label>
                  <input required placeholder="Jan" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">Officiële Bedrijfsnaam *</label>
                  <input required placeholder="Bouwbedrijf Janssen" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">Telefoonnummer *</label>
                  <input required placeholder="+32 123 45 67 89" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300">E-mail *</label>
                  <input type="email" required placeholder="jan@voorbeeld.be" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <button className="mt-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow hover:shadow-lg transition w-full">
                Indienen
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
