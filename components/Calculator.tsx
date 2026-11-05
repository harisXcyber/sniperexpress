"use client";
import { useState, useEffect } from "react";

const TIERS = [
  { min: 50,     max: 500,    sc: 200, oc: 250 },
  { min: 500,    max: 2000,   sc: 175, oc: 220 },
  { min: 2000,   max: 5000,   sc: 160, oc: 200 },
  { min: 5000,   max: 15000,  sc: 145, oc: 185 },
  { min: 15000,  max: 50000,  sc: 120, oc: 165 },
  { min: 50000,  max: 100000, sc: 90,  oc: 140 },
  { min: 100000, max: 100001, sc: 70,  oc: 120 },
];

function getRate(vol: number) {
  for (const t of TIERS) {
    if (vol <= t.max) return t;
  }
  return TIERS[TIERS.length - 1];
}

// Log scale: slider 0-100 maps to 50-100000
function sliderToVol(s: number) {
  const min = Math.log(50), max = Math.log(100000);
  return Math.round(Math.exp(min + (s / 100) * (max - min)));
}
function volToSlider(v: number) {
  const min = Math.log(50), max = Math.log(100000);
  return Math.round(((Math.log(v) - min) / (max - min)) * 100);
}

export default function Calculator() {
  const [slider, setSlider] = useState(20);
  const [vol, setVol] = useState(sliderToVol(20));
  const [currentRate, setCurrentRate] = useState("");
  const [animated, setAnimated] = useState(false);

  const tier = getRate(vol);

  useEffect(() => {
    setVol(sliderToVol(slider));
    setAnimated(true);
    const t = setTimeout(() => setAnimated(false), 300);
    return () => clearTimeout(t);
  }, [slider]);

  const curR = parseFloat(currentRate) || 0;
  const scSaving = curR > tier.sc ? curR - tier.sc : 0;
  const monthlySaving = Math.round(scSaving * vol);

  const tierLabel = (() => {
    if (vol >= 100000) return "🏆 Enterprise";
    if (vol >= 50000) return "🔥 Power";
    if (vol >= 15000) return "⚡ Pro";
    if (vol >= 5000) return "🚀 Growth";
    if (vol >= 2000) return "📦 Business";
    if (vol >= 500) return "🌱 Starter";
    return "🌱 Starter";
  })();

  const pct = Math.round(((200 - tier.sc) / (200 - 70)) * 100);

  function waLink() {
    const msg = `Hi SniperExpress! I ship ~${vol.toLocaleString()} parcels/month and currently pay Rs.${currentRate || "X"} same-city. I'd like to know my rate and onboard.`;
    return `https://wa.me/19782319319?text=${encodeURIComponent(msg)}`;
  }

  return (
    <section id="calculator" className="py-24 px-5 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Rate Calculator</span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">More Volume = Lower Rate</h2>
          <p className="text-gray-500">Slide to your monthly shipment volume. See your rate drop in real time.</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-semibold text-gray-500">Monthly Shipments</span>
              <div className="flex items-center gap-2">
                <span className={`text-3xl font-black text-gray-900 transition-all duration-300 ${animated ? "scale-110 text-orange-500" : ""}`}>
                  {vol >= 1000 ? `${(vol / 1000).toFixed(vol >= 10000 ? 0 : 1)}K` : vol.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-gray-400">parcels/mo</span>
              </div>
            </div>
            <div className="relative">
              <input
                type="range" min={0} max={100} value={slider}
                onChange={(e) => setSlider(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-orange-500"
                style={{ background: `linear-gradient(to right, #ea580c ${slider}%, #e5e7eb ${slider}%)` }}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>50</span><span>500</span><span>2K</span><span>10K</span><span>50K</span><span>100K+</span>
              </div>
            </div>
          </div>

          {/* Rate display */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className={`bg-orange-50 border-2 border-orange-200 rounded-2xl p-5 text-center transition-all duration-300 ${animated ? "scale-105" : ""}`}>
              <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">Same-City</div>
              <div className="text-4xl font-black text-gray-900">Rs.{tier.sc}</div>
              <div className="text-xs text-gray-400 mt-1">per shipment</div>
            </div>
            <div className={`bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-center transition-all duration-300 ${animated ? "scale-105" : ""}`}>
              <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">Outstation</div>
              <div className="text-4xl font-black text-gray-900">Rs.{tier.oc}</div>
              <div className="text-xs text-gray-400 mt-1">per shipment</div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Your Tier</div>
              <div className="text-xl font-black text-white mt-1">{tierLabel}</div>
              <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                <div className="bg-orange-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>

          {/* Saving calculator */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm font-semibold text-gray-600 mb-3">Enter your current same-city rate to see monthly savings:</p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">Rs.</span>
                <input
                  type="number"
                  placeholder="e.g. 250"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 font-bold text-lg focus:border-orange-400 outline-none"
                />
              </div>
              {scSaving > 0 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl px-5 flex flex-col items-center justify-center min-w-[140px]">
                  <div className="text-xs font-bold text-green-600 uppercase">Monthly Saving</div>
                  <div className="text-2xl font-black text-green-700">Rs.{monthlySaving.toLocaleString()}</div>
                </div>
              )}
            </div>
            {scSaving > 0 && (
              <a href={waLink()} target="_blank"
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Lock In This Rate — Rs.{monthlySaving.toLocaleString()} saved/month →
              </a>
            )}
            {!currentRate && (
              <a href={`https://wa.me/19782319319?text=${encodeURIComponent(`Hi! I ship ~${vol.toLocaleString()} parcels/month and want to get started with SniperExpress.`)}`}
                target="_blank"
                className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                Get My Rate on WhatsApp →
              </a>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">Minimum 50 shipments/month to onboard. Rates shown for 1kg standard shipments.</p>
      </div>
    </section>
  );
}
