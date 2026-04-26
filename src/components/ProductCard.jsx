import { useCart } from '../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const [wished, setWished] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="block bg-white rounded-3xl overflow-hidden border border-[#E8900A]/10 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#E8900A]/15 transition-all duration-400 group cursor-pointer"
    >
      {/* Image area */}
      <div className="relative h-60 bg-gradient-to-br from-[#FFF8E6] to-[#FFE9A0] flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-contain p-4 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-out drop-shadow-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3 bg-[#E8900A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          {product.badge}
        </div>

        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWished(!wished) }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-200 shadow-md"
        >
          <span className={`transition-transform duration-200 ${wished ? 'scale-125' : 'scale-100'}`}>
            {wished ? '❤️' : '🤍'}
          </span>
        </button>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-serif font-bold text-[#1A1208] mb-2 leading-tight text-sm">
          BEE PURE ORGANIQS {product.name.toUpperCase()}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#F5C842] text-sm">★</span>
            ))}
          </div>
          <span className="text-xs text-[#4A3520]/60">{product.rating} ({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="font-serif text-xl font-black text-[#B8670A]">₹{product.price}</span>
          <span className="text-sm text-[#4A3520]/40 line-through">₹{product.old}</span>
          <span className="text-xs text-[#2D5016] font-semibold bg-[#2D5016]/10 px-2 py-0.5 rounded-full">
            Save {product.save}%
          </span>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
            added
              ? 'bg-[#2D5016] text-white scale-95'
              : 'bg-[#FBF5E6] border-2 border-[#E8900A]/20 text-[#B8670A] hover:bg-[#E8900A] hover:text-white hover:border-[#E8900A] hover:shadow-lg hover:shadow-[#E8900A]/25'
          }`}
        >
          {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
        </button>
      </div>
    </Link>
  )
}