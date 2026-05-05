import { useEffect } from 'react'
import PolicyLayout from './PolicyLayout'

export default function TermsConditions() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PolicyLayout title="Terms & Conditions" updated="January 2025">
      <p>Thank you for choosing Bee Pure OrganiQs. By accessing our website or purchasing our products, you agree to the terms outlined below.</p>

      <h2>1. About Us</h2>
      <p>Bee Pure OrganiQs is a brand founded by agriculture graduates with a mission to bring pure, natural, and chemical-free honey from India's forests and farms to your home. We are a registered sole proprietorship owned by N Saketh Reddy, based in Shadnagar, Telangana.</p>

      <h2>2. Product Description</h2>
      <p>All our products are handcrafted and naturally processed. Due to seasonal variations and regional sources, slight differences in taste, texture, or color may occur. These are not defects — they are signs of authenticity and natural processing.</p>

      <h2>3. Order Acceptance</h2>
      <p>Once you place an order, you will receive a confirmation email. We reserve the right to cancel or modify orders in the event of incorrect pricing, inventory errors, suspicious activity, or force majeure events.</p>

      <h2>4. Shipping & Delivery</h2>
      <p>Orders are dispatched within 1–3 business days. Delivery takes 3–7 working days depending on location. We use reputed courier partners — however, Bee Pure OrganiQs is not liable for delays once the order has been shipped.</p>

      <h2>5. Damaged or Missing Shipments</h2>
      <p>In case of damage or missing items, email us at beepureorganiqs@gmail.com within 48 hours of delivery. Attach clear images of the product and outer packaging. Upon verification, we may issue a replacement or store credit.</p>

      <h2>6. Returns & Exchanges</h2>
      <p>Due to the consumable nature of our products, returns or refunds are not accepted unless the product received is wrong, damaged, defective, or expired within 7 days of delivery. Please share unboxing video/photos as proof.</p>

      <h2>7. Cancellation Policy</h2>
      <p>Orders can be cancelled within 1 hour of placing, subject to our approval. Orders that have already been shipped cannot be cancelled.</p>

      <h2>8. Intellectual Property</h2>
      <p>All designs, logos, packaging, and content are owned by Bee Pure OrganiQs and protected under copyright laws. Unauthorized use is strictly prohibited.</p>

      <h2>9. Legal Jurisdiction</h2>
      <p>All disputes are subject to the jurisdiction of courts in Telangana, India. This agreement is governed in accordance with Indian laws.</p>
    </PolicyLayout>
  )
}