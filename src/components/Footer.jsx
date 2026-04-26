import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0D0A00] relative overflow-hidden">

      {/* Hex pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zM28 100L0 84V66l28 16 28-16v18L28 100z' fill='none' stroke='%23E8900A' stroke-width='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 px-[7vw] pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/07">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#E8900A] rounded-xl flex items-center justify-center">
                <span className="font-serif font-black text-white">बी</span>
              </div>
              <div>
                <div className="font-serif font-black text-[#F5C842] text-lg leading-tight">Bee Pure</div>
                <div className="text-[10px] text-white/40 tracking-widest uppercase">OrganiQs</div>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Bringing the purest organic honey straight from Indian forests and farms to your table.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: 'FB', color: '#1877F2' },
                { label: 'IG', color: '#E1306C' },
                { label: 'WA', color: '#25D366' },
              ].map(s => (
                <a key={s.label} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-white/50 hover:border-[#E8900A] hover:text-[#E8900A] transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif font-bold text-white mb-5 text-sm tracking-wide">About</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Contact Us', 'Terms & Conditions', "FAQ's"].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-[#F5C842] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-serif font-bold text-white mb-5 text-sm tracking-wide">Policies</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping Policy', 'Returns & Refund', 'Privacy Policy', 'Cancellation Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-[#F5C842] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/shop" className="text-sm text-white/40 hover:text-[#F5C842] transition-colors">Shop</Link></li>
              <li><Link to="/cart" className="text-sm text-white/40 hover:text-[#F5C842] transition-colors">Cart</Link></li>
              {['Best Sellers', 'New Arrivals', 'Track Order'].map(item => (
                <li key={item}><a href="#" className="text-sm text-white/40 hover:text-[#F5C842] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
          <span className="text-xs text-white/25">© 2025 Bee Pure OrganiQs · Shadnagar, Telangana, India</span>
          <div className="flex gap-2 flex-wrap">
            {['UPI', 'Visa', 'Mastercard', 'NetBanking', 'COD'].map(p => (
              <span key={p} className="border border-white/10 text-white/30 text-xs px-3 py-1 rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}