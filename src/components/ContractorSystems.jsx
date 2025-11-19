function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  )
}

export default function ContractorSystems() {
  return (
    <section id="systems" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simpele systemen die echt werken</h2>
          <p className="mt-3 text-slate-300">Geen diploma's vereist, gewoon een werkhelm</p>
          <p className="mt-4 text-slate-400">We begrijpen dat je het al druk genoeg hebt. Daarom houden we alles zo simpel mogelijk.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">Functionele Website</h3>
            <p className="mt-2 text-slate-300">Website verbonden met je GSM of e-mail. Lead komt binnen? Direct een melding naar je telefoon.</p>
            <div className="mt-4 space-y-3 text-slate-300 text-sm">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">46% van lokale zoekopdrachten heeft directe koopintentie</div>
                <p className="mt-1 text-slate-400">Een geoptimaliseerde website vangt die intentie op en zet bezoekers om in concrete offerteaanvragen.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: Google Economic Impact Report (2023)</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">75–98% checkt je website voor geloofwaardigheid</div>
                <p className="mt-1 text-slate-400">Een professionele site is de digitale handdruk die het verschil maakt.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: BrightLocal Consumer Review Survey (2024)</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">Tot 30% tijdsbesparing met mobile-first design</div>
                <p className="mt-1 text-slate-400">Responsive, snel en één-klik contact verlaagt bounce en verhoogt telefoontjes.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: Google Mobile Speed Report (2023)</p>
              </div>
            </div>
            <a href="#demo" className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-4 py-2 text-sm hover:bg-white/5 transition">Bekijk Korte Demo</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">5-Sterren Magische Review Funnel</h3>
            <p className="mt-2 text-slate-300">Vriendelijke herinneringen zorgen voor meer, betere reviews.</p>
            <div className="mt-4 space-y-3 text-slate-300 text-sm">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">70–90% leest reviews vóór aankoop</div>
                <p className="mt-1 text-slate-400">Vraag alleen bij tevreden klanten en stuur herinneringen.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: BrightLocal Review Survey (2024)</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">93%+ verwacht reactie op reviews</div>
                <p className="mt-1 text-slate-400">Actief opvolgen verhoogt vertrouwen én zichtbaarheid.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: ReviewTrackers Survey (2023)</p>
              </div>
            </div>
            <a href="#demo" className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-4 py-2 text-sm hover:bg-white/5 transition">Bekijk Korte Demo</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold text-white">Gemiste Oproep → SMS Terug</h3>
            <p className="mt-2 text-slate-300">Automatisch een SMS als je een oproep mist — verlies nooit meer een lead.</p>
            <div className="mt-4 space-y-3 text-slate-300 text-sm">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">~98% openrate, meeste binnen 3 minuten</div>
                <p className="mt-1 text-slate-400">Directe opvolging wordt gewaardeerd door potentiële klanten.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: SimpleTexting Report (2023)</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="font-medium text-white">Reminders verlagen no-shows ~38–48%</div>
                <p className="mt-1 text-slate-400">Automatisch herinneren zorgt dat afspraken doorgaan.</p>
                <p className="mt-2 text-xs text-slate-500">Bron: Acuity Scheduling Study (2022)</p>
              </div>
            </div>
            <a href="#demo" className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-4 py-2 text-sm hover:bg-white/5 transition">Bekijk Korte Demo</a>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <Stat value="2–7×" label="ROI re-activatie campagnes" />
          <Stat value="3–4×" label="Betere conversie via referrals" />
          <Stat value="87%" label="Mobiele bezoekers die je winst geven" />
        </div>
      </div>
    </section>
  )
}
