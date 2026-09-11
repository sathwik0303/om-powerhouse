import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Fuel,
  Gauge,
  IndianRupee,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Settings2,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";

import { SiteHeader } from "@/components/om/site-header";
import { Reveal } from "@/components/om/reveal";
import { cn } from "@/lib/utils";

import heroPoster from "@/assets/hero-poster.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import engineSchematic from "@/assets/engine-schematic.jpg";
import appGenerators from "@/assets/app-generators.jpg";
import appTrucks from "@/assets/app-trucks.jpg";
import appTractors from "@/assets/app-tractors.jpg";
import appEarthmovers from "@/assets/app-earthmovers.jpg";
import appBorewells from "@/assets/app-borewells.jpg";
import appCompressors from "@/assets/app-compressors.jpg";
import appMarine from "@/assets/app-marine.jpg";
import appIndustrial from "@/assets/app-industrial.jpg";
import field1 from "@/assets/field-1.jpg";
import field2 from "@/assets/field-2.jpg";
import field3 from "@/assets/field-3.jpg";
import field4 from "@/assets/field-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OM Solutions | Dual Fuel Kit Technology for Cleaner Engines" },
      {
        name: "description",
        content:
          "OM Solutions retrofits diesel engines with dual fuel kit technology — up to 70% gaseous fuel, lower fuel cost, same power, cleaner performance across India.",
      },
      {
        property: "og:title",
        content: "OM Solutions | Dual Fuel Kit Technology for Cleaner Engines",
      },
      {
        property: "og:description",
        content:
          "Retrofit. Transform. Run cleaner. Dual fuel conversion for generators, trucks, tractors, earth movers and industrial engines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const BENEFITS = [
  { icon: Fuel, title: "Up to 70% gaseous fuel", copy: "High diesel replacement potential across load ranges." },
  { icon: IndianRupee, title: "Lower operating fuel cost", copy: "Gas substitution cuts the running cost per unit." },
  { icon: Wrench, title: "No engine replacement", copy: "Retrofit onto the engine you already own and run." },
  { icon: Gauge, title: "Same power level", copy: "Rated output and performance are maintained." },
  { icon: Settings2, title: "Dual mode flexibility", copy: "Run 100% diesel or dual fuel — switch any time." },
  { icon: Timer, title: "Quick installation", copy: "Short downtime, commissioned on site by our team." },
  { icon: ShieldCheck, title: "Lower maintenance", copy: "Cleaner combustion means less deposit build-up." },
  { icon: Leaf, title: "Reduced particulates", copy: "Visibly lower smoke and particulate emissions." },
];

const FLOW = [
  { step: "01", title: "Diesel Engine", copy: "Your existing, working engine — unchanged and in service." },
  { step: "02", title: "OM Solutions Dual Fuel Kit", copy: "Gas train, mixer, sensors and controller retrofitted on site." },
  { step: "03", title: "Diesel + Gas", copy: "Gaseous fuel is injected and mixed with intake air, diesel ignites it." },
  { step: "04", title: "Smarter, Cleaner Operation", copy: "Same power, lower fuel cost, lower particulate emissions." },
];

const HOW = [
  { title: "Controlled gaseous injection", copy: "Gas is metered into the intake in precise proportion to engine load." },
  { title: "Pressure regulation", copy: "A regulator holds supply pressure steady before the control valve." },
  { title: "Air–gas mixing", copy: "The mixer delivers a homogeneous charge to every cylinder." },
  { title: "Engine combustion", copy: "A pilot diesel injection ignites the gas–air charge — no spark needed." },
  { title: "Sensor monitoring", copy: "Knock, RPM, pressure and exhaust temperature are watched continuously." },
];

const HOTSPOTS = [
  { id: "mixer", name: "Gas Air Mixer", copy: "Blends gaseous fuel with intake air into a uniform charge.", x: 30, y: 26 },
  { id: "valve", name: "Gas Flow Control Valve", copy: "Meters gas flow in real time against engine load.", x: 66, y: 30 },
  { id: "regulator", name: "Gas Pressure Regulator", copy: "Steps supply pressure down to a stable working pressure.", x: 67, y: 47 },
  { id: "filter", name: "Gas Filter", copy: "Removes particulates before gas reaches the control train.", x: 78, y: 20 },
  { id: "shutoff", name: "Electronic Gas Shut-off Valve", copy: "Cuts gas instantly on fault, shutdown or abnormal condition.", x: 85, y: 36 },
  { id: "pressure", name: "Gas Pressure Sensor", copy: "Feeds live line pressure to the controller.", x: 58, y: 58 },
  { id: "knock", name: "Knock Sensor", copy: "Detects detonation and trims the gas ratio to protect the engine.", x: 44, y: 44 },
  { id: "egt", name: "Exhaust Gas Temperature Sensor", copy: "Monitors combustion temperature at the exhaust.", x: 18, y: 18 },
  { id: "rpm", name: "Engine RPM Sensor", copy: "Tracks speed so gas substitution follows the duty cycle.", x: 22, y: 62 },
  { id: "panel", name: "Control Panel", copy: "The dual fuel controller: logic, display and safety interlocks.", x: 47, y: 72 },
];

