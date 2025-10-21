// UniformCards.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye } from "react-icons/fi";

export default function UniformCards() {
  const [activeId, setActiveId] = useState(null);

  const items = [
    {
      id: "boys-shirt",
      category: "Wiilasha",
      title: "Qamiis",
      short: "Qamiis nadiif ah oo raaxo leh",
      details:
        "Qamiiska wiilasha waxaa laga sameeyaa suuf tayo sare leh (100% cotton). Midabkiisu waa buluug khafiif ah, waxaana lagu xirtaa maalin kasta marka dugsigu furan yahay.",
      accent: "from-blue-100 to-blue-50",
      emoji: "👕",
    },
    {
      id: "boys-cap",
      category: "Wiilasha",
      title: "Koofiyad",
      short: "Koofiyad isku dhafan oo la qaadan karo",
      details:
        "Koofiyadda waxaa loogu talagalay ilaalinta qorraxda iyo nadaafadda. Waxay leedahay calaamadda dugsiga dhankeeda hore.",
      accent: "from-blue-100 to-blue-50",
      emoji: "🧢",
    },
    {
      id: "boys-shoes",
      category: "Wiilasha",
      title: "Kabaha Iskuulka",
      short: "Kabo madow oo nadaafad leh oo raaxo leh",
      details:
        "Kabo adag oo madow ah, lagu sameeyay maqaarka fudud. Waxaa lagu dhiirigelinayaa in la nadiifiyo maalin kasta.",
      accent: "from-blue-100 to-blue-50",
      emoji: "👞",
    },
    {
      id: "girls-hijab",
      category: "Gabdhaha",
      title: "Xijaab",
      short: "Xijaab fudud oo xarrago leh",
      details:
        "Xijaabka gabdhaha waa mid midabkiisu yahay caddaan khafiif ah, waxaana lagu daraa mar kasta oo ardayda gabdhuhu dugsiga joogaan.",
      accent: "from-pink-100 to-pink-50",
      emoji: "🧕",
    },
    {
      id: "girls-dress",
      category: "Gabdhaha",
      title: "Dirac Dugsiga",
      short: "Dharka dugsiga oo midabkiisu yahay caddaan iyo casaan khafiif ah",
      details:
        "Diraca waxaa laga sameeyaa dhar suuf ah oo neefsan kara, si ardaydu ay ugu raaxaystaan inta ay wax baranayaan.",
      accent: "from-pink-100 to-pink-50",
      emoji: "👗",
    },
    {
      id: "girls-bag",
      category: "Gabdhaha",
      title: "Saako (Boorso)",
      short: "Saako waarta oo cagaaran oo tayo sare leh",
      details:
        "Boorsooyinka dugsiga waa kuwo waara oo la sameeyay si ay u qaadaan buugaagta, qalabka waxbarashada, iyo alaabooyinka yaryar ee ardayda.",
      accent: "from-pink-100 to-pink-50",
      emoji: "🎒",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <header className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700"
        >
          Dharka Ardayda (Uniform)
        </motion.h2>
        <p className="text-slate-500 mt-2 text-sm md:text-base">
          Faahfaahinta dharka dugsiga ee Wiilasha iyo Gabdhaha.
        </p>
      </header>

      <motion.div
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {items.map((it) => (
          <motion.article
            key={it.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              rotate: 0.5,
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            }}
            className={`relative group rounded-2xl p-6 bg-gradient-to-br ${it.accent} shadow-sm border border-white/60 backdrop-blur-md transition-all duration-300`}
          >
            <div className="w-20 h-20 mx-auto mb-4 grid place-items-center rounded-2xl bg-white/70 text-4xl shadow-inner group-hover:scale-110 transition-transform">
              {it.emoji}
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-1">{it.title}</h3>
            <p className="text-xs text-slate-500 mb-2">{it.category}</p>
            <p className="text-sm text-slate-600 mb-4">{it.short}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveId(activeId === it.id ? null : it.id)}
              className="flex items-center gap-2 text-sm font-medium text-blue-700 bg-white/70 px-3 py-2 rounded-lg shadow-sm hover:bg-white/90 transition-all mx-auto"
            >
              <FiEye className="text-blue-500" /> {activeId === it.id ? "Close" : "View"}
            </motion.button>

            {/* Faahfaahinta marka la gujiyo */}
            <AnimatePresence>
              {activeId === it.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-white/60 rounded-xl p-3 text-sm text-slate-700 shadow-inner"
                >
                  {it.details}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
