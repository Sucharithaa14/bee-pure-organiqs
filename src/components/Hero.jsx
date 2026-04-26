import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import honeyHero from '../assets/honey_hero.png'

export default function Hero() {
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
    <section className="relative min-h-screen bg-[#FFFDF7] flex items-center overflow-hidden pt-[72px]">

      {/* Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full bg-gradient-to-l from-[#FFF3C4]/60 to-transparent pointer-events-none" />

      {/* ── BEE — shows on all screens ── */}
      <div className="absolute z-30 pointer-events-none"
        style={{ top: 85, left: 12 }}>
        <div className="animate-fly-in">
          <div className="animate-bee-hover relative">
            {/* Bee image */}
            <img
              src="/images/image2.png"
              alt="Bee"
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain drop-shadow-xl"
            />
            {/* Speech bubble */}
            <div className="animate-bubble-pop absolute top-0"
              style={{ left: '100%', marginLeft: 8 }}>
              <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-xl border border-[#E8900A]/15 whitespace-nowrap relative">
                <div className="absolute -left-2 top-3 w-0 h-0"
                  style={{
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent',
                    borderRight: '8px solid white',
                  }}
                />
                <p className="text-xs font-bold text-[#1A1208]">Welcome! 🍯</p>
                <p className="text-[10px] text-[#4A3520]/60">Pure honey awaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 items-center px-5 sm:px-8 lg:px-[7vw] py-10 lg:py-16">

        {/* LEFT */}
        <div className="relative z-10 mt-16 sm:mt-20 lg:mt-0 text-center lg:text-left">

          <div className="animate-fade-up inline-flex items-center gap-2 bg-[#E8900A]/10 border border-[#E8900A]/20 px-4 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8900A] animate-pulse" />
            <span className="text-[#B8670A] text-xs font-semibold tracking-[0.15em] uppercase">
              Raw · Organic · Unfiltered
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 font-serif font-black text-[#1A1208] leading-[1.05] mb-3"
            style={{ fontSize: 'clamp(2.2rem,5.5vw,5.5rem)' }}>
            We Produce<br />
            Only{' '}
            <span className="text-[#E8900A] relative inline-block">
              Natural
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="6" viewBox="0 0 300 6">
                <path d="M0 5 Q75 0 150 3 Q225 6 300 1" stroke="#F5C842" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />Honey
          </h1>

          <p className="animate-fade-up delay-100 text-[#E8900A] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Pure · Natural · Golden Goodness
          </p>

          <p className="animate-fade-up delay-200 text-[#4A3520]/65 leading-relaxed mb-7 text-sm max-w-[400px] mx-auto lg:mx-0">
            Experience honey the way nature intended — unprocessed, unfiltered, and overflowing with rich taste and wellness.
          </p>

          <div className="animate-fade-up delay-300 flex gap-3 mb-8 flex-wrap justify-center lg:justify-start">
            <Link to="/shop" className="bg-[#E8900A] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#B8670A] transition-all duration-300 shadow-lg shadow-[#E8900A]/25">
              Shop Now →
            </Link>
            <Link to="/about" className="border border-[#1A1208]/15 text-[#1A1208] px-7 py-3.5 rounded-full font-semibold text-sm hover:border-[#E8900A] hover:text-[#E8900A] transition-all duration-300">
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-300 grid grid-cols-3 divide-x divide-[#1A1208]/08 pt-6 border-t border-[#1A1208]/08 max-w-[280px] mx-auto lg:mx-0">
            {[['7+', 'Varieties'], ['100%', 'Organic'], ['5K+', 'Customers']].map(([n, l], i) => (
              <div key={l} className={`text-center lg:text-left ${i === 0 ? 'pr-4' : 'px-4'}`}>
                <div className="font-serif text-xl font-black text-[#B8670A]">{n}</div>
                <div className="text-[10px] text-[#4A3520]/50 uppercase tracking-wider mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — desktop only */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#E8900A]/20 animate-scale-in">
            <img
              src="/images/image.png"
              alt="Pure Natural Honey"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-xs text-[#4A3520]/50 uppercase tracking-wider mb-1">Certified</div>
              <div className="font-serif font-bold text-[#1A1208]">100% Organic Honey</div>
            </div>
            <div className="absolute top-5 right-5 bg-[#E8900A] rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-xs text-white/70 uppercase tracking-wider mb-1">Rating</div>
              <div className="font-bold text-white flex items-center gap-1">
                <span className="text-[#F5C842]">★</span> 4.8 / 5
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { img: '/images/SIDR.png', name: 'Sidr' },
              { img: '/images/TULSI.png', name: 'Tulsi' },
              { img: '/images/WILDFOREST.png', name: 'Wild Forest' },
              { img: '/images/AJWAIN.png', name: 'Ajwain' },
            ].map((p, i) => (
              <Link
                key={p.name}
                to="/shop"
                className="bg-white rounded-2xl p-3 flex flex-col items-center gap-2 border border-[#E8900A]/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <img src={p.img} alt={p.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] font-semibold text-[#1A1208] text-center">{p.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile only honey image */}
        <div className="block lg:hidden relative rounded-2xl overflow-hidden shadow-xl shadow-[#E8900A]/15">
          <img
            src={honeyHero}
            alt="Pure Natural Honey"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 bg-white/90 rounded-xl px-3 py-1.5">
            <div className="text-xs font-bold text-[#1A1208]">100% Organic Certified</div>
          </div>
          <div className="absolute top-3 right-3 bg-[#E8900A] rounded-xl px-3 py-1.5">
            <div className="text-xs font-bold text-white">★ 4.8/5</div>
          </div>
        </div>

      </div>
    </section>
  )
}