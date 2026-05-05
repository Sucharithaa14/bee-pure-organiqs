import { useState, useEffect } from 'react'

const mockOrders = {
  'BPO123456': {
    id: 'BPO123456',
    product: 'Sidr Honey',
    qty: 2,
    amount: 998,
    date: '28 Apr 2025',
    status: 'shipped',
    steps: [
      { label: 'Order Placed', desc: 'Your order was confirmed', date: '28 Apr, 10:30 AM', done: true },
      { label: 'Processing', desc: 'Order is being prepared', date: '28 Apr, 2:00 PM', done: true },
      { label: 'Shipped', desc: 'Out for delivery via Delhivery', date: '29 Apr, 9:00 AM', done: true },
      { label: 'Out for Delivery', desc: 'Arriving today', date: 'Expected 30 Apr', done: false },
      { label: 'Delivered', desc: 'Package delivered', date: '', done: false },
    ]
  },
  'BPO789012': {
    id: 'BPO789012',
    product: 'Tulsi Honey',
    qty: 1,
    amount: 449,
    date: '25 Apr 2025',
    status: 'delivered',
    steps: [
      { label: 'Order Placed', desc: 'Your order was confirmed', date: '25 Apr, 11:00 AM', done: true },
      { label: 'Processing', desc: 'Order is being prepared', date: '25 Apr, 3:00 PM', done: true },
      { label: 'Shipped', desc: 'Shipped via Shiprocket', date: '26 Apr, 8:00 AM', done: true },
      { label: 'Out for Delivery', desc: 'Out for delivery', date: '27 Apr, 9:30 AM', done: true },
      { label: 'Delivered', desc: 'Package delivered successfully', date: '27 Apr, 2:15 PM', done: true },
    ]
  }
}

const statusColors = {
  placed: '#E8900A',
  processing: '#F5C842',
  shipped: '#3B82F6',
  delivered: '#2D5016',
}

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('')
  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleTrack = () => {
    if (!orderId.trim()) {
      setError('Please enter your order ID')
      return
    }
    setLoading(true)
    setError('')
    setOrder(null)

    setTimeout(() => {
      const found = mockOrders[orderId.trim().toUpperCase()]
      if (found) {
        setOrder(found)
      } else {
        setError('Order not found. Please check your order ID and try again.')
      }
      setLoading(false)
    }, 1000)
  }

  const completedSteps = order?.steps.filter(s => s.done).length || 0
  const totalSteps = order?.steps.length || 0
  const progress = order ? (completedSteps / totalSteps) * 100 : 0

  return (
    <main className="pt-[72px] bg-[#FFFDF7] min-h-screen">

      {/* Hero */}
      <section className="py-16 px-[7vw] bg-[#FBF5E6]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#E8900A]/50" /> Track Order <span className="w-8 h-px bg-[#E8900A]/50" />
          </p>
          <h1 className="font-serif font-black text-[#1A1208] mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Where's My <em className="text-[#E8900A] not-italic">Order?</em>
          </h1>
          <p className="text-[#4A3520]/60 text-sm leading-relaxed">
            Enter your order ID to get real-time updates on your delivery.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 px-[7vw]">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-[#E8900A]/10 shadow-xl shadow-black/05">
            <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">
              Order ID
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={orderId}
                onChange={e => { setOrderId(e.target.value); setError('') }}
                onKeyDown={e => e.key === 'Enter' && handleTrack()}
                placeholder="e.g. BPO123456"
                className="flex-1 px-5 py-3.5 rounded-2xl border border-[#E8900A]/15 text-sm outline-none focus:border-[#E8900A] bg-[#FFFDF7] transition-colors text-[#1A1208]"
              />
              <button
                onClick={handleTrack}
                disabled={loading}
                className="bg-[#E8900A] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#B8670A] transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {loading ? '...' : 'Track'}
              </button>
            </div>

            {error && (
              <p className="text-red-400 text-xs mt-3 flex items-center gap-1">
                <span>⚠️</span> {error}
              </p>
            )}

            <p className="text-xs text-[#4A3520]/40 mt-3">
              Your order ID was sent to your email after purchase.
              <br />Try: BPO123456 or BPO789012 for demo
            </p>
          </div>

          {/* Order result */}
          {order && (
            <div className="mt-6 bg-white rounded-3xl border border-[#E8900A]/10 shadow-xl shadow-black/05 overflow-hidden animate-fade-up">

              {/* Order header */}
              <div className="bg-gradient-to-r from-[#1A1208] to-[#3D2B0F] px-7 py-5">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Order ID</div>
                    <div className="font-mono font-bold text-white text-lg">{order.id}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Status</div>
                    <div
                      className="font-bold text-sm capitalize px-3 py-1 rounded-full"
                      style={{
                        background: `${statusColors[order.status]}22`,
                        color: statusColors[order.status],
                        border: `1px solid ${statusColors[order.status]}40`
                      }}
                    >
                      {order.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order details */}
              <div className="px-7 py-5 border-b border-[#E8900A]/08">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-[#4A3520]/50 uppercase tracking-wider mb-1">Product</div>
                    <div className="font-semibold text-[#1A1208] text-sm">{order.product}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#4A3520]/50 uppercase tracking-wider mb-1">Amount</div>
                    <div className="font-bold text-[#E8900A] text-sm">₹{order.amount}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#4A3520]/50 uppercase tracking-wider mb-1">Date</div>
                    <div className="font-semibold text-[#1A1208] text-sm">{order.date}</div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-7 py-5 border-b border-[#E8900A]/08">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#4A3520]/60">Delivery Progress</span>
                  <span className="text-xs font-bold text-[#E8900A]">{completedSteps}/{totalSteps} steps</span>
                </div>
                <div className="h-2 bg-[#FBF5E6] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#E8900A] to-[#F5C842] rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Steps */}
              <div className="px-7 py-6">
                <div className="flex flex-col gap-0">
                  {order.steps.map((step, i) => (
                    <div key={step.label} className="flex gap-4">
                      {/* Line and dot */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{
                            background: step.done ? '#E8900A' : '#FBF5E6',
                            border: step.done ? 'none' : '2px solid #E8900A20'
                          }}
                        >
                          {step.done ? (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#E8900A]/20" />
                          )}
                        </div>
                        {i < order.steps.length - 1 && (
                          <div
                            className="w-0.5 h-10 mt-1"
                            style={{ background: step.done ? '#E8900A40' : '#E8900A10' }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-8">
                        <div className={`font-semibold text-sm ${step.done ? 'text-[#1A1208]' : 'text-[#4A3520]/30'}`}>
                          {step.label}
                        </div>
                        <div className={`text-xs mt-0.5 ${step.done ? 'text-[#4A3520]/55' : 'text-[#4A3520]/25'}`}>
                          {step.desc}
                        </div>
                        {step.date && (
                          <div className={`text-xs mt-1 font-medium ${step.done ? 'text-[#E8900A]' : 'text-[#4A3520]/25'}`}>
                            {step.date}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help */}
              <div className="px-7 pb-6">
                <div className="bg-[#FBF5E6] rounded-2xl px-5 py-4 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="font-semibold text-[#1A1208] text-sm">Need help with your order?</div>
                    <div className="text-xs text-[#4A3520]/55 mt-0.5">Our team responds within 24 hours</div>
                  </div>
                  <a
                    href="mailto:beepureorganiqs@gmail.com"
                    className="bg-[#E8900A] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#B8670A] transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}