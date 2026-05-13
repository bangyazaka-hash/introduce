"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
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
  LayoutGrid,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

// ── ANIMATION ───────────────────────────────────────────────
const defaultTransition: Transition = {
  duration: 0.45,
  ease: "easeOut",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    } as Transition,
  },
};

const VIEWPORT = { once: true, margin: "-40px" } as const;

// ── DATA ────────────────────────────────────────────────────
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
    tags: ["Next.js", "Tailwind"],
    title: "Portfolio Builder",
    desc: "Website portfolio profesional.",
    demoUrl: "https://executor-room.vercel.app",
    image: "/executor.png",
  },
];

// ── SKILL CARD ──────────────────────────────────────────────
function SkillCard({
  icon,
  name,
  desc,
  level,
  reduceMotion,
}: {
  icon: React.ReactNode;
  name: string;
  desc: string;
  level: number;
  reduceMotion: boolean | null;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ transform: "translateZ(0)" }}
      className="group bg-[#161B22] border border-white/[0.08]
        hover:border-[#6366F1]/40 rounded-2xl p-6 transition-colors"
    >
      <div
        className="w-11 h-11 rounded-xl bg-[#6366F1]/10
        flex items-center justify-center text-[#6366F1] mb-4"
      >
        {icon}
      </div>

      <h3 className="font-semibold mb-1">{name}</h3>

      <p className="text-[#7D8590] text-xs leading-relaxed mb-4">{desc}</p>

      <div className="h-[4px] rounded-full bg-[#21262D] overflow-hidden">
        <m.div
          className="h-full bg-[#6366F1] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: reduceMotion ? 1 : level / 100 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        />
      </div>
    </m.div>
  );
}

