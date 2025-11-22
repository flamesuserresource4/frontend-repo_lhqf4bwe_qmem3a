import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(8,145,178,0.15),transparent_40%)]"/>

      <Navbar />
      <main className="relative">
        <Hero />
        <Courses />
        <Testimonials />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70">© {new Date().getFullYear()} BlueTech Institute. All rights reserved.</p>
          <div className="text-blue-200/70 text-sm">Made locally with ❤️. Weekend and weekday batches available.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
