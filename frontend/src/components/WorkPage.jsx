import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SiteHeader, SiteFooter, Eyebrow, CallCTA } from "./SiteShell";

const buildWixUrl = (id, w = 1000, h = 1334) =>
  `https://static.wixstatic.com/media/1ff751_${id}~mv2.jpeg/v1/fill/w_${w},h_${h},al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1ff751_${id}~mv2.jpeg`;

const WORK_IMAGES = [
  "1fc723d4365f46acace8a050b9981d3f",
  "263304fd94f84e909be29811f0d2dfec",
  "28e6d80951fd44d9814962ca27caea27",
  "362d73f380cc4b4aa639a59a67878132",
  "367c866d42754f4684f4c35b26fe5b58",
  "3a167056a7954ecd97d09af33142b182",
  "47dc0ad2bfbe46348464b6d8d5209208",
  "67af62d02be24e9080c6aef5b35a2457",
  "75b72aa7b209461fa1fc3ba61bd158e6",
  "82089efbb7cc48e5aa04cdc843148ad0",
  "86dae7b6834046c1be761e5f159e6255",
  "ed148ef7533b4fad8a0d5d1cf5eec1a5",
  "ef01403af2164106954a2b31895dc8e0",
].map((id, i) => ({
  id,
  src: buildWixUrl(id),
  alt: `Lawn project ${String(i + 1).padStart(2, "0")} — completed by GLC Great Lawn Cuts`,
}));

export default function WorkPage() {
  const [lightbox, setLightbox] = useState(null);

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
      { threshold: 0.08 }
    );
    document.querySelectorAll(".glc-reveal").forEach((el) => io.observe(el));
    window.scrollTo(0, 0);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    if (lightbox !== null) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="glc-root font-sans antialiased text-[#1d2124] bg-[#faf7f1]" data-testid="work-root">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden glc-grain" aria-label="My Work">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f1] via-[#faf7f1] to-[#f3ecdc]" />
          <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#dde8de]/60 blur-3xl" />
          <div className="absolute top-1/3 -left-24 h-[380px] w-[380px] rounded-full bg-[#e6d8b9]/70 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-40 md:pt-48 pb-16 md:pb-20">
          <div className="max-w-4xl glc-reveal">
            <Eyebrow>Portfolio · {WORK_IMAGES.length} projects and counting</Eyebrow>
            <h1 className="glc-display mt-6 text-[2.8rem] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.2rem] text-[#13231a]" data-testid="work-heading">
              Lawns <em className="italic font-normal text-[#244229]">I&apos;ve mowed.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] md:text-[1.12rem] leading-[1.75] text-[#2b3033]" data-testid="work-intro">
              {`This is a running portfolio of yards I've worked on. I update it as I go. You're seeing the actual work — look at it and decide for yourself whether my work is up to your standards.`}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#faf7f1] pb-24 md:pb-32" aria-label="Project gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
            data-testid="work-gallery"
          >
            {WORK_IMAGES.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightbox(i)}
                className="glc-reveal glc-frame aspect-[3/4] relative group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b08850] focus-visible:ring-offset-2"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
                data-testid={`work-item-${i}`}
                aria-label={`Open ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13231a]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="glc-serif text-lg text-[#faf7f1] drop-shadow">
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.22em] uppercase text-[#faf7f1]/90 backdrop-blur bg-[#13231a]/40 px-3 py-1.5 rounded-full">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative bg-[#1c3320] text-[#faf7f1] py-24 md:py-28 overflow-hidden" aria-label="Get on the schedule">
        <div className="absolute inset-0 glc-grain pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#244229]/60 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-14 text-center">
          <Eyebrow light>Want yours next?</Eyebrow>
          <h2 className="glc-display mt-6 text-[2.2rem] sm:text-[3rem] md:text-[3.6rem] text-[#faf7f1]">
            Let&apos;s add your yard to <em className="italic font-normal text-[#e6d8b9]">the list.</em>
          </h2>
          <div className="mt-10 inline-flex">
            <CallCTA>Text or call me: (720) 434-0934</CallCTA>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project preview"
          className="fixed inset-0 z-[60] bg-[#0a120c]/92 backdrop-blur-md flex items-center justify-center px-4 py-10 animate-[glcFade_.25s_ease-out]"
          onClick={() => setLightbox(null)}
          data-testid="lightbox"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
            className="absolute top-6 right-6 h-11 w-11 inline-flex items-center justify-center rounded-full bg-[#faf7f1]/10 hover:bg-[#faf7f1]/20 text-[#faf7f1] transition-colors"
            data-testid="lightbox-close"
          >
            <X size={20} />
          </button>
          <img
            src={WORK_IMAGES[lightbox].src}
            alt={WORK_IMAGES[lightbox].alt}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#faf7f1]/80 text-xs tracking-[0.22em] uppercase">
            Project {String(lightbox + 1).padStart(2, "0")} · {lightbox + 1} / {WORK_IMAGES.length}
          </p>
        </div>
      )}
    </div>
  );
}
