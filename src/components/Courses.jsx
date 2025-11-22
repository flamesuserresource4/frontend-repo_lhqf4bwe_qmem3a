import { Code2, Database, Globe, Rocket } from 'lucide-react'

const courses = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    desc: 'React, Node.js, REST APIs, authentication, testing, deployment — build real products end to end.',
    tag: 'Beginner to Job-Ready'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    desc: 'Python, SQL, pipelines, ETL with Airflow, and cloud data warehouses with real-world projects.',
    tag: 'Intermediate'
  },
  {
    icon: Globe,
    title: 'Cloud & DevOps',
    desc: 'Docker, Kubernetes, CI/CD, and observability to ship software reliably at scale.',
    tag: 'Advanced'
  },
  {
    icon: Rocket,
    title: 'AI Engineer Starter',
    desc: 'Python, vector databases, prompt engineering, and deploying AI features responsibly.',
    tag: 'New'
  }
]

export default function Courses(){
  return (
    <section id="courses" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(8,145,178,0.15),transparent_40%)]"/>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Popular Programs</h2>
          <p className="mt-3 text-blue-200/90">Career-focused tracks designed with local hiring partners.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(({icon:Icon, title, desc, tag}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-2xl"/>
              <div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-blue-600/20 text-cyan-200 border border-blue-400/20">{tag}</div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                  <Icon size={22}/>
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
