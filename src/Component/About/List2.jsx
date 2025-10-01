import React from "react";
import { motion } from "framer-motion";

// SchoolServices.react.jsx
// Component to display school services with hover + animation effects

export default function SchoolServices() {
  const services = [
    {
      id: "edu",
      title: "Waxbarasho tayo leh",
      desc: "Isku dhafka aqoonta casriga iyo dhaqanka wanaagsan.",
      emoji: "📘",
      accent: "bg-blue-50",
    },
    {
      id: "bus",
      title: "Adeeg Gaadiid",
      desc: "Ardayda waxaa laga soo qaadaa gurigooda waxaana lagu geeyaa dugsiga kadibna dib loogu celiyaa.",
      emoji: "🚌",
      accent: "bg-yellow-50",
    },
    {
      id: "food",
      title: "Adeeg Qado",
      desc: "Ardayda waxaa loo diyaariyaa qado nadiif ah oo caafimaad leh ✅",
      emoji: "🍲",
      accent: "bg-green-50",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <header className="mb-6 text-center">
        <h2 className="text-2xl font-bold">⬇ Adeegyada Dugsiga</h2>
        <p className="text-slate-500 mt-1">
          Dugsigu waxa uu bixiyaa adeegyo dhowr ah oo lagu taageerayo waxbarashada iyo nolosha ardayda:
        </p>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((srv) => (
          <motion.div
            key={srv.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: [0, 1.5, -1.5, 0] }}
            whileTap={{ scale: 0.97 }}
            className={`relative p-5 rounded-2xl shadow-md border border-slate-100 ${srv.accent} cursor-pointer transition-shadow duration-300 hover:shadow-xl`}
          >
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-white/70 rounded-xl shadow-inner">
              {srv.emoji}
            </div>
            <h3 className="mt-4 font-semibold text-lg">{srv.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{srv.desc}</p>

            {/* Accent circle animation */}
            <motion.span
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20 blur-2xl"
              style={{
                background:
                  srv.id === "edu"
                    ? "linear-gradient(135deg,#bfdbfe,#e0f2fe)"
                    : srv.id === "bus"
                    ? "linear-gradient(135deg,#fef08a,#fde68a)"
                    : "linear-gradient(135deg,#bbf7d0,#dcfce7)",
              }}
              aria-hidden
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
