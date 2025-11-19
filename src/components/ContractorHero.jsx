import { useEffect, useRef } from 'react'

function FloatingOrbs() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/30 to-emerald-400/20 blur-3xl" />
      <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-500/30 to-sky-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[36rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.15),rgba(16,185,129,0.12),transparent_40%)] blur-2xl" />
    </div>
  )
}

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotX = (py - 0.5) * -10
      const rotY = (px - 0.5) * 10
      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
    }
    const reset = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }
    el.addEventListener('mousemove', handle)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handle)
      el.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <div ref={ref} className={`transition-transform duration-200 will-change-transform ${className}`}>
      {children}
    </div>
  )
}

export default function ContractorHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-10">
      <FloatingOrbs />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Website Design & Marketing Systemen Voor Aannemers
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Laat de onzin achterwege. Marketing is geen rocket science.
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-2xl">
              Geen enkel bureau heeft de wonderoplossing. Wij geven je de tools om te winnen—jij moet ze gebruiken.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow hover:shadow-lg transition">
                Vraag een Gratis Demo Aan
              </a>
              <a href="#audit" className="inline-flex items-center justify-center rounded-lg border border-white/15 text-white px-6 py-3 font-medium hover:bg-white/5 transition">
                Gratis Marketing Audit Rapport
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-400 text-sm">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-br from-slate-600 to-slate-500" />
                ))}
              </div>
              <span>Speciaal ontworpen voor bouw-, installatie- en renovatiebedrijven</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.25),rgba(16,185,129,0.2),transparent)] blur-2xl opacity-70" />
            <TiltCard className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-2 shadow-xl">
              <div className="rounded-xl bg-slate-800/60 border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-slate-900/60">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="aspect-video grid place-items-center bg-gradient-to-br from-slate-900 to-slate-800">
                  <div className="relative">
                    <div className="absolute -inset-10 bg-[radial-gradient(200px_80px_at_50%_20%,rgba(56,189,248,0.25),transparent_60%)]" />
                    <div className="relative rounded-xl border border-white/10 bg-black/40 p-6">
                      <p className="text-xl font-medium text-white">3D Preview</p>
                      <p className="text-slate-400">Beweeg je muis — interactieve 3D tilt</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 px-3 py-2 text-sm shadow-lg">
              99.9% uptime
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-200 px-3 py-2 text-sm shadow-lg">
              Conversiegericht
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
