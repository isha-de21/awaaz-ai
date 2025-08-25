// import React, { useEffect, useMemo, useRef, useState, type JSX } from "react";
// import { motion } from "framer-motion";

// /**
//  * Awaaz – Psychiatric AI Chatbot (UI Prototype)
//  * -------------------------------------------------
//  * • Single-file React app using Tailwind for styling
//  * • Pages: Home, Chat, Modules, Dashboard, Login
//  * • Interactive movable gradient background
//  * • Bubble-letter styled wordmark
//  * • Chat UI with typing dots + fake replies
//  * • Modules grid (Mood, Journaling, Meditation, Coping)
//  * • Simple dashboard mock (mood matrix + progress chart)
//  * -------------------------------------------------
//  * Notes:
//  * - This is a frontend-only prototype (no backend). 
//  * - Desktop-first layout; still responsive for smaller viewports.
//  */

// type ViewId = "home" | "chat" | "modules" | "dashboard" | "login";

// const NAV: { id: ViewId; label: string }[] = [
//   { id: "home", label: "Home" },
//   { id: "chat", label: "Chat" },
//   { id: "modules", label: "Modules" },
//   { id: "dashboard", label: "Dashboard" },
// ];

// export default function AwaazApp(): JSX.Element {
//   const [view, setView] = useState<ViewId>("home");
//   const [authed, setAuthed] = useState(false);
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#0a1323] text-slate-100">
//       <InteractiveBackground />
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-6">
//         <Header view={view} setView={setView} authed={authed} setAuthed={setAuthed} />
//         {view === "home" && <Home onStart={() => setView("chat")} />}
//         {view === "chat" && <Chat />}
//         {view === "modules" && <Modules />}
//         {view === "dashboard" && <Dashboard />}
//         {view === "login" && (
//           <Login
//             onAuthed={() => {
//               setAuthed(true);
//               setView("chat");
//             }}
//           />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// // =====================================================
// // Header / Logo / Wordmark
// // =====================================================

// function Header({
//   view,
//   setView,
//   authed,
//   setAuthed,
// }: {
//   view: ViewId;
//   setView: (v: ViewId) => void;
//   authed: boolean;
//   setAuthed: (b: boolean) => void;
// }): JSX.Element {
//   return (
//     <div className="sticky top-0 z-20 mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
//       <div className="flex items-center justify-between px-4 py-3 md:px-6">
//         <Logo onClick={() => setView("home")} />
//         <nav className="hidden gap-2 md:flex">
//           {NAV.map((n) => (
//             <button
//               key={n.id}
//               onClick={() => setView(n.id)}
//               className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
//                 view === n.id ? "bg-white/10" : "hover:bg-white/5"
//               }`}
//             >
//               {n.label}
//             </button>
//           ))}
//         </nav>
//         <div className="flex items-center gap-2">
//           {!authed ? (
//             <button
//               onClick={() => setView("login")}
//               className="rounded-xl bg-sky-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-500"
//             >
//               Log in
//             </button>
//           ) : (
//             <button
//               onClick={() => setAuthed(false)}
//               className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Logo({ onClick }: { onClick?: () => void }): JSX.Element {
//   return (
//     <button onClick={onClick} className="group inline-flex items-center gap-2">
//       <BubbleWord className="text-2xl md:text-3xl" word="Awaaz" />
//       <span className="rounded-lg bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-inset ring-emerald-300/20">
//         beta
//       </span>
//     </button>
//   );
// }

// function BubbleWord({ word, className = "" }: { word: string; className?: string }): JSX.Element {
//   // Bubble-letter effect using layered text + shadows
//   return (
//     <div className={`font-black tracking-wide ${className}`}>
//       <span className="relative inline-block align-middle [text-shadow:0_6px_0_rgba(0,0,0,0.25),0_12px_20px_rgba(0,0,0,0.45)]">
//         <span className="bg-gradient-to-b from-sky-300 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(56,189,248,0.35)]">
//           {word}
//         </span>
//         <span className="absolute inset-0 -z-10 translate-y-1 rounded-[1.25rem] blur-sm [filter:drop-shadow(0_8px_20px_rgba(56,189,248,0.40))]" />
//       </span>
//     </div>
//   );
// }

// // =====================================================
// // Home / Cards / Hero
// // =====================================================

