import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cart, removeFromCart, updateQty, totalPrice, totalItems } = useCart()

  if (cart.length === 0) return (
    <main className="pt-[72px] min-h-screen bg-[#FFFDF7] flex flex-col items-center justify-center gap-6">
      <span className="text-8xl">🍯</span>
      <h2 className="font-serif text-3xl font-black text-[#1A1208]">Your cart is empty</h2>
      <Link to="/shop" className="bg-[#E8900A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#B8670A] transition-colors">
        Shop Now
      </Link>
    </main>
  )

  return (
    <main className="pt-[72px] min-h-screen bg-[#FFFDF7] px-[7vw] py-12">
      <h1 className="font-serif text-4xl font-black text-[#1A1208] mb-10">Your Cart 🛒</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-5 flex items-center gap-5 border border-[#E8900A]/10">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#1A1208]">{item.name}</h3>
                <p className="text-[#B8670A] font-bold mt-1">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 rounded-full bg-[#FBF5E6] text-[#B8670A] font-bold hover:bg-[#E8900A] hover:text-white transition-colors">-</button>
                <span className="font-bold w-4 text-center">{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-full bg-[#FBF5E6] text-[#B8670A] font-bold hover:bg-[#E8900A] hover:text-white transition-colors">+</button>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#1A1208]">₹{item.price * item.qty}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-600 mt-1 transition-colors">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl p-7 border border-[#E8900A]/10 h-fit sticky top-24">
          <h2 className="font-serif text-xl font-bold text-[#1A1208] mb-6">Order Summary</h2>
          <div className="flex justify-between text-sm text-[#4A3520]/70 mb-3">
            <span>Items ({totalItems})</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-[#4A3520]/70 mb-3">
            <span>Delivery</span>
            <span className="text-[#2D5016] font-medium">{totalPrice >= 499 ? 'FREE' : '₹49'}</span>
          </div>
          <div className="border-t border-[#E8900A]/10 pt-4 mt-4 flex justify-between font-bold text-[#1A1208]">
            <span>Total</span>
            <span>₹{totalPrice >= 499 ? totalPrice : totalPrice + 49}</span>
          </div>
          {totalPrice < 499 && (
            <p className="text-xs text-[#E8900A] mt-3">Add ₹{499 - totalPrice} more for free delivery!</p>
          )}
          <Link to="/checkout" className="block w-full bg-[#E8900A] text-white text-center py-3.5 rounded-full font-medium mt-6 hover:bg-[#B8670A] transition-colors">
            Proceed to Checkout →
          </Link>
          <Link to="/shop" className="block w-full text-center text-sm text-[#4A3520]/60 mt-3 hover:text-[#E8900A] transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  )
}