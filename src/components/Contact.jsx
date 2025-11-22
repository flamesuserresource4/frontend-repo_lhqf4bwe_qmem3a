import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
          <p className="mt-3 text-blue-200/90">Visit our center, call us, or send a message — we respond within a day.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" placeholder="First name"/>
              <input className="col-span-1 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" placeholder="Last name"/>
              <input type="email" className="sm:col-span-2 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" placeholder="Email"/>
              <textarea rows="4" className="sm:col-span-2 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50" placeholder="Your message"></textarea>
              <button className="sm:col-span-2 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition">Send message</button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
            <a href="tel:+11234567890" className="inline-flex items-center gap-3 text-blue-100"><Phone size={18}/> +1 123 456 7890</a>
            <a href="mailto:hello@bluetech.edu" className="inline-flex items-center gap-3 text-blue-100"><Mail size={18}/> hello@bluetech.edu</a>
            <p className="inline-flex items-start gap-3 text-blue-100"><MapPin size={18}/> 22/4, Tech Park Road, Near City Mall, Your City</p>
            <div className="mt-2 rounded-xl overflow-hidden">
              <iframe title="map" className="w-full h-56" src="https://www.openstreetmap.org/export/embed.html?bbox=77.59%2C12.97%2C77.62%2C12.99&layer=mapnik" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
