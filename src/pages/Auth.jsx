import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Auth() {
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (mode === 'signup' && !form.name.trim()) e.name = 'Name is required'
    if (!form.email.includes('@')) e.email = 'Valid email required'
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (mode === 'signup' && form.password !== form.confirm) e.confirm = 'Passwords do not match'
    if (mode === 'signup' && form.phone.length !== 10) e.phone = 'Valid 10-digit phone required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)
    // Will connect to backend later
    setTimeout(() => {
      setLoading(false)
      alert(mode === 'login' ? 'Login coming soon! Backend in progress.' : 'Signup coming soon! Backend in progress.')
    }, 1000)
  }

  return (
    <main className="pt-[72px] min-h-screen bg-[#FFFDF7] flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#E8900A] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#E8900A]/30">
            <span className="font-serif font-black text-white text-xl">बी</span>
          </div>
          <h1 className="font-serif font-black text-[#1A1208] text-2xl">
            {mode === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h1>
          <p className="text-[#4A3520]/55 text-sm mt-1">
            {mode === 'login' ? 'Sign in to your account' : 'Join the Bee Pure family'}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex bg-[#FBF5E6] rounded-full p-1 mb-8">
          <button
            onClick={() => { setMode('login'); setErrors({}) }}
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              mode === 'login' ? 'bg-white text-[#1A1208] shadow-sm' : 'text-[#4A3520]/50'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => { setMode('signup'); setErrors({}) }}
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              mode === 'signup' ? 'bg-white text-[#1A1208] shadow-sm' : 'text-[#4A3520]/50'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 border border-[#E8900A]/10 shadow-xl shadow-black/05">
          <div className="flex flex-col gap-5">

            {/* Name — signup only */}
            {mode === 'signup' && (
              <div>
                <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-5 py-3.5 rounded-2xl border text-sm outline-none transition-colors text-[#1A1208] ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-[#E8900A]/15 focus:border-[#E8900A] bg-[#FFFDF7]'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-5 py-3.5 rounded-2xl border text-sm outline-none transition-colors text-[#1A1208] ${
                  errors.email ? 'border-red-400 bg-red-50' : 'border-[#E8900A]/15 focus:border-[#E8900A] bg-[#FFFDF7]'
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone — signup only */}
            {mode === 'signup' && (
              <div>
                <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full px-5 py-3.5 rounded-2xl border text-sm outline-none transition-colors text-[#1A1208] ${
                    errors.phone ? 'border-red-400 bg-red-50' : 'border-[#E8900A]/15 focus:border-[#E8900A] bg-[#FFFDF7]'
                  }`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            )}

            {/* Password */}
            <div>
              <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                className={`w-full px-5 py-3.5 rounded-2xl border text-sm outline-none transition-colors text-[#1A1208] ${
                  errors.password ? 'border-red-400 bg-red-50' : 'border-[#E8900A]/15 focus:border-[#E8900A] bg-[#FFFDF7]'
                }`}
              />
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password — signup only */}
            {mode === 'signup' && (
              <div>
                <label className="text-xs font-semibold text-[#4A3520]/60 uppercase tracking-wider mb-2 block">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className={`w-full px-5 py-3.5 rounded-2xl border text-sm outline-none transition-colors text-[#1A1208] ${
                    errors.confirm ? 'border-red-400 bg-red-50' : 'border-[#E8900A]/15 focus:border-[#E8900A] bg-[#FFFDF7]'
                  }`}
                />
                {errors.confirm && <p className="text-red-400 text-xs mt-1">{errors.confirm}</p>}
              </div>
            )}

            {/* Forgot password */}
            {mode === 'login' && (
              <div className="text-right -mt-2">
                <button className="text-xs text-[#E8900A] hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-[#E8900A] text-white py-4 rounded-2xl font-semibold text-sm hover:bg-[#B8670A] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8900A]/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Please wait...' : mode === 'login' ? 'Login to Account' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#E8900A]/10" />
              <span className="text-xs text-[#4A3520]/40">or continue with</span>
              <div className="flex-1 h-px bg-[#E8900A]/10" />
            </div>

            {/* Google button placeholder */}
            <button className="w-full border border-[#1A1208]/10 py-3.5 rounded-2xl text-sm font-semibold text-[#1A1208] hover:bg-[#FBF5E6] transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        {/* Switch mode */}
        <p className="text-center text-sm text-[#4A3520]/50 mt-6">
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setErrors({}) }}
            className="text-[#E8900A] font-semibold hover:underline"
          >
            {mode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </p>

        <p className="text-center text-xs text-[#4A3520]/35 mt-4">
          By continuing you agree to our{' '}
          <Link to="/terms" className="text-[#E8900A] hover:underline">Terms & Conditions</Link>
          {' '}and{' '}
          <Link to="/privacy-policy" className="text-[#E8900A] hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </main>
  )
}