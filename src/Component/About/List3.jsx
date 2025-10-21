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
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #bfdbfe 100%)",
      }}
    >
      {/* background blur circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-200 rounded-full blur-3xl opacity-20 -z-10" />

      <header className="mb-10 text-center relative z-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          ⬇ Adeegyada Dugsiga
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Dugsigu waxa uu bixiyaa adeegyo dhowr ah oo lagu taageerayo waxbarashada iyo nolosha ardayda.
        </p>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {services.map((srv) => (
          <motion.div
            key={srv.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: [0, 1.5, -1.5, 0] }}
            whileTap={{ scale: 0.97 }}
            className={`relative p-6 rounded-2xl shadow-md border border-slate-100 ${srv.accent} cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
          >
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-white/70 rounded-xl shadow-inner">
              {srv.emoji}
            </div>
            <h3 className="mt-4 font-semibold text-lg text-slate-800">{srv.title}</h3>
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
