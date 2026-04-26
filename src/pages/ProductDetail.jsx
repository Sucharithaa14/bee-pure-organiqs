import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('description')

  const product = products.find(p => p.id === parseInt(id))
  const related = products.filter(p => p.id !== parseInt(id)).slice(0, 4)

  if (!product) {
    return (
      <main className="pt-[72px] min-h-screen bg-[#FFFDF7] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍯</div>
          <h2 className="font-serif font-black text-[#1A1208] text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="bg-[#E8900A] text-white px-8 py-3 rounded-full font-semibold">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const tabs = [
    {
      id: 'description',
      label: 'Description',
      content: product.description + ' Our honey is sourced directly from trusted beekeepers and cold-extracted to preserve all natural enzymes, pollen, and antioxidants. Every batch is lab tested for purity before it reaches you.'
    },
    {
      id: 'benefits',
      label: 'Benefits',
      content: null
    },
    {
      id: 'usage',
      label: 'How to Use',
      content: null
    },
  ]

  const benefits = [
    'Rich in natural antioxidants',
    'Boosts immunity naturally',
    'Anti-inflammatory properties',
    'Natural energy booster',
    'Supports digestive health',
    'No added sugar or preservatives',
  ]

  const usageTips = [
    { tip: 'Morning ritual', desc: 'Take 1 teaspoon on empty stomach for best results.' },
    { tip: 'With warm water', desc: 'Mix in warm (not hot) water to preserve enzymes.' },
    { tip: 'As a sweetener', desc: 'Replace sugar in tea, coffee, or cooking.' },
    { tip: 'On toast', desc: 'Drizzle over toast or roti for a healthy breakfast.' },
  ]

  return (
    <main className="pt-[72px] bg-[#FFFDF7] min-h-screen">

      {/* Breadcrumb */}
      <div className="px-[7vw] py-4 border-b border-[#E8900A]/08">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-xs text-[#4A3520]/50">
          <Link to="/" className="hover:text-[#E8900A] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#E8900A] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1A1208] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <section className="py-16 px-[7vw]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Image */}
          <div className="sticky top-24">
            <div className="relative bg-gradient-to-br from-[#FFF8E6] to-[#FFE9A0] rounded-3xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl shadow-[#E8900A]/15">
              <img
                src={product.img}
                alt={product.name}
                className="w-3/4 h-3/4 object-contain hover:scale-105 transition-transform duration-500"
              />

              {/* Badge */}
              <div className={`absolute top-5 left-5 text-white text-xs font-bold px-4 py-2 rounded-full ${
                product.badge === 'Bestseller' ? 'bg-[#2D5016]' : 'bg-[#E8900A]'
              }`}>
                {product.badge}
              </div>

              {/* Save badge */}
              <div className="absolute top-5 right-5 bg-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-xs text-[#4A3520]/50 uppercase tracking-wider">Save</div>
                <div className="font-black text-[#E8900A] font-serif">{product.save}%</div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { icon: '🌿', text: 'Raw & Pure' },
                { icon: '🧪', text: 'Lab Tested' },
                { icon: '🚚', text: 'Free Delivery' },
              ].map(b => (
                <div key={b.text} className="bg-[#FBF5E6] rounded-2xl p-3 text-center border border-[#E8900A]/08">
                  <div className="text-xl mb-1">{b.icon}</div>
                  <div className="text-xs font-semibold text-[#4A3520]/70">{b.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Details */}
          <div>
            {/* Category */}
            <div className="inline-flex items-center gap-2 bg-[#E8900A]/08 border border-[#E8900A]/15 px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8900A]" />
              <span className="text-[#B8670A] text-xs font-semibold uppercase tracking-wider capitalize">
                {product.category} Honey
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif font-black text-[#1A1208] leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Bee Pure OrganiQs<br />
              <em className="text-[#E8900A] not-italic">{product.name}</em>
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-[#F5C842]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-[#1A1208]">{product.rating}</span>
              <span className="text-sm text-[#4A3520]/50">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-[#E8900A]/10">
              <span className="font-serif font-black text-[#1A1208]" style={{ fontSize: '2.5rem' }}>
                ₹{product.price}
              </span>
              <span className="text-lg text-[#4A3520]/40 line-through">₹{product.old}</span>
              <span className="bg-[#2D5016]/10 text-[#2D5016] text-sm font-bold px-3 py-1 rounded-full">
                Save {product.save}%
              </span>
            </div>

            {/* Description short */}
            <p className="text-[#4A3520]/65 leading-relaxed text-sm mb-8">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-[#1A1208]">Quantity</span>
              <div className="flex items-center gap-3 bg-[#FBF5E6] rounded-full px-2 py-1 border border-[#E8900A]/15">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-[#B8670A] hover:bg-[#E8900A] hover:text-white transition-all"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-[#1A1208]">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-[#B8670A] hover:bg-[#E8900A] hover:text-white transition-all"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-[#4A3520]/50">
                Total: <strong className="text-[#E8900A]">₹{product.price * qty}</strong>
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <button
                onClick={handleAddToCart}
                className={`flex-1 min-w-[180px] py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                  added
                    ? 'bg-[#2D5016] text-white'
                    : 'bg-[#E8900A] text-white hover:bg-[#B8670A] hover:-translate-y-0.5 shadow-lg shadow-[#E8900A]/25'
                }`}
              >
                {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
              </button>
              <Link
                to="/cart"
                className="flex-1 min-w-[180px] py-4 rounded-full font-semibold text-sm border-2 border-[#1A1208]/15 text-[#1A1208] hover:border-[#E8900A] hover:text-[#E8900A] transition-all duration-300 text-center"
              >
                View Cart →
              </Link>
            </div>

            {/* Free delivery notice */}
            {product.price * qty >= 499 ? (
              <div className="flex items-center gap-2 bg-[#2D5016]/08 border border-[#2D5016]/15 rounded-2xl px-4 py-3 mb-8">
                <span>🚚</span>
                <span className="text-sm text-[#2D5016] font-semibold">
                  Free delivery included!
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 bg-[#FBF5E6] border border-[#E8900A]/10 rounded-2xl px-4 py-3 mb-8">
                <span>🚚</span>
                <span className="text-sm text-[#4A3520]/60">
                  Add ₹{499 - product.price * qty} more for free delivery
                </span>
              </div>
            )}

            {/* Tabs */}
            <div>
              <div className="flex gap-0 border-b border-[#E8900A]/10 mb-6">
                {tabs.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`px-5 py-3 text-sm font-semibold transition-all duration-200 border-b-2 -mb-px ${
                      activeTab === t.id
                        ? 'border-[#E8900A] text-[#E8900A]'
                        : 'border-transparent text-[#4A3520]/50 hover:text-[#1A1208]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {activeTab === 'description' && (
                <p className="text-sm text-[#4A3520]/65 leading-relaxed">
                  {tabs[0].content}
                </p>
              )}

              {activeTab === 'benefits' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map(b => (
                    <div key={b} className="flex items-center gap-3 bg-[#FBF5E6] rounded-2xl px-4 py-3">
                      <div className="w-5 h-5 rounded-full bg-[#2D5016] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#1A1208] font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="flex flex-col gap-4">
                  {usageTips.map((u, i) => (
                    <div key={u.tip} className="flex gap-4 items-start">
                      <div className="w-7 h-7 rounded-full bg-[#E8900A] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-[#1A1208] text-sm mb-0.5">{u.tip}</div>
                        <div className="text-sm text-[#4A3520]/60">{u.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-20 px-[7vw] bg-[#FBF5E6]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif font-black text-[#1A1208] mb-10" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>
            You Might Also <em className="text-[#E8900A] not-italic">Like</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}