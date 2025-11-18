import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Spline animation background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-slate-100 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
          Meet your all‑in‑one AI – Vionix
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Futuristic. Fast. Helpful.
        </h1>
        <p className="mt-4 md:mt-6 text-slate-200/90 text-lg md:text-xl max-w-2xl mx-auto">
          A unified assistant that plans, writes, summarizes and reasons — wrapped in a sleek, ambient interface.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#chat" className="px-5 py-3 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold transition-colors">Start chatting</a>
          <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors border border-white/20">Explore features</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
