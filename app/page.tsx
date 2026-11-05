"use client";
import Image from "next/image";
import { useState } from "react";

const COURIERS = ["Leopards", "Trax", "Postex", "M&P", "TCS", "Other"];

export default function Home() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", city: "", courier: "", volume: "", rate: "" });
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState<number | null>(null);
  const [calcRate, setCalcRate] = useState("");
  const [calcVol, setCalcVol] = useState("");

  const calcSaving = () => {
    const r = parseFloat(calcRate);
    const v = parseFloat(calcVol);
    if (r > 200 || v <= 0) return null;
    const save = Math.max(0, r - 180);
    return { perShip: save, monthly: Math.round(save * v) };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `https://api.whatsapp.com/send?phone=19782319319&text=${encodeURIComponent(
      `*New SniperExpress Application*\n\nName: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nCity: ${form.city}\nCurrent Courier: ${form.courier}\nMonthly Volume: ${form.volume} shipments\nCurrent Rate: Rs.${form.rate}`
    )}`;
    window.open(wa, "_blank");
    setSubmitted(true);
  };

  const calc = calcSaving();

  return (
    <main className="min-h-screen bg-[#0a0f1e]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0f1e]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/sniper-logo.png" alt="SniperExpress" width={36} height={36} className="rounded-lg" />
            <span className="font-bold text-white text-lg tracking-tight">
              Sniper<span className="text-orange-500">Express</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-400">
            <a href="#how" className="hover:text-white transition-colors">How It Works</a>
            <a href="#rates" className="hover:text-white transition-colors">Rates</a>
            <a href="#calculator" className="hover:text-white transition-colors">Calculator</a>
            <a href="#apply" className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Apply Now
            </a>
          </div>
          <a href="#apply" className="md:hidden bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">Apply</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="crosshair-bg pt-32 pb-24 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-orange-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Now accepting early applications — Pakistan
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Ship Smarter.<br />
            <span className="text-gradient">Pay Less.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Same Leopards pickup. Same tracking. Up to <span className="text-white font-semibold">Rs.85 cheaper</span> per shipment.
            SniperExpress consolidates your volume under a master courier account — you get negotiated rates, we handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all glow-orange">
              Apply for Early Access →
            </a>
            <a href="#calculator" className="border border-white/10 hover:border-orange-500/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all">
              Calculate Your Saving
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-slate-500">
            <div className="flex items-center gap-2"><span className="text-green-400">✓</span> No switching courier</div>
            <div className="flex items-center gap-2"><span className="text-green-400">✓</span> No long-term contract</div>
            <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Same pickup & tracking</div>
            <div className="flex items-center gap-2"><span className="text-green-400">✓</span> Weekly COD settlement</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y border-white/5 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "Rs.200", label: "Same-city rate", sub: "per shipment" },
            { val: "Rs.250", label: "Outstation rate", sub: "per shipment" },
            { val: "4+", label: "Couriers", sub: "Leopards, Trax, Postex, M&P" },
            { val: "Rs.85", label: "Max saving", sub: "per shipment vs list price" },
          ].map((s) => (
            <div key={s.label} className="bg-white/3 border border-white/5 rounded-2xl p-6">
              <div className="text-3xl font-black text-orange-400 mb-1">{s.val}</div>
              <div className="text-white font-semibold text-sm">{s.label}</div>
              <div className="text-slate-500 text-xs mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg">Three steps. Zero disruption to your existing operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Apply & Get Approved", body: "Fill out the application. We review your volume and current courier rates. Approval takes 24 hours.", icon: "🎯" },
              { n: "02", title: "We Map Your Account", body: "Your shipments route through our master account. You get a SniperExpress dashboard to book, track, and manage.", icon: "⚡" },
              { n: "03", title: "Ship & Save", body: "Same Leopards/Trax/Postex pickup. Same tracking. Lower invoice. COD settled weekly directly to your bank.", icon: "💰" },
            ].map((s) => (
              <div key={s.n} className="bg-[#0f172a] border border-white/5 hover:border-orange-500/20 rounded-2xl p-7 transition-all group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="text-orange-500 font-black text-sm mb-2 tracking-widest">{s.n}</div>
                <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className="py-24 px-5 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Our Rates</h2>
            <p className="text-slate-400 text-lg">Flat rates, no hidden charges. The more you ship, the lower it goes.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { zone: "Same-City", rate: "Rs.200", sub: "per shipment", desc: "Same city deliveries via Leopards, Trax, Postex", save: "Up to Rs.85 cheaper than list price" },
              { zone: "Outstation", rate: "Rs.250", sub: "per shipment", desc: "Any city across Pakistan", save: "Up to Rs.100 cheaper than list price" },
            ].map((r) => (
              <div key={r.zone} className="bg-[#0a0f1e] border border-orange-500/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full" />
                <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-3">{r.zone}</div>
                <div className="text-5xl font-black text-white mb-1">{r.rate}</div>
                <div className="text-slate-500 text-sm mb-4">{r.sub}</div>
                <p className="text-slate-400 text-sm mb-4">{r.desc}</p>
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 text-green-400 text-xs font-semibold">
                  ✓ {r.save}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#0a0f1e] border border-white/5 rounded-2xl p-6">
            <div className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-orange-400">📉</span> Volume Pricing — Rates Go Lower As You Grow
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 uppercase text-xs tracking-wider border-b border-white/5">
                    <th className="text-left pb-3 font-semibold">Monthly Volume</th>
                    <th className="text-center pb-3 font-semibold">Same-City</th>
                    <th className="text-center pb-3 font-semibold">Outstation</th>
                    <th className="text-center pb-3 font-semibold">Your Saving vs List</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/3">
                  {[
                    { vol: "0 – 1,000", sc: "Rs.200", oc: "Rs.250", save: "Up to Rs.85/ship" },
                    { vol: "1,001 – 5,000", sc: "Rs.175", oc: "Rs.220", save: "Up to Rs.110/ship" },
                    { vol: "5,001 – 15,000", sc: "Rs.150", oc: "Rs.195", save: "Up to Rs.135/ship" },
                    { vol: "15,001 – 50,000", sc: "Rs.120", oc: "Rs.165", save: "Up to Rs.165/ship" },
                    { vol: "50,000+", sc: "Rs.70", oc: "Rs.120", save: "Up to Rs.215/ship" },
                  ].map((row) => (
                    <tr key={row.vol} className="text-slate-300">
                      <td className="py-3 font-medium">{row.vol}</td>
                      <td className="py-3 text-center text-orange-400 font-bold">{row.sc}</td>
                      <td className="py-3 text-center text-orange-400 font-bold">{row.oc}</td>
                      <td className="py-3 text-center text-green-400 text-xs font-semibold">{row.save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-xs mt-4">* Compared to standard Leopards list price. Rates shown for 1kg shipment, GO service. Rates subject to confirmation at onboarding.</p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Calculate Your Saving</h2>
            <p className="text-slate-400">Enter your current rate and monthly volume to see your savings.</p>
          </div>
          <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-5 mb-6">
              <div>
                <label className="text-slate-400 text-sm font-medium block mb-2">Your current same-city rate (Rs.)</label>
                <input
                  type="number"
                  placeholder="e.g. 250"
                  value={calcRate}
                  onChange={(e) => setCalcRate(e.target.value)}
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-lg font-bold placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-slate-400 text-sm font-medium block mb-2">Monthly shipments</label>
                <input
                  type="number"
                  placeholder="e.g. 2000"
                  value={calcVol}
                  onChange={(e) => setCalcVol(e.target.value)}
                  className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white text-lg font-bold placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors"
                />
              </div>
            </div>
            {calc && calc.perShip > 0 ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                <div className="text-green-400 text-sm font-semibold mb-2">Your estimated monthly saving</div>
                <div className="text-5xl font-black text-white mb-2">Rs.{calc.monthly.toLocaleString()}</div>
                <div className="text-slate-400 text-sm">Rs.{calc.perShip} saved per shipment × {calcVol} shipments/month</div>
                <a href="#apply" className="inline-block mt-5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Lock In This Rate →
                </a>
              </div>
            ) : calcRate && parseFloat(calcRate) <= 200 ? (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 text-center text-blue-400 text-sm">
                Your current rate is already at or below our Rs.200 same-city rate. Apply anyway — outstation savings and volume discounts may still benefit you.
              </div>
            ) : calcRate && calcVol ? (
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5 text-center text-orange-400 text-sm">
                Enter your current rate above Rs.200 to see savings, or apply and we'll analyse your full rate card.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* COURIERS */}
      <section className="py-16 px-5 bg-[#0f172a] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">Courier partners we work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Leopards Courier", "Trax", "Postex", "M&P", "Do Deliver"].map((c) => (
              <div key={c} className="bg-[#0a0f1e] border border-white/5 rounded-xl px-6 py-3 text-white font-semibold text-sm">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Why SniperExpress</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "🎯", title: "Precision Rates", body: "We know exactly what each courier charges at volume. We pass those savings directly to you — no guesswork, no negotiations on your end." },
              { icon: "🔒", title: "Zero Risk Switch", body: "No new courier account. No new pickup arrangements. Your existing Leopards/Trax account stays. We just handle the billing layer." },
              { icon: "📊", title: "Full Transparency", body: "Dashboard showing every shipment, rate, COD status, and settlement. No hidden charges, no surprise deductions." },
              { icon: "⚡", title: "Fast COD Settlement", body: "Weekly bank transfer of your COD — faster than most direct courier accounts. Know exactly when your money lands." },
              { icon: "📦", title: "Multi-Courier", body: "Best rate across Leopards, Trax, Postex, and M&P automatically selected per destination. No manual switching." },
              { icon: "🤝", title: "Dedicated Support", body: "WhatsApp-first support. Your account manager is reachable, not a ticket queue." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 bg-[#0f172a] border border-white/5 rounded-2xl p-6">
                <div className="text-3xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-24 px-5 bg-[#0f172a]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Apply for Early Access</h2>
            <p className="text-slate-400">We onboard merchants manually — every account gets personal attention. Apply and we'll reach out within 24 hours.</p>
          </div>
          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-white font-bold text-2xl mb-3">Application Sent!</h3>
              <p className="text-slate-400">We've received your details via WhatsApp. Our team will contact you within 24 hours to discuss your rates and onboarding.</p>
              <p className="text-slate-500 text-sm mt-4">Questions? WhatsApp us: <a href="https://wa.me/19782319319" className="text-orange-400 hover:underline">+1 (978) 231-9319</a></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0a0f1e] border border-white/5 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-sm font-medium block mb-2">Your Name *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Muhammad Ali"
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-slate-400 text-sm font-medium block mb-2">Business Name *</label>
                  <input required value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="Ali's Store"
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-sm font-medium block mb-2">WhatsApp Number *</label>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="03XX-XXXXXXX"
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-slate-400 text-sm font-medium block mb-2">City</label>
                  <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Lahore"
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-sm font-medium block mb-2">Current Courier</label>
                  <select value={form.courier} onChange={(e) => setForm({ ...form, courier: e.target.value })}
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500/50 outline-none transition-colors">
                    <option value="">Select courier</option>
                    {COURIERS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 text-sm font-medium block mb-2">Monthly Shipments</label>
                  <input value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })}
                    placeholder="e.g. 2000"
                    type="number"
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-sm font-medium block mb-2">Current same-city rate (Rs.)</label>
                <input value={form.rate} onChange={(e) => setForm({ ...form, rate: e.target.value })}
                  placeholder="e.g. 250"
                  type="number"
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-orange-500/50 outline-none transition-colors" />
              </div>
              <button type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl text-lg transition-all glow-orange">
                Submit Application →
              </button>
              <p className="text-slate-600 text-xs text-center">
                This opens WhatsApp to send us your details. We'll respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/sniper-logo.png" alt="SniperExpress" width={28} height={28} className="rounded-md opacity-70" />
            <span className="text-slate-500 text-sm">Sniper<span className="text-orange-500/70">Express</span> — Pakistan</span>
          </div>
          <div className="text-slate-600 text-xs">Precision logistics. Better rates. Same couriers.</div>
          <a href="https://wa.me/19782319319" className="text-slate-500 hover:text-orange-400 text-sm transition-colors">
            WhatsApp: +1 (978) 231-9319
          </a>
        </div>
      </footer>

    </main>
  );
}
