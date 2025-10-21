// VisionMission.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  const sections = [
    {
      id: 1,
      icon: <FaEye className="w-8 h-8 text-blue-600" />,
      title: "Aragtida (Vision)",
      desc: "Inuu dugsiga Luqmaan Alxakiim noqdo xarun waxbarasho hormuud ah oo soo saarta jiil aqoon iyo akhlaaq isku dara, kuna guuleysta tartanka nololeed iyo kan caalami.",
    },
    {
      id: 2,
      icon: <FaBullseye className="w-8 h-8 text-green-600" />,
      title: "Himilada (Mission)",
      desc: (
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Bixinta waxbarasho tayo sare leh oo waafaqsan nidaamka waxbarashada dalka.</li>
          <li>Kordhinta aqoonta ardayda ee dhinacyada maadiga iyo akhlaaqda.</li>
          <li>Barashada Qur’aanka Kariimka iyo fahamka diinta Islaamka.</li>
          <li>La shaqeynta waalidiinta si loo dhiso mustaqbal ifaya.</li>
        </ul>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    hover: { scale: 1.05, rotate: 1 },
  };

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ebf8ff 0%, #ffffff 50%, #e0f2fe 100%)",
      }}
    >
      {/* decorative blur spots */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10" />

      {/* ✅ Cinwaanka iyo sharaxaadiisa */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
          Aragtida & Himilada Dugsiga
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
          Dugsiga Luqmaan Alxakiim wuxuu aaminsan yahay in waxbarashada iyo akhlaaqdu
          yihiin tiirarka ugu muhiimsan ee lagu gaadho horumar iyo guul waarta.
        </p>
      </motion.div>

      {/* Vision & Mission sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto"
      >
        {sections.map((s) => (
          <motion.div
            key={s.id}
            variants={itemVariants}
            whileHover="hover"
            className="flex-1 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-slate-200 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {s.icon}
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm leading-relaxed"
            >
              {s.desc}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
