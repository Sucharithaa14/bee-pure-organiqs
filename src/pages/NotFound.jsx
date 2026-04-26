import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] flex items-center justify-center px-[7vw]">
      <div className="text-center max-w-lg">

        {/* Bee */}
        <div className="text-8xl mb-6 animate-float inline-block">🐝</div>

        {/* 404 */}
        <div className="font-serif font-black text-[#E8900A] mb-2" style={{ fontSize: '8rem', lineHeight: 1 }}>
          404
        </div>

        <h1 className="font-serif font-black text-[#1A1208] text-2xl mb-4">
          Oops! This page got lost in the hive.
        </h1>

        <p className="text-[#4A3520]/60 text-sm leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back to the good stuff.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="bg-[#E8900A] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#B8670A] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#E8900A]/25"
          >
            Back to Home
          </Link>
          <Link
            to="/shop"
            className="border border-[#1A1208]/15 text-[#1A1208] px-8 py-3.5 rounded-full font-semibold text-sm hover:border-[#E8900A] hover:text-[#E8900A] transition-all duration-300"
          >
            Shop Honeys →
          </Link>
        </div>
      </div>
    </main>
  )
}