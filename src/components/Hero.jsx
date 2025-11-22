import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Admissions open for Winter Batch
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Master software skills with hands-on, industry-ready training
          </h1>

          <p className="mt-4 text-blue-200/90 text-lg">
            Learn by building real projects with mentors from top companies. Flexible schedules, small cohorts, and career support to land your next role.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#courses" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition">
              Explore Courses
            </a>
            <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-white/20 text-blue-100 hover:bg-white/10 transition">
              Talk to an Advisor
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </section>
  );
}
