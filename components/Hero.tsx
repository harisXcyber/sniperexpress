"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const truckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = truckRef.current;
    if (!el) return;
    // Drive the truck toward the viewer using CSS3D perspective scale
    el.style.transform = "perspective(600px) translateZ(-300px) scale(0.4)";
    el.style.opacity = "0";
    requestAnimationFrame(() => {
      el.style.transition = "transform 1.6s cubic-bezier(0.16,1,0.3,1), opacity 0.8s ease";
      el.style.transform = "perspective(600px) translateZ(0px) scale(1)";
      el.style.opacity = "1";
    });
  }, []);

  function waApply() {
    return `https://wa.me/19782319319?text=${encodeURIComponent("Hi! I want to get started with SniperExpress. Can you tell me my rate based on my volume?")}`;
  }
  function waNegotiate() {
    return `https://wa.me/19782319319?text=${encodeURIComponent("Hi SniperExpress, I ship high volume and want to negotiate a custom rate. Let's talk.")}`;
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-5 pt-24 pb-16">
      {/* Background grid */}
      <div className="absolute inset-0 crosshair-bg opacity-40 pointer-events-none" />

      {/* Orange accent blob */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-orange-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="SniperExpress" width={180} height={45} priority />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <a href="#calculator" className="hover:text-orange-500 transition-colors">Rates</a>
          <a href="#how" className="hover:text-orange-500 transition-colors">How it Works</a>
          <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
          <a href={waApply()} target="_blank"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl transition-colors">
            Get Started →
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Pakistan's Smartest Courier Rates
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none mb-4">
          Ship More.<br />
          <span className="text-gradient">Pay Less.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10">
          Same Leopards. Same riders. Lower bills. We negotiate bulk rates so you don't have to.
          <strong className="text-gray-700"> Start at Rs.200/shipment</strong> — drop to <strong className="text-gray-700">Rs.70</strong> at scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a href={waApply()} target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-orange-200">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Start Shipping Cheaper
          </a>
          <a href={waNegotiate()} target="_blank"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-black text-lg px-8 py-4 rounded-2xl transition-all">
            Negotiate Rates ↗
          </a>
        </div>

        {/* 3D Truck */}
        <div
          ref={truckRef}
          className="relative mx-auto w-full max-w-2xl"
          style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
          {/* Truck SVG illustration */}
          <svg viewBox="0 0 700 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
            {/* Road/shadow */}
            <ellipse cx="350" cy="228" rx="320" ry="10" fill="#f1f5f9"/>

            {/* Truck body (cargo) */}
            <rect x="30" y="60" width="430" height="130" rx="8" fill="#0a0f1e"/>
            {/* Cargo door lines */}
            <line x1="130" y1="65" x2="130" y2="185" stroke="#1e293b" strokeWidth="2"/>
            <line x1="230" y1="65" x2="230" y2="185" stroke="#1e293b" strokeWidth="2"/>
            <line x1="330" y1="65" x2="330" y2="185" stroke="#1e293b" strokeWidth="2"/>
            <line x1="80" y1="125" x2="455" y2="125" stroke="#1e293b" strokeWidth="2"/>
            {/* Orange stripe */}
            <rect x="30" y="60" width="430" height="10" rx="4" fill="#ea580c"/>
            {/* SniperExpress text on cargo */}
            <text x="80" y="108" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" letterSpacing="1" fill="#ffffff" opacity="0.9">SNIPEREXPRESS</text>
            <text x="90" y="140" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="13" fill="#fb923c" letterSpacing="3">COURIER AGGREGATOR</text>

            {/* Cab */}
            <rect x="460" y="80" width="170" height="110" rx="10" fill="#0a0f1e"/>
            {/* Windshield */}
            <rect x="470" y="90" width="130" height="65" rx="6" fill="#fb923c" opacity="0.85"/>
            {/* Windshield glare */}
            <rect x="474" y="93" width="50" height="55" rx="4" fill="white" opacity="0.12"/>
            {/* Side mirror */}
            <rect x="456" y="96" width="10" height="18" rx="3" fill="#334155"/>

            {/* Exhaust pipe */}
            <rect x="615" y="55" width="8" height="30" rx="4" fill="#475569"/>
            <ellipse cx="619" cy="52" rx="6" ry="6" fill="#6b7280" opacity="0.5"/>
            <ellipse cx="619" cy="46" rx="4" ry="4" fill="#9ca3af" opacity="0.3"/>

            {/* Front bumper */}
            <rect x="626" y="160" width="44" height="25" rx="4" fill="#1e293b"/>
            {/* Headlights */}
            <rect x="630" y="135" width="36" height="20" rx="3" fill="#fef3c7"/>
            <rect x="632" y="137" width="32" height="16" rx="2" fill="#fde68a"/>

            {/* Wheels */}
            {/* Rear wheel 1 */}
            <circle cx="120" cy="195" r="28" fill="#1e293b"/>
            <circle cx="120" cy="195" r="18" fill="#334155"/>
            <circle cx="120" cy="195" r="8" fill="#475569"/>
            {/* Rear wheel 2 */}
            <circle cx="220" cy="195" r="28" fill="#1e293b"/>
            <circle cx="220" cy="195" r="18" fill="#334155"/>
            <circle cx="220" cy="195" r="8" fill="#475569"/>
            {/* Front wheel */}
            <circle cx="560" cy="195" r="28" fill="#1e293b"/>
            <circle cx="560" cy="195" r="18" fill="#334155"/>
            <circle cx="560" cy="195" r="8" fill="#475569"/>
            {/* Wheel hub bolts */}
            {[0,60,120,180,240,300].map((a,i) => (
              <circle key={i}
                cx={120 + 12*Math.cos(a*Math.PI/180)}
                cy={195 + 12*Math.sin(a*Math.PI/180)}
                r="2.5" fill="#64748b"/>
            ))}
            {[0,60,120,180,240,300].map((a,i) => (
              <circle key={i}
                cx={560 + 12*Math.cos(a*Math.PI/180)}
                cy={195 + 12*Math.sin(a*Math.PI/180)}
                r="2.5" fill="#64748b"/>
            ))}

            {/* Speed lines */}
            <line x1="0" y1="100" x2="25" y2="100" stroke="#ea580c" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
            <line x1="0" y1="118" x2="20" y2="118" stroke="#ea580c" strokeWidth="2" opacity="0.4" strokeLinecap="round"/>
            <line x1="0" y1="135" x2="15" y2="135" stroke="#ea580c" strokeWidth="1.5" opacity="0.3" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { n: "Rs.70", label: "Same-city floor rate" },
            { n: "50+", label: "Min parcels/month" },
            { n: "Weekly", label: "COD settlement" },
          ].map((s) => (
            <div key={s.n} className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
              <div className="text-2xl font-black text-gray-900">{s.n}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
