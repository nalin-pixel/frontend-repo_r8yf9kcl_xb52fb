function Work() {
  const projects = [
    {
      title: 'Skyline Penthouse',
      tag: 'Residential',
      img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Atrium Lounge',
      tag: 'Hospitality',
      img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Monochrome Loft',
      tag: 'Residential',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Featured work</h2>
            <p className="mt-3 text-slate-300 max-w-xl">A curation of spaces crafted with precision, texture and light.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Start a project</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-xs uppercase tracking-wider text-slate-400">{p.tag}</span>
                <h3 className="text-white text-lg font-medium mt-1">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
