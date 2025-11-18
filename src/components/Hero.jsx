import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-2xl md:max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Spaces that speak luxury and liveability
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-200/90 max-w-xl">
              We design contemporary interiors for modern living — blending comfort, function and iconic aesthetics for homes, penthouses and boutique spaces.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-md">
                Explore Our Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 text-white border border-white/20">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