// function Home({ onStart }: { onStart: () => void }): JSX.Element {
//   return (
//     <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-2 md:p-10">
//       <div className="space-y-6">
//         <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
//           Your voice matters. <br /> Talk to <span className="whitespace-nowrap"><BubbleWord word="Awaaz" className="inline text-5xl md:text-6xl" /></span>
//         </h1>
//         <p className="max-w-prose text-slate-300">
//           An AI-powered, confidential companion for emotional support. Calm, friendly, and professional—
//           built to help you through anything.
//         </p>
//         <div className="flex flex-wrap gap-3">
//           <button onClick={onStart} className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">
//             Start Chat
//           </button>
//           <button className="rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/15">Learn More</button>
//         </div>
//         <div className="grid grid-cols-2 gap-4 pt-2 md:grid-cols-3">
//           {[
//             { t: "Mood Tracking", d: "Log emotions daily." },
//             { t: "Journaling", d: "Reflect & grow." },
//             { t: "Guided Meditation", d: "Breathe & reset." },
//             { t: "Coping Exercises", d: "Proven techniques." },
//           ].map((c) => (
//             <Card key={c.t} title={c.t} desc={c.d} />
//           ))}
//         </div>
//       </div>
//       <HeroArt />
//     </section>
//   );
// }

// function Card({ title, desc }: { title: string; desc: string }): JSX.Element {
//   return (
//     <div className="transform rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:scale-[1.03] hover:border-white/20 hover:bg-white/10">
//       <div className="mb-2 text-lg font-semibold">{title}</div>
//       <p className="text-sm text-slate-300">{desc}</p>
//     </div>
//   );
// }

// function HeroArt(): JSX.Element {
//   return (
//     <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
//       <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-emerald-400/20" />
//       <div className="absolute inset-0 rounded-3xl backdrop-blur-2xl" />
//       <div className="absolute inset-3 grid place-items-center rounded-2xl bg-slate-900/40 ring-1 ring-inset ring-white/10">
//         <MeditatingGlyph />
//       </div>
//     </div>
//   );
// }

// function MeditatingGlyph(): JSX.Element {
//   return (
//     <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
//       <circle cx="100" cy="100" r="96" fill="url(#g)" opacity="0.25" />
//       <defs>
//         <radialGradient id="g">
//           <stop offset="0%" stopColor="#67e8f9" />
//           <stop offset="100%" stopColor="#0ea5e9" />
//         </radialGradient>
//       </defs>
//       <g stroke="#67e8f9" strokeWidth="6" strokeLinecap="round" fill="none">
//         <circle cx="100" cy="60" r="16" />
//         <path d="M64 116c20-8 52-8 72 0M56 140c28-10 60-10 88 0M46 160c36-12 72-12 108 0" opacity="0.7" />
//       </g>
//     </svg>
//   );
// }

// // =====================================================
// // Chat + Bubbles
// // =====================================================

// function Chat(): JSX.Element {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState<
//     { from: "bot" | "me"; text: string }[]
//   >([{ from: "bot", text: "Hi there! I’m Awaaz — your calm companion. How can I help today?" }]);
//   const [typing, setTyping] = useState(false);

//   const send = () => {
//     if (!input.trim()) return;
//     const text = input.trim();
//     setMessages((m) => [...m, { from: "me", text }]);
//     setInput("");
//     setTyping(true);
//     window.setTimeout(() => {
//       setMessages((m) => [
//         ...m,
//         {
//           from: "bot",
//           text:
//             "I hear you. Remember to breathe — would you like a quick grounding exercise or to journal your feelings?",
//         },
//       ]);
//       setTyping(false);
//     }, 900);
//   };

//   return (
//     <section className="mx-auto max-w-4xl">
//       <div className="mb-4 flex items-center gap-3">
//         <Avatar />
//         <div>
//           <div className="text-sm font-semibold">Awaaz</div>
//           <div className="text-xs text-emerald-300">Online · Friendly & Confidential</div>
//         </div>
//       </div>

//       <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
//         <div className="flex flex-col gap-3">
//           {messages.map((m, i) => (
//             <Bubble key={i} who={m.from}>
//               {m.text}
//             </Bubble>
//           ))}
//           {typing && <TypingBubble />}
//         </div>
//         <div className="mt-4 flex items-center gap-2">
//           <input
//             className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-400"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && send()}
//           />
//           <button
//             onClick={send}
//             className="rounded-2xl bg-sky-500 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Avatar(): JSX.Element {
//   return (
//     <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30">
//       🤖
//     </div>
//   );
// }