// ── PROJECT CARD ────────────────────────────────────────────
function ProjectCard({
  label,
  tags,
  title,
  desc,
  demoUrl,
  image,
}: (typeof projects)[number]) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ transform: "translateZ(0)" }}
      className="group bg-[#161B22] border border-white/[0.08]
        hover:border-[#6366F1]/40 rounded-2xl overflow-hidden transition-colors"
    >
      <div className="relative h-44 overflow-hidden bg-[#1a1f2e]">
        <Image
          src={image}
          alt={title}
          fill
          loading={label === "Live" ? "eager" : "lazy"}
          className="object-cover object-top transition-transform duration-300
            group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/20" />
        {label && (
          <span
            className="absolute top-3 left-3 z-10 text-xs font-semibold
            px-2.5 py-1 rounded-md bg-[#6366F1]/80 text-white"
          >
            {label}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-[#21262D]
              border border-white/[0.08] text-[#B1BAC4]"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        <p className="text-[#B1BAC4] text-sm leading-relaxed mb-5">{desc}</p>

        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#6366F1] hover:opacity-90
          text-white text-sm font-semibold px-4 py-2 rounded-lg transition-opacity"
        >
          <ExternalLink size={14} />
          Demo
        </a>
      </div>
    </m.div>
  );
}

// ── CONTACT FORM COMPONENT ─────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.name || !formData.email || !formData.message) return;

      setStatus("sending");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "f1078dd9-b95f-48f2-9abb-2d3c7317c9de",
            subject: "New Contact Form Submission - Yazaka Portfolio",
            from_name: formData.name,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to: "arkaputrayazaka@gmail.com",
          }),
        });

        const data = await response.json();

        if (data.success) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    },
    [formData]
  );

  if (status === "success") {
    return (
      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center h-full min-h-[300px] gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">Pesan Terkirim!</h3>
        <p className="text-[#B1BAC4] text-center text-sm">
          Terima kasih telah menghubungi saya. Saya akan membalas email Anda secepatnya.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-[#6366F1] text-sm hover:underline"
        >
          Kirim pesan lain
        </button>
      </m.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nama lengkap"
        required
        className="bg-[#21262D] border border-white/[0.08]
        focus:border-[#6366F1] text-white px-4 py-3
        rounded-xl text-sm outline-none transition-colors"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="bg-[#21262D] border border-white/[0.08]
        focus:border-[#6366F1] text-white px-4 py-3
        rounded-xl text-sm outline-none transition-colors"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        placeholder="Ceritakan project kamu..."
        required
        className="bg-[#21262D] border border-white/[0.08]
        focus:border-[#6366F1] text-white px-4 py-3
        rounded-xl text-sm outline-none transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#6366F1] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
        text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 
        self-start transition-opacity"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send size={16} />
            Kirim Pesan
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs">
          Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.
        </p>
      )}
    </form>
  );
}

// ── MAIN ────────────────────────────────────────────────────
export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  // Smooth scroll handler
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <main className="bg-[#0D1117] text-[#E6EDF3] min-h-screen overflow-x-hidden font-sans">
        {/* Ambient Glow */}
        <div
          aria-hidden
          className="fixed top-[-100px] left-[-100px] w-[320px] h-[320px]
          rounded-full bg-[#6366F1]/10 blur-3xl pointer-events-none z-0"
        />

        {/* HEADER */}
        <m.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0D1117]/95 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-[#6366F1] bg-clip-text text-transparent">
              Yazaka
            </span>

            <nav className="hidden md:flex items-center gap-8">
              {["About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[#7D8590] text-sm hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#6366F1] hover:bg-[#5458ee] text-white text-sm
                font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Hire Me
              </button>
            </nav>
          </div>
        </m.header>

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-[1fr_auto] gap-16 items-center relative z-10">
          <m.div variants={staggerContainer} initial="hidden" animate="visible">
            <m.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#6366F1]/10
              border border-[#6366F1]/30 px-4 py-1.5 rounded-full
              text-xs text-[#A5B4FC] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse" />
              Tersedia untuk project baru
            </m.div>

            <m.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Fullstack Developer &<br />
              <span className="text-[#6366F1]">UI Enthusiast</span>
            </m.h1>

            <m.p
              variants={fadeUp}
              className="text-[#B1BAC4] text-lg leading-relaxed mb-10 max-w-lg"
            >
              Halo, saya{" "}
              <strong className="text-white font-semibold">
                Arka Putra Yazaka
              </strong>{" "}
              — saya membangun website modern, cepat, dan profesional.
            </m.p>

            <m.div variants={fadeUp} className="flex flex-wrap gap-4">
              {/* FIX: Scroll ke section projects */}
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-[#6366F1] hover:opacity-90 text-white font-semibold
                px-6 py-3 rounded-xl flex items-center gap-2 transition-opacity cursor-pointer"
              >
                <LayoutGrid size={18} />
                View Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="border border-white/10 hover:border-[#6366F1]
                text-[#B1BAC4] hover:text-white font-medium px-6 py-3
                rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </m.div>

            <m.div
              variants={fadeUp}
              className="flex gap-10 mt-10 pt-10 border-t border-white/[0.08]"
            >
              {(
                [
                  ["15+", "Projects selesai"],
                  ["2+", "Tahun pengalaman"],
                  ["100%", "Client satisfied"],
                ] as const
              ).map(([num, label]) => (
                <div key={label}>
                  <span className="text-2xl font-bold text-white block">
                    {num}
                  </span>
                  <span className="text-xs text-[#7D8590]">{label}</span>
                </div>
              ))}
            </m.div>
          </m.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">
                Tentang Saya
              </p>
              <h2 className="text-3xl font-bold mb-3">Tech Stack & Keahlian</h2>
              <p className="text-[#B1BAC4] max-w-md">
                Fokus pada pengembangan web modern dengan performa tinggi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  reduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold mb-3">My Projects</h2>
              <p className="text-[#B1BAC4]">Beberapa project yang pernah saya buat.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-[#161B22] border border-white/[0.08]
              rounded-3xl p-10 grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-[#6366F1] text-xs font-semibold tracking-widest uppercase mb-3">
                  Hubungi Saya
                </p>
                <h2 className="text-3xl font-bold mb-3">Mari Bekerja Sama</h2>
                <p className="text-[#B1BAC4] mb-8">
                  Punya project menarik? Saya siap membantu.
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    {
                      icon: <Mail size={18} />,
                      title: "Email",
                      sub: "arkaputrayazaka@gmail.com",
                      href: "mailto:arkaputrayazaka@gmail.com",
                    },
                    {
                      icon: <Globe size={18} />,
                      title: "Website",
                      sub: "yazaka.dev",
                      href: "#",
                    },
                  ].map(({ icon, title, sub, href }) => (
                    <a
                      key={title}
                      href={href}
                      className="flex items-center gap-3 bg-[#21262D]
                      border border-white/[0.08] hover:border-[#6366F1]/40
                      px-4 py-3.5 rounded-xl text-sm transition-colors"
                    >
                      <span className="text-[#6366F1]">{icon}</span>
                      <div className="flex flex-col">
                        <span className="font-medium text-white text-sm">
                          {title}
                        </span>
                        <span className="text-xs text-[#7D8590]">{sub}</span>
                      </div>
                      <ArrowRight size={14} className="ml-auto text-[#7D8590]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* NEW: Contact Form dengan Email Integration */}
              <ContactForm />
            </m.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="border-t border-white/[0.08] py-8 text-center
          text-[#7D8590] text-sm relative z-10"
        >
          © 2026 <span className="text-[#6366F1]">Yazaka</span> — Arka Putra Yazaka
        </footer>
      </main>
    </LazyMotion>
  );
}