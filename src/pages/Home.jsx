import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import honeyHero from '../assets/honey_hero.png'
import farmHero from '../assets/farm_hero.png'

const testimonials = [
  { text: "The Sidr honey is absolutely divine! You can taste the purity. My whole family is hooked.", name: "Priya S.", location: "Hyderabad", emoji: "👩" },
  { text: "Finally found real raw honey. No fake sweetness, just pure nature. Wild Forest is my favourite.", name: "Rahul M.", location: "Bengaluru", emoji: "👨" },
  { text: "Tulsi honey works wonders for my cough. The quality is unmatched at this price.", name: "Ananya K.", location: "Chennai", emoji: "👩‍🦱" },
  { text: "Packaging is beautiful, delivery was quick and the Litchi honey smells heavenly.", name: "Vikram T.", location: "Mumbai", emoji: "👨‍💼" },
  { text: "Ajwain honey for digestion — honestly the best thing I added to my diet this year.", name: "Meera P.", location: "Pune", emoji: "👩‍🦳" },
  { text: "Himalayan Multi Flora is my morning ritual now. So fragrant, so fresh.", name: "Arun B.", location: "Delhi", emoji: "👨‍🦲" },
]
const allTestis = [...testimonials, ...testimonials]

export default function Home() {
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
    <main>
      <Hero />

      {/* ── TRUST BAR ── */}
      <section className="bg-[#1A1208] py-4 px-[7vw]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: '🚚', text: 'Free delivery on ₹499+' },
            { icon: '🌿', text: '100% Raw & Organic' },
            { icon: '🧪', text: 'Lab Tested Purity' },
            { icon: '⭐', text: '4.8/5 Rating' },
          ].map(t => (
            <div key={t.text} className="flex items-center gap-2">
              <span className="text-base">{t.icon}</span>
              <span className="text-white/70 text-xs font-medium">{t.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALL PRODUCTS ── */}
      <section className="py-20 px-[7vw] bg-[#FFFDF7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="reveal text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-[#E8900A]" /> Our Collection
              </p>
              <h2 className="reveal font-serif font-black text-[#1A1208]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Shop All <em className="text-[#E8900A] not-italic">Honeys</em>
              </h2>
            </div>
            <Link to="/shop" className="reveal text-sm font-semibold text-[#1A1208] border border-[#1A1208]/15 px-6 py-3 rounded-full hover:bg-[#E8900A] hover:text-white hover:border-[#E8900A] transition-all duration-300">
              View All →
            </Link>
          </div>

          {/* Mobile horizontal scroll */}
<div className="flex lg:hidden gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
  {products.map((p) => (
    <div key={p.id} className="flex-shrink-0 w-[220px] snap-start">
      <ProductCard product={p} />
    </div>
  ))}
</div>

{/* Desktop grid */}
<div className="hidden lg:grid grid-cols-4 gap-6">
  {products.map((p, i) => (
    <div key={p.id} className="reveal" style={{ transitionDelay: i * 0.08 + 's' }}>
      <ProductCard product={p} />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* ── HONEY BANNER ── */}
      <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        <img src={honeyHero} alt="Pure Honey" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/80 via-[#1A1208]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-[7vw]">
          <div className="max-w-lg">
            <h2 className="font-serif font-black text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
              Honey The Way<br />
              <em className="text-[#F5C842] not-italic">Nature Intended</em>
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-sm">
              Raw, unfiltered, cold-extracted. Every drop packed with natural enzymes and antioxidants.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 bg-[#E8900A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#F5C842] hover:text-[#1A1208] transition-all duration-300 shadow-xl shadow-[#E8900A]/30">
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US — SIMPLE ── */}
      <section className="py-20 px-[7vw] bg-[#FBF5E6]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="reveal font-serif font-black text-[#1A1208]" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Why <em className="text-[#E8900A] not-italic">Bee Pure?</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: '🌳', title: 'Directly Sourced', desc: 'From 50+ farms across India. No middlemen.' },
              { icon: '🧪', title: 'Lab Tested', desc: 'Every batch certified pure. Zero adulteration.' },
              { icon: '❄️', title: 'Cold-Extracted', desc: 'Enzymes and nutrients fully preserved.' },
              { icon: '📦', title: 'Eco Packaging', desc: 'Glass jars. Zero plastic. Fully recyclable.' },
            ].map((f, i) => (
              <div
                key={f.title}
                className="reveal group bg-white rounded-3xl p-5 lg:p-7 border border-[#E8900A]/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#E8900A]/10 transition-all duration-400 text-center"
                style={{ transitionDelay: i * 0.1 + 's' }}
              >
                <div className="text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{f.icon}</div>
                <h3 className="font-serif font-bold text-[#1A1208] text-sm lg:text-lg mb-2">{f.title}</h3>
                <p className="text-[#4A3520]/60 text-xs lg:text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FARM BANNER ── */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <img src={farmHero} alt="Our Farms" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/75 via-[#1A1208]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-between px-[7vw] flex-wrap gap-4">
          <div>
            <h3 className="font-serif font-black text-white text-2xl lg:text-3xl mb-2">
              50+ Partner Farms Across India
            </h3>
            <p className="text-white/55 text-sm">
              Rajasthan · Bihar · Himachal · Telangana · and more
            </p>
          </div>
          <Link to="/about" className="bg-white text-[#1A1208] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#E8900A] hover:text-white transition-all duration-300">
            Our Story →
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#1A1208] overflow-hidden">
        <div className="text-center mb-12 px-[7vw]">
          <h2 className="reveal font-serif font-black text-white" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            What Customers <em className="text-[#F5C842] not-italic">Say</em>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-5 animate-scroll-track w-max">
            {allTestis.map((t, i) => (
              <div key={i} className="w-[280px] lg:w-[320px] flex-shrink-0 bg-white/05 border border-white/08 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-[#F5C842]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E8900A] to-[#F5C842] flex items-center justify-center text-base">
                    {t.emoji}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-white/40">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 px-[7vw] bg-[#FFFDF7]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="reveal font-serif font-black text-[#1A1208] mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Get 10% Off Your First Order 🎉
          </h2>
          <p className="reveal text-[#4A3520]/60 mb-8 text-sm leading-relaxed">
            Subscribe for exclusive deals and seasonal arrivals.
          </p>
          <div className="reveal flex gap-3 max-w-md mx-auto flex-wrap justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-[200px] px-6 py-3.5 rounded-full border border-[#1A1208]/10 text-sm outline-none focus:border-[#E8900A] bg-[#FBF5E6] transition-colors"
            />
            <button className="bg-[#E8900A] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#B8670A] transition-colors shadow-lg shadow-[#E8900A]/25">
              Subscribe →
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}