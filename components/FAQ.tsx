"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What's the minimum to get started?",
    a: "50 shipments per month. That's it. Whether you ship 50 or 100,000 — you're in. Rates improve as your volume grows, but there's no barrier to start.",
  },
  {
    q: "Do I need to close my existing Leopards account?",
    a: "No. Your existing Leopards relationship stays exactly as it is. SniperExpress handles the billing layer — same pickups, same tracking, same riders. You just pay us instead of Leopards directly, at a lower rate.",
  },
  {
    q: "How do I print the loadsheet and CN labels?",
    a: "From our portal (app.sniperexpress.com). Book your shipments, click 'Print Loadsheet' for the daily manifest, and 'Print Labels' for individual parcel CN stickers. Any printer works — laser or inkjet, A4 or label printer.",
  },
  {
    q: "When do I get my COD money?",
    a: "Weekly bank transfer, every Monday. Leopards collects COD on delivery, remits to us, we deduct our shipping charges and transfer the balance directly to your registered bank account.",
  },
  {
    q: "What if a parcel is lost or delayed?",
    a: "Same claim process as direct Leopards. We lodge the claim on your behalf with the courier. Our SLA: same-city 24hr, outstation 72hr. If the courier is at fault, claim is processed within 7 working days.",
  },
  {
    q: "Can I use multiple couriers?",
    a: "Yes. We work with Leopards, Trax, Postex, and M&P. When you book, you can choose the courier, or let us auto-select the cheapest option for that destination.",
  },
  {
    q: "How is SniperExpress able to offer lower rates?",
    a: "We consolidate volume from hundreds of merchants and negotiate as one large account. The more total shipments we have, the better rates we get from couriers — and we pass those savings on with a small margin.",
  },
  {
    q: "I ship 10,000+ per month. Can I negotiate my rate?",
    a: "Absolutely. High-volume accounts get custom pricing. WhatsApp us directly and we'll work out a rate specific to your volume and cities.",
  },
  {
    q: "Is there a contract or lock-in?",
    a: "No contract, no lock-in. You can stop any time with 7 days notice. We're confident the savings keep you here — no need to trap anyone.",
  },
  {
    q: "What information do I need to sign up?",
    a: "CNIC, business name, bank account (for COD settlement), and your Leopards account number if you have one. Verification takes 24 hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-5 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">FAQ</span>
          <h2 className="text-4xl font-black text-gray-900 mb-3">Straight Answers</h2>
          <p className="text-gray-500">No fluff. Just the questions merchants actually ask.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all ${open === i ? "border-orange-200 shadow-md" : "border-gray-100"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className={`font-bold text-sm leading-snug ${open === i ? "text-orange-600" : "text-gray-800"}`}>{f.q}</span>
                <span className={`text-xl flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45 text-orange-500" : "text-gray-300"}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-900 rounded-2xl p-7 text-center">
          <div className="text-white font-bold text-lg mb-2">Still have a question?</div>
          <div className="text-gray-400 text-sm mb-5">We reply on WhatsApp within the hour.</div>
          <a
            href="https://wa.me/19782319319?text=Hi%20SniperExpress%2C%20I%20have%20a%20question%20about%20your%20service."
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white font-bold px-7 py-3 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
