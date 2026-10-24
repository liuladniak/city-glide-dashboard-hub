import { ArrowUpRight, ArrowLeft, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const label = "text-[11px] font-medium uppercase tracking-[0.22em] text-clean-soft";
const display = "font-display-clean";

const layers = [
  { name: "Client", path: "client/", stack: "React · Redux Toolkit · SCSS · Stripe.js · Leaflet", note: "Tour browsing, filters, cart, checkout, Istanbul map, travel guide." },
  { name: "Dashboard", path: "dashboard/", stack: "React · TypeScript · TanStack Query · shadcn/ui", note: "Booking lifecycle, five-step creation, availability calendar, guides, analytics." },
  { name: "Server", path: "server/", stack: "Node · Express · Knex · PostgreSQL", note: "Shared REST API, auth, Stripe webhooks, cron task generation." },
  { name: "Notifications", path: "notifications/", stack: "TypeScript · BullMQ · Redis · Nodemailer", note: "Confirmations, reminders, cancellations, guide assignment emails." },
  { name: "AI service", path: "ai-service/", stack: "Python · FastAPI · Gemini", note: "Milo — an assistant that helps travellers find the right tour." },
];

const notes = [
  { t: "Payments drive state", d: "A booking exists only after Stripe confirms payment. Webhooks, not the browser, trigger creation — a closed tab never leaves a half-paid booking behind." },
  { t: "One source of truth", d: "A single Express + PostgreSQL server feeds both the customer app and the staff dashboard, so availability set by an agent is instantly true for every customer." },
  { t: "Slow work leaves the request", d: "Emails and 24-hour reminders moved into a Redis queue, so a slow mail provider can never slow down checkout, and failed sends retry on their own." },
];

const capabilities = [
  { k: "Frontend", v: ["React & TypeScript", "State & data caching", "Design systems & accessibility", "Motion & interaction detail"] },
  { k: "Backend", v: ["Node, Express, REST", "PostgreSQL & schema design", "Payments & webhooks", "Queues & background jobs"] },
  { k: "Practice", v: ["End-to-end ownership", "Small commits, clear writing", "Testing what matters", "Shipping, then refining"] },
];

function Section({ id, no, title, children }: { id: string; no: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-baseline gap-5 border-t border-clean-line pt-5">
        <span className={`${label} text-clean-faint`}>{no}</span>
        <h2 className={label}>{title}</h2>
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export default function PortfolioClean() {
  return (
    <div className="clean min-h-screen font-inter antialiased">
      {/* Top bar */}
      <header className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-7 md:px-10">
        <span className="text-[15px] font-semibold tracking-tight">Liu<span className="text-clean-faint"> · dev</span></span>
        <nav className="flex items-center gap-7">
          <a href="#work" className="clean-link hidden text-sm text-clean-soft hover:text-clean-ink sm:block">Work</a>
          <a href="#capabilities" className="clean-link hidden text-sm text-clean-soft hover:text-clean-ink sm:block">Capabilities</a>
          <a href="#contact" className="clean-link text-sm text-clean-ink">Contact</a>
          <a href="https://github.com/liuladniak" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-clean-soft transition-colors hover:text-clean-ink">
            <Github className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1080px] px-6 pb-28 pt-16 md:px-10 md:pb-36 md:pt-24">
        <p className={`${label} clean-rise`}>Full-stack developer — Istanbul</p>
        <h1 className={`${display} clean-rise mt-8 max-w-4xl text-[clamp(3rem,7.5vw,6.5rem)] font-normal leading-[1.02] tracking-[-0.01em]`} style={{ animationDelay: "80ms" }}>
          I build whole products — from the <em className="text-clean-accent">schema</em> to the <em className="text-clean-accent">pixel</em>.
        </h1>
        <p className="clean-rise mt-10 max-w-xl text-lg leading-relaxed text-clean-soft" style={{ animationDelay: "160ms" }}>
          Early in my career, deep in my craft. No client work yet — instead, one serious product,
          built end to end and run like something real people use every day.
        </p>
        <div className="clean-rise mt-12 flex items-center gap-8" style={{ animationDelay: "240ms" }}>
          <a href="#work" className="group inline-flex items-center gap-2.5 rounded-full bg-clean-ink px-6 py-3 text-sm font-medium text-clean-paper transition-colors hover:bg-clean-accent">
            See the work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
          </a>
          <a href="#contact" className="clean-link text-sm text-clean-soft hover:text-clean-ink">Get in touch</a>
        </div>
      </section>

      {/* Work — the flagship */}
      <div className="mx-auto max-w-[1080px] space-y-24 px-6 pb-28 md:px-10 md:space-y-32">
        <Section id="work" no="01" title="Selected work">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <h3 className={`${display} text-[clamp(2.6rem,5.5vw,4.5rem)] leading-none`}>CityGo</h3>
              <p className="mt-4 text-[15px] text-clean-soft">Booking platform for a city-tours agency in Istanbul — customer app, staff dashboard and the systems behind both.</p>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-clean-ink/85">
                A small agency was running tours on phone calls, paper and scattered spreadsheets.
                CityGo replaces all of it with one connected system: travellers browse, book and pay
                online; agents manage the whole booking lifecycle from a dashboard built for speed;
                and everything — tours, availability, payments, guides — stays consistent because it
                lives in one place.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-start md:col-span-4 md:border-l md:border-clean-line md:pl-10">
              {[["Role", "Solo designer & engineer"], ["Timeline", "2025 — ongoing"], ["Stack", "React · Node · PostgreSQL · Stripe"], ["Status", "Live in production"]].map(([k, v]) => (
                <div key={k}>
                  <dt className={label}>{k}</dt>
                  <dd className="mt-2 text-[15px] leading-snug text-clean-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Architecture */}
          <div className="mt-20">
            <p className={label}>Architecture — five services, one product</p>
            <div className="mt-6 border-t border-clean-line">
              {layers.map((l) => (
                <div key={l.name} className="group grid grid-cols-1 gap-2 border-b border-clean-line px-2 py-6 transition-colors hover:bg-clean-ink/[0.025] sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4">
                  <span className="text-[15px] font-semibold sm:col-span-3">{l.name} <span className="ml-1 font-normal text-clean-faint">{l.path}</span></span>
                  <span className="text-[13px] text-clean-accent sm:col-span-4">{l.stack}</span>
                  <span className="text-sm leading-snug text-clean-soft sm:col-span-5">{l.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering notes */}
          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {notes.map((n, i) => (
              <div key={n.t} className="border-t border-clean-line pt-6">
                <span className={`${display} text-2xl italic text-clean-faint`}>0{i + 1}</span>
                <h4 className="mt-3 text-[15px] font-semibold tracking-tight">{n.t}</h4>
                <p className="mt-3 text-sm leading-relaxed text-clean-soft">{n.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-8">
            <a href="https://github.com/liuladniak/citygo" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border-b border-clean-ink pb-1 text-[15px] font-medium">
              View source on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>
            <a href="https://city-glide-dashboard-hub.lovable.app" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border-b border-clean-line pb-1 text-[15px] text-clean-soft transition-colors hover:border-clean-ink hover:text-clean-ink">
              Open the dashboard
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>
          </div>
        </Section>

        {/* Capabilities */}
        <Section id="capabilities" no="02" title="Capabilities">
          <div className="grid gap-10 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.k}>
                <h3 className={label}>{c.k}</h3>
                <ul className="mt-5 space-y-3">
                  {c.v.map((v) => (
                    <li key={v} className="flex items-baseline gap-3 text-[15px] text-clean-ink/85">
                      <span className="h-1 w-1 shrink-0 translate-y-[-3px] rounded-full bg-clean-accent" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" no="03" title="Contact">
          <div className="max-w-2xl">
            <h3 className={`${display} text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]`}>
              Building something? I'd love to <em className="text-clean-accent">hear about it.</em>
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-clean-soft">
              Open to junior roles, internships and collaborations. I answer every message — usually within a day.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a href="mailto:hello@example.com" className="group inline-flex items-center gap-3 border-b border-clean-ink pb-1.5 text-lg font-medium">
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.6} />
                hello@example.com
              </a>
              <a href="https://github.com/liuladniak" target="_blank" rel="noreferrer" className="clean-link inline-flex items-center gap-2 text-[15px] text-clean-soft hover:text-clean-ink">
                <Github className="h-4 w-4" strokeWidth={1.6} /> GitHub
              </a>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-clean-line">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-6 py-7 md:px-10">
          <span className="text-[13px] text-clean-faint">© 2026 Liu — designed & built by hand</span>
          <span className="text-[13px] text-clean-faint">Istanbul</span>
        </div>
      </footer>

      {/* Back to the other portfolio */}
      <Link to="/portfolio" className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full border border-clean-line bg-clean-paper/90 px-4 py-2 text-[13px] text-clean-soft shadow-sm backdrop-blur transition-colors hover:border-clean-ink hover:text-clean-ink">
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.6} /> Field notes
      </Link>
    </div>
  );
}
