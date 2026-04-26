import { useState, useEffect } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all required fields')
      return
    }
    setSent(true)
  }

  return (
    <main className="pt-[72px] bg-[#FFFDF7] min-h-screen">

      <section className="py-20 px-[7vw] bg-[#FBF5E6]">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="reveal text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#E8900A]/50" /> Get In Touch <span className="w-8 h-px bg-[#E8900A]/50" />
          </p>
          <h1 className="reveal font-serif font-black text-[#1A1208] mb-4" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
            We'd Love to <em className="text-[#E8900A] not-italic">Hear From You</em>
          </h1>
          <p className="reveal text-[#4A3520]/60 max-w-lg mx-auto text-sm leading-relaxed">
            Have a question about our honey? Want to place a bulk order? Just say hello — we are here for you.
          </p>
        </div>
      </section>

      <section className="py-20 px-[7vw]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="reveal font-serif font-black text-[#1A1208] text-2xl mb-8">
              Contact Information
            </h2>

            <div className="reveal flex items-start gap-5 mb-8">
              <div className="w-12 h-12 bg-[#FBF5E6] rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border border-[#E8900A]/10">📍</div>
              <div>
                <div className="font-serif font-bold text-[#1A1208] mb-1">Our Location</div>
                <div className="text-sm text-[#4A3520]/60">Shadnagar, Telangana</div>
                <div className="text-sm text-[#4A3520]/60">India — 509216</div>
              </div>
            </div>

            <div className="reveal flex items-start gap-5 mb-8">
              <div className="w-12 h-12 bg-[#FBF5E6] rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border border-[#E8900A]/10">📞</div>
              <div>
                <div className="font-serif font-bold text-[#1A1208] mb-1">Phone</div>
                <div className="text-sm text-[#4A3520]/60">+91 XXXXX XXXXX</div>
                <div className="text-sm text-[#4A3520]/60">Mon–Sat, 9am–6pm</div>
              </div>
            </div>

            <div className="reveal flex items-start gap-5 mb-8">
              <div className="w-12 h-12 bg-[#FBF5E6] rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border border-[#E8900A]/10">✉️</div>
              <div>
                <div className="font-serif font-bold text-[#1A1208] mb-1">Email</div>
                <div className="text-sm text-[#4A3520]/60">hello@beepureorganiqs.in</div>
                <div className="text-sm text-[#4A3520]/60">We reply within 24 hours</div>
              </div>
            </div>

            <div className="reveal flex items-start gap-5 mb-8">
              <div className="w-12 h-12 bg-[#FBF5E6] rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border border-[#E8900A]/10">🚚</div>
              <div>
                <div className="font-serif font-bold text-[#1A1208] mb-1">Shipping</div>
                <div className="text-sm text-[#4A3520]/60">Free delivery on orders above 499</div>
                <div className="text-sm text-[#4A3520]/60">Pan India delivery available</div>
              </div>
            </div>

            <div className="reveal mt-10 pt-8 border-t border-[#E8900A]/10">
              <div className="text-sm font-semibold text-[#1A1208] mb-4">Follow Us</div>
              <div className="flex gap-3 flex-wrap">
                <a href="#" className="flex items-center gap-2 bg-[#FBF5E6] border border-[#E8900A]/10 px-4 py-2.5 rounded-full text-sm font-medium text-[#1A1208] hover:bg-[#E8900A] hover:text-white transition-all duration-300">
                  📸 Instagram
                </a>
                <a href="#" className="flex items-center gap-2 bg-[#FBF5E6] border border-[#E8900A]/10 px-4 py-2.5 rounded-full text-sm font-medium text-[#1A1208] hover:bg-[#E8900A] hover:text-white transition-all duration-300">
                  👥 Facebook
                </a>
                <a href="#" className="flex items-center gap-2 bg-[#FBF5E6] border border-[#E8900A]/10 px-4 py-2.5 rounded-full text-sm font-medium text-[#1A1208] hover:bg-[#E8900A] hover:text-white transition-all duration-300">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            {sent ? (
              <div className="bg-[#FBF5E6] rounded-3xl p-12 text-center border border-[#E8900A]/10 flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-6xl mb-6">🍯</div>
                <h3 className="font-serif font-black text-[#1A1208] text-2xl mb-3">Message Sent!</h3>
                <p className="text-[#4A3520]/60 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  className="mt-8 bg-[#E8900A] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#B8670A] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 border border-[#E8900A]/10 shadow-xl shadow-black/05">
                <h2 className="font-serif font-bold text-[#1A1208] text-xl mb-6">Send us a Message</h2>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-5 py-3.5 rounded-2xl border border-[#E8900A]/15 text-sm outline-none focus:border-[#E8900A] bg-[#FFFDF7] transition-colors text-[#1A1208]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-5 py-3.5 rounded-2xl border border-[#E8900A]/15 text-sm outline-none focus:border-[#E8900A] bg-[#FFFDF7] transition-colors text-[#1A1208]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-3.5 rounded-2xl border border-[#E8900A]/15 text-sm outline-none focus:border-[#E8900A] bg-[#FFFDF7] transition-colors text-[#1A1208]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full px-5 py-3.5 rounded-2xl border border-[#E8900A]/15 text-sm outline-none focus:border-[#E8900A] bg-[#FFFDF7] transition-colors resize-none text-[#1A1208]"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#E8900A] text-white py-4 rounded-2xl font-semibold text-sm hover:bg-[#B8670A] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8900A]/25"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-[#4A3520]/40 text-center">
                    We typically reply within 24 hours
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-[7vw] pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal bg-[#FBF5E6] rounded-3xl h-64 flex items-center justify-center border border-[#E8900A]/10">
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>
              <div className="font-serif font-bold text-[#1A1208]">Shadnagar, Telangana</div>
              <div className="text-sm text-[#4A3520]/50 mt-1">India — 509216</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}