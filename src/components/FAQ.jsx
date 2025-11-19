function FAQ() {
  const faqs = [
    {q:'Werken jullie alleen voor aannemers?', a:'We focussen op bouw-, installatie- en renovatiesectoren, maar ondersteunen ook aanverwante diensten.'},
    {q:'Hoe snel kan ik live?', a:'Meestal binnen 7–14 dagen, afhankelijk van content en gewenste modules.'},
    {q:'Moet ik zelf iets doen?', a:'Ja. Wij leveren tools en automatiseringen; jij levert input en keurt goed. Samen winnen we.'},
    {q:'Zit ik ergens aan vast?', a:'Nee. Start met een gratis audit en plan een demo – volledig vrijblijvend.'},
  ]
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center">Veelgestelde vragen</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/40">
            {faqs.map((f, i) => (
              <details key={i} className="group p-6 open:bg-white/3">
                <summary className="list-none cursor-pointer flex items-center justify-between text-white">
                  <span className="font-medium">{f.q}</span>
                  <span className="ml-6 h-6 w-6 rounded-md border border-white/15 text-slate-300 flex items-center justify-center">+</span>
                </summary>
                <p className="mt-3 text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
