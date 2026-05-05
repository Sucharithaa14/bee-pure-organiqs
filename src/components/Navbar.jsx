import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'


export default function Navbar() {
  const { totalItems } = useCart()
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-[72px] flex items-center justify-between px-[5vw] ${
        scrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md shadow-sm border-b border-[#E8900A]/10'
          : 'bg-[#FFFDF7]/80 backdrop-blur-sm'
      }`}>

        {/* Logo left */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#E8900A] rounded-xl flex items-center justify-center shadow-md shadow-[#E8900A]/30">
            <span className="font-serif font-black text-white text-base">बी</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif font-black text-[#1A1208] text-base leading-none">Bee Pure</div>
            <div className="text-[9px] text-[#E8900A] font-bold tracking-widest uppercase">OrganiQs</div>
          </div>
        </Link>

        {/* Desktop links center */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-200 relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E8900A] after:rounded-full after:transition-all after:duration-300 ${
                location.pathname === l.to
                  ? 'text-[#E8900A] after:w-full'
                  : 'text-[#3D2B0F]/70 hover:text-[#1A1208] after:w-0 hover:after:w-full'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setSearchOpen(true)}
          className="hidden md:flex items-center text-[#3D2B0F]/70 hover:text-[#1A1208] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <Link to="/login"className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#3D2B0F]/70 hover:text-[#1A1208] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Account
          </Link>

        {/* Cart right */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-[#1A1208] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#E8900A] transition-all duration-300"
          >
            🛒 Cart
            {totalItems > 0 && (
              <span className="bg-[#E8900A] text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`w-5 h-0.5 bg-[#1A1208] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-[#1A1208] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-[#1A1208] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-[72px] left-0 right-0 z-40 bg-[#FFFDF7]/97 backdrop-blur-md border-b border-[#E8900A]/10 transition-all duration-300 ${
        menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="flex flex-col px-[5vw] py-6 gap-5">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-base font-medium text-[#1A1208] hover:text-[#E8900A] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link to="/cart" className="bg-[#E8900A] text-white text-center py-3 rounded-full font-semibold">
            🛒 Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      </div>
      {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}

    </>
  )
}