// function Bubble({ who, children }: { who: "bot" | "me"; children: React.ReactNode }): JSX.Element {
//   const isMe = who === "me";
//   return (
//     <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
//       <motion.div
//         initial={{ opacity: 0, y: 6 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.2 }}
//         className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg ${
//           isMe ? "bg-sky-500 text-white shadow-sky-500/25" : "bg-white/10 text-slate-100 shadow-black/30"
//         }`}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// function TypingBubble(): JSX.Element {
//   return (
//     <div className="flex justify-start">
//       <div className="flex gap-1 rounded-2xl bg-white/10 px-3 py-2">
//         {[0, 1, 2].map((i) => (
//           <motion.span
//             key={i}
//             className="block h-2 w-2 rounded-full bg-slate-200"
//             animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
//             transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // =====================================================
// // Modules & Dashboard
// // =====================================================

// function Modules(): JSX.Element {
//   const items = [
//     { t: "Mood Tracking", d: "Log & visualize feelings.", emoji: "🙂" },
//     { t: "Journaling", d: "Write & reflect.", emoji: "📝" },
//     { t: "Guided Meditation", d: "Breathe & relax.", emoji: "🧘" },
//     { t: "Coping Exercises", d: "Evidence-based skills.", emoji: "🤝" },
//     { t: "Progress Dashboard", d: "See your trends.", emoji: "📈" },
//     { t: "Resources", d: "Learn & get help.", emoji: "📚" },
//   ];

