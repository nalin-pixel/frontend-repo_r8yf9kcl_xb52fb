import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Elevate Interiors. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Instagram • Pinterest • Behance</div>
        </div>
      </footer>
    </div>
  )
}

export default App
