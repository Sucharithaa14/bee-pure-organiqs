import { useEffect } from 'react'
import PolicyLayout from './PolicyLayout'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <PolicyLayout title="Privacy Policy" updated="January 2025">
      <p>At Bee Pure OrganiQs, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information.</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Name, email, phone number, and delivery address when you place an order</li>
        <li>Payment information (processed securely by Razorpay — we never store card details)</li>
        <li>Browser and device information for improving our website</li>
        <li>Email address if you subscribe to our newsletter</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To process and deliver your orders</li>
        <li>To send order confirmation and shipping updates</li>
        <li>To respond to your queries and provide customer support</li>
        <li>To send promotional offers (only if you have subscribed)</li>
        <li>To improve our website and customer experience</li>
      </ul>

      <h2>Data Security</h2>
      <p>We use industry-standard security measures to protect your data. All payment transactions are encrypted and processed through Razorpay, a PCI-DSS compliant payment gateway. We never store your card or UPI details.</p>

      <h2>Sharing Your Information</h2>
      <p>We do not sell or rent your personal information to third parties. We may share your delivery details with our courier partners solely for order fulfillment.</p>

      <h2>Cookies</h2>
      <p>Our website uses cookies to improve your browsing experience. You can disable cookies in your browser settings, though this may affect some website functionality.</p>

      <h2>Your Rights</h2>
      <p>You have the right to access, update, or delete your personal information. To make a request, email us at beepureorganiqs@gmail.com.</p>

      <h2>Contact</h2>
      <p>For privacy related concerns, contact us at beepureorganiqs@gmail.com.</p>
    </PolicyLayout>
  )
}