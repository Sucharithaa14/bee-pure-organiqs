import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import farmHero from '../assets/farm_hero.png'
import honeyHero from '../assets/honey_hero.png'

export default function About() {
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

  return (
    <main className="pt-[72px]">

      {/* Hero */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={farmHero} alt="Our Farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/85 via-[#1A1208]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-[7vw]">
          <div>
            <p className="text-[#F5C842] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif font-black text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}>
              Pure Honey.<br />
              <em className="text-[#E8900A] not-italic">Pure Promise.</em>
            </h1>
            <p className="text-white/65 text-sm leading-relaxed max-w-md">
              From the hives of India to your table — we believe in honey the way nature intended it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-[7vw] bg-[#FFFDF7]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="reveal text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#E8900A]" /> Who We Are
            </p>
            <h2 className="reveal font-serif font-black text-[#1A1208] mb-6"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Born from a Love of<br />
              <em className="text-[#E8900A] not-italic">Real Honey</em>
            </h2>
            <p className="reveal text-[#4A3520]/70 leading-relaxed mb-5 text-sm">
              Bee Pure OrganiQs was founded with one simple belief — that people deserve to know exactly what they're eating. Most honey on supermarket shelves is heated, filtered, and blended until it barely resembles the real thing.
            </p>
            <p className="reveal text-[#4A3520]/70 leading-relaxed mb-5 text-sm">
              We set out to change that. We travelled across India — from the Sidr forests of Rajasthan to the Litchi orchards of Bihar — and partnered directly with small-scale beekeepers who have been practicing ethical beekeeping for generations.
            </p>
            <p className="reveal text-[#4A3520]/70 leading-relaxed text-sm">
              Every jar of Bee Pure OrganiQs honey is raw, unfiltered, and cold-extracted. No heating. No additives. No compromise. Just honey the way nature intended.
            </p>
          </div>

          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#E8900A]/15">
              <img src={honeyHero} alt="Pure Honey" className="w-full h-[420px] object-cover" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-[#E8900A]/10">
              <div className="font-serif text-3xl font-black text-[#E8900A]">5000+</div>
              <div className="text-xs text-[#4A3520]/60 uppercase tracking-wider mt-1">Happy Customers</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#E8900A] rounded-2xl p-5 shadow-xl">
              <div className="font-serif text-3xl font-black text-white">50+</div>
              <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Partner Farms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-[7vw] bg-[#FBF5E6]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="reveal text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[#E8900A]/50" /> Our Values <span className="w-8 h-px bg-[#E8900A]/50" />
            </p>
            <h2 className="reveal font-serif font-black text-[#1A1208]"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌿', title: 'Purity First', desc: 'Every batch is independently lab tested. We never compromise on quality — not even once.' },
              { icon: '🤝', title: 'Farmer First', desc: 'We pay our beekeeper partners fairly and work with them directly. No middlemen, ever.' },
              { icon: '🐝', title: 'Bee Friendly', desc: 'Our extraction methods are designed to protect the bees and their natural habitat.' },
              { icon: '🌱', title: 'Sustainable', desc: 'Glass jars, minimal packaging, zero plastic. We care about the planet as much as the product.' },
              { icon: '🔬', title: 'Transparent', desc: 'We share where our honey comes from, how it is made, and what is in every jar.' },
              { icon: '❤️', title: 'Community', desc: 'Supporting small Indian beekeepers means supporting local communities and biodiversity.' },
            ].map((v, i) => (
              <div
                key={v.title}
                className="reveal group bg-white rounded-3xl p-7 border border-[#E8900A]/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E8900A]/10 transition-all duration-400"
                style={{ transitionDelay: i * 0.1 + 's' }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {v.icon}
                </div>
                <h3 className="font-serif font-bold text-[#1A1208] text-lg mb-2">{v.title}</h3>
                <p className="text-[#4A3520]/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-[7vw] bg-[#1A1208]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '7+', label: 'Honey Varieties' },
            { num: '50+', label: 'Partner Farms' },
            { num: '5000+', label: 'Happy Customers' },
            { num: '4.8★', label: 'Average Rating' },
          ].map((s, i) => (
            <div key={s.label} className="reveal text-center" style={{ transitionDelay: i * 0.1 + 's' }}>
              <div className="font-serif text-4xl font-black text-[#E8900A] mb-2">{s.num}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Founder */}
      <section className="py-24 px-[7vw] bg-[#FFFDF7]">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="reveal text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#E8900A]/50" /> Behind The Brand <span className="w-8 h-px bg-[#E8900A]/50" />
          </p>
          <h2 className="reveal font-serif font-black text-[#1A1208] mb-16"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Meet The Founder
          </h2>

          <div className="reveal bg-[#FBF5E6] rounded-3xl p-10 max-w-2xl mx-auto border border-[#E8900A]/10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#E8900A] to-[#F5C842] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              🧑‍🌾
            </div>
            <h3 className="font-serif font-bold text-[#1A1208] text-2xl mb-2">N Saketh Reddy</h3>
            <p className="text-[#E8900A] text-sm font-semibold tracking-wide uppercase mb-5">
              Founder — Bee Pure OrganiQs
            </p>
            <p className="text-[#4A3520]/65 text-sm leading-relaxed">
              Based in Shadnagar, Telangana, Saketh started Bee Pure OrganiQs with a simple mission — to make pure, honest honey accessible to every Indian household. What started as a passion project has grown into a trusted brand delivering across India.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[7vw] bg-gradient-to-br from-[#E8900A] to-[#B8670A] text-center">
        <h2 className="reveal font-serif font-black text-white mb-4"
          style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Ready to Taste the Difference?
        </h2>
        <p className="reveal text-white/80 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Try Bee Pure OrganiQs honey today and experience the real taste of nature.
        </p>
        <Link
          to="/shop"
          className="reveal inline-flex items-center gap-2 bg-white text-[#E8900A] px-10 py-4 rounded-full font-bold text-sm hover:bg-[#1A1208] hover:text-white transition-all duration-300 shadow-xl"
        >
          Shop All Honeys →
        </Link>
      </section>

    </main>
  )
}