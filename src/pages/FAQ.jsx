import { useState, useEffect } from 'react'

const faqs = [
  {
    category: "Shipping",
    questions: [
      { q: "Do you ship Pan India?", a: "Yes! We deliver to all major cities and towns across India. Remote areas may take additional time." },
      { q: "How long will it take for my order to be shipped?", a: "Orders are dispatched within 1–3 business days of confirmation. Delivery takes 3–7 working days depending on your location." },
      { q: "Are there delays during holidays or peak seasons?", a: "During festive seasons and holidays, there may be slight delays of 1–2 additional days. We will keep you informed via email." },
      { q: "What if there are delays due to external factors?", a: "Delays due to natural disasters, transport strikes, or other force majeure events are beyond our control. We will notify you and do our best to resolve them quickly." },
    ]
  },
  {
    category: "Orders",
    questions: [
      { q: "How can I contact your customer service team?", a: "You can reach us at beepureorganiqs@gmail.com or through the Contact Us page. We respond within 24 hours on business days." },
      { q: "When will I receive a response from customer service?", a: "We typically respond within 24 hours. For urgent matters, please mention it in your subject line." },
      { q: "Is it possible to change or cancel an order?", a: "Orders can be cancelled within 1 hour of placing. Once shipped, we cannot cancel or modify. Contact us immediately at beepureorganiqs@gmail.com." },
      { q: "What payment methods do you accept?", a: "We accept UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, Wallets, and Cash on Delivery for select pincodes." },
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      { q: "Do you offer returns and refunds?", a: "We accept returns only for damaged, defective, or incorrect products. Return request must be raised within 48 hours of delivery with photos and video proof." },
      { q: "What if I receive a damaged product?", a: "Email us at beepureorganiqs@gmail.com within 48 hours with your order number, clear photos and video of the damage. We will arrange a replacement or refund." },
      { q: "Will customs and taxes be included in the product price?", a: "All prices displayed are inclusive of applicable taxes for domestic orders. International orders may attract customs duties as per the destination country." },
    ]
  },
  {
    category: "Products",
    questions: [
      { q: "Do you offer discounts and promotions?", a: "Yes! Subscribe to our newsletter for exclusive deals. We also run seasonal promotions. Follow us on Instagram and Facebook for updates." },
      { q: "Why does honey look different in color sometimes?", a: "Our honey is 100% natural and raw. Color, texture, and taste may vary slightly between batches due to seasonal and regional differences. This is a sign of authenticity, not a defect." },
      { q: "Why hasn't my tracking status been updated?", a: "Tracking updates may take 24–48 hours after dispatch. If your status hasn't updated in 3 days, please contact us with your order ID." },
    ]
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-[72px] bg-[#FFFDF7] min-h-screen">

      {/* Hero */}
      <section className="py-16 px-[7vw] bg-[#FBF5E6]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#E8900A]/50" /> FAQs <span className="w-8 h-px bg-[#E8900A]/50" />
          </p>
          <h1 className="font-serif font-black text-[#1A1208] mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Frequently Asked <em className="text-[#E8900A] not-italic">Questions</em>
          </h1>
          <p className="text-[#4A3520]/60 text-sm leading-relaxed">
            Everything you need to know about our honey, orders, and policies.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-[7vw]">
        <div className="max-w-[800px] mx-auto">
          {faqs.map((cat, ci) => (
            <div key={cat.category} className="mb-10">
              <h2 className="font-serif font-bold text-[#1A1208] text-xl mb-5 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#E8900A]" />
                {cat.category}
              </h2>
              <div className="flex flex-col gap-3">
                {cat.questions.map((item, qi) => {
                  const key = `${ci}-${qi}`
                  const isOpen = open === key
                  return (
                    <div
                      key={key}
                      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#E8900A]/30 shadow-lg shadow-[#E8900A]/08' : 'border-[#E8900A]/10'}`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                      >
                        <span className="font-semibold text-[#1A1208] text-sm">{item.q}</span>
                        <span className={`text-[#E8900A] text-xl font-light flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-sm text-[#4A3520]/70 leading-relaxed border-t border-[#E8900A]/08 pt-4">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[7vw] bg-[#FBF5E6] text-center">
        <h2 className="font-serif font-black text-[#1A1208] text-2xl mb-3">Still have questions?</h2>
        <p className="text-[#4A3520]/60 text-sm mb-6">Our team is happy to help you.</p>
        <a href="/contact" className="bg-[#E8900A] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#B8670A] transition-colors">
          Contact Us →
        </a>
      </section>
    </main>
  )
}