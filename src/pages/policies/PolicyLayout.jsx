export default function PolicyLayout({ title, updated, children }) {
  return (
    <main className="pt-[72px] bg-[#FFFDF7] min-h-screen">
      <section className="py-12 px-[7vw] bg-[#FBF5E6] border-b border-[#E8900A]/10">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#E8900A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="font-serif font-black text-[#1A1208] mb-2" style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>
            {title}
          </h1>
          <p className="text-[#4A3520]/50 text-xs">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-12 px-[7vw]">
        <div className="max-w-[800px] mx-auto prose-content">
          {children}
        </div>
      </section>
    </main>
  )
}