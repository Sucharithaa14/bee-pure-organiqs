import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../data/products'

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered)
  }, [query])

  const handleSelect = (product) => {
    navigate(`/product/${product.id}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-5"
      onClick={onClose}>
      <div
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E8900A]/10">
          <svg className="w-5 h-5 text-[#E8900A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for honey..."
            className="flex-1 text-sm text-[#1A1208] outline-none placeholder:text-[#4A3520]/40"
          />
          <button onClick={onClose} className="text-[#4A3520]/40 hover:text-[#1A1208] transition-colors text-xl font-light">
            ✕
          </button>
        </div>

        {/* Results */}
        {query.trim().length >= 2 && (
          <div className="max-h-96 overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-sm text-[#4A3520]/50">No results found for "{query}"</p>
                <p className="text-xs text-[#4A3520]/35 mt-1">Try searching for Sidr, Tulsi, Forest...</p>
              </div>
            ) : (
              <div className="p-3">
                <p className="text-xs text-[#4A3520]/40 uppercase tracking-wider px-3 mb-2">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </p>
                {results.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(p)}
                    className="w-full flex items-center gap-4 px-3 py-3 rounded-2xl hover:bg-[#FBF5E6] transition-colors text-left"
                  >
                    <img src={p.img} alt={p.name} className="w-12 h-12 object-contain rounded-xl bg-[#FBF5E6] p-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[#1A1208] text-sm">{p.name}</div>
                      <div className="text-xs text-[#4A3520]/50 capitalize mt-0.5">{p.category} honey</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-[#E8900A] text-sm">₹{p.price}</div>
                      <div className="text-xs text-[#4A3520]/40 line-through">₹{p.old}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Popular searches */}
        {query.trim().length < 2 && (
          <div className="p-5">
            <p className="text-xs text-[#4A3520]/40 uppercase tracking-wider mb-3">Popular Searches</p>
            <div className="flex gap-2 flex-wrap">
              {['Sidr', 'Tulsi', 'Wild Forest', 'Ajwain', 'Litchi', 'Himalayan'].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 bg-[#FBF5E6] rounded-full text-xs font-medium text-[#B8670A] hover:bg-[#E8900A] hover:text-white transition-all duration-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}