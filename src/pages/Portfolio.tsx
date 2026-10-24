import { ArrowUpRight, Plus } from "lucide-react";
import hare from "@/assets/folio/hare.jpg.asset.json";
import rings from "@/assets/folio/rings.jpg.asset.json";
import leaf from "@/assets/folio/leaf.jpg.asset.json";
import tree from "@/assets/folio/tree.jpg.asset.json";
import starling from "@/assets/folio/starling.jpg.asset.json";
import grass from "@/assets/folio/grass.jpg.asset.json";
import pressed from "@/assets/folio/pressed.jpg.asset.json";
import moss from "@/assets/folio/moss.jpg.asset.json";
import bark from "@/assets/folio/bark.jpg.asset.json";
import rabbit from "@/assets/folio/rabbit.jpg.asset.json";
import branches from "@/assets/folio/branches.jpg.asset.json";

const mono = "font-mono-folio text-[10.5px] uppercase tracking-[0.22em]";
const serif = "font-serif-folio";

const projects = [
  { no: "I", title: "CityGo", kind: "Booking platform", year: "2026", stack: "React · Node · Postgres", img: rings.url, latin: "Annuli temporis", note: "Booking engine and staff dashboard for a city-tours agency.", href: "/portfolio/citygo" },
  { no: "II", title: "Verdant Ledger", kind: "Fintech API", year: "2025", stack: "Go · gRPC · Kafka", img: bark.url, latin: "Cortex fidelis", note: "Double-entry ledger handling 40k transactions a minute." },
  { no: "III", title: "Herbarium", kind: "Content system", year: "2024", stack: "Next · GraphQL · S3", img: pressed.url, latin: "Folium pressum", note: "Headless archive for a natural-history museum collection." },
  { no: "IV", title: "Murmur", kind: "Realtime infra", year: "2023", stack: "Node · WebRTC · Redis", img: starling.url, latin: "Sturnus vulgaris", note: "Low-latency presence layer for collaborative tools." },
];

const notes = [
  ["Frontend", "React, TypeScript, motion, design systems, accessibility"],
  ["Backend", "Node, Go, Postgres, queues, event-driven architecture"],
  ["Infrastructure", "Docker, edge runtimes, CI, observability, cost care"],
  ["Practice", "Small teams, slow thinking, fast shipping, clear writing"],
];

function Rule({ label, index }: { label: string; index: string }) {
  return (
    <div className="flex items-center gap-4 text-folio-soft">
      <span className={mono}>{index}</span>
      <span className="h-px flex-1 bg-folio-line" />
      <span className={mono}>{label}</span>
    </div>
  );
}

function Cross({ className = "" }: { className?: string }) {
  return <Plus strokeWidth={1} className={`absolute h-3 w-3 text-folio-soft ${className}`} aria-hidden />;
}

