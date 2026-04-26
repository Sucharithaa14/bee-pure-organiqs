import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { cart, totalPrice, totalItems } = useCart()
  const navigate = useNavigate()
  const delivery = totalPrice >= 499 ? 0 : 49
  const grandTotal = totalPrice + delivery

  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', pincode: ''
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (form.phone.length !== 10) e.phone = 'Valid 10-digit phone required'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (form.pincode.length !== 6) e.pincode = 'Valid 6-digit pincode required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    if (!validate()) return

    const loaded = await loadRazorpay()
    if (!loaded) {
      alert('Razorpay failed to load. Check your internet connection.')
      return
    }

    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: grandTotal * 100, // in paise
      currency: 'INR',
      name: 'Bee Pure Organiqs',
      description: `Order of ${totalItems} item(s)`,
      image: '/images/SIDR.png',
      handler: function (response) {
        // Payment successful
        navigate('/order-success', {
          state: {
            paymentId: response.razorpay_payment_id,
            name: form.name,
            total: grandTotal,
            items: cart
          }
        })
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      notes: {
        address: `${form.address}, ${form.city} - ${form.pincode}`
      },
      theme: {
        color: '#E8900A'
      },
      modal: {
        ondismiss: () => {
          alert('Payment cancelled.')
        }
      }
    }

    const razor = new window.Razorpay(options)
    razor.open()
  }

  if (cart.length === 0) {
    navigate('/shop')
    return null
  }

  return (
    <main className="pt-[72px] min-h-screen bg-[#FFFDF7] px-[7vw] py-12">
      <h1 className="font-serif text-4xl font-black text-[#1A1208] mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-8 border border-[#E8900A]/10">
            <h2 className="font-serif text-xl font-bold text-[#1A1208] mb-6">Delivery Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Saketh Reddy' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'saketh@email.com' },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '9876543210' },
                { label: 'City', name: 'city', type: 'text', placeholder: 'Hyderabad' },
                { label: 'Pincode', name: 'pincode', type: 'text', placeholder: '500001' },
              ].map(field => (
                <div key={field.name}>
                  <label className="text-xs font-medium text-[#4A3520]/70 uppercase tracking-wider mb-1.5 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors ${
                      errors[field.name]
                        ? 'border-red-400 bg-red-50'
                        : 'border-[#E8900A]/20 focus:border-[#E8900A] bg-[#FFFDF7]'
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              {/* Address full width */}
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-[#4A3520]/70 uppercase tracking-wider mb-1.5 block">
                  Full Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="House no, Street, Area..."
                  rows={3}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-none ${
                    errors.address
                      ? 'border-red-400 bg-red-50'
                      : 'border-[#E8900A]/20 focus:border-[#E8900A] bg-[#FFFDF7]'
                  }`}
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-3xl p-7 border border-[#E8900A]/10">
            <h2 className="font-serif text-xl font-bold text-[#1A1208] mb-5">Order Summary</h2>

            <div className="flex flex-col gap-3 mb-5">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.img} alt={item.name} className="w-12 h-12 object-contain rounded-lg bg-[#FBF5E6] p-1" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1A1208] leading-tight">{item.name}</p>
                    <p className="text-xs text-[#4A3520]/60">x{item.qty}</p>
                  </div>
                  <p className="text-sm font-bold text-[#B8670A]">₹{item.price * item.qty}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E8900A]/10 pt-4 flex flex-col gap-2">
              <div className="flex justify-between text-sm text-[#4A3520]/70">
                <span>Subtotal</span><span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm text-[#4A3520]/70">
                <span>Delivery</span>
                <span className={delivery === 0 ? 'text-[#2D5016] font-medium' : ''}>
                  {delivery === 0 ? 'FREE' : `₹${delivery}`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-[#1A1208] text-lg pt-2 border-t border-[#E8900A]/10 mt-1">
                <span>Total</span><span>₹{grandTotal}</span>
              </div>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-full bg-[#E8900A] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#B8670A] transition-all hover:-translate-y-1 shadow-lg shadow-[#E8900A]/30 active:scale-95"
          >
            Pay ₹{grandTotal} →
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-[#4A3520]/50">
            <span>🔒</span>
            <span>Secured by Razorpay · UPI · Cards · COD</span>
          </div>
        </div>
      </div>
    </main>
  )
}