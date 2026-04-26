import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function OrderSuccess() {
  const { state } = useLocation()
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [])

  if (!state) {
    return (
      <main className="pt-[72px] min-h-screen bg-[#FFFDF7] flex flex-col items-center justify-center">
        <Link to="/" className="bg-[#E8900A] text-white px-8 py-3 rounded-full">Go Home</Link>
      </main>
    )
  }

  return (
    <main className="pt-[72px] min-h-screen bg-[#FFFDF7] flex flex-col items-center justify-center px-[7vw] py-16">
      <div className="bg-white rounded-3xl p-10 border border-[#E8900A]/10 max-w-lg w-full text-center shadow-xl shadow-[#E8900A]/10">
        <div className="text-7xl mb-6 animate-bounce">🎉</div>
        <h1 className="font-serif text-3xl font-black text-[#1A1208] mb-2">Order Placed!</h1>
        <p className="text-[#4A3520]/70 mb-6">Thank you <strong>{state.name}</strong>! Your honey is on its way.</p>

        <div className="bg-[#FBF5E6] rounded-2xl p-5 mb-6 text-left">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[#4A3520]/60">Payment ID</span>
            <span className="font-mono text-xs text-[#B8670A] font-medium">{state.paymentId}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#4A3520]/60">Amount Paid</span>
            <span className="font-bold text-[#1A1208]">₹{state.total}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/shop" className="bg-[#E8900A] text-white py-3 rounded-full font-medium hover:bg-[#B8670A] transition-colors">
            Continue Shopping 🍯
          </Link>
          <Link to="/" className="text-sm text-[#4A3520]/60 hover:text-[#E8900A] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}