import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SiteHeader, SiteFooter, Eyebrow, CallCTA } from "./SiteShell";

const TIERS = [
  {
    id: "residential",
    label: "Tier 01",
    title: "Lawns under 600 square feet",
    subtitle: "Residential Mows Usually",
    services: [
      {
        name: "Front Yard Mow",
        price: "$15",
        description:
          "A focused mow of the front side of your residence — the part neighbors see every day.",
      },
      {
        name: "Edging & Trimming / Weeding",
        price: "$15",
        description:
          "Edging & Weeding: a focused edging job on the finicky parts of your lawn. Weeding: a by-hand pull of those unwanted weeds.",
      },
      {
        name: "Back Yard Mow",
        price: "$20",
        description:
          "A focused mow of the back side of your residence — your private retreat, cared for the same way.",
      },
    ],
  },
  {
    id: "commercial",
    label: "Tier 02",
    title: "Lawns bigger than 600 square feet",
    subtitle: "Company Lawns / Big House Lawns Usually",
    services: [
      {
        name: "Lawn Mow",
        price: "$40",
        description:
          "A focused mow of your lawn, either front or back, outside your place of business or your residence.",
      },
      {
        name: "Weed Pulling",
        price: "Depends on lot size",
        description:
          "By-hand weeding of your lawn, house, or company lot. Guaranteed to make your lawn weed-free.",
      },
      {
        name: "Edging",
        price: "$20",
        description:
          "A complete finish of the edges of your lawn. Perfect for targeting the edges of your lawn.",
      },
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("glc-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".glc-reveal").forEach((el) => io.observe(el));
    window.scrollTo(0, 0);
    return () => io.disconnect();
  }, []);

  return (
    <div className="glc-root font-sans antialiased text-[#1d2124] bg-[#faf7f1]" data-testid="services-root">
      <SiteHeader />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden glc-grain" aria-label="Services">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f1] via-[#faf7f1] to-[#f3ecdc]" />
          <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#dde8de]/60 blur-3xl" />
          <div className="absolute top-1/3 -left-24 h-[380px] w-[380px] rounded-full bg-[#e6d8b9]/70 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-40 md:pt-48 pb-16 md:pb-20">
          <div className="max-w-4xl glc-reveal">
            <Eyebrow>Pricing · Honest, simple, posted</Eyebrow>
            <h1 className="glc-display mt-6 text-[2.8rem] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.2rem] text-[#13231a]" data-testid="services-heading">
              Services <em className="italic font-normal text-[#244229]">&amp; pricing.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.12rem] leading-[1.75] text-[#2b3033]">
              {`Recurring schedules available. No forms, no apps — just a direct conversation. Prices are posted here so you know exactly what you're paying before we agree on anything.`}
            </p>
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="bg-[#faf7f1] py-20 md:py-28" aria-label="Pricing tiers">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20 md:space-y-28">
          {TIERS.map((tier) => (
            <div key={tier.id} className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4 glc-reveal">
                <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[#b08850] font-semibold">
                  {tier.label}
                </p>
                <h2 className="glc-display mt-4 text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] text-[#13231a] leading-[1.05]">
                  {tier.title}
                </h2>
                <p className="mt-4 text-[#3a4044] text-sm tracking-[0.05em] uppercase">
                  {tier.subtitle}
                </p>
                <div className="mt-8 hidden lg:block">
                  <CallCTA>Text me about this tier</CallCTA>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                {tier.services.map((svc) => (
                  <article
                    key={svc.name}
                    className="glc-reveal group rounded-md border border-[#dde8de] bg-white/85 backdrop-blur-sm glc-shadow-soft px-7 md:px-9 py-7 md:py-8 transition-all hover:-translate-y-1 hover:glc-shadow-card"
                    data-testid={`service-${svc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <h3 className="glc-serif text-2xl md:text-[1.75rem] text-[#13231a]">{svc.name}</h3>
                      <span className="glc-serif text-3xl md:text-4xl text-[#244229]">
                        {svc.price}
                      </span>
                    </div>
                    <p className="mt-4 text-[#2b3033] leading-[1.75] max-w-2xl">
                      {svc.description}
                    </p>
                  </article>
                ))}
                <div className="lg:hidden pt-4">
                  <CallCTA>Text me about this tier</CallCTA>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="relative bg-[#1c3320] text-[#faf7f1] py-28 md:py-36 overflow-hidden" aria-label="How to book">
        <div className="absolute inset-0 glc-grain pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#244229]/60 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-14 text-center">
          <Eyebrow light>The booking process</Eyebrow>
          <h2 className="glc-display mt-6 text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] text-[#faf7f1]" data-testid="how-to-book-heading">
            How to <em className="italic font-normal text-[#e6d8b9]">book.</em>
          </h2>
          <p className="mt-10 mx-auto max-w-3xl text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[#f3ecdc]/90">
            {`There's no app, no form, no calendar to fight with. You text or call me, we'll work out a time, and I'll show up. If you've heard about me from a neighbor and want to get your lawn on my schedule, just reach out.`}
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            {[
              ["Step 01", "Text or call", "Send a quick message describing your lawn — front, back, or both."],
              ["Step 02", "We pick a time", "I confirm pricing and we lock in a day that works for you."],
              ["Step 03", "I show up", "I arrive, mow, edge, and follow up to make sure it met your standard."],
            ].map(([k, v, d]) => (
              <div key={k} className="border-t border-[#faf7f1]/15 pt-5">
                <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[#d6bf8e]">{k}</p>
                <p className="glc-serif text-2xl mt-2 text-[#faf7f1]">{v}</p>
                <p className="text-sm text-[#f3ecdc]/75 mt-2 leading-[1.65]">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 inline-flex">
            <a
              href="tel:720-434-0934"
              className="inline-flex items-center gap-3 bg-[#faf7f1] text-[#13231a] font-semibold text-sm md:text-base px-7 py-4 rounded-full hover:bg-white transition-colors shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)]"
              data-testid="how-to-book-cta"
            >
              Text or call me: (720) 434-0934
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
