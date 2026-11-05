const points = [
  {
    icon: "💸",
    title: "Lower rates, guaranteed",
    body: "We negotiate bulk volume with Leopards so you don't have to. You get corporate-tier pricing from day one.",
  },
  {
    icon: "🏪",
    title: "No lock-in. No contract.",
    body: "Ship what you want, when you want. 7 days notice to leave. We compete on value, not contracts.",
  },
  {
    icon: "🔁",
    title: "Sync your store",
    body: "Connect Shopify or WooCommerce to auto-import orders. Print loadsheet + labels in 2 clicks. Same as Deshi / Oshi.",
  },
  {
    icon: "📊",
    title: "One dashboard",
    body: "Track every parcel across Leopards, Trax, and Postex from one screen. See COD balance in real time.",
  },
  {
    icon: "💳",
    title: "Weekly COD settlement",
    body: "Direct bank transfer every Monday. No waiting 3 weeks for your own money.",
  },
  {
    icon: "📈",
    title: "Rates drop as you grow",
    body: "No manual renegotiation. Your rate auto-adjusts every month based on your actual volume. Grow → save more.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Why SniperExpress</span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">Built for Pakistani eCommerce</h2>
          <p className="text-gray-500 max-w-xl mx-auto">We are merchants ourselves. We know the pain. Here's what we fixed.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {points.map((p) => (
            <div key={p.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-orange-700 transition-colors">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-10 bg-gray-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-white">
            <div className="text-2xl font-black">Rs.39M+ in monthly shipments</div>
            <div className="text-gray-400 text-sm mt-1">Identified across 120+ merchants currently paying above our rate. That's the market we're here to win.</div>
          </div>
          <a
            href={`https://wa.me/19782319319?text=${encodeURIComponent("Hi SniperExpress, I'm interested in getting started. What rate can you offer me?")}`}
            target="_blank"
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Claim Your Rate →
          </a>
        </div>
      </div>
    </section>
  );
}
