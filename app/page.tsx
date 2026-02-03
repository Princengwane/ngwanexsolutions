'use client'
import Nav from "@/components/Nav";
import MouseGlow from "@/components/MouseGlow";
import GlowCard from "@/components/GlowCard";
import Button from "@/components/Button";
import { Cpu, Rocket, Code2, BarChart3, Workflow, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MouseGlow />
      <Nav />

      <section className="relative pt-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [background-size:48px_48px] opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-space-900 to-space-900" />
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-3xl" />
          <div className="absolute left-1/3 top-48 h-[420px] w-[420px] rounded-full bg-neon-green/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Sparkles className="h-4 w-4 text-neon-cyan" />
                Futuristic software & automation studio
              </div>

              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Engineering the <span className="text-neon-cyan">future</span> of digital innovation.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                NgwaneXSolutions builds premium web & mobile platforms, automation systems, and data driven solutions
                that help businesses scale, while enriching communities through technology.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>
                  Start a Project
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => document.getElementById("solutions")?.scrollIntoView({behavior:"smooth"})}
                >
                  Explore Solutions
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { label: "Delivery", value: "Fast" },
                  { label: "Focus", value: "Quality" },
                  { label: "Style", value: "Future" },
                ].map((s) => (
                  <div key={s.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">{s.label}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-neon-cyan/15 blur-2xl" />
                  <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-neon-green/15 blur-2xl" />
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-space-900/50 px-3 py-2 text-xs text-white/70">
                      <Cpu className="h-4 w-4 text-neon-cyan" />
                      Systems • Automation • Analytics
                    </div>
                    <div className="text-xs text-white/50">Durban • Remote</div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { icon: <Code2 className="h-5 w-5 text-neon-cyan" />, title: "Software Engineering", desc: "Clean, scalable builds with modern architecture." },
                      { icon: <Workflow className="h-5 w-5 text-neon-green" />, title: "Automation & Integrations", desc: "Connect tools, reduce manual work, increase accuracy." },
                      { icon: <BarChart3 className="h-5 w-5 text-neon-cyan" />, title: "Data & Insight ", desc: "Dashboards and analytics that drive decisions." },
                      { icon: <ShieldCheck className="h-5 w-5 text-neon-green" />, title: "Security-first", desc: "Best practices that protect your systems and users." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                        <div className="mt-0.5">{item.icon}</div>
                        <div>
                          <div className="font-display text-sm font-semibold">{item.title}</div>
                          <div className="mt-1 text-sm text-white/65">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-space-950/40 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/75">
                      <Rocket className="h-4 w-4 text-neon-cyan" />
                      Ready for launch.
                    </div>
                    <div className="text-xs text-white/50">v1.0</div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 animate-[floaty_5s_ease-in-out_infinite] rounded-full border border-white/10 bg-white/5 shadow-glow" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-20 w-20 animate-[floaty_6.5s_ease-in-out_infinite] rounded-full border border-white/10 bg-white/5 shadow-glowStrong" />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto mt-24 max-w-6xl px-4">
        <h2 className="font-display text-3xl font-semibold">Solutions</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Systems designed to improve performance, reduce costs, and create real business momentum.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <GlowCard title="Software Development" desc="Full-stack applications built for speed, scale, and maintainability." icon={<Code2 className="h-5 w-5 text-neon-cyan" />} />
          <GlowCard title="Web & Mobile Platforms" desc="Modern experiences that convert: responsive, fast, and visually premium." icon={<Rocket className="h-5 w-5 text-neon-green" />} />
          <GlowCard title="Data Analytics" desc="Dashboards, reporting, and insights that unlock better decisions." icon={<BarChart3 className="h-5 w-5 text-neon-cyan" />} />
          <GlowCard title="Automation & Integrations" desc="Connect your tools. Eliminate manual workflows. Improve accuracy." icon={<Workflow className="h-5 w-5 text-neon-green" />} />
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-2xl font-semibold">Why NgwaneXSolutions</h3>
            <p className="mt-3 text-white/70">
              We build with engineering discipline, security-first thinking, and a premium design standard, so you ship
              confidently and scale smoothly.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { icon: <ShieldCheck className="h-5 w-5 text-neon-cyan" />, t: "Security first architecture" },
                { icon: <Workflow className="h-5 w-5 text-neon-green" />, t: "Automation driven delivery" },
                { icon: <Cpu className="h-5 w-5 text-neon-cyan" />, t: "Scalable systems & clean code" },
                { icon: <Users className="h-5 w-5 text-neon-green" />, t: "Community focused innovation" },
              ].map((i) => (
                <div key={i.t} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-space-950/30 p-4">
                  {i.icon}
                  <div className="text-sm text-white/80">{i.t}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-space-950/40 via-white/5 to-white/5 p-8">
            <div className="text-xs text-white/60">What you get</div>
            <div className="mt-2 font-display text-3xl font-semibold">
              A website that feels <span className="text-neon-cyan">2035-ready</span>.
            </div>
            <p className="mt-3 text-white/70">
              Premium visuals, smooth motion, and conversion focused structure without sacrificing speed.
            </p>

            <div className="mt-7 grid gap-4">
              {[
                { k: "Performance", v: "Fast loading, modern stack" },
                { k: "Design", v: "Futuristic yet clean" },
                { k: "Trust", v: "Enterprise grade feel" },
                { k: "Growth", v: "Built to scale with you" },
              ].map((x) => (
                <div key={x.k} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/70">{x.k}</div>
                  <div className="text-sm font-semibold">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto mt-24 max-w-6xl px-4 pb-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
          <h2 className="font-display text-3xl font-semibold">Empowering businesses. Enriching communities.</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            Technology should uplift, not exclude. We support digital skills development, mentorship, and practical
            innovation that helps entrepreneurs and communities thrive.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto mt-16 max-w-6xl px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="font-display text-2xl font-semibold">Let’s build something futuristic.</h2>
            <p className="mt-2 text-white/70">
              Tell us what you are trying to achieve we will respond with a clear plan and next steps.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/75">
              <div><span className="text-white/50">Phone:</span> +27 (60) 612-1461</div>
              <div><span className="text-white/50">Email:</span> ngwanexsolutions@gmail.com</div>
              <div><span className="text-white/50">Location:</span> Windermere, Durban, 4001, KZN</div>
              <div><span className="text-white/50">WhatsApp:</span> https://wa.me/27640229826</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:ngwanexsolutions@gmail.com"><Button>Email Us</Button></a>
              <a href="https://wa.me/27640229826" target="_blank" rel="noopener noreferrer"><Button variant="ghost">WhatsApp</Button></a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-space-950/40 p-8">
            <div className="text-xs text-white/60">Quick message template</div>
            <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              Hi NgwaneXSolutions,My name is... I’m interested in (website / app / automation / analytics). My budget range is (…).
              My timeline is (…). Please contact me on (email/WhatsApp).
            </div>

            <p className="mt-4 text-xs text-white/50">
              Tip: Copy the message above and send it on WhatsApp for the fastest response.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} NgwaneXSolutions (Pty) Ltd</div>
          <div>Technology Solutions & IT Consulting</div>
        </div>
      </section>
    </main>
  );
}
