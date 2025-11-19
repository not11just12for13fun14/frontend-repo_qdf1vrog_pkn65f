import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shadow-inner">
            <div className="h-5 w-5 rounded-sm bg-gradient-to-tr from-blue-400 to-cyan-300" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">CrescoFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#demo" className="hover:text-white transition">Demo</a>
          <a href="#audit" className="hover:text-white transition">Audit</a>
          <a href="#systems" className="hover:text-white transition">Systemen</a>
          <a href="#industries" className="hover:text-white transition">Sectoren</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#audit" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:shadow-lg transition">
            Gratis demo
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-white/10 transition" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6.75a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
          <div className="rounded-xl border border-white/10 bg-slate-800/60 backdrop-blur p-4 text-slate-200 space-y-3">
            <a href="#demo" className="block py-2">Demo</a>
            <a href="#audit" className="block py-2">Audit</a>
            <a href="#systems" className="block py-2">Systemen</a>
            <a href="#industries" className="block py-2">Sectoren</a>
            <a href="#faq" className="block py-2">FAQ</a>
            <div className="pt-2 flex gap-3">
              <a href="#audit" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Gratis demo</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
