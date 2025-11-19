import Navbar from './components/Navbar'
import ContractorHero from './components/ContractorHero'
import ContractorAudit from './components/ContractorAudit'
import ContractorSystems from './components/ContractorSystems'
import ContractorIndustries from './components/ContractorIndustries'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main>
        <ContractorHero />
        <section id="demo" className="py-14">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-semibold text-white">Bekijk Korte Demo</h2>
                  <p className="mt-1 text-slate-300">Zie in 60 seconden hoe leads binnenkomen, automatische opvolging werkt en reviews verzameld worden.</p>
                </div>
                <a href="#audit" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-2.5 font-medium shadow hover:shadow-lg transition">Vraag een Gratis Demo Aan</a>
              </div>
              <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </section>
        <ContractorAudit />
        <ContractorSystems />
        <ContractorIndustries />
        <FAQ />
      </main>
      <Footer />
      <div className="fixed inset-x-0 -z-10 top-0 h-[60vh] bg-[radial-gradient(800px_300px_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
    </div>
  )
}

export default App
