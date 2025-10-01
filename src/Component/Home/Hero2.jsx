// VisionMission.jsx // Aragtida & Himilada component React + TailwindCSS + Framer Motion

import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  const sections = [
    {
      id: 1,
      icon: <FaEye className="w-7 h-7 text-blue-600 group-hover:text-white" />,
      title: "Aragtida (Vision)",
      desc: "Inuu dugsiga Luqmaan Alxakiim noqdo xarun waxbarasho hormuud ah oo soo saarta jiil aqoon iyo akhlaaq isku dara, kuna guuleysta tartanka nololeed iyo kan caalami.",
    },
    {
      id: 2,
      icon: <FaBullseye className="w-7 h-7 text-green-600 group-hover:text-white" />,
      title: "Himilada (Mission)",
      desc: (
        <ul className="list-disc list-inside space-y-1 text-sm text-black dark:text-black">
          <li>Bixinta waxbarasho tayo sare leh oo waafaqsan nidaamka waxbarashada dalka.</li>
          <li>Kordhinta aqoonta ardayda ee dhinacyada maadiga iyo akhlaaqda.</li>
          <li>Barashada Qur’aanka Kariimka iyo fahamka diinta Islaamka.</li>
          <li>La shaqeynta waalidiinta si loo dhiso mustaqbal ifaya.</li>
        </ul>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row gap-6"
      >
        {sections.map((s) => (
          <motion.div
            key={s.id}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group flex-1 p-6 bg-white dark:bg-white rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 transition-transform cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            <div className="flex items-center gap-3 mb-3">
              {s.icon}
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
            <div className="text-black dark:text-black text-sm leading-relaxed group-hover:text-white">
              {s.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
