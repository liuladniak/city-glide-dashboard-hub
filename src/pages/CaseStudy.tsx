import { ArrowUpRight, ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import rings from "@/assets/folio/rings.jpg.asset.json";
import branches from "@/assets/folio/branches.jpg.asset.json";
import pressed from "@/assets/folio/pressed.jpg.asset.json";
import leaf from "@/assets/folio/leaf.jpg.asset.json";
import moss from "@/assets/folio/moss.jpg.asset.json";
import tree from "@/assets/folio/tree.jpg.asset.json";

const mono = "font-mono-folio text-[10.5px] uppercase tracking-[0.22em]";
const serif = "font-serif-folio";

function Rule({ label, index }: { label: string; index: string }) {
  return (
    <div className="flex items-center gap-4 text-folio-soft">
      <span className={mono}>{index}</span>
      <span className="h-px flex-1 bg-folio-line" />
      <span className={mono}>{label}</span>
    </div>
  );
}
const Cross = ({ className = "" }: { className?: string }) => (
  <Plus strokeWidth={1} className={`absolute h-3 w-3 text-folio-soft ${className}`} aria-hidden />
);

const facts = [
  ["Role", "Sole designer & engineer"],
  ["Timeline", "2025 — ongoing"],
  ["Systems", "3 apps · 2 services"],
  ["Status", "Live in production"],
];

const decisions = [
  { q: "Why one shared backend?", a: "The customer app and the staff dashboard read the same tours, bookings and availability. One Express + PostgreSQL server keeps a single source of truth, so a blocked date set by an agent is instantly true for every customer.", alt: "Considered: separate APIs per app — rejected, duplicated business rules." },
  { q: "Why webhook-driven bookings?", a: "A booking is only created after Stripe confirms the Payment Intent. Webhooks make payment the trigger rather than the browser, so a closed tab never leaves a half-paid booking behind.", alt: "Considered: create-then-charge — rejected, orphaned drafts." },
  { q: "Why Redux on the client, TanStack Query on the dashboard?", a: "Customers build a cart that must survive reloads — local, persistent state. Staff work with server data that changes under them — cache, refetch, invalidate. Different problems, different tools.", alt: "Trade-off: two mental models, accepted for fit." },
  { q: "Why a queue for notifications?", a: "Emails and 24h reminders were moved into a BullMQ + Redis microservice. A slow mail provider can no longer slow down checkout, and failed sends retry on their own.", alt: "Before: inline sends inside request handlers." },
  { q: "Why role tiers, not permissions per user?", a: "Admin, manager and associate map to how a small agency actually works. Route guards plus field-level rules keep finance data away from associates without a settings maze.", alt: "Kept deliberately small — three roles, clearly named." },
];

const layers = [
  { name: "Client", path: "client/", stack: "React · Redux Toolkit · SCSS · Stripe.js · Leaflet", note: "Tour browsing, filters, cart, checkout, Istanbul map, travel guide." },
  { name: "Dashboard", path: "dashboard/", stack: "React · TypeScript · TanStack Query · shadcn/ui", note: "Booking lifecycle, 5-step creation, availability calendar, guides, analytics." },
  { name: "Server", path: "server/", stack: "Node · Express · Knex · PostgreSQL · Supabase", note: "Shared REST API, auth, Stripe webhooks, cron task generation." },
  { name: "Notifications", path: "notifications/", stack: "TypeScript · BullMQ · Redis · Nodemailer", note: "Confirmations, reminders, cancellations, guide assignment emails." },
  { name: "AI service", path: "ai-service/", stack: "Python · FastAPI · Gemini 2.5 Flash", note: "Milo — an assistant that helps travellers find the right tour." },
];

const lifecycle = ["Draft", "Pending", "Confirmed", "Completed", "Cancelled"];

export default function CaseStudy() {
  return (
    <div className="folio folio-grain relative min-h-screen overflow-x-hidden">
      <header className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 md:px-10">
        <Link to="/portfolio" className={`${mono} inline-flex items-center gap-2 text-folio-soft hover:text-folio-ink`}>
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> Back to index
        </Link>
        <span className={`${serif} text-2xl italic`}>Liu</span>
        <span className={`${mono} text-folio-soft`}>Specimen I · Case study</span>
      </header>

      {/* Title plate */}
      <section className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="relative border border-folio-line">
          <Cross className="-left-1.5 -top-1.5" /><Cross className="-right-1.5 -top-1.5" />
          <Cross className="-bottom-1.5 -left-1.5" /><Cross className="-bottom-1.5 -right-1.5" />
          <div className="grid md:grid-cols-12">
            <div className="folio-grid flex flex-col justify-between gap-14 p-8 md:col-span-8 md:p-14">
              <div className="flex justify-between">
                <span className={`${mono} text-folio-soft`}>Plate Nº 02</span>
                <span className={`${mono} text-folio-soft`}>Istanbul · walking tours</span>
              </div>
              <div className="folio-rise">
                <p className={`${mono} mb-6 text-folio-moss`}>Case study — full-stack platform</p>
                <h1 className={`${serif} text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.85] tracking-tight`}>
                  City<em className="text-folio-moss">Go</em><span className="text-folio-rust">.</span>
                </h1>
                <p className={`${serif} mt-6 max-w-xl text-2xl leading-snug text-folio-soft`}>
                  A booking platform for a city-tours agency — one storefront for travellers, one workbench for staff, and a single root system feeding both.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://citygo.liuladniak.com" target="_blank" rel="noreferrer" className={`${mono} inline-flex items-center gap-2 border border-folio-ink px-5 py-3 transition-colors hover:bg-folio-ink hover:text-folio-paper`}>
                  Client app <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
                <a href="https://citygo-dashboard.liuladniak.com" target="_blank" rel="noreferrer" className={`${mono} inline-flex items-center gap-2 border border-folio-line px-5 py-3 hover:border-folio-ink`}>
                  Dashboard <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
                <a href="https://github.com/liuladniak/citygo" target="_blank" rel="noreferrer" className={`${mono} inline-flex items-center gap-2 px-5 py-3 text-folio-soft hover:text-folio-ink`}>
                  Source ↗
                </a>
              </div>
            </div>
            <figure className="relative border-t border-folio-line md:col-span-4 md:border-l md:border-t-0">
              <img src={rings.url} alt="Tree rings drawing" className="folio-plate h-full max-h-[640px] w-full object-cover" />
              <figcaption className={`absolute bottom-5 left-5 ${serif} text-lg italic`}>Annuli temporis</figcaption>
            </figure>
          </div>
        </div>
        <dl className="grid grid-cols-2 border-x border-b border-folio-line md:grid-cols-4">
          {facts.map(([k, v], i) => (
            <div key={k} className={`p-5 ${i ? "md:border-l" : ""} ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-folio-line`}>
              <dt className={`${mono} text-folio-soft`}>{k}</dt>
              <dd className={`${serif} mt-2 text-xl`}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Overview */}
      <section className="mx-auto mt-28 max-w-[1240px] px-6 md:px-10">
        <Rule index="§ 01" label="Overview" />
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <h2 className={`${serif} text-5xl font-light leading-none md:col-span-4`}>The <em className="text-folio-moss">terrain</em></h2>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-8">
            <div>
              <h3 className={`${mono} text-folio-rust`}>The problem</h3>
              <p className={`${serif} mt-4 text-xl leading-snug text-folio-soft`}>
                A small agency running one city: bookings scattered across email and spreadsheets, double-booked guides, and payments reconciled by hand at the end of the week.
              </p>
            </div>
            <div>
              <h3 className={`${mono} text-folio-moss`}>The response</h3>
              <p className={`${serif} mt-4 text-xl leading-snug text-folio-soft`}>
                One platform where availability, payments and staffing are the same data everywhere — so the customer, the associate and the guide always see the same truth.
              </p>
            </div>
            <ul className="space-y-3 border-t border-folio-line pt-6 sm:col-span-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0">
              {[["Travellers", "browse, filter, pay in their currency"], ["Associates", "create & manage bookings in 5 steps"], ["Managers", "assign guides, read revenue trends"]].map(([w, d]) => (
                <li key={w}>
                  <span className={`${serif} text-2xl italic`}>{w}</span>
                  <p className="mt-1 text-sm text-folio-soft">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className="relative mt-28 border-y border-folio-line bg-folio-deep/50">
        <div className="mx-auto grid max-w-[1240px] md:grid-cols-12">
          <div className="border-folio-line p-8 md:col-span-4 md:border-r md:p-14">
            <Rule index="§ 02" label="Reasoning" />
            <h2 className={`${serif} mt-8 text-5xl font-light leading-none`}>Why it<br />grew <em className="text-folio-moss">this way</em></h2>
            <p className={`${serif} mt-6 text-lg text-folio-soft`}>Five decisions that shaped the system, with the road not taken beside each.</p>
            <img src={pressed.url} alt="" className="folio-plate mt-10 w-full max-w-xs" />
          </div>
          <ol className="md:col-span-8">
            {decisions.map((d, i) => (
              <li key={d.q} className="group grid grid-cols-[3rem_1fr] gap-6 border-b border-folio-line px-8 py-10 transition-colors last:border-0 hover:bg-folio-paper md:px-14">
                <span className={`${serif} text-3xl italic text-folio-rust`}>{["i", "ii", "iii", "iv", "v"][i]}.</span>
                <div>
                  <h3 className={`${serif} text-3xl leading-tight`}>{d.q}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-folio-soft group-hover:text-folio-ink">{d.a}</p>
                  <p className={`${mono} mt-5 text-folio-moss`}>↳ {d.alt}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto mt-28 max-w-[1240px] px-6 md:px-10">
        <Rule index="§ 03" label="Architecture" />
        <div className="mt-6 flex items-end justify-between">
          <h2 className={`${serif} text-6xl font-light md:text-7xl`}>Anatomy<span className="text-folio-rust">.</span></h2>
          <span className={`${mono} hidden text-folio-soft sm:block`}>fig. c — cross-section</span>
        </div>

        {/* Diagram */}
        <div className="folio-grid relative mt-10 border border-folio-line p-6 md:p-12">
          <Cross className="-left-1.5 -top-1.5" /><Cross className="-right-1.5 -bottom-1.5" />
          <div className="grid gap-4 md:grid-cols-2">
            {["Client — travellers", "Dashboard — staff"].map((n) => (
              <div key={n} className="border border-folio-ink bg-folio-paper p-5 text-center">
                <span className={`${serif} text-2xl italic`}>{n}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-around py-3" aria-hidden>
            <span className="h-10 w-px bg-folio-ink" /><span className="h-10 w-px bg-folio-ink" />
          </div>
          <div className="border-2 border-folio-moss bg-folio-paper p-6 text-center">
            <span className={`${mono} text-folio-moss`}>shared root</span>
            <p className={`${serif} mt-1 text-3xl`}>Express API · PostgreSQL</p>
          </div>
          <div className="flex justify-around py-3" aria-hidden>
            <span className="h-10 w-px border-l border-dashed border-folio-ink" />
            <span className="h-10 w-px border-l border-dashed border-folio-ink" />
            <span className="h-10 w-px border-l border-dashed border-folio-ink" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[["Notifications", "BullMQ · Redis"], ["AI service", "FastAPI · Gemini"], ["Third parties", "Stripe · Supabase · Brevo"]].map(([n, s]) => (
              <div key={n} className="border border-dashed border-folio-ink bg-folio-paper p-4 text-center">
                <p className={`${serif} text-xl`}>{n}</p>
                <p className={`${mono} mt-1 text-folio-soft`}>{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Layers */}
        <div className="mt-16 divide-y divide-folio-line border-y border-folio-line">
          {layers.map((l, i) => (
            <div key={l.name} className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline">
              <span className={`${mono} text-folio-soft md:col-span-1`}>0{i + 1}</span>
              <div className="md:col-span-3">
                <h3 className={`${serif} text-3xl`}>{l.name}</h3>
                <code className="font-mono-folio text-xs text-folio-moss">{l.path}</code>
              </div>
              <p className="text-folio-soft md:col-span-4">{l.note}</p>
              <span className={`${mono} text-folio-ink md:col-span-4 md:text-right`}>{l.stack}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle + delivery */}
      <section className="mx-auto mt-28 max-w-[1240px] px-6 md:px-10">
        <Rule index="§ 04" label="Lifecycle & delivery" />
        <div className="mt-14 grid gap-14 md:grid-cols-2">
          <div>
            <h3 className={`${serif} text-4xl font-light`}>A booking's <em className="text-folio-moss">life</em></h3>
            <ol className="mt-8 border-l border-folio-line">
              {lifecycle.map((s, i) => (
                <li key={s} className="relative pb-6 pl-8 last:pb-0">
                  <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border border-folio-ink ${i === 2 ? "bg-folio-moss" : i === 4 ? "bg-folio-rust" : "bg-folio-paper"}`} />
                  <span className={`${serif} text-2xl`}>{s}</span>
                  <span className={`${mono} ml-3 text-folio-soft`}>
                    {["agent starts", "awaiting payment", "webhook confirms", "tour walked", "refund path"][i]}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className={`${serif} text-4xl font-light`}>From branch <em className="text-folio-moss">to field</em></h3>
            <div className="mt-8 space-y-4">
              {[["develop", "staging.citygo"], ["main", "citygo — production"]].map(([b, e]) => (
                <div key={b} className="flex items-center gap-4 border border-folio-line bg-folio-paper p-4">
                  <code className="font-mono-folio text-sm text-folio-moss">{b}</code>
                  <span className="h-px flex-1 border-t border-dashed border-folio-ink" />
                  <span className={`${mono} text-folio-soft`}>Actions → Docker</span>
                  <span className="h-px flex-1 border-t border-dashed border-folio-ink" />
                  <span className={`${serif} text-lg italic`}>{e}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-folio-soft">
              A self-hosted GitHub Actions runner deploys Docker Compose stacks to one VPS. Prometheus, Grafana and Loki watch it; Playwright and a smoke-test checklist guard every release.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 border border-folio-line">
          {[branches.url, moss.url, leaf.url].map((src, i) => (
            <img key={i} src={src} alt="" className={`folio-plate aspect-[4/3] w-full object-cover ${i ? "border-l border-folio-line" : ""}`} />
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="mx-auto max-w-[1240px] px-6 py-28 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <img src={tree.url} alt="" className="folio-plate w-full border border-folio-line md:col-span-4" />
          <div className="md:col-span-7 md:col-start-6">
            <span className={`${mono} text-folio-soft`}>§ 05 — Still growing</span>
            <blockquote className={`${serif} mt-6 text-[clamp(1.8rem,3.2vw,2.8rem)] font-light leading-[1.15]`}>
              “The hardest part wasn't any single feature — it was keeping <em className="text-folio-moss">one truth</em> about a tour shared by everyone who touches it.”
            </blockquote>
            <ul className="mt-10 space-y-2">
              {["Milo — AI tour assistant", "Knex → Drizzle for typed queries", "Server migration to TypeScript", "Fuller Playwright coverage"].map((t) => (
                <li key={t} className={`${mono} text-folio-ink`}>↳ {t}</li>
              ))}
            </ul>
            <Link to="/portfolio#works" className={`${serif} group mt-12 inline-flex items-center gap-4 border-b border-folio-ink pb-2 text-2xl italic`}>
              Next specimen — Verdant Ledger <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1240px] px-6 pb-10 md:px-10">
        <div className="flex flex-wrap justify-between gap-4 border-t border-folio-line pt-6">
          <span className={`${mono} text-folio-soft`}>© 2026 Liu — CityGo case study</span>
          <span className={`${mono} text-folio-soft`}>Istanbul</span>
        </div>
      </footer>
    </div>
  );
}