const APPLICATIONS = [
  { name: "Generators", img: appGenerators },
  { name: "Trucks & Buses", img: appTrucks },
  { name: "Tractors", img: appTractors },
  { name: "Earth Movers", img: appEarthmovers },
  { name: "Borewells", img: appBorewells },
  { name: "Air Compressors", img: appCompressors },
  { name: "Marine Propulsion", img: appMarine },
  { name: "Industrial Applications", img: appIndustrial },
];

const GALLERY = [
  { img: field1, caption: "Kit commissioning on site" },
  { img: field2, caption: "Gas train and regulator detail" },
  { img: field3, caption: "Residential project power room" },
  { img: field4, caption: "Dual fuel controller in operation" },
];

function Index() {
  const [active, setActive] = useState(HOTSPOTS[0]!.id);
  const activeSpot = HOTSPOTS.find((h) => h.id === active)!;

  return (
    <div className="font-sans bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/60 to-forest-deep" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-28 md:px-8">
          <p className="eyebrow">OM Solutions — Clean Energy & Engineering</p>
          <h1 className="display mt-6 max-w-5xl text-4xl text-foreground sm:text-6xl lg:text-7xl">
            Powering a cleaner India, one engine at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Smarter Power. Lower Fuel Cost. Cleaner Performance.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#technology"
              className="group inline-flex items-center justify-center gap-3 bg-brand px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-brand-glow"
            >
              Explore our technology
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#installations"
              className="group inline-flex items-center justify-center gap-3 border border-border px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-brand hover:text-brand-glow"
            >
              See our impact
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll to explore
          </span>
          <ArrowDown className="scroll-bob size-4 text-brand-glow" />
        </div>
      </section>

      {/* PROBLEM & MISSION */}
      <section className="border-y border-border bg-forest">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 lg:py-32">
          <Reveal>
            <h2 className="display text-3xl sm:text-5xl">
              India doesn't need to replace every engine.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Millions of diesel engines already power this country's factories, farms, sites and
              buildings. Scrapping them is neither affordable nor practical. Converting them is.
            </p>
            <p className="display text-2xl text-brand-glow sm:text-3xl">
              Retrofit. Transform. Run cleaner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT FLOW */}
      <section id="technology" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Product flow</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl">From diesel to dual fuel</h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-4">
          {FLOW.map((s, i) => (
            <Reveal key={s.step} delay={i * 100} className="bg-background">
              <div className="h-full bg-forest p-8 transition-colors hover:bg-accent">
                <span className="display text-sm text-brand">{s.step}</span>
                <h3 className="display mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h3 className="display text-2xl sm:text-4xl">
              A smarter way to power existing engines
            </h3>
            <p className="mt-6 text-muted-foreground">
              The kit works with the engine's own combustion cycle. Nothing about the machine's job
              changes — only what it burns.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ol className="divide-y divide-border border-y border-border">
              {HOW.map((h, i) => (
                <li key={h.title} className="flex gap-6 py-6">
                  <span className="display text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="text-base font-semibold uppercase tracking-[0.08em]">{h.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{h.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-border bg-forest">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow">Why dual fuel</p>
            <h2 className="display mt-4 text-3xl sm:text-5xl">Eight reasons to convert</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 80}>
                <div className="group h-full bg-forest p-8 transition-colors hover:bg-accent">
                  <b.icon className="size-6 text-brand transition-colors group-hover:text-brand-glow" />
                  <h3 className="mt-6 text-base font-semibold uppercase tracking-[0.08em]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEMATIC + HOTSPOTS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Technology schematic</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl">Inside the dual fuel kit</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Select a component to see what it does on the engine.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative">
            <div className="relative overflow-hidden border border-border">
              <img
                src={engineSchematic}
                alt="Diesel engine fitted with the OM Solutions dual fuel gas kit"
                loading="lazy"
                width={1600}
                height={1008}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-forest-deep/30" />
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  aria-label={h.name}
                  onClick={() => setActive(h.id)}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all",
                    active === h.id
                      ? "size-6 bg-brand-glow ring-4 ring-brand-glow/30"
                      : "size-4 bg-brand/70 hover:bg-brand-glow",
                  )}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-forest p-8">
              <p className="eyebrow">Component</p>
              <h3 className="display mt-3 text-2xl">{activeSpot.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{activeSpot.copy}</p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {HOTSPOTS.map((h) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => setActive(h.id)}
                    className={cn(
                      "border px-3 py-2 text-[0.7rem] uppercase tracking-[0.12em] transition-colors",
                      active === h.id
                        ? "border-brand bg-brand text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-brand hover:text-brand-glow",
                    )}
                  >
                    {h.name}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="border-y border-border bg-forest">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow">Applications</p>
            <h2 className="display mt-4 text-3xl sm:text-5xl">Where it runs</h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {APPLICATIONS.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 80}>
                <article className="group relative aspect-4/5 overflow-hidden bg-forest-deep">
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent" />
                  <h3 className="display absolute inset-x-0 bottom-0 p-6 text-lg">{a.name}</h3>
                  <span className="absolute inset-x-6 bottom-4 h-px scale-x-0 bg-brand-glow transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATIONS */}
      <section id="installations" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <Reveal>
          <p className="eyebrow">Real-world installations</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl">Verified in the field</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <article className="flex h-full flex-col border border-border bg-forest p-8">
              <p className="eyebrow">Case study</p>
              <h3 className="display mt-3 text-2xl">KOEL 320 kVA</h3>
              <p className="mt-2 text-sm text-muted-foreground">Diesel + PNG dual fuel conversion</p>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Diesel replacement
                  </dt>
                  <dd className="display text-4xl text-brand-glow">65%</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Reported fuel-cost saving
                  </dt>
                  <dd className="display text-4xl text-brand-glow">34%</dd>
                </div>
              </dl>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="flex h-full flex-col border border-border bg-forest p-8">
              <p className="eyebrow">Installation</p>
              <h3 className="display mt-3 text-2xl">Birla Tisya</h3>
              <p className="mt-2 text-sm text-muted-foreground">Bengaluru • May 2026</p>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Dual fuel retrofit on site power generation for a large residential development,
                commissioned and monitored by the OM Solutions field team.
              </p>
              <img
                src={field3}
                alt="Residential development site with generator enclosure"
                loading="lazy"
                width={1024}
                height={768}
                className="mt-8 aspect-video w-full object-cover"
              />
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="flex h-full flex-col border border-border bg-forest p-8">
              <p className="eyebrow">Installation</p>
              <h3 className="display mt-3 text-2xl">Nevatia Steel & Alloys</h3>
              <p className="mt-2 text-sm text-muted-foreground">Industrial dual fuel deployment</p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li className="border-b border-border pb-3">Dual fuel controller</li>
                <li className="border-b border-border pb-3">Full sensor package</li>
                <li className="border-b border-border pb-3">Complete gas system</li>
              </ul>
              <img
                src={field2}
                alt="Gas train and valves installed on an engine skid"
                loading="lazy"
                width={1024}
                height={768}
                className="mt-8 aspect-video w-full object-cover"
              />
            </article>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-y border-border bg-forest">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
          <Reveal>
            <h2 className="display text-3xl sm:text-5xl">Every engine counts.</h2>
            <p className="eyebrow mt-6">From the field</p>
          </Reveal>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.caption} delay={(i % 4) * 80}>
                <figure className="group relative aspect-square overflow-hidden bg-forest-deep">
                  <img
                    src={g.img}
                    alt={g.caption}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep to-transparent p-5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="eyebrow">News</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl">Latest from OM Solutions</h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {[
            { date: "May 2026", title: "Birla Tisya dual fuel installation goes live in Bengaluru" },
            { date: "2026", title: "KOEL 320 kVA conversion reports 65% diesel replacement on PNG" },
            { date: "2026", title: "Nevatia Steel & Alloys deploys full dual fuel control system" },
          ].map((n, i) => (
            <Reveal key={n.title} delay={i * 100}>
              <article className="h-full bg-forest p-8 transition-colors hover:bg-accent">
                <p className="text-xs uppercase tracking-[0.18em] text-brand">{n.date}</p>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{n.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden border-y border-border">
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/85" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-5 py-28 md:px-8 lg:py-40">
          <Reveal>
            <h2 className="display max-w-3xl text-3xl sm:text-6xl">
              Ready to power a cleaner future?
            </h2>
            <a
              href="mailto:omsolns18@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 bg-brand px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-brand-glow"
            >
              Talk to OM Solutions
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest-deep">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3 md:px-8">
          <div>
            <span className="display text-lg tracking-[0.2em]">OM Solutions</span>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Established 2021 by Prasad Parulekar (IIT Bombay, ex-Cummins), OM Solutions builds
              dual fuel kit technology that lets India's existing engines run cleaner and cheaper.
            </p>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:omsolns18@gmail.com" className="flex items-center gap-3 hover:text-brand-glow">
                  <Mail className="size-4 text-brand" /> omsolns18@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919552545042" className="flex items-center gap-3 hover:text-brand-glow">
                  <Phone className="size-4 text-brand" /> +91 95525 45042
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                Pune, Maharashtra, India 411058
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {["Home", "Technology", "Applications", "Installations", "Gallery", "News", "Contact"].map(
                (l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="hover:text-brand-glow">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-6 text-xs uppercase tracking-[0.16em] text-muted-foreground md:px-8">
            © {new Date().getFullYear()} OM Solutions — Clean Energy & Engineering
          </div>
        </div>
      </footer>
    </div>
  );
}
