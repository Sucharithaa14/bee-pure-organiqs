import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import FAQ from './pages/FAQ'
import TermsConditions from './pages/policies/TermsConditions'
import ShippingPolicy from './pages/policies/ShippingPolicy'
import ReturnRefund from './pages/policies/ReturnRefund'
import PrivacyPolicy from './pages/policies/PrivacyPolicy'
import PaymentPolicy from './pages/policies/PaymentPolicy'
import CancellationPolicy from './pages/policies/CancellationPolicy'
import Auth from './pages/Auth'
import TrackOrder from './pages/TrackOrder'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/returns" element={<ReturnRefund />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/track-order" element={<TrackOrder />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App