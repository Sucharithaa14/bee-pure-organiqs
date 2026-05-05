import { useEffect } from 'react'
import PolicyLayout from './PolicyLayout'

export default function PaymentPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <PolicyLayout title="Payment Policy" updated="January 2025">
      <h2>Accepted Payment Methods</h2>
      <p>We accept the following secure payment methods:</p>
      <ul>
        <li><strong>UPI</strong> — Google Pay, PhonePe, Paytm, BHIM</li>
        <li><strong>Cards</strong> — Visa, Mastercard, RuPay (Debit & Credit)</li>
        <li><strong>Net Banking</strong> — All major Indian banks</li>
        <li><strong>Wallets</strong> — Paytm, Amazon Pay</li>
        <li><strong>Cash on Delivery (COD)</strong> — Available for select pin codes on orders under ₹2,000</li>
      </ul>

      <h2>Payment Security</h2>
      <p>All online payments are processed through <strong>Razorpay</strong> — a PCI-DSS compliant, RBI-authorized payment gateway trusted by 8 million+ businesses. We never store your card or UPI details.</p>

      <h2>Payment Confirmation</h2>
      <p>You will receive a confirmation email and SMS once your payment is successful. For COD orders, confirmation is sent after order verification by our team.</p>

      <h2>Failed or Duplicate Transactions</h2>
      <p>If your payment fails or you are charged twice, please contact your bank first to verify. Then reach out to us at beepureorganiqs@gmail.com with your transaction details. Refunds for duplicate or faulty payments are processed within 7–10 business days.</p>

      <h2>COD Policy</h2>
      <ul>
        <li>COD is available for orders under ₹2,000 at select pin codes</li>
        <li>Please ensure someone is available to receive and pay for the order</li>
        <li>Repeated COD rejections may lead to COD option being disabled for your account</li>
      </ul>

      <h2>Refunds</h2>
      <p>Refunds are issued only for cancelled orders (before shipment) or verified failed/duplicate transactions. Refunds are processed within 5–7 business days to the original payment method.</p>
    </PolicyLayout>
  )
}