const stories = [
  {
    name: 'Ananya',
    role: 'Software Engineer @ Local Fintech',
    quote: 'Small class size and constant feedback helped me switch from sales to software within 5 months.',
  },
  {
    name: 'Rahul',
    role: 'Frontend Dev @ Startup',
    quote: 'The project-based approach made interviews easy because I had real apps to show.',
  },
  {
    name: 'Meera',
    role: 'DevOps Intern @ IT Services',
    quote: 'Weekend batches were perfect with my college schedule. Mentors actually work in the industry.',
  },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Success stories from our graduates</h2>
          <p className="mt-3 text-blue-200/90">Outcomes we are proud of — jobs, internships, and confidence.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <figure key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-blue-100/90">“{s.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-blue-300/90">{s.name} • {s.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