//   return (
//     <section className="mx-auto max-w-6xl">
//       <h2 className="mb-4 text-3xl font-extrabold">Interactive Modules</h2>
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {items.map((it) => (
//           <motion.button
//             key={it.t}
//             whileHover={{ y: -2 }}
//             className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-lg transition hover:border-white/20 hover:bg-white/10"
//           >
//             <div className="flex items-center gap-3">
//               <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-sky-400/40 to-cyan-400/40 text-2xl">
//                 {it.emoji}
//               </span>
//               <div>
//                 <div className="text-lg font-semibold">{it.t}</div>
//                 <div className="text-sm text-slate-300">{it.d}</div>
//               </div>
//             </div>
//             <div className="mt-4 text-xs text-slate-400 opacity-0 transition group-hover:opacity-100">
//               Click to open (prototype)
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Dashboard(): JSX.Element {
//   return (
//     <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
//       <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
//         <h3 className="mb-3 text-lg font-semibold">Weekly Progress</h3>
//         <ProgressChart />
//       </div>
//       <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//         <h3 className="mb-3 text-lg font-semibold">Mood Tracker</h3>
//         <MoodMatrix />
//       </div>
//       <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
//         <h3 className="mb-3 text-lg font-semibold">Journals</h3>
//         <div className="grid gap-3 md:grid-cols-2">
//           {["My Thoughts", "Gratitude Log"].map((t) => (
//             <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <div className="mb-1 font-semibold">{t}</div>
//               <p className="text-sm text-slate-300">Recent entries preview…</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//         <h3 className="mb-3 text-lg font-semibold">Achievements</h3>
//         <div className="grid grid-cols-3 gap-3">
//           {["🌱", "💧", "🛡️", "🧠"].map((b, i) => (
//             <div key={i} className="grid place-items-center rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
//               <span className="text-2xl">{b}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProgressChart(): JSX.Element {
//   return (
//     <svg viewBox="0 0 400 160" className="h-40 w-full">
//       <defs>
//         <linearGradient id="l" x1="0" x2="1">
//           <stop offset="0%" stopColor="#38bdf8" />
//           <stop offset="100%" stopColor="#34d399" />
//         </linearGradient>
//       </defs>
//       <path
//         d="M0,100 C50,60 100,120 150,80 C200,40 250,120 300,70 C340,45 360,110 400,90"
//         stroke="url(#l)"
//         strokeWidth="6"
//         fill="none"
//       />
//     </svg>
//   );
// }

// function MoodMatrix(): JSX.Element {
//   const dots = new Array(28).fill(0);
//   return (
//     <div className="grid grid-cols-7 gap-2">
//       {dots.map((_, i) => (
//         <div key={i} className="h-4 w-4 rounded-full bg-sky-500/40 ring-1 ring-white/10" />
//       ))}
//     </div>
//   );
// }

// // =====================================================
// // Auth
// // =====================================================

// function Login({ onAuthed }: { onAuthed: () => void }): JSX.Element {
//   return (
//     <section className="mx-auto grid max-w-md gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
//       <div className="text-center">
//         <BubbleWord word="Awaaz" className="mx-auto text-5xl" />
//         <h2 className="mt-2 text-xl font-semibold">Log In</h2>
//         <p className="text-sm text-slate-300">Welcome back — you are safe here.</p>
//       </div>
//       <div className="grid gap-3">
//         <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Email" />
//         <input type="password" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Password" />
//         <button onClick={onAuthed} className="mt-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">Log in</button>
//       </div>
//       <p className="text-center text-sm text-slate-400">Don’t have an account? <span className="cursor-pointer text-sky-300 hover:underline">Sign up</span></p>
//     </section>
//   );
// }

// // =====================================================
// // Footer
// // =====================================================

// function Footer(): JSX.Element {
//   return (
//     <div className="relative z-10 mt-16 border-t border-white/10 bg-transparent">
//       <div className="mx-auto max-w-7xl px-4 py-10 text-center text-xs text-slate-400">
//         © {new Date().getFullYear()} Awaaz — Built for calm, friendly, and professional support.
//       </div>
//     </div>
//   );
// }

// // =====================================================
// // Background (cursor-tracking gradient).
// // Includes REQUIRED emerald glow: rgba(16,185,129,0.12), transparent 60%
// // =====================================================

// function InteractiveBackground(): JSX.Element {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [pos, setPos] = useState({ x: 0.5, y: 0.5 });

//   useEffect(() => {
//     const onMove = (e: MouseEvent) => {
//       const { innerWidth: w, innerHeight: h } = window;
//       setPos({ x: e.clientX / w, y: e.clientY / h });
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   const style = useMemo<React.CSSProperties>(() => {
//     const x = pos.x * 100;
//     const y = pos.y * 100;
//     return {
//       background: `radial-gradient(900px 700px at ${x}% ${y}%, rgba(56,189,248,0.15), transparent 60%),
//                    radial-gradient(700px 600px at ${100 - x}% ${100 - y}%, rgba(16,185,129,0.12), transparent 60%)`,
//     };
//   }, [pos]);

//   return <div ref={ref} style={style} className="pointer-events-none absolute inset-0 select-none" />;
// }




































import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Send,
  Sparkles,
  Activity,
  HeartPulse,
  Shield,
  PhoneCall,
  Menu,
  X,
  UserCircle2,
  CheckCircle2,
  Flame,
  BookOpen,
  PenLine,
  Brain,
  Wind,
  SmilePlus,
  Bot,
  BellRing,
  ChevronRight,
  Home,
  MessageSquare,
  BarChart3,
  LayoutGrid,
  Info,
  Newspaper,
  Mail,
  AlertTriangle
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { button } from "framer-motion/client";

// ---------------------------------------------
// AWAaZ — Psychiatric AI Chatbot (Frontend Mock)
// React + TypeScript + TailwindCSS (single-file demo)
// Desktop-first, playful UI with psychiatric color psychology
// ---------------------------------------------

// Helper: classNames
function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Fake data for charts
const moodData = [
  { day: "Mon", mood: 5 },
  { day: "Tue", mood: 6 },
  { day: "Wed", mood: 4 },
  { day: "Thu", mood: 7 },
  { day: "Fri", mood: 6 },
  { day: "Sat", mood: 8 },
  { day: "Sun", mood: 7 }
];

const checkins = [
  { date: "Aug 19", score: 5 },
  { date: "Aug 20", score: 6 },
  { date: "Aug 21", score: 7 },
  { date: "Aug 22", score: 7 },
  { date: "Aug 23", score: 6 },
  { date: "Aug 24", score: 8 },
  { date: "Aug 25", score: 7 }
];

// Floating typing dots
function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-2 w-2 rounded-full bg-slate-400"
          animate={{ y: [0, -3, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

// Animated AI avatar (80% emphasis vs minimalist UI 20%)
function AwaazAvatar({ size = 56 }: { size?: number }) {
  return (
    <motion.div
      className="relative"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ repeat: Infinity, duration: 6 }}
      style={{ width: size, height: size }}
      aria-label="Awaaz AI avatar"
    >
      <div
        className="w-full h-full rounded-full bg-gradient-to-br from-sky-300 via-teal-300 to-indigo-300 shadow-[0_10px_30px_rgba(56,189,248,0.35)] grid place-items-center"
      >
        <motion.div
          className="rounded-full bg-white/70 backdrop-blur p-2"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Bot className="w-6 h-6 text-slate-700" />
        </motion.div>
      </div>
      <motion.span
        className="absolute -bottom-1 -right-1 rounded-full bg-emerald-400 shadow p-1"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles className="w-3 h-3 text-white" />
      </motion.span>
    </motion.div>
  );
}

// Navigation definition
const PAGES = [
  // { key: "login", label: "Login", icon: Login },
  { key: "home", label: "Home", icon: Home },
  { key: "chat", label: "Chat", icon: MessageSquare },
  { key: "dashboard", label: "Dashboard", icon: BarChart3 },
  { key: "modules", label: "Modules", icon: LayoutGrid },
  { key: "about", label: "About", icon: Info },
  { key: "blog", label: "Blog", icon: Newspaper },
  { key: "contact", label: "Contact", icon: Mail }
] as const;

// Floating Chatbot Widget
// function Login({ onAuthed }: { onAuthed: () => void }): JSX.Element {
//   return (
//     <section className="mx-auto grid max-w-md gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
//       <div className="text-center">
//         <BubbleWord word="Awaaz" className="mx-auto text-5xl" />
//         <h2 className="mt-2 text-xl font-semibold">Log In</h2>
//         <p className="text-sm text-slate-300">Welcome back — you are safe here.</p>
//       </div>
//       <div className="grid gap-3">
//         <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Email" />
//         <input type="password" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-sky-400" placeholder="Password" />
//         <button onClick={onAuthed} className="mt-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400">Log in</button>
//       </div>
//       <p className="text-center text-sm text-slate-400">Don’t have an account? <span className="cursor-pointer text-sky-300 hover:underline">Sign up</span></p>
//     </section>
//   );
// }

function FloatingChat({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<
    { id: number; from: "ai" | "user"; text: string }[]
  >([
    { id: 1, from: "ai", text: "Hi, I'm Awaaz. How are you feeling right now?" }
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const nextId = useRef(2);

  function send() {
    if (!input.trim()) return;
    const userMsg = { id: nextId.current++, from: "user" as const, text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    // Fake AI reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: nextId.current++,
          from: "ai" as const,
          text:
            "Thanks for sharing. Let’s take a slow 4-7-8 breath together. Inhale 4, hold 7, exhale 8. Want to try a 2‑minute breathing session?"
        }
      ]);
      setThinking(false);
    }, 900);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[95vw] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          role="dialog"
          aria-label="Awaaz chat"
        >
          <div className="flex items-center gap-3 border-b bg-gradient-to-r from-sky-100 via-teal-100 to-indigo-100 p-3">
            <AwaazAvatar size={40} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800">Awaaz</p>
              <p className="text-xs text-slate-600">Friendly & confidential support</p>
            </div>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-white/60" aria-label="Close chat">
              <X className="h-5 w-5 text-slate-700" />
            </button>
          </div>

          <div className="max-h-[50vh] overflow-y-auto space-y-3 p-4 bg-slate-50/60">
            {messages.map((m) => (
              <div key={m.id} className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}> 
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                    m.from === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <AwaazAvatar size={20} /> <TypingDots />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t bg-white p-3">
            <button
              className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50"
              title="Voice input"
            >
              <Mic className="h-4 w-4" />
            </button>
            <input
              className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              aria-label="Message input"
            />
            <button
              onClick={send}
              className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function EmergencyStrip() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-rose-50 px-3 py-2 text-rose-700 ring-1 ring-rose-200">
      <AlertTriangle className="h-4 w-4" />
      <p className="text-xs">
        If you are in danger or considering self-harm, call your local helpline immediately.
      </p>
      <a
        href="tel:112"
        className="ml-auto inline-flex items-center gap-1 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700"
      >
        <PhoneCall className="h-4 w-4" /> Call 112
      </a>
    </div>
  );
}

// Page Sections
function HomePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-sky-100 via-teal-100 to-indigo-100 p-6 ring-1 ring-slate-200">
        <div className="flex items-center gap-4">
          <AwaazAvatar size={64} />
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">Welcome to Awaaz</h2>
            <p className="text-slate-600">
              AI‑powered emotional support — friendly, confidential, and always here for you.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <button className="flex items-center gap-2 rounded-2xl bg-white p-4 text-left shadow ring-1 ring-slate-200 hover:shadow-md">
            <SmilePlus className="h-5 w-5" /> Daily Check‑in
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-white p-4 text-left shadow ring-1 ring-slate-200 hover:shadow-md">
            <Wind className="h-5 w-5" /> 2‑min Breathing
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-white p-4 text-left shadow ring-1 ring-slate-200 hover:shadow-md">
            <PenLine className="h-5 w-5" /> Quick Journal
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Weekly Mood Trend</h3>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Activity className="h-4 w-4" /> Mood score (1–10)
            </div>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="mood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Area type="monotone" dataKey="mood" stroke="#6366f1" fill="url(#mood)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h3 className="mb-3 font-semibold text-slate-800">Streaks & Badges</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-2xl bg-indigo-50 p-3 text-indigo-700">
              <Flame className="h-5 w-5" /> <span className="font-medium">7‑day check‑in streak</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-3 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" /> Completed “Calm Breathing x5”
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-sky-50 p-3 text-sky-700">
              <Shield className="h-5 w-5" /> Privacy‑first account
            </div>
          </div>
        </div>
      </div>

      <EmergencyStrip />
    </div>
  );
}

function ChatPage() {
  return (
    <div className="grid grid-rows-[1fr_auto] h-[70vh] rounded-3xl bg-white ring-1 ring-slate-200 overflow-hidden">
      <div className="overflow-y-auto p-6 space-y-3 bg-slate-50/60">
        <div className="flex items-start gap-3">
          <AwaazAvatar size={36} />
          <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-slate-800 shadow ring-1 ring-slate-200">
            Hey, I’m Awaaz. What would you like to talk about today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-br-sm bg-indigo-600 px-4 py-2 text-white shadow">I’m feeling stressed about exams and deadlines.</div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500"><AwaazAvatar size={18} /> <TypingDots /></div>
      </div>
      <div className="flex items-center gap-2 border-t bg-white p-3">
        <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700 hover:bg-slate-50" title="Voice input"><Mic className="h-4 w-4" /></button>
        <input className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300" placeholder="Message Awaaz…" />
        <button className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700" aria-label="Send message"><Send className="h-4 w-4" /> Send</button>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Check‑ins (last 7 days)</h3>
          <div className="flex items-center gap-2 text-xs text-slate-500"><HeartPulse className="h-4 w-4" /> Average mood: 6.6</div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={checkins}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h3 className="mb-3 font-semibold text-slate-800">Journal Stats</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-center justify-between"><span>Entries this week</span><span className="font-semibold">5</span></li>
          <li className="flex items-center justify-between"><span>Avg. sentiment</span><span className="font-semibold">Positive</span></li>
          <li className="flex items-center justify-between"><span>Most used tag</span><span className="font-semibold">#focus</span></li>
        </ul>
        <div className="mt-4 rounded-2xl bg-sky-50 p-3 text-sky-700">
          <BellRing className="mr-2 inline h-4 w-4" /> Tip: Try a 2‑minute breathing break.
        </div>
      </div>
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h3 className="mb-3 font-semibold text-slate-800">Confidentiality</h3>
        <p className="text-sm text-slate-600">
          Your conversations are private and stored securely. This is a demo; no real data is saved.
        </p>
        <a className="mt-3 inline-flex items-center gap-1 rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-700" href="#privacy">
          <Shield className="h-4 w-4" /> Privacy Policy
        </a>
      </div>
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h3 className="mb-3 font-semibold text-slate-800">Achievements</h3>
        <div className="grid grid-cols-2 gap-3 text-slate-700">
          <div className="rounded-2xl bg-emerald-50 p-3">🌤️ Morning Mindfulness</div>
          <div className="rounded-2xl bg-indigo-50 p-3">📝 3‑Day Journaling</div>
          <div className="rounded-2xl bg-sky-50 p-3">💧 Breath Master</div>
          <div className="rounded-2xl bg-teal-50 p-3">🛡️ Privacy Pro</div>
        </div>
      </div>
    </div>
  );
}

function ModulesPage() {
  const modules = [
    { key: "mood", label: "Mood", icon: SmilePlus, desc: "Track & reflect" },
    { key: "journal", label: "Journaling", icon: PenLine, desc: "Guided prompts" },
    { key: "breathing", label: "Breathing", icon: Wind, desc: "4‑7‑8, box breath" },
    { key: "meditation", label: "Meditation", icon: Brain, desc: "2–10 min sessions" },
    { key: "coping", label: "Coping", icon: HeartPulse, desc: "Grounding, CBT" },
    { key: "learn", label: "Learn", icon: BookOpen, desc: "Articles & tips" }
  ];
  return (
    <div className="grid grid-cols-3 gap-6">
      {modules.map((m) => (
        <button key={m.key} className="group flex items-start gap-4 rounded-3xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 via-teal-200 to-indigo-200">
            <m.icon className="h-6 w-6 text-slate-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-slate-800">{m.label}</h4>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition" />
            </div>
            <p className="text-sm text-slate-600">{m.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="rounded-3xl bg-white p-8 text-slate-600 ring-1 ring-slate-200">
    <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
    <p>Content coming soon. This is a frontend mock for layout & UX.</p>
  </div>
);

export default function AwaazApp() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState<(typeof PAGES)[number]["key"]>("home");
  const [chatOpen, setChatOpen] = useState(true);

  // Desktop-first palette background
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 text-slate-800">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="rounded-xl p-2 hover:bg-slate-100 lg:hidden" onClick={() => setNavOpen((s) => !s)} aria-label="Toggle navigation">
              {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <AwaazAvatar size={36} />
              <div className="leading-tight">
                <div className="text-lg font-extrabold tracking-tight">Awaaz</div>
                <div className="text-[11px] text-slate-500">Your voice matters. Talk to Awaaz.</div>
              </div>
            </div>

            <nav className="ml-6 hidden gap-1 lg:flex">
              {PAGES.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                    active === p.key ? "bg-sky-100 text-slate-900" : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  <p.icon className="h-4 w-4" /> {p.label}
                </button>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <button className="hidden rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 md:inline-flex">
                <Shield className="mr-1 h-4 w-4" /> Privacy
              </button>
              <button className="rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700">
                <PhoneCall className="mr-1 h-4 w-4" /> Helpline
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50">
                <UserCircle2 className="mr-1 h-4 w-4" /> Login
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          <AnimatePresence>
            {navOpen && (
              <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-3 grid gap-1 border-t pt-3 lg:hidden">
                {PAGES.map((p) => (
                  <button key={p.key} onClick={() => { setActive(p.key); setNavOpen(false); }} className={cn("inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm", active === p.key ? "bg-sky-100 text-slate-900" : "text-slate-600 hover:bg-slate-100")}> <p.icon className="h-4 w-4" /> {p.label}</button>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6"><EmergencyStrip /></div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="min-h-[50vh]">
            {active === "home" && <HomePage />}
            {active === "chat" && <ChatPage />}
            {active === "dashboard" && <DashboardPage />}
            {active === "modules" && <ModulesPage />}
            {active === "about" && <Placeholder title="About Awaaz" />}
            {active === "blog" && <Placeholder title="Blog" />}
            {active === "contact" && <Placeholder title="Contact" />}
          </motion.div>
        </AnimatePresence>

        <footer id="privacy" className="mt-10 rounded-3xl bg-white p-6 text-sm text-slate-600 ring-1 ring-slate-200">
          <div className="mb-2 font-semibold text-slate-800">Privacy & Confidentiality</div>
          <p>
            Awaaz is a demo interface. For real deployments, include clear consent, data handling practices, and emergency resources based on region. This UI is designed with psychiatric color psychology (calming blues/teals) and engaging micro‑interactions.
          </p>
        </footer>
      </main>

      {/* Floating Chat Launcher (visible on every page) */}
      <button
        onClick={() => setChatOpen((s) => !s)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-white shadow-2xl hover:bg-indigo-700"
        aria-haspopup="dialog"
        aria-expanded={chatOpen}
      >
        <AwaazAvatar size={28} />
        <span className="hidden md:inline">Chat with Awaaz</span>
      </button>

      <FloatingChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

