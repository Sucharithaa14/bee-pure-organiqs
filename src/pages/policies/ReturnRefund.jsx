import { useEffect } from 'react'
import PolicyLayout from './PolicyLayout'

export default function ReturnRefund() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <PolicyLayout title="Returns & Refund Policy" updated="January 2025">
      <h2>Return Eligibility</h2>
      <p>We accept returns only in the following cases:</p>
      <ul>
        <li>Product received is damaged or defective</li>
        <li>Wrong product delivered</li>
        <li>Product is expired (within 7 days of delivery)</li>
      </ul>
      <p>The item must be unused, in its original packaging with tags intact. Return requests must be raised within <strong>48 hours of delivery</strong>.</p>

      <h2>How to Request a Return</h2>
      <p>Email us at <strong>beepureorganiqs@gmail.com</strong> with:</p>
      <ul>
        <li>Your Order Number</li>
        <li>Clear photos and unboxing video showing the issue</li>
        <li>Brief description of the problem</li>
      </ul>
      <p>Our team will review and guide you through the next steps within 24 hours.</p>

      <h2>Refunds</h2>
      <p>If your return is approved, we will initiate a refund to your original payment method within 5–7 business days after the returned item is received and inspected.</p>

      <h2>Non-Returnable Items</h2>
      <ul>
        <li>Opened or used products</li>
        <li>Items without original packaging</li>
        <li>Return requests raised after 48 hours of delivery</li>
        <li>Products damaged due to improper handling after delivery</li>
        <li>Minor taste, texture, or color variations (natural characteristics)</li>
      </ul>

      <h2>Cancellation Policy</h2>
      <p>Orders can be cancelled only before dispatch. Once shipped, we cannot cancel or modify the order. Contact us immediately at beepureorganiqs@gmail.com if you need to cancel.</p>

      <h2>Shipping Costs for Returns</h2>
      <p>For damaged or incorrect products, Bee Pure OrganiQs will bear the return shipping costs. For any other cases, customers may be responsible for return shipping charges.</p>
    </PolicyLayout>
  )
}