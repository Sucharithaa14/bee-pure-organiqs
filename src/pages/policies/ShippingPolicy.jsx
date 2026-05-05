import { useEffect } from 'react'
import PolicyLayout from './PolicyLayout'

export default function ShippingPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <PolicyLayout title="Shipping Policy" updated="January 2025">
      <h2>Pan India Delivery</h2>
      <p>We deliver to all major cities, towns, and most pin codes across India. For remote areas, delivery may take additional time but we ensure your order reaches you safely.</p>

      <h2>Dispatch Time</h2>
      <p>All orders are dispatched within 1–3 business days of payment confirmation. You will receive a tracking link via email once your order is shipped.</p>

      <h2>Delivery Time</h2>
      <p>Standard delivery takes 3–7 working days depending on your location. Metro cities typically receive orders faster — within 3–4 days.</p>

      <h2>Free Shipping</h2>
      <p>We offer free shipping on all orders above ₹499. Orders below ₹499 may attract a nominal delivery charge.</p>

      <h2>Holiday & Peak Season Delays</h2>
      <p>During festive seasons, national holidays, or peak periods, there may be delays of 1–2 additional working days. We will communicate any significant delays via email.</p>

      <h2>External Delays</h2>
      <p>Delays due to natural disasters, transport strikes, bad weather, or other force majeure events are beyond our control. We will notify you and work to resolve them as quickly as possible.</p>

      <h2>Tracking Your Order</h2>
      <p>Once shipped, you will receive an email with your tracking number and courier partner details. You can track your order directly on the courier's website.</p>

      <h2>Contact Us</h2>
      <p>For shipping related queries, email us at beepureorganiqs@gmail.com with your order ID.</p>
    </PolicyLayout>
  )
}