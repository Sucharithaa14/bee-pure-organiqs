import { useEffect } from 'react'
import PolicyLayout from './PolicyLayout'

export default function CancellationPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <PolicyLayout title="Cancellation Policy" updated="January 2025">
      <h2>Order Cancellation</h2>
      <p>We understand that sometimes plans change. Here is our cancellation policy:</p>

      <h2>When Can You Cancel?</h2>
      <ul>
        <li>Orders can be cancelled within <strong>1 hour</strong> of placing, subject to our approval</li>
        <li>Cancellation requests must be sent to beepureorganiqs@gmail.com immediately with your order number</li>
        <li>Once the order has been processed or shipped, cancellation is not possible</li>
      </ul>

      <h2>How to Cancel</h2>
      <p>Email us immediately at <strong>beepureorganiqs@gmail.com</strong> with:</p>
      <ul>
        <li>Subject: "Order Cancellation — [Your Order Number]"</li>
        <li>Your name and contact number</li>
        <li>Reason for cancellation</li>
      </ul>

      <h2>Cancellation by Bee Pure OrganiQs</h2>
      <p>We reserve the right to cancel orders in the following situations:</p>
      <ul>
        <li>Product is out of stock</li>
        <li>Incorrect pricing or product information</li>
        <li>Suspected fraudulent or suspicious activity</li>
        <li>Delivery not feasible to your location</li>
      </ul>
      <p>In such cases, a full refund will be processed within 5–7 business days.</p>

      <h2>Refund on Cancellation</h2>
      <p>For prepaid orders that are successfully cancelled, the full amount will be refunded to your original payment method within 5–7 business days.</p>
    </PolicyLayout>
  )
}