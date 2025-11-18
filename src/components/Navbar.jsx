import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between gap-x-6 py-5 rounded-2xl mt-4 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border border-white/10 shadow-lg">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 to-orange-500 shadow-inner" />
            <span className="text-white text-lg font-semibold tracking-tight">Elevate Interiors</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center bg-white text-slate-900 font-medium px-4 py-2 rounded-lg shadow hover:shadow-md transition-shadow">
              Book a Consultation
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6 lg:px-8 mt-2">
          <div className="rounded-xl bg-slate-900/70 backdrop-blur border border-white/10 p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block w-full text-center bg-white text-slate-900 font-medium px-4 py-2 rounded-lg">
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
