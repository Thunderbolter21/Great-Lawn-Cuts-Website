import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const PORTRAIT_IMG =
  "https://static.wixstatic.com/media/1ff751_a665874d5f694927a6cc5c0a15f62598~mv2.jpeg/v1/fill/w_1100,h_1380,al_c,q_85,enc_auto/1ff751_a665874d5f694927a6cc5c0a15f62598~mv2.jpeg";
const LAWN_IMG =
  "https://static.wixstatic.com/media/1ff751_2602975707fe48abb5a928f8e964628e~mv2.jpeg/v1/fill/w_1100,h_1400,al_c,q_85,enc_auto/1ff751_2602975707fe48abb5a928f8e964628e~mv2.jpeg";

const Eyebrow = ({ children, light = false }) => (
  <p
    className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
      light ? "text-[#d6bf8e]" : "text-[#b08850]"
    }`}
  >
    <span
      className={`inline-block w-[42px] h-px align-middle mr-3 opacity-60 ${
        light ? "bg-[#d6bf8e]" : "bg-[#b08850]"
      }`}
    />
    {children}
  </p>
);

export default function GLCSite() {
  // Reveal on scroll
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
    return () => io.disconnect();
  }, []);

  return (
    <div className="glc-root font-sans antialiased text-[#1d2124] bg-[#faf7f1]" data-testid="glc-root">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-7 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group" data-testid="nav-logo">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#244229] text-[#faf7f1] glc-serif text-xl">
              G
            </span>
            <span className="flex flex-col leading-tight">
              <span className="glc-serif text-xl text-[#1c3320]">GLC</span>
              <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#3a4044]">
                Great Lawn Cuts
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            <a href="#story" className="glc-nav-link" data-testid="nav-story">The Story</a>
            <a href="#philosophy" className="glc-nav-link" data-testid="nav-philosophy">Philosophy</a>
            <a href="#contact" className="glc-nav-link" data-testid="nav-contact">Contact</a>
          </nav>
          <a href="tel:720-434-0934" className="hidden md:inline-flex glc-btn-ghost" data-testid="nav-cta">
            (720) 434-0934
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden glc-grain" aria-label="Hero">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f1] via-[#faf7f1] to-[#f3ecdc]" />
          <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#dde8de]/60 blur-3xl" />
          <div className="absolute top-1/3 -left-24 h-[380px] w-[380px] rounded-full bg-[#e6d8b9]/70 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-40 md:pt-44 pb-24 md:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 glc-reveal">
            <Eyebrow>Central Park · Commerce City</Eyebrow>
            <h1 className="glc-display mt-6 text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] text-[#13231a]" data-testid="hero-heading">
              I mow lawns, <em className="italic font-normal text-[#244229]">reliably,</em>
              <br />
              affordably, stress-free.
            </h1>
            <p className="mt-8 max-w-xl text-[1.05rem] md:text-[1.12rem] leading-[1.75] text-[#2b3033]" data-testid="hero-paragraph">
              {`GLC is a one-person lawn mowing operation run out of Central Park, Commerce City. I started it because I wanted to learn what it actually takes to run a business — and because I think this neighborhood deserves someone local, affordable, and honest. My goal is simple: affordable and reliable lawn care, friendly and responsive customer service, and constant improvement through genuine customer feedback.`}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="tel:720-434-0934"
                className="glc-btn-primary"
                aria-label="Text or call Matt at (720) 434-0934"
                data-testid="hero-cta-call"
              >
                Text or call me: (720) 434-0934
                <ArrowRight className="glc-arrow" size={18} aria-hidden="true" />
              </a>
              <a href="#story" className="glc-btn-ghost" data-testid="hero-cta-story">
                Read my story
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <dt className="text-[0.7rem] tracking-[0.18em] uppercase text-[#3a4044]">Local</dt>
                <dd className="glc-serif text-2xl md:text-3xl text-[#1c3320] mt-1">Commerce City</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.18em] uppercase text-[#3a4044]">Honest</dt>
                <dd className="glc-serif text-2xl md:text-3xl text-[#1c3320] mt-1">Fair pricing</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.18em] uppercase text-[#3a4044]">Reliable</dt>
                <dd className="glc-serif text-2xl md:text-3xl text-[#1c3320] mt-1">On schedule</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 glc-reveal">
            <div className="relative">
              <div className="glc-frame aspect-[4/5]">
                <img
                  src={LAWN_IMG}
                  alt="A freshly cut, pristine green lawn — GLC's signature work."
                  loading="eager"
                />
              </div>
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-[#faf7f1] border border-[#dde8de] glc-shadow-card rounded-md px-6 py-5 max-w-[260px]">
                <p className="glc-serif italic text-[#1c3320] text-lg leading-snug">
                  {`"A friendly neighbor on your block who does good work."`}
                </p>
                <p className="mt-2 text-xs tracking-[0.18em] uppercase text-[#3a4044]">— The GLC promise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative bg-[#faf7f1] py-28 md:py-36" aria-label="The man behind the mower">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 glc-reveal">
              <div className="relative">
                <span
                  className="glc-numeral absolute -top-14 -left-4 text-[10rem] md:text-[13rem] select-none"
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="glc-frame aspect-[4/5] relative z-10">
                  <img
                    src={PORTRAIT_IMG}
                    alt="Portrait of Matt Robbins, founder of GLC Great Lawn Cuts"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glc-reveal">
              <Eyebrow>The man behind the mower</Eyebrow>
              <h2 className="glc-display mt-5 text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] text-[#13231a]" data-testid="story-heading">
                My name is <em className="italic font-normal text-[#244229]">Matt Robbins.</em>
              </h2>

              <div className="mt-8 space-y-6 text-[1.02rem] md:text-[1.08rem] leading-[1.8] text-[#2b3033] max-w-2xl">
                <p>{`I'm a college student at the University of Alabama studying accounting. My goal in life is to be an entrepreneur, so I tend to spend a lot of time learning how businesses are supposed to work, how to price things, and how to treat customers. But there's a gap between reading about it and actually doing it. This is how I close that gap.`}</p>
                <p>{`Every time I mow a lawn, I'm practicing something: how to be reliable, how to communicate clearly, how to price fairly, and how to handle it when something doesn't go right. The feedback I get from customers — especially the critical stuff — is genuinely valuable to me because it's real.`}</p>
                <p>{`I think there's a real need in this neighborhood for lawn care that's affordable and doesn't come with a runaround. I'm not trying to be a big company. I'm trying to be a friendly neighbor on your block who does good work and is easy to deal with.`}</p>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                {[
                  { k: "Studying", v: "Accounting", d: "University of Alabama" },
                  { k: "Operating", v: "Solo", d: "One person, end to end" },
                  { k: "Driven by", v: "Feedback", d: "Especially the critical kind" },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="rounded-md border border-[#dde8de] bg-white/70 backdrop-blur px-5 py-5 glc-shadow-soft"
                    data-testid={`story-card-${it.k.toLowerCase()}`}
                  >
                    <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#244229]">{it.k}</p>
                    <p className="glc-serif text-xl text-[#13231a] mt-1.5">{it.v}</p>
                    <p className="text-sm text-[#3a4044] mt-1">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="relative bg-[#1c3320] text-[#faf7f1] py-28 md:py-36 overflow-hidden" aria-label="The transparency philosophy">
        <div className="absolute inset-0 glc-grain pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#244229]/60 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-14 text-center">
          <Eyebrow light>A different kind of business</Eyebrow>
          <h2 className="glc-display mt-6 text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] text-[#faf7f1]" data-testid="philosophy-heading">
            The Transparency
            <br />
            <em className="italic font-normal text-[#e6d8b9]">Philosophy.</em>
          </h2>

          <p className="mt-10 mx-auto max-w-3xl text-[1.05rem] md:text-[1.15rem] leading-[1.85] text-[#f3ecdc]/90">
            {`GLC is not a booking website; it is a transparency portal. This business is my first real-world test of entrepreneurship. I believe that honest communication is the foundation of any successful relationship. That's why I share my journey, my pricing, and my goals here. I want you to know who I am and what I intend to do before we start. If you give a young entrepreneur a chance, I promise you won't be disappointed.`}
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              ["Principle 01", "Honesty first"],
              ["Principle 02", "Clear pricing"],
              ["Principle 03", "Show the work"],
            ].map(([k, v]) => (
              <div key={k} className="text-left border-t border-[#faf7f1]/15 pt-5">
                <p className="text-[0.68rem] tracking-[0.22em] uppercase text-[#d6bf8e]">{k}</p>
                <p className="glc-serif text-2xl mt-2">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-[#faf7f1] py-24 md:py-32" aria-label="Get in touch">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Start the conversation</Eyebrow>
              <h3 className="glc-display mt-5 text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] text-[#13231a]" data-testid="contact-heading">
                Give a young entrepreneur
                <br />
                <em className="italic font-normal text-[#244229]">a chance.</em>
              </h3>
              <p className="mt-6 text-[#2b3033] leading-[1.8] max-w-xl">
                {`Text or call — that's it. No forms, no portals, no runaround. I'll get back to you the same day with honest answers about timing and pricing.`}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-md bg-white border border-[#dde8de] glc-shadow-card p-8 md:p-9">
                <p className="text-[0.7rem] tracking-[0.22em] uppercase text-[#244229]">Matt Robbins · Owner</p>
                <a
                  href="tel:720-434-0934"
                  className="glc-serif block text-3xl md:text-4xl text-[#13231a] mt-3 hover:text-[#244229] transition-colors"
                  data-testid="contact-phone"
                >
                  (720) 434-0934
                </a>
                <a
                  href="mailto:matthew39580@gmail.com"
                  className="block mt-3 text-[#2b3033] hover:text-[#1c3320] transition-colors"
                  data-testid="contact-email"
                >
                  matthew39580@gmail.com
                </a>
                <div className="mt-7 pt-6 border-t border-[#dde8de]">
                  <a href="tel:720-434-0934" className="glc-btn-primary w-full justify-center" data-testid="contact-cta">
                    Text or call me
                    <ArrowRight className="glc-arrow" size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#13231a] text-[#f3ecdc]/85 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#faf7f1]/10 glc-serif text-lg text-[#faf7f1]">
              G
            </span>
            <div className="leading-tight">
              <p className="glc-serif text-lg text-[#faf7f1]">GLC Great Lawn Cuts</p>
              <p className="text-xs tracking-[0.22em] uppercase text-[#f3ecdc]/60">
                Central Park · Commerce City
              </p>
            </div>
          </div>
          <p className="text-sm text-[#f3ecdc]/70" data-testid="footer-copyright">
            © 2026 GLC Lawn Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:720-434-0934" className="glc-footer-link text-sm" data-testid="footer-phone">
              (720) 434-0934
            </a>
            <a href="mailto:matthew39580@gmail.com" className="glc-footer-link text-sm" data-testid="footer-email">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
