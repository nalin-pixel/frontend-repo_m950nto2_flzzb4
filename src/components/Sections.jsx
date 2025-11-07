import { motion } from 'framer-motion';
import { Code2, PenTool, Bot, Sparkles, Megaphone } from 'lucide-react';

const services = [
  { icon: Code2, title: 'Software Development', desc: 'Web, mobile, and cloud-native systems engineered for scale and speed.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Frictionless interfaces and brand systems that feel futuristic yet familiar.' },
  { icon: Megaphone, title: 'Product Marketing', desc: 'Go-to-market strategy, content, and growth loops that convert.' },
  { icon: Bot, title: 'Automation & AI', desc: 'Workflows, agents, and data pipelines that multiply team output.' },
  { icon: Sparkles, title: 'Branding & Creative', desc: 'Naming, identity, and motion assets with punch and clarity.' },
];

const projects = [
  { title: 'NovaPay', tag: 'Fintech Platform' },
  { title: 'HelixOS', tag: 'DevOps Suite' },
  { title: 'PulseCare', tag: 'Health Analytics' },
  { title: 'ArcadeX', tag: 'Gaming Marketplace' },
  { title: 'FleetIQ', tag: 'Logistics AI' },
  { title: 'Vanta CRM', tag: 'Sales Enablement' },
];

export default function Sections() {
  return (
    <>
      <section id="services" className="relative bg-gradient-to-b from-black to-gray-950 text-white py-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Services</motion.h2>
          <p className="text-gray-400 mt-2 max-w-2xl">End-to-end capabilities across product, design, engineering, and growth.</p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-colors shadow-lg shadow-blue-500/5"
              >
                <s.icon className="h-8 w-8 text-blue-400" />
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-400">{s.desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-500/50 to-fuchsia-500/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative bg-black text-white py-20">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Portfolio</motion.h2>
          <p className="text-gray-400 mt-2 max-w-2xl">Selected work across industries with measurable impact.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 group"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(200px_100px_at_0%_0%,rgba(59,130,246,0.25),transparent),radial-gradient(200px_100px_at_100%_100%,rgba(217,70,239,0.25),transparent)]" />
                <div className="h-40 rounded-xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 border border-white/10" />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-400">{p.tag}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="relative bg-gradient-to-b from-black to-gray-950 text-white py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Insights</motion.h2>
          <p className="text-gray-400 mt-2 max-w-2xl">Ideas on product, AI, and growth from the DSRPT team.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="group rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                <div className="h-36 rounded-xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 border border-white/10" />
                <h3 className="mt-4 text-lg font-semibold">Designing for velocity: systems over screens</h3>
                <p className="mt-2 text-sm text-gray-400">Frameworks we use to ship faster without sacrificing craft.</p>
                <a href="#" className="mt-3 inline-block text-blue-400 hover:text-blue-300">Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
