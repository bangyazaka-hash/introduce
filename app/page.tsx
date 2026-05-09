"use client";

import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Globe,
  Code2,
  Layers,
  Cpu,
  Palette,
  ExternalLink,
  Send,
  UserCircle2,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";

// ── ANIMATION VARIANTS (Dikumpulkan di sini agar kode rapih) ──
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// ── DATA ──────────────────────────────────────────────────────
const skills = [
  {
    icon: <Layers size={22} />,
    name: "Next.js",
    desc: "Server-side rendering & static generation",
    level: 90,
  },
  {
    icon: <Code2 size={22} />,
    name: "React",
    desc: "Component-driven UI & state management",
    level: 85,
  },
  {
    icon: <Cpu size={22} />,
    name: "Laravel",
    desc: "Backend API & database architecture",
    level: 80,
  },
  {
    icon: <Palette size={22} />,
    name: "Tailwind CSS",
    desc: "Utility-first styling & responsive design",
    level: 92,
  },
];

const projects = [
  {
    label: "Live",
    tags: ["Next.js", "Tailwind", "Prisma"],
    title: "E-Commerce Platform",
    desc: "Website toko online modern dengan fitur cart, checkout, dan dashboard admin.",
    demoUrl: "https://veloz-zeta.vercel.app",
    image: "/veloz.png",
  },
  {
    label: "Featured",
    tags: ["React", "Laravel", "MySQL"],
    title: "SaaS Dashboard",
    desc: "Dashboard manajemen bisnis dengan analitik real-time dan laporan otomatis.",
    demoUrl: "https://yazakaperpus.com",
    image: "/library.png",
  },
  {
    label: null,
    tags: ["Next.js", "Supabase"],
    title: "Portfolio Builder",
    desc: "Tool untuk membuat website portfolio profesional tanpa coding.",
    demoUrl: "https://executor-room.vercel.app",
    image: "/executor.png",
  },
];

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="bg-[#0D1117] text-[#E6EDF3] min-h-screen font-sans overflow-x-hidden">
      {/* AMBIENT GLOW (Ditambahkan animasi float perlahan) */}
      <motion.div
        aria-hidden
        className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#6366F1] opacity-[0.08] blur-[80px] pointer-events-none z-0"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0D1117]/80 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-[#6366F1] bg-clip-text text-transparent">
            Yazaka
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#7D8590] text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </motion.header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-[1fr_auto] gap-16 items-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/30 px-4 py-1.5 rounded-full text-xs text-[#A5B4FC] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
            Tersedia untuk project baru
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Fullstack Developer &<br />
            <span className="text-[#6366F1]">UI Enthusiast</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#B1BAC4] text-lg leading-relaxed mb-10 max-w-lg"
          >
            Halo, saya <strong className="text-white font-semibold">Arka Putra Yazaka</strong> — saya
            membangun website modern, cepat, dan profesional menggunakan Next.js,
            Laravel, dan React.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
              <LayoutGrid size={18} />
              View Projects
            </button>
            <button className="border border-white/10 hover:border-[#6366F1] text-[#B1BAC4] hover:text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
              <Mail size={18} />
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-10 mt-10 pt-10 border-t border-white/[0.08]">
            {[["15+", "Projects selesai"], ["2+", "Tahun pengalaman"], ["100%", "Client satisfied"]].map(
              ([num, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{num}</span>
                  <span className="text-xs text-[#7D8590] mt-0.5">{label}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT / SKILLS ─────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <motion.p variants={fadeUp} className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">
              Tentang Saya
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-3">Tech Stack & Keahlian</motion.h2>
            <motion.p variants={fadeUp} className="text-[#B1BAC4] max-w-md">
              Saya fokus pada pengembangan web modern dengan desain clean dan performa tinggi.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {skills.map(({ icon, name, desc, level }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="group bg-[#161B22] border border-white/[0.08] hover:border-[#6366F1]/50 rounded-2xl p-6 transition-all hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(80px_circle_at_20%_20%,rgba(99,102,241,0.06),transparent)] pointer-events-none" />
                <div className="w-11 h-11 rounded-xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-4">
                  {icon}
                </div>
                <h3 className="font-semibold mb-1">{name}</h3>
                <p className="text-[#7D8590] text-xs leading-relaxed mb-4">{desc}</p>
                <div className="h-[3px] rounded-full bg-[#21262D] overflow-hidden">
                  <motion.div
                    className="h-full bg-[#6366F1] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <motion.p variants={fadeUp} className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-3">My Projects</motion.h2>
            <motion.p variants={fadeUp} className="text-[#B1BAC4]">Beberapa project yang pernah saya buat dan kerjakan.</motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {projects.map(({ label, tags, title, desc, demoUrl, image }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group bg-[#161B22] border border-white/[0.08] hover:border-[#6366F1]/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-[#1a1f2e]">
                  <Image
                    src={image}
                    alt={`Screenshot ${title}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  {label && (
                    <span className="absolute top-3 left-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#6366F1]/80 border border-[#6366F1] text-white backdrop-blur-sm">
                      {label}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[#21262D] border border-white/[0.08] text-[#B1BAC4]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-[#B1BAC4] text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex gap-3">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#161B22] border border-white/[0.08] rounded-3xl p-10 grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">
                Hubungi Saya
              </p>
              <h2 className="text-3xl font-bold mb-3">Mari Bekerja Sama</h2>
              <p className="text-[#B1BAC4] mb-8">
                Punya project menarik? Saya siap membantu mewujudkannya menjadi kenyataan.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { icon: <Mail size={18} />, title: "Email", sub: "arkaputrayazaka@gmail.com", href: "mailto:arkaputrayazaka@gmail.com" },
                  { icon: <Globe size={18} />, title: "Website", sub: "yazaka.dev", href: "#" },
                ].map(({ icon, title, sub, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center gap-3 bg-[#21262D] border border-white/[0.08] hover:border-[#6366F1]/50 px-4 py-3.5 rounded-xl text-sm transition-all group"
                  >
                    <span className="text-[#6366F1]">{icon}</span>
                    <div className="flex flex-col">
                      <span className="font-medium text-white text-sm">{title}</span>
                      <span className="text-xs text-[#7D8590]">{sub}</span>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-[#7D8590] group-hover:text-[#6366F1] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#7D8590]">Nama lengkap</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-[#21262D] border border-white/[0.08] focus:border-[#6366F1] text-white placeholder:text-[#7D8590] px-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#7D8590]">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-[#21262D] border border-white/[0.08] focus:border-[#6366F1] text-white placeholder:text-[#7D8590] px-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#7D8590]">Pesan</label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan project kamu..."
                  className="bg-[#21262D] border border-white/[0.08] focus:border-[#6366F1] text-white placeholder:text-[#7D8590] px-4 py-2.5 rounded-xl text-sm outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 self-start transition-all hover:-translate-y-0.5"
              >
                <Send size={16} />
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-[#7D8590] text-sm relative z-10">
        © 2026 <span className="text-[#6366F1]">Yazaka</span> — Arka Putra Yazaka · Built with Next.js & TailwindCSS
      </footer>
    </main>
  );
}