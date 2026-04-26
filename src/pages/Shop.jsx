import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const categories = ['all', 'floral', 'herb', 'forest']

export default function Shop() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <main className="pt-[72px] min-h-screen bg-[#FFFDF7]">
      <div className="py-16 px-[7vw]">
        <div className="mb-10">
          <p className="text-[#E8900A] text-xs font-medium tracking-widest uppercase mb-3">Our Collection</p>
          <h1 className="font-serif text-4xl font-black text-[#1A1208] mb-6">
            All <em className="text-[#E8900A] not-italic">Honeys</em>
          </h1>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  active === cat
                    ? 'bg-[#E8900A] text-white'
                    : 'border border-[#E8900A]/30 text-[#4A3520] hover:bg-[#E8900A] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile horizontal scroll */}
<div className="flex lg:hidden gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
  {filtered.map(p => (
    <div key={p.id} className="flex-shrink-0 w-[220px] snap-start">
      <ProductCard product={p} />
    </div>
  ))}
</div>

{/* Desktop grid */}
<div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
  {filtered.map(p => <ProductCard key={p.id} product={p} />)}
</div>
      </div>
    </main>
  )
}