export default function Portfolio() {
  return (
    <div className="folio folio-grain relative min-h-screen overflow-x-hidden">
      {/* Masthead */}
      <header className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="flex items-baseline gap-3">
          <span className={`${serif} text-2xl italic`}>Liu</span>
          <span className={`${mono} text-folio-soft`}>Field Notes — Vol. 06</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {["Index", "Works", "Notes", "Correspondence"].map((n, i) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={`${mono} group text-folio-ink transition-colors hover:text-folio-moss`}>
              <span className="mr-1.5 text-folio-soft">0{i + 1}</span>
              <span className="border-b border-transparent pb-0.5 group-hover:border-folio-moss">{n}</span>
            </a>
          ))}
        </nav>
        <span className={`${mono} hidden items-center gap-2 text-folio-moss lg:flex`}>
          <span className="h-1.5 w-1.5 rounded-full bg-folio-moss" /> Open to commissions
        </span>
      </header>

      {/* Hero plate */}
      <section id="index" className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="relative border border-folio-line">
          <Cross className="-left-1.5 -top-1.5" /><Cross className="-right-1.5 -top-1.5" />
          <Cross className="-bottom-1.5 -left-1.5" /><Cross className="-bottom-1.5 -right-1.5" />
          <div className="grid md:grid-cols-12">
            <div className="folio-grid relative flex flex-col justify-between gap-16 p-8 md:col-span-7 md:p-14">
              <div className="flex justify-between">
                <span className={`${mono} text-folio-soft`}>Plate Nº 01</span>
                <span className={`${mono} text-folio-soft`}>41.0082° N, 28.9784° E</span>
              </div>
              <div className="folio-rise">
                <p className={`${mono} mb-6 text-folio-moss`}>Full-stack developer · est. 2016</p>
                <h1 className={`${serif} text-[clamp(3.2rem,8vw,7.5rem)] font-light leading-[0.88] tracking-tight`}>
                  Software,<br />
                  <em className="text-folio-moss">grown</em> slowly<br />
                  <span className="pl-[0.6em]">& with care.</span>
                </h1>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <p className={`${serif} max-w-xs text-xl leading-snug text-folio-soft`}>
                  I build careful systems end to end — from the root database schema to the last petal of interface.
                </p>
                <div className="flex items-end gap-3 sm:justify-end">
                  <a href="#works" className={`${mono} inline-flex items-center gap-2 border border-folio-ink px-5 py-3 transition-colors hover:bg-folio-ink hover:text-folio-paper`}>
                    View specimens <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
            <figure className="relative border-t border-folio-line bg-folio-paper md:col-span-5 md:border-l md:border-t-0">
              <img src={hare.url} alt="Pencil study of a hare" className="folio-plate h-full max-h-[720px] w-full object-cover object-center" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className={`${serif} text-lg italic`}>Lepus europaeus</span>
                <span className={`${mono} text-folio-soft`}>fig. a — graphite</span>
              </figcaption>
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-folio-rust/50 p-1">
                <div className={`flex h-full w-full items-center justify-center rounded-full border border-dashed border-folio-rust/60 text-center ${mono} text-[8px] leading-tight text-folio-rust`}>
                  Est.<br />MMXVI
                </div>
              </div>
            </figure>
          </div>
        </div>
        {/* Marginalia strip */}
        <div className="grid grid-cols-2 border-x border-b border-folio-line md:grid-cols-4">
          {[["10", "years in the field"], ["38", "projects pressed"], ["06", "languages spoken"], ["∞", "cups of tea"]].map(([n, l], i) => (
            <div key={l} className={`flex items-baseline gap-3 p-5 ${i ? "md:border-l" : ""} ${i % 2 ? "border-l" : ""} border-folio-line`}>
              <span className={`${serif} text-4xl font-light`}>{n}</span>
              <span className={`${mono} text-folio-soft`}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto with grass */}
      <section className="relative mx-auto mt-28 max-w-[1240px] px-6 md:px-10">
        <Rule index="§ 01" label="On method" />
        <div className="mt-14 grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <img src={rings.url} alt="" className="folio-plate w-full max-w-[220px] border border-folio-line p-3" />
            <p className={`${mono} mt-3 text-folio-soft`}>fig. b — annual rings</p>
          </div>
          <blockquote className={`${serif} text-[clamp(1.8rem,3.4vw,3rem)] font-light leading-[1.15] md:col-span-8 md:col-start-5`}>
            “Good code reads like a field guide: <em className="text-folio-moss">observed patiently</em>, labelled honestly, and useful to whoever walks the path next.”
            <footer className={`${mono} mt-8 not-italic text-folio-soft`}>— working principle, nº 1</footer>
          </blockquote>
        </div>
        <img src={grass.url} alt="" className="folio-plate mt-16 h-40 w-full object-cover object-[50%_30%] opacity-90" />
      </section>

      {/* Works */}
      <section id="works" className="relative mx-auto mt-24 max-w-[1240px] px-6 md:px-10">
        <Rule index="§ 02" label="Selected specimens · 2023 — 2026" />
        <div className="mt-6 flex items-end justify-between">
          <h2 className={`${serif} text-6xl font-light md:text-7xl`}>Works<span className="text-folio-rust">.</span></h2>
          <a href="#" className={`${mono} hidden items-center gap-2 text-folio-soft hover:text-folio-ink sm:inline-flex`}>Full archive <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} /></a>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.title} className={`group ${i % 2 ? "md:mt-24" : ""}`}>
              <div className="relative overflow-hidden border border-folio-line bg-folio-deep/40 p-4">
                <span className={`${mono} absolute left-6 top-6 z-10 text-folio-soft`}>Specimen {p.no}</span>
                <img src={p.img} alt={p.title} className="folio-plate aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
              </div>
              <div className="mt-5 grid grid-cols-[1fr_auto] gap-y-2 border-b border-folio-line pb-5">
                <h3 className={`${serif} text-3xl`}>{p.title} <em className="text-lg text-folio-soft">— {p.latin}</em></h3>
                <span className={`${mono} text-folio-soft`}>{p.year}</span>
                <p className="max-w-sm text-sm leading-relaxed text-folio-soft">{p.note}</p>
                <ArrowUpRight className="h-5 w-5 self-end text-folio-ink transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1} />
              </div>
              <div className="mt-3 flex justify-between">
                <span className={`${mono} text-folio-moss`}>{p.kind}</span>
                <span className={`${mono} text-folio-soft`}>{p.stack}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Notes — capabilities as index cards */}
      <section id="notes" className="relative mt-32 border-y border-folio-line bg-folio-deep/50">
        <div className="mx-auto grid max-w-[1240px] md:grid-cols-12">
          <div className="relative border-folio-line p-8 md:col-span-5 md:border-r md:p-14">
            <Rule index="§ 03" label="Field notes" />
            <h2 className={`${serif} mt-8 text-5xl font-light leading-none`}>A taxonomy<br />of <em className="text-folio-moss">practice</em></h2>
            <img src={leaf.url} alt="" className="folio-plate mt-10 w-full max-w-sm" />
          </div>
          <ol className="md:col-span-7">
            {notes.map(([k, v], i) => (
              <li key={k} className="group grid grid-cols-[3rem_1fr] gap-6 border-b border-folio-line px-8 py-10 transition-colors last:border-0 hover:bg-folio-paper md:px-14">
                <span className={`${serif} text-3xl italic text-folio-rust`}>{["i", "ii", "iii", "iv"][i]}.</span>
                <div>
                  <h3 className={`${mono} text-folio-ink`}>{k}</h3>
                  <p className={`${serif} mt-3 text-2xl leading-snug text-folio-soft group-hover:text-folio-ink`}>{v}</p>
                </div>
              </li>
            ))}
            <li className="grid grid-cols-3">
              {[branches.url, moss.url, rabbit.url].map((src, i) => (
                <img key={i} src={src} alt="" className={`folio-plate aspect-square w-full object-cover ${i ? "border-l border-folio-line" : ""}`} />
              ))}
            </li>
          </ol>
        </div>
      </section>

      {/* Correspondence */}
      <section id="correspondence" className="relative mx-auto max-w-[1240px] px-6 py-28 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={tree.url} alt="Ink drawing of a lone tree" className="folio-plate w-full border border-folio-line" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <span className={`${mono} text-folio-soft`}>§ 04 — Correspondence</span>
            <h2 className={`${serif} mt-6 text-[clamp(3rem,6vw,5.5rem)] font-light leading-[0.92]`}>
              Let's plant<br />something <em className="text-folio-moss">lasting.</em>
            </h2>
            <p className={`${serif} mt-8 max-w-md text-xl text-folio-soft`}>Currently accepting a small number of projects for winter 2026. Letters answered within two days.</p>
            <a href="mailto:hello@example.com" className={`${serif} group mt-10 inline-flex items-center gap-4 border-b border-folio-ink pb-2 text-3xl italic`}>
              hello@example.com
              <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1} />
            </a>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {["GitHub", "LinkedIn", "Read.cv", "Are.na"].map((s) => (
                <a key={s} href="#" className={`${mono} text-folio-soft hover:text-folio-moss`}>↳ {s}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto max-w-[1240px] px-6 pb-10 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-folio-line pt-6">
          <span className={`${mono} text-folio-soft`}>© 2026 Liu — Hand-set in Cormorant & Plex Mono</span>
          <span className={`${mono} text-folio-soft`}>Istanbul · 19:46 local</span>
        </div>
      </footer>
    </div>
  );
}
