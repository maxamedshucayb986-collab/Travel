import React from "react";
import { motion } from "framer-motion";

// UniformCards.react.jsx
// Single-file React component using Tailwind CSS + Framer Motion animations.
// Default export is the UniformCards component.

export default function UniformCards() {
  const items = [
    {
      id: "boys-shirt",
      category: "Wiilasha",
      title: "Qamiis",
      short: "Qamiis nadiif ah oo raaxo leh",
      accent: "bg-blue-50",
      emoji: "👕",
    },
    {
      id: "boys-cap",
      category: "Wiilasha",
      title: "Koofiyad",
      short: "Koofiyad isku dhafan oo la qaadan karo",
      accent: "bg-indigo-50",
      emoji: "🧢",
    },
    {
      id: "girls-hijab",
      category: "Gabdhaha",
      title: "Xijaab",
      short: "Xijaab fudud oo xarrago leh",
      accent: "bg-pink-50",
      emoji: "🧕",
    },
    {
      id: "girls-bag",
      category: "Gabdhaha",
      title: "Saako beer ah",
      short: "Saako (boorso) waarta oo cagaaran",
       accent: "bg-pink-50",
      emoji: "🎒",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 25 } },
  };

  return (
    <section className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold">Dharka Ardayda (Uniform)</h2>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {items.map((it) => (
          <motion.article
            key={it.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`relative flex items-center gap-4 p-4 rounded-2xl shadow-sm border border-slate-100 ${it.accent} hover:shadow-2xl transition-shadow duration-300`}
            aria-labelledby={`${it.id}-title`}
          >
            <div className="flex-none w-20 h-20 rounded-xl bg-white/60 grid place-items-center text-3xl shadow-inner">
              <span aria-hidden>{it.emoji}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 id={`${it.id}-title`} className="text-lg font-medium">
                    {it.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{it.category}</p>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/80 text-slate-700 border">View</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600">{it.short}</p>

              {/* Hover reveal: details */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="pointer-events-none absolute right-4 bottom-4 rounded-full"
              ></motion.div>
            </div>

            {/* subtle decorative accent */}
            <motion.div
              className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-30 blur-2xl"
              style={{
                background: it.id.includes("boys") ? "linear-gradient(135deg,#bfdbfe, #e0f2fe)" : "linear-gradient(135deg,#fecaca,#ffe4e6)",
              }}
              aria-hidden
            />
          </motion.article>
        ))}
      </motion.div>

      {/* Example usage notes */}
      <footer className="mt-6 text-sm text-slate-500">
      </footer>
    </section>
  );
}
