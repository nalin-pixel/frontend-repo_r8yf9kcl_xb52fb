function Services() {
  const items = [
    {
      title: 'Residential Interiors',
      desc: 'Bespoke homes and penthouses tailored to your lifestyle with premium materials and refined details.',
    },
    {
      title: 'Commercial & Hospitality',
      desc: 'Branded environments for boutiques, lounges and reception spaces that leave a lasting impression.',
    },
    {
      title: 'Renovation & Styling',
      desc: 'From concept to final styling — we refresh layouts, lighting and furnishings to elevate your space.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">End‑to‑end design services for editorial‑worthy spaces.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg">
              <h3 className="text-white font-medium text-xl">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
