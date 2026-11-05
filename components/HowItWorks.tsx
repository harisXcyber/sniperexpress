"use client";

const steps = [
  {
    num: "01",
    emoji: "📋",
    title: "Book Your Orders",
    sub: "On our portal",
    body: "Log into app.sniperexpress.com, enter your orders or sync directly from your Shopify / WooCommerce store. Each order gets a Consignment Number (CN) from the courier instantly.",
    color: "orange",
  },
  {
    num: "02",
    emoji: "🖨️",
    title: "Print Two Things",
    sub: "30 seconds of work",
    body: "Print your Loadsheet — one A4 page listing all parcels for today's pickup. Then print CN Labels — small sticker-size slips, one per parcel. Stick each label on its box.",
    color: "blue",
    highlight: true,
  },
  {
    num: "03",
    emoji: "🚚",
    title: "Courier Picks Up",
    sub: "From your location",
    body: "Hand the labeled parcels + loadsheet to the Leopards / Trax rider. That's it. No scanning, no counting — the loadsheet confirms everything. Pickup is done in 2 minutes.",
    color: "green",
  },
  {
    num: "04",
    emoji: "📱",
    title: "Track & Collect COD",
    sub: "Real-time",
    body: "Track every shipment from your dashboard. COD is collected by the courier on delivery and settled to your bank account every week. No chasing, no calls.",
    color: "purple",
  },
];

const DocCard = ({ title, desc, img }: { title: string; desc: string; img: string }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 flex gap-4 items-start hover:shadow-lg transition-shadow">
    <div className="text-4xl">{img}</div>
    <div>
      <div className="font-bold text-gray-900 text-sm">{title}</div>
      <div className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</div>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">The Process</span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">Ship in 4 Steps</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Same process as Leopards direct — just cheaper. If you've used any courier portal before, you already know how this works.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {steps.map((s) => (
            <div key={s.num} className={`rounded-2xl p-7 border-2 ${s.highlight ? "border-orange-200 bg-orange-50" : "border-gray-100 bg-gray-50"} relative overflow-hidden`}>
              <div className="absolute top-4 right-5 text-5xl font-black opacity-5 text-gray-900">{s.num}</div>
              <div className="text-4xl mb-3">{s.emoji}</div>
              <div className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">{s.num} · {s.sub}</div>
              <h3 className="text-gray-900 font-black text-xl mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Document explainer */}
        <div className="bg-gray-900 rounded-3xl p-8">
          <div className="text-center mb-6">
            <div className="text-white font-black text-xl mb-1">What you print — explained simply</div>
            <div className="text-gray-400 text-sm">Two documents. That's all that stands between you and a picked-up parcel.</div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <DocCard
              title="Loadsheet (Booking Sheet / Manifest)"
              desc="One A4 page you hand to the pickup rider. Lists every parcel in today's batch — CN numbers, consignee names, COD amounts, weights. The rider signs it, you keep a copy. It's your proof of handover."
              img="📄"
            />
            <DocCard
              title="CN Label (Consignment Note Label)"
              desc="A small label (usually 4×3 inches) that goes on each individual parcel. Has the barcode, CN number, sender/receiver details, and COD amount. The courier scans this at every step — it's how your parcel gets tracked from pickup to delivery."
              img="🏷️"
            />
          </div>
          <div className="mt-5 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-orange-300 text-sm text-center">
            💡 Our portal auto-generates both. You just click Print — same as Deshi OMS or Oshi's portal.
          </div>
        </div>
      </div>
    </section>
  );
}
