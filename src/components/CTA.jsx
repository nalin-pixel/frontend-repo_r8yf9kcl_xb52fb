function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 md:p-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s craft your next space</h2>
            <p className="mt-3 text-slate-300">Tell us about your project and we’ll get back within 24 hours.</p>
          </div>

          <form className="mt-8 grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="email" placeholder="Email address" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input type="text" placeholder="Project type" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20 md:col-span-2" />
            <textarea placeholder="Tell us about your space..." rows="4" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20 md:col-span-2" />
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-md md:col-span-2">